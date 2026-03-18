import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const OUTPUT_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), 'QuantLab_GoDaddy_vs_Pro_Brochure.pdf');

async function generatePDF() {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();

    // Set viewport to match the brochure landscape size
    await page.setViewport({ width: 1056, height: 816 }); // 11in x 8.5in at 96dpi

    console.log('Navigating to brochure page...');
    await page.goto('http://localhost:3000/print/brochure-godaddy', {
        waitUntil: 'networkidle0',
        timeout: 30000,
    });

    // Wait for images + QR codes to render
    await new Promise(r => setTimeout(r, 3000));

    console.log('Generating PDF...');
    await page.pdf({
        path: OUTPUT_PATH,
        width: '11in',
        height: '8.5in',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        preferCSSPageSize: true,
    });

    console.log(`PDF saved to: ${OUTPUT_PATH}`);
    await browser.close();
    console.log('Done!');
}

generatePDF().catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
});
