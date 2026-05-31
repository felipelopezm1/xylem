import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

const LAYERS = [
  { ix: '001', glyph: '☉', color: '#c7d0e2', title: 'xy.l1.t', role: 'xy.l1.r', desc: 'xy.l1.d' },
  { ix: '010', glyph: '⌁', color: '#7ce9e6', title: 'xy.l2.t', role: 'xy.l2.r', desc: 'xy.l2.d' },
  { ix: '011', glyph: '⫶', color: '#48dbe6', title: 'xy.l3.t', role: 'xy.l3.r', desc: 'xy.l3.d' },
  { ix: '100', glyph: '⟜', color: '#83e08a', title: 'xy.l4.t', role: 'xy.l4.r', desc: 'xy.l4.d' },
  { ix: '101', glyph: '⋔', color: '#e0bb8c', title: 'xy.l5.t', role: 'xy.l5.r', desc: 'xy.l5.d' },
] as const

export default function SimulationSection() {
  return (
    <section
      className="block"
      id="xylem"
      style={{ background: 'radial-gradient(90% 80% at 90% 0%,rgba(35,72,212,.18),transparent 55%)' }}
    >
      <Wrap>
        <div className="head reveal">
          <span className="num-tag">01</span>
          <span className="eyebrow">
            <Trans k="xy.eye" />
          </span>
        </div>
        <h2 className="sec-title reveal cursor-invert-target">
          <Trans k="xy.title" />
        </h2>
        <p className="lead reveal cursor-invert-target">
          <Trans k="xy.q" />
        </p>
        <p className="body-copy ink reveal cursor-invert-target">
          <Trans k="xy.p1" />
        </p>

        <div className="layers">
          {LAYERS.map(({ ix, glyph, color, title, role, desc }) => (
            <div key={ix} className="layer reveal" style={{ ['--c' as string]: color }}>
              <span className="gl" />
              <div className="ix">{ix}</div>
              <div className="gly">{glyph}</div>
              <h4 className="cursor-invert-target">
                <Trans k={title} />
              </h4>
              <div className="role">
                <Trans k={role} />
              </div>
              <p>
                <Trans k={desc} />
              </p>
            </div>
          ))}
        </div>

        <div className="iso-wrap reveal" style={{ marginTop: 70 }}>
          <div className="vid">
            <iframe
              src="https://www.youtube-nocookie.com/embed/CtQIhM4RpXQ"
              title="Xylem — Biomimicry + Agentic AI simulation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="iso-cap cursor-invert-target">
            <Trans k="xy.iso" />
          </p>
        </div>
      </Wrap>
    </section>
  )
}

export function MetricsSection() {
  return (
    <section className="block" style={{ paddingTop: 0, borderTop: 0 }}>
      <Wrap className="reveal">
        <div className="metrics">
          <div className="metric">
            <div className="v">5</div>
            <div className="l">
              <Trans k="m.l1" />
            </div>
          </div>
          <div className="metric">
            <div className="v">1550</div>
            <div className="l">
              <Trans k="m.l2" />
            </div>
          </div>
          <div className="metric">
            <div className="v">
              <em>3</em>
            </div>
            <div className="l">
              <Trans k="m.l3" />
            </div>
          </div>
          <div className="metric">
            <div className="v">33333</div>
            <div className="l">
              <Trans k="m.l4" />
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
