const { Jimp } = require("jimp");
const path = require("path");

const INPUT = path.join(__dirname, "public", "logo.png");
const OUTPUT = path.join(__dirname, "public", "logo.png");

async function removeBackground() {
    const image = await Jimp.read(INPUT);

    // Sample background color from top-left corner
    const bgColor = image.getPixelColor(4, 4);
    const bgR = (bgColor >>> 24) & 0xff;
    const bgG = (bgColor >>> 16) & 0xff;
    const bgB = (bgColor >>> 8) & 0xff;
    console.log(`Background color sampled: rgb(${bgR}, ${bgG}, ${bgB})`);

    const TOLERANCE = 40;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];

        const diff = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);

        if (diff < TOLERANCE * 3) {
            this.bitmap.data[idx + 3] = 0; // transparent
        }
    });

    await image.write(OUTPUT);
    console.log("Done! Saved transparent logo to", OUTPUT);
}

removeBackground().catch(console.error);
