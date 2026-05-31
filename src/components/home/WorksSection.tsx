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
          <span className="eyebrow">
            <Trans k="wk.eye" />
          </span>
        </div>
        <h2 className="sec-title reveal cursor-invert-target">
          <Trans k="wk.title" />
        </h2>
        <p className="lead reveal cursor-invert-target">
          <Trans k="wk.lead" />
        </p>

        <div className="works reveal">
          {WORKS.map(({ ix, title, cat, desc, href, external, arrow }) => (
            <a
              key={ix}
              className="work"
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="w-ix">{ix}</span>
              <span className="w-title cursor-invert-target">
                <Trans k={title} />
              </span>
              <span className="w-meta">
                <em className="w-cat">
                  <Trans k={cat} />
                </em>
                <span className="w-desc">
                  <Trans k={desc} />
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
