import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

const ROOTS = [
  { word: 'co.h.w', title: 'co.h.t', desc: 'co.h.d' },
  { word: 'co.m.w', title: 'co.m.t', desc: 'co.m.d' },
  { word: 'co.n.w', title: 'co.n.t', desc: 'co.n.d' },
] as const

export default function CoevolutionSection() {
  return (
    <section className="block" id="coevo">
      <Wrap>
        <div className="head reveal">
          <span className="num-tag">03</span>
          <span className="eyebrow">
            <Trans k="co.eye" />
          </span>
        </div>
        <h2 className="sec-title reveal cursor-invert-target">
          <Trans k="co.title" />
        </h2>
        <p className="lead reveal cursor-invert-target">
          <Trans k="co.lead" />
        </p>
        <div className="tri reveal">
          {ROOTS.map(({ word, title, desc }) => (
            <div key={word}>
              <div className="w">
                <Trans k={word} />
              </div>
              <h3 className="cursor-invert-target">
                <Trans k={title} />
              </h3>
              <p className="cursor-invert-target">
                <Trans k={desc} />
              </p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
