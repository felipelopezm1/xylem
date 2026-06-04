import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../public/og')

const shots = [
  { url: 'https://xylem-site.vercel.app', file: 'home.jpg', wait: 2500 },
  { url: 'https://xylem-site.vercel.app/xylem-of-society', file: 'society.jpg', wait: 2500 },
  { url: 'https://xylem-site.vercel.app/legacy/tide-xylem-deck.html', file: 'tide-deck.jpg', wait: 1500 },
]

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })

for (const { url, file, wait } of shots) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
  await page.waitForTimeout(wait)
  await page.screenshot({ path: path.join(outDir, file), type: 'jpeg', quality: 88 })
  console.log('wrote', file)
}

await browser.close()
