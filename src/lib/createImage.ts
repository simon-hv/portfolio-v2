import fs from "fs/promises";
import type { ReactNode } from "react";
import satori from "satori";
import sharp from "sharp";

async function toSvg(component: ReactNode) {
  return await satori(component, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Red Hat Mono",
        data: await fs.readFile("./src/assets/og/fonts/RedHatMono-Regular.ttf"),
        weight: 400,
      },
    ],
  });
}

export async function toPng(component: ReactNode) {
  return await sharp(Buffer.from(await toSvg(component)))
    .png()
    .toBuffer();
}
