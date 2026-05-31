import type { ReactNode } from 'react'
import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

type Tone = 'dark' | 'bone'

interface SectionProps {
  id: string
  num: string
  tone: Tone
  eyebrowKey: string
  titleKey: string
  leadKey: string
  chips?: { key: string; className: string }[]
  paragraphs?: { key: string; bold?: boolean }[]
  pullQuote?: { quoteKey: string; attrKey: string }
  children?: ReactNode
}

export function SocietySection({
  id,
  num,
  tone,
  eyebrowKey,
  titleKey,
  leadKey,
  chips = [],
  paragraphs = [],
  pullQuote,
  children,
}: SectionProps) {
  return (
    <section className={`s ${tone}`} id={id}>
      <Wrap>
        <div className="s-head reveal">
          <div className="bignum">{num}</div>
          <div className="meta">
            <span className="eyebrow">
              <Trans k={eyebrowKey} />
            </span>
            {chips.length > 0 && (
              <div className="threads">
                {chips.map(({ key, className }) => (
                  <span key={key} className={`chip ${className}`}>
                    <Trans k={key} />
                  </span>
                ))}
              </div>
            )}
            <h2 className="s-title cursor-invert-target">
              <Trans k={titleKey} />
            </h2>
          </div>
        </div>
        <div className="grid2 reveal">
          <p className="lead cursor-invert-target">
            <Trans k={leadKey} />
          </p>
          <div>
            {paragraphs.map(({ key }) => (
              <p key={key} className="copy cursor-invert-target">
                <Trans k={key} />
              </p>
            ))}
            {children}
          </div>
        </div>
        {pullQuote && (
          <div className="pull reveal">
            <div className="pq cursor-invert-target">
              <Trans k={pullQuote.quoteKey} />
            </div>
            <div className="pa">
              <Trans k={pullQuote.attrKey} />
            </div>
          </div>
        )}
      </Wrap>
    </section>
  )
}

export function ProxyCardsSection() {
  const cards = [
    { pi: '011', role: 's5.c1.r', title: 's5.c1.t', desc: 's5.c1.d' },
    { pi: '100', role: 's5.c2.r', title: 's5.c2.t', desc: 's5.c2.d' },
    { pi: '101', role: 's5.c3.r', title: 's5.c3.t', desc: 's5.c3.d' },
    { pi: '010', role: 's5.c4.r', title: 's5.c4.t', desc: 's5.c4.d' },
  ] as const

  return (
    <section className="s dark" id="s5">
      <Wrap>
        <div className="s-head reveal">
          <div className="bignum">05</div>
          <div className="meta">
            <span className="eyebrow">
              <Trans k="s5.eye" />
            </span>
            <div className="threads">
              <span className="chip xy">
                <Trans k="t.xy" />
              </span>
            </div>
            <h2 className="s-title cursor-invert-target">
              <Trans k="s5.title" />
            </h2>
          </div>
        </div>
        <p className="lead reveal cursor-invert-target">
          <Trans k="s5.lead" />
        </p>
        <div className="pcards reveal">
          {cards.map(({ pi, role, title, desc }) => (
            <div key={pi} className="pcard">
              <div className="pi">
                {pi} · <span className="arrow">→</span>{' '}
                <span>
                  <Trans k={role} />
                </span>
              </div>
              <h4 className="cursor-invert-target">
                <Trans k={title} />
              </h4>
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

export function VascularSection() {
  return (
    <section className="s dark" id="s9">
      <Wrap>
        <div className="s-head reveal">
          <div className="bignum">09</div>
          <div className="meta">
            <span className="eyebrow">
              <Trans k="s9.eye" />
            </span>
            <div className="threads">
              <span className="chip xy">
                <Trans k="t.xy" />
              </span>
              <span className="chip ch">
                <Trans k="t.ch" />
              </span>
              <span className="chip vo">
                <Trans k="t.vo" />
              </span>
            </div>
            <h2 className="s-title cursor-invert-target">
              <Trans k="s9.title" />
            </h2>
          </div>
        </div>
        <p className="lead reveal cursor-invert-target">
          <Trans k="s9.lead" />
        </p>
        <div className="vasc reveal">
          <svg viewBox="0 0 760 360" aria-hidden="true">
            <defs>
              <linearGradient id="sap" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0" stopColor="#9bd400" />
                <stop offset="1" stopColor="#48dbe6" />
              </linearGradient>
            </defs>
            <text
              x="380"
              y="40"
              textAnchor="middle"
              fontFamily="Anton,sans-serif"
              fontSize="26"
              fill="#ff3d17"
              letterSpacing="1"
            >
              CANOPY · SHARED ABUNDANCE
            </text>
            <g id="canopy">
              {Array.from({ length: 14 }, (_, i) => {
                const x = 200 + i * 26 + (i % 2 ? 6 : 0)
                const y = 70 + (i % 3) * 10
                const r = 6 + (i % 3) * 3
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={r}
                    fill={i % 2 ? '#9bd400' : '#48dbe6'}
                    opacity={0.45 + (i % 3) * 0.18}
                  />
                )
              })}
            </g>
            <rect x="368" y="120" width="24" height="150" fill="url(#sap)" opacity="0.9" />
            <text
              x="408"
              y="200"
              fontFamily="JetBrains Mono,monospace"
              fontSize="13"
              fill="#48dbe6"
              letterSpacing="2"
            >
              XYLEM · AI + TRADE
            </text>
            <text
              x="408"
              y="220"
              fontFamily="JetBrains Mono,monospace"
              fontSize="11"
              fill="#8c8470"
              letterSpacing="1"
            >
              coordinating tissue
            </text>
            <g stroke="#9bd400" strokeWidth="2" fill="none" opacity="0.85">
              <path d="M380 270 C300 300 230 300 150 340" />
              <path d="M380 270 C320 305 290 320 250 350" />
              <path d="M380 270 C460 300 530 300 610 340" />
              <path d="M380 270 C440 305 470 320 510 350" />
              <path d="M380 270 L380 350" />
            </g>
            <text
              x="380"
              y="332"
              textAnchor="middle"
              fontFamily="Anton,sans-serif"
              fontSize="20"
              fill="#c8ff2e"
              letterSpacing="1"
            >
              ROOTS · COMMUNITIES + BIODIVERSITY
            </text>
            <path
              d="M150 340 C90 280 90 120 360 70"
              stroke="#ff3d17"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="5 7"
              opacity="0.7"
            />
            <path
              d="M610 340 C670 280 670 120 400 70"
              stroke="#ff3d17"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="5 7"
              opacity="0.7"
            />
          </svg>
          <p className="vasc-cap cursor-invert-target">
            <Trans k="s9.cap" />
          </p>
        </div>
        <div className="grid2 reveal" style={{ marginTop: 30 }}>
          <p className="copy cursor-invert-target">
            <Trans k="s9.p1" />
          </p>
          <p className="copy cursor-invert-target">
            <Trans k="s9.p2" />
          </p>
        </div>
      </Wrap>
    </section>
  )
}
