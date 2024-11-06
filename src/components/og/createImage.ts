import fs from 'fs/promises'
import satori from 'satori'
import sharp from 'sharp'

async function toSvg(component: JSX.Element) {
  return await satori(component, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Red Hat Mono',
        data: await fs.readFile('./src/assets/og/fonts/RedHatMono-Regular.ttf'),
        weight: 400,
      },
    ],
  })
}

export async function toPng(component: JSX.Element) {
  return await sharp(Buffer.from(await toSvg(component)))
    .png()
    .toBuffer()
}
