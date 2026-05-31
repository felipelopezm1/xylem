import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

const RINGS = [
  { n: '01', title: 'ch.r1.t', desc: 'ch.r1.d' },
  { n: '02', title: 'ch.r2.t', desc: 'ch.r2.d' },
  { n: '03', title: 'ch.r3.t', desc: 'ch.r3.d' },
  { n: '04', title: 'ch.r4.t', desc: 'ch.r4.d' },
] as const

export default function ChagraSection() {
  return (
    <section className="block chagra" id="chagra">
      <Wrap>
        <div className="head reveal">
          <span className="num-tag">02</span>
          <Trans k="ch.eye" className="eyebrow" interactive={false} />
        </div>
        <Trans k="ch.title" className="sec-title reveal" as="h2" />
        <div className="split" style={{ marginTop: 50 }}>
          <div className="reveal">
            <Trans k="ch.lead" className="lead" as="p" />
            <Trans k="ch.p1" className="body-copy" as="p" />
            <Trans k="ch.p2" className="body-copy" as="p" />
          </div>
          <div className="reveal">
            <div className="rings">
              {RINGS.map(({ n, title, desc }) => (
                <div key={n} className="ring">
                  <div className="n">{n}</div>
                  <Trans k={title} as="h5" />
                  <Trans k={desc} as="p" interactive={false} />
                </div>
              ))}
            </div>
            <pre
              className="ascii"
              style={{ marginTop: 34, color: 'var(--green)', boxShadow: 'none', borderColor: 'var(--line)' }}
            >
              {`  ~ trophic chain of knowledge ~

  observe → interpret → apply
      ↑                    │
      └──── revise ←── transmit`}
            </pre>
          </div>
        </div>
        <div className="clay-line" style={{ marginTop: 80 }} />
      </Wrap>
    </section>
  )
}
