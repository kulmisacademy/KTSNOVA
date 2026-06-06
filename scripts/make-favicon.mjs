import sharp from "sharp";
import path from "path";

const root = process.cwd();
const sourcePath = path.join(root, "public/images/favicon-source.png");
const appDir = path.join(root, "src/app");
const publicDir = path.join(root, "public");

async function buildIcon(size) {
  return sharp(sourcePath)
    .trim({ threshold: 12 })
    .resize(size, size, {
      fit: "contain",
      position: "centre",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9 });
}

async function write(pipeline, output) {
  await pipeline.toFile(output);
  console.log(`Saved ${output}`);
}

await write(await buildIcon(32), path.join(appDir, "icon.png"));
await write(await buildIcon(180), path.join(appDir, "apple-icon.png"));
await write(await buildIcon(192), path.join(publicDir, "icon-192.png"));
await write(await buildIcon(512), path.join(publicDir, "icon-512.png"));

console.log("Favicon assets generated from favicon-source.png.");
