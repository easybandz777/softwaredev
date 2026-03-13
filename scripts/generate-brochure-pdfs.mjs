#!/usr/bin/env node
/**
 * Generate print-ready PDFs for all QuantLab brochure variants.
 *
 * Usage:  node scripts/generate-brochure-pdfs.mjs
 *
 * Prerequisites:
 *   - Dev server running on localhost:3001 (npm run dev)
 *   - puppeteer installed (npm i -D puppeteer)
 *
 * Output: /public/brochures/ directory with 3 print-ready PDFs
 *   - QuantLab-Brochure-Tech.pdf
 *   - QuantLab-Brochure-Business.pdf
 *   - QuantLab-Brochure-Contractors.pdf
 *
 * Each PDF is US Letter Landscape (11 × 8.5 in), no margins,
 * with background graphics — ready to send to any print shop.
 */

import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, "..", "public", "brochures");

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

const BROCHURES = [
    {
        route: "/print/brochure",
        filename: "QuantLab-Brochure-Tech.pdf",
        label: "Tech Edition",
    },
    {
        route: "/print/brochure-business",
        filename: "QuantLab-Brochure-Business.pdf",
        label: "Executive Trust (Business)",
    },
    {
        route: "/print/brochure-contractors",
        filename: "QuantLab-Brochure-Contractors.pdf",
        label: "Contractors / Construction",
    },
];

async function generatePDFs() {
    // Ensure output directory exists
    await mkdir(OUTPUT_DIR, { recursive: true });

    console.log("\n🖨️  QuantLab Brochure PDF Generator");
    console.log("─".repeat(45));
    console.log(`   Server:  ${BASE_URL}`);
    console.log(`   Output:  ${OUTPUT_DIR}`);
    console.log("─".repeat(45) + "\n");

    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    for (const brochure of BROCHURES) {
        const url = `${BASE_URL}${brochure.route}`;
        const outputPath = path.join(OUTPUT_DIR, brochure.filename);

        console.log(`📄 ${brochure.label}`);
        console.log(`   → ${url}`);

        const page = await browser.newPage();

        // Set viewport large enough to render full brochure
        await page.setViewport({ width: 1400, height: 900 });

        // Navigate and wait for everything to render (fonts, QR codes, etc.)
        await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

        // Give QR codes and fonts a moment to fully render
        await page.evaluate(() => new Promise((r) => setTimeout(r, 2000)));

        // Hide the print toolbar button (no-print) and any dev overlays
        await page.addStyleTag({
            content: `
                .no-print, .print-toolbar, [class*="Agentation"],
                [data-nextjs-toast], nextjs-portal { 
                    display: none !important; 
                }
            `,
        });

        // Generate PDF — US Letter Landscape, no margins
        await page.pdf({
            path: outputPath,
            width: "11in",
            height: "8.5in",
            landscape: false,  // We're explicitly setting 11×8.5 so landscape flag isn't needed
            printBackground: true,
            margin: { top: 0, bottom: 0, left: 0, right: 0 },
            preferCSSPageSize: false,
        });

        console.log(`   ✅ Saved → ${brochure.filename}\n`);

        await page.close();
    }

    await browser.close();

    console.log("─".repeat(45));
    console.log("✅ All PDFs generated successfully!");
    console.log(`📁 Files saved to: ${OUTPUT_DIR}`);
    console.log("\n💡 These PDFs are print-ready:");
    console.log("   • US Letter (11\" × 8.5\") landscape");
    console.log("   • Full bleed backgrounds");
    console.log("   • Scannable QR codes");
    console.log("   • Send directly to any print shop\n");
}

generatePDFs().catch((err) => {
    console.error("❌ Error generating PDFs:", err.message);
    process.exit(1);
});
