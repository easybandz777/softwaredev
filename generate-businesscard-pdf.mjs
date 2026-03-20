import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateCard(outputFile) {
    console.log(`\n━━━ Generating: ${outputFile} ━━━`);
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--force-device-scale-factor=3'],
    });
    const page = await browser.newPage();

    // High DPI viewport for print-quality capture
    await page.setViewport({ width: 500, height: 900, deviceScaleFactor: 3 });

    console.log('Loading page...');
    await page.goto('http://localhost:3003/print/business-card', {
        waitUntil: 'networkidle0',
        timeout: 60000,
    });

    // Let everything render (logo, QR, fonts)
    await new Promise(r => setTimeout(r, 4000));

    // Hide the navbar + header + footer + screen-only tips so only the cards remain
    await page.addStyleTag({
        content: `
            nav, header, footer,
            [class*="Navbar"], [class*="navbar"],
            .screen-only {
                display: none !important;
            }
            html, body {
                margin: 0 !important;
                padding: 0 !important;
                background: #111827 !important;
            }
        `
    });
    await new Promise(r => setTimeout(r, 500));

    // Find the two card elements (front + back) and screenshot each
    const cards = await page.$$('.card-pair > div');
    if (cards.length < 2) {
        console.error('Could not find both cards on the page');
        await browser.close();
        process.exit(1);
    }

    const frontPath = path.join(__dirname, '_tmp_front.png');
    const backPath = path.join(__dirname, '_tmp_back.png');

    console.log('Capturing front card...');
    await cards[0].screenshot({ path: frontPath, type: 'png' });
    console.log('Capturing back card...');
    await cards[1].screenshot({ path: backPath, type: 'png' });

    // Now create a clean PDF with these images — one card per page
    const pdfPage = await browser.newPage();
    await pdfPage.setViewport({ width: 504, height: 288, deviceScaleFactor: 3 }); // 3.5x2 in at 144dpi

    const frontBase64 = fs.readFileSync(frontPath).toString('base64');
    const backBase64 = fs.readFileSync(backPath).toString('base64');

    await pdfPage.setContent(`
        <html>
        <head>
            <style>
                @page { size: 3.5in 2in; margin: 0; }
                * { margin: 0; padding: 0; box-sizing: border-box; }
                html, body { width: 3.5in; height: 2in; background: #0D1224; }
                .card-page {
                    width: 3.5in;
                    height: 2in;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    page-break-after: always;
                    overflow: hidden;
                    background: #0D1224;
                }
                .card-page:last-child { page-break-after: avoid; }
                .card-page img {
                    width: 3.5in;
                    height: 2in;
                    object-fit: contain;
                    display: block;
                }
            </style>
        </head>
        <body>
            <div class="card-page">
                <img src="data:image/png;base64,${frontBase64}" />
            </div>
            <div class="card-page">
                <img src="data:image/png;base64,${backBase64}" />
            </div>
        </body>
        </html>
    `, { waitUntil: 'load' });

    await new Promise(r => setTimeout(r, 1000));

    const outputPath = path.join(__dirname, outputFile);
    console.log('Generating PDF...');
    await pdfPage.pdf({
        path: outputPath,
        width: '3.5in',
        height: '2in',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        preferCSSPageSize: true,
    });

    // Cleanup temp files
    fs.unlinkSync(frontPath);
    fs.unlinkSync(backPath);

    console.log(`✓ PDF saved to: ${outputPath}`);
    await browser.close();
}

const outputFile = process.argv[2] || 'Business_Card.pdf';
generateCard(outputFile).catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
});
