import { useState } from 'react'
import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

const FAQ_ITEMS = [
  { n: '01', q: 'q.1.q', a: 'q.1.a' },
  { n: '02', q: 'q.2.q', a: 'q.2.a' },
  { n: '03', q: 'q.3.q', a: 'q.3.a' },
  { n: '04', q: 'q.4.q', a: 'q.4.a' },
  { n: '05', q: 'q.5.q', a: 'q.5.a' },
] as const

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="block" id="faq" style={{ background: 'linear-gradient(180deg,var(--bg),var(--bg-2))' }}>
      <Wrap>
        <div className="head reveal">
          <span className="num-tag">05</span>
          <Trans k="q.eye" className="eyebrow" interactive={false} />
        </div>
        <Trans k="q.title" className="sec-title reveal" as="h2" style={{ marginBottom: 50 }} />
        <div className="faq reveal" id="faq">
          {FAQ_ITEMS.map(({ n, q, a }, index) => {
            const open = openIndex === index
            return (
              <div key={n} className={`item${open ? ' open' : ''}`}>
                <button type="button" onClick={() => setOpenIndex(open ? null : index)}>
                  <span className="q-n">{n}</span>
                  <span className="q-t">
                    <Trans k={q} inline />
                  </span>
                  <span className="pm">+</span>
                </button>
                <div className="ans" style={{ maxHeight: open ? 500 : 0 }}>
                  <Trans k={a} as="p" />
                </div>
              </div>
            )
          })}
        </div>
      </Wrap>
    </section>
  )
}
