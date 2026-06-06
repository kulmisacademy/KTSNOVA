import sharp from "sharp";
import path from "path";

const input = path.join(process.cwd(), "web_header-01.png");
const outputDark = path.join(process.cwd(), "public/images/logo-on-dark.png");
const outputLight = path.join(process.cwd(), "public/images/logo-on-light.png");

function isBackground(r, g, b) {
  return r < 45 && g < 45 && b < 55;
}

function isTeal(r, g, b) {
  return g >= 110 && g > r + 60 && b >= 90 && b <= g + 20;
}

async function buildLogo(mode) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    if (isBackground(r, g, b)) {
      pixels[i + 3] = 0;
      continue;
    }

    if (mode === "onDark" && !isTeal(r, g, b)) {
      pixels[i] = 255;
      pixels[i + 1] = 255;
      pixels[i + 2] = 255;
    }
  }

  await sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(mode === "onDark" ? outputDark : outputLight);

  console.log(`Saved ${mode === "onDark" ? outputDark : outputLight}`);
}

await buildLogo("onDark");
await buildLogo("onLight");
