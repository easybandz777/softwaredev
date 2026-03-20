import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// GET /api/admin/payment-links — list all payment links
export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`
        SELECT * FROM payment_links ORDER BY created_at DESC
    `;
    return NextResponse.json(rows);
}

// POST /api/admin/payment-links — create a new Stripe payment link
export async function POST(req: NextRequest) {
    const { error } = requireAuth(req, ["admin"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { client_name, client_email, description, amount, link_type } = await req.json();

    if (!client_name?.trim()) return NextResponse.json({ error: "Client name is required" }, { status: 400 });
    if (!description?.trim()) return NextResponse.json({ error: "Description is required" }, { status: 400 });
    if (!amount || amount <= 0) return NextResponse.json({ error: "Valid amount is required" }, { status: 400 });
    if (!["one_time", "recurring"].includes(link_type)) {
        return NextResponse.json({ error: "link_type must be 'one_time' or 'recurring'" }, { status: 400 });
    }

    await ensureMigrated();

    const amountCents = Math.round(amount * 100);

    try {
        // 1. Create a Stripe Product
        const product = await stripe.products.create({
            name: description.trim(),
            metadata: {
                client_name: client_name.trim(),
                client_email: client_email?.trim() || "",
                source: "quantlab_admin",
            },
        });

        // 2. Create a Stripe Price
        const priceParams: Stripe.PriceCreateParams = {
            product: product.id,
            unit_amount: amountCents,
            currency: "usd",
        };

        if (link_type === "recurring") {
            priceParams.recurring = { interval: "month" };
        }

        const price = await stripe.prices.create(priceParams);

        // 3. Create a Stripe Payment Link
        const paymentLink = await stripe.paymentLinks.create({
            line_items: [{ price: price.id, quantity: 1 }],
            metadata: {
                client_name: client_name.trim(),
                client_email: client_email?.trim() || "",
            },
        });

        // 4. Save to database
        const { rows } = await sql`
            INSERT INTO payment_links
                (client_name, client_email, description, amount_cents, link_type,
                 stripe_url, stripe_payment_link_id, stripe_price_id, stripe_product_id)
            VALUES
                (${client_name.trim()}, ${client_email?.trim() || null}, ${description.trim()},
                 ${amountCents}, ${link_type}, ${paymentLink.url}, ${paymentLink.id},
                 ${price.id}, ${product.id})
            RETURNING *
        `;

        return NextResponse.json(rows[0], { status: 201 });
    } catch (err: unknown) {
        console.error("Stripe payment link creation failed:", err);
        const message = err instanceof Error ? err.message : "Failed to create payment link";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

// DELETE /api/admin/payment-links — deactivate a payment link
export async function DELETE(req: NextRequest) {
    const { error } = requireAuth(req, ["admin"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    await ensureMigrated();

    // Get the link to find the Stripe ID
    const { rows: existing } = await sql`
        SELECT stripe_payment_link_id FROM payment_links WHERE id = ${parseInt(id)}
    `;

    if (existing.length > 0) {
        try {
            // Deactivate on Stripe
            await stripe.paymentLinks.update(existing[0].stripe_payment_link_id, {
                active: false,
            });
        } catch (err) {
            console.error("Failed to deactivate Stripe link:", err);
        }
    }

    await sql`UPDATE payment_links SET status = 'deactivated' WHERE id = ${parseInt(id)}`;
    return NextResponse.json({ success: true });
}
