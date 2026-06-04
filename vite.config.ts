import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const OG_ORIGIN = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.OG_ORIGIN || 'https://xylem-bio.vercel.app'

const OG_IMAGE = `${OG_ORIGIN}/og/home.jpg?v=3`
const OG_TITLE = 'XYLEM - Biomimicry and Agentic AI'
const OG_DESCRIPTION =
  'Biomimicry and Agentic AI for task optimisation in 3D simulation. Nature read as model, measure and mentor.'

function ogMetaPlugin(): Plugin {
  return {
    name: 'og-meta',
    transformIndexHtml(html) {
      return html
        .replaceAll('__OG_ORIGIN__', OG_ORIGIN)
        .replaceAll('__OG_IMAGE__', OG_IMAGE)
        .replaceAll('__OG_TITLE__', OG_TITLE)
        .replaceAll('__OG_DESCRIPTION__', OG_DESCRIPTION)
    },
  }
}

export default defineConfig({
  plugins: [react(), ogMetaPlugin()],
})
