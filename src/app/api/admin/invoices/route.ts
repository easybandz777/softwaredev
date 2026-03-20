import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

let _stripe: Stripe;
function getStripe() {
    if (!_stripe) _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    return _stripe;
}

// Generate invoice number: QL-2026-0001
async function nextInvoiceNumber(): Promise<string> {
    const year = new Date().getFullYear();
    const prefix = `QL-${year}-`;
    const { rows } = await sql`
        SELECT invoice_number FROM invoices
        WHERE invoice_number LIKE ${prefix + '%'}
        ORDER BY invoice_number DESC LIMIT 1
    `;
    if (rows.length === 0) return `${prefix}0001`;
    const last = parseInt(rows[0].invoice_number.split("-").pop()!, 10);
    return `${prefix}${String(last + 1).padStart(4, "0")}`;
}

// GET /api/admin/invoices — list all invoices
export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`
        SELECT * FROM invoices ORDER BY created_at DESC
    `;
    return NextResponse.json(rows);
}

// POST /api/admin/invoices — create a new invoice + Stripe payment link
export async function POST(req: NextRequest) {
    const { error } = requireAuth(req, ["admin"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { client_name, client_email, client_address, line_items, tax_rate, notes, due_date } = await req.json();

    if (!client_name?.trim()) return NextResponse.json({ error: "Client name is required" }, { status: 400 });
    if (!Array.isArray(line_items) || line_items.length === 0) {
        return NextResponse.json({ error: "At least one line item is required" }, { status: 400 });
    }

    await ensureMigrated();

    // Calculate totals
    const subtotalCents = line_items.reduce((sum: number, item: { quantity: number; rate_cents: number }) => {
        return sum + Math.round(item.quantity * item.rate_cents);
    }, 0);

    const taxRateNum = parseFloat(tax_rate) || 0;
    const taxCents = Math.round(subtotalCents * (taxRateNum / 100));
    const totalCents = subtotalCents + taxCents;

    if (totalCents <= 0) return NextResponse.json({ error: "Invoice total must be greater than zero" }, { status: 400 });

    const invoiceNumber = await nextInvoiceNumber();

    try {
        // 1. Create Stripe Product
        const product = await getStripe().products.create({
            name: `Invoice ${invoiceNumber} — ${client_name.trim()}`,
            metadata: {
                invoice_number: invoiceNumber,
                client_name: client_name.trim(),
                source: "quantlab_invoice",
            },
        });

        // 2. Create Stripe Price
        const price = await getStripe().prices.create({
            product: product.id,
            unit_amount: totalCents,
            currency: "usd",
        });

        // 3. Create Stripe Payment Link
        const paymentLink = await getStripe().paymentLinks.create({
            line_items: [{ price: price.id, quantity: 1 }],
            metadata: {
                invoice_number: invoiceNumber,
                client_name: client_name.trim(),
            },
        });

        // 4. Save to database
        const lineItemsJson = JSON.stringify(line_items.map((item: { description: string; quantity: number; rate_cents: number }) => ({
            description: item.description,
            quantity: item.quantity,
            rate_cents: item.rate_cents,
            amount_cents: Math.round(item.quantity * item.rate_cents),
        })));

        const { rows } = await sql`
            INSERT INTO invoices
                (invoice_number, client_name, client_email, client_address, line_items,
                 subtotal_cents, tax_rate, tax_cents, total_cents, notes, due_date,
                 stripe_url, stripe_payment_link_id, stripe_price_id, stripe_product_id)
            VALUES
                (${invoiceNumber}, ${client_name.trim()}, ${client_email?.trim() || null},
                 ${client_address?.trim() || null}, ${lineItemsJson},
                 ${subtotalCents}, ${taxRateNum}, ${taxCents}, ${totalCents},
                 ${notes?.trim() || null}, ${due_date || null},
                 ${paymentLink.url}, ${paymentLink.id}, ${price.id}, ${product.id})
            RETURNING *
        `;

        return NextResponse.json(rows[0], { status: 201 });
    } catch (err: unknown) {
        console.error("Invoice creation failed:", err);
        const message = err instanceof Error ? err.message : "Failed to create invoice";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

// PATCH /api/admin/invoices — update invoice status
export async function PATCH(req: NextRequest) {
    const { error } = requireAuth(req, ["admin"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id, status } = await req.json();
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
    if (!["draft", "sent", "paid", "cancelled"].includes(status)) {
        return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    await ensureMigrated();

    // If cancelling, deactivate the Stripe payment link
    if (status === "cancelled") {
        const { rows: existing } = await sql`
            SELECT stripe_payment_link_id FROM invoices WHERE id = ${id}
        `;
        if (existing.length > 0) {
            try {
                await getStripe().paymentLinks.update(existing[0].stripe_payment_link_id, { active: false });
            } catch (err) {
                console.error("Failed to deactivate Stripe link:", err);
            }
        }
    }

    await sql`UPDATE invoices SET status = ${status} WHERE id = ${id}`;
    return NextResponse.json({ success: true });
}
