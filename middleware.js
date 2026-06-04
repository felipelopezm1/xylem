const OG_BASE = 'https://xylem-site.vercel.app'

const BOTS =
  /facebookexternalhit|Facebot|Twitterbot|Slackbot|Discordbot|LinkedInBot|WhatsApp|TelegramBot|Applebot|Pinterest|Googlebot|bingbot|Embedly|preview/i

function ogPage({ title, description, image, url }) {
  const img = `${OG_BASE}${image}`
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${title}</title>
<meta name="description" content="${description}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="XYLEM" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${img}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${img}" />
<link rel="canonical" href="${url}" />
</head>
<body></body>
</html>`
}

const SOCIETY = ogPage({
  title: 'Xylem of Society — Economic Growth & Trade on Nature Proxies & AI',
  description:
    'A provocation on trade, Voltaire, chagra, and biomimicry proxies — how nature\'s intelligence meets economic coordination.',
  image: '/og/society.jpg',
  url: `${OG_BASE}/xylem-of-society`,
})

export default function middleware(request) {
  const ua = request.headers.get('user-agent') || ''
  if (!BOTS.test(ua)) return

  if (request.nextUrl.pathname === '/xylem-of-society') {
    return new Response(SOCIETY, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }
}

export const config = {
  matcher: ['/xylem-of-society'],
}
