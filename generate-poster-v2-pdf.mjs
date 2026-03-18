import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, 'QuantLab_Poster_V2_48x30.pdf');

async function generatePDF() {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--force-device-scale-factor=2'],
    });
    const page = await browser.newPage();

    // Full poster viewport at 96dpi with 2x for high-res
    await page.setViewport({ width: 4608, height: 2880, deviceScaleFactor: 2 });

    console.log('Loading V2 poster page...');
    await page.goto('http://localhost:3000/print/poster-v2-print', {
        waitUntil: 'networkidle0',
        timeout: 60000,
    });

    // Force-hide root layout elements
    await page.addStyleTag({
        content: `
            body > *:not(#poster):not(:has(#poster)) { display: none !important; height: 0 !important; overflow: hidden !important; }
            body { overflow: hidden !important; }
            #poster { position: absolute !important; top: 0 !important; left: 0 !important; }
        `
    });

    // Wait for fonts, images & QR codes to fully render
    await new Promise(r => setTimeout(r, 6000));

    // Screenshot the poster element
    const posterEl = await page.$('#poster');
    if (!posterEl) {
        console.error('Could not find #poster element!');
        await browser.close();
        process.exit(1);
    }

    const screenshotPath = path.join(__dirname, '_tmp_poster_v2.png');
    console.log('Capturing high-res screenshot...');
    await posterEl.screenshot({ path: screenshotPath, type: 'png' });

    const stats = fs.statSync(screenshotPath);
    console.log(`Screenshot captured: ${(stats.size / 1024 / 1024).toFixed(1)} MB`);

    // Build PDF with screenshot
    console.log('Building PDF...');
    const pdfPage = await browser.newPage();
    await pdfPage.setViewport({ width: 4608, height: 2880, deviceScaleFactor: 2 });

    const posterBase64 = fs.readFileSync(screenshotPath).toString('base64');

    await pdfPage.setContent(`
        <html>
        <head>
            <style>
                @page { size: 48in 30in; margin: 0; }
                * { margin: 0; padding: 0; box-sizing: border-box; }
                html, body { width: 48in; height: 30in; margin: 0; padding: 0; background: #000; overflow: hidden; }
                .poster-page { width: 48in; height: 30in; overflow: hidden; background: #000; }
                .poster-page img { width: 48in; height: 30in; object-fit: fill; display: block; }
            </style>
        </head>
        <body>
            <div class="poster-page">
                <img src="data:image/png;base64,${posterBase64}" />
            </div>
        </body>
        </html>
    `, { waitUntil: 'load' });

    await new Promise(r => setTimeout(r, 2000));

    await pdfPage.pdf({
        path: OUTPUT_PATH,
        width: '48in',
        height: '30in',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        preferCSSPageSize: true,
    });

    // Cleanup
    fs.unlinkSync(screenshotPath);

    console.log(`✓ PDF saved to: ${OUTPUT_PATH}`);
    await browser.close();
    console.log('Done!');
}

generatePDF().catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
});
