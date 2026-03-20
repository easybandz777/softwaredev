import { sql, ensureMigrated } from "@/lib/db";
import type { Invoice, InvoiceLineItem } from "@/lib/db";
import { notFound } from "next/navigation";
import InvoiceClient from "./InvoiceClient";

export const dynamic = "force-dynamic";

export default async function InvoicePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const invoiceId = parseInt(id, 10);
    if (isNaN(invoiceId)) notFound();

    await ensureMigrated();

    const { rows } = await sql`SELECT * FROM invoices WHERE id = ${invoiceId}`;
    if (rows.length === 0) notFound();

    const invoice = rows[0] as Invoice;
    const lineItems: InvoiceLineItem[] = JSON.parse(invoice.line_items);

    return <InvoiceClient invoice={invoice} lineItems={lineItems} />;
}
