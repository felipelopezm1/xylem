import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../public/og')
const origin = process.env.OG_ORIGIN || 'https://xylem-bio.vercel.app'

const socialCard = `file://${path.join(outDir, 'social-card.html')}`

const shots = [
  {
    url: socialCard,
    file: 'home.jpg',
    wait: 800,
    viewport: { width: 1200, height: 627 },
  },
  {
    url: `${origin}/xylem-of-society`,
    file: 'society.jpg',
    wait: 3000,
    viewport: { width: 1200, height: 627 },
    style: `
      h2.sec-title, .s-head h2 { white-space: nowrap !important; }
      .pretext-hover { min-width: max-content !important; }
    `,
  },
  {
    url: `${origin}/legacy/tide-xylem-deck.html`,
    file: 'tide-deck.jpg',
    wait: 2000,
    viewport: { width: 1200, height: 627 },
  },
]

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage()

for (const { url, file, wait, viewport, style } of shots) {
  await page.setViewportSize(viewport)
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
  if (style) await page.addStyleTag({ content: style })
  await page.waitForTimeout(wait)
  await page.screenshot({ path: path.join(outDir, file), type: 'jpeg', quality: 90 })
  console.log('wrote', file)
}

await browser.close()
