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
          <Trans k="co.eye" className="eyebrow" interactive={false} />
        </div>
        <Trans k="co.title" className="sec-title reveal" as="h2" />
        <Trans k="co.lead" className="lead reveal" as="p" />
        <div className="tri reveal">
          {ROOTS.map(({ word, title, desc }) => (
            <div key={word}>
              <div className="w">
                <Trans k={word} interactive={false} />
              </div>
              <Trans k={title} as="h3" />
              <Trans k={desc} as="p" />
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
