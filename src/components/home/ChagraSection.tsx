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
          <span className="eyebrow">
            <Trans k="ch.eye" />
          </span>
        </div>
        <h2 className="sec-title reveal cursor-invert-target">
          <Trans k="ch.title" />
        </h2>
        <div className="split" style={{ marginTop: 50 }}>
          <div className="reveal">
            <p className="lead cursor-invert-target">
              <Trans k="ch.lead" />
            </p>
            <p className="body-copy cursor-invert-target">
              <Trans k="ch.p1" />
            </p>
            <p className="body-copy cursor-invert-target">
              <Trans k="ch.p2" />
            </p>
          </div>
          <div className="reveal">
            <div className="rings">
              {RINGS.map(({ n, title, desc }) => (
                <div key={n} className="ring">
                  <div className="n">{n}</div>
                  <h5 className="cursor-invert-target">
                    <Trans k={title} />
                  </h5>
                  <p>
                    <Trans k={desc} />
                  </p>
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
