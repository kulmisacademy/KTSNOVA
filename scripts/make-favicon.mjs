import sharp from "sharp";
import path from "path";

const root = process.cwd();
const svgPath = path.join(root, "src/app/icon.svg");
const logoPath = path.join(root, "public/images/logo.png");
const appDir = path.join(root, "src/app");
const publicDir = path.join(root, "public");

const NAVY = { r: 26, g: 39, b: 68, alpha: 1 };

function fromSvg(size) {
  return sharp(svgPath)
    .resize(size, size, { kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9 });
}

async function fromLogoMark(size) {
  const meta = await sharp(logoPath).metadata();
  const cropWidth = Math.min(90, meta.width);

  return sharp(logoPath)
    .extract({ left: 0, top: 0, width: cropWidth, height: meta.height })
    .resize(size, size, {
      fit: "contain",
      position: "centre",
      background: NAVY,
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9 });
}

async function write(pipeline, output) {
  await pipeline.toFile(output);
  console.log(`Saved ${output}`);
}

await write(fromSvg(32), path.join(appDir, "icon.png"));
await write(fromSvg(180), path.join(appDir, "apple-icon.png"));
await write(fromSvg(192), path.join(publicDir, "icon-192.png"));
await write(fromSvg(512), path.join(publicDir, "icon-512.png"));
await write(await fromLogoMark(512), path.join(publicDir, "brand-mark.png"));

console.log("Favicon assets generated.");
