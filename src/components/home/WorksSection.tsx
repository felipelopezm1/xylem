import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

const WORKS = [
  { ix: '01', title: 'wk.1.t', cat: 'wk.1.c', desc: 'wk.1.d', href: '#top', external: false, arrow: '↘' },
  { ix: '02', title: 'wk.2.t', cat: 'wk.2.c', desc: 'wk.2.d', href: '#code', external: false, arrow: '↘' },
  {
    ix: '03',
    title: 'wk.3.t',
    cat: 'wk.3.c',
    desc: 'wk.3.d',
    href: 'https://chagra-net.vercel.app/en',
    external: true,
    arrow: '↗',
  },
  {
    ix: '04',
    title: 'wk.4.t',
    cat: 'wk.4.c',
    desc: 'wk.4.d',
    href: 'https://sketch-real-mvp.vercel.app/',
    external: true,
    arrow: '↗',
  },
  {
    ix: '05',
    title: 'wk.5.t',
    cat: 'wk.5.c',
    desc: 'wk.5.d',
    href: 'https://letrina-store.vercel.app/',
    external: true,
    arrow: '↗',
  },
  {
    ix: '06',
    title: 'wk.6.t',
    cat: 'wk.6.c',
    desc: 'wk.6.d',
    href: 'https://portfolio-felipe-lopez.vercel.app/',
    external: true,
    arrow: '↗',
  },
  {
    ix: '07',
    title: 'wk.7.t',
    cat: 'wk.7.c',
    desc: 'wk.7.d',
    href: '/legacy/tide-xylem-deck.html',
    external: false,
    arrow: '↗',
  },
  {
    ix: '08',
    title: 'wk.8.t',
    cat: 'wk.8.c',
    desc: 'wk.8.d',
    href: '/legacy/jec26-xylem-deck.html',
    external: false,
    arrow: '↗',
  },
] as const

export default function WorksSection() {
  return (
    <section
      className="block"
      id="works"
      style={{ background: 'radial-gradient(80% 70% at 0% 0%,rgba(72,219,230,.09),transparent 55%)' }}
    >
      <Wrap>
        <div className="head reveal">
          <span className="num-tag">04</span>
          <Trans k="wk.eye" className="eyebrow" interactive={false} />
        </div>
        <Trans k="wk.title" className="sec-title reveal" as="h2" />
        <Trans k="wk.lead" className="lead reveal" as="p" />

        <div className="works reveal">
          {WORKS.map(({ ix, title, cat, desc, href, external, arrow }) => (
            <a
              key={ix}
              className="work"
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="w-ix">{ix}</span>
              <span className="w-title">
                <Trans k={title} inline />
              </span>
              <span className="w-meta">
                <em className="w-cat">
                  <Trans k={cat} interactive={false} inline />
                </em>
                <span className="w-desc">
                  <Trans k={desc} interactive={false} />
                </span>
              </span>
              <span className="w-go">{arrow}</span>
            </a>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
