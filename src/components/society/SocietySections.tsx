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
            <Trans k={eyebrowKey} className="eyebrow" interactive={false} />
            {chips.length > 0 && (
              <div className="threads">
                {chips.map(({ key, className }) => (
                  <span key={key} className={`chip ${className}`}>
                    <Trans k={key} interactive={false} inline />
                  </span>
                ))}
              </div>
            )}
            <Trans k={titleKey} className="s-title" as="h2" />
          </div>
        </div>
        <div className="grid2 reveal">
          <Trans k={leadKey} className="lead" as="p" />
          <div>
            {paragraphs.map(({ key }) => (
              <Trans key={key} k={key} className="copy" as="p" />
            ))}
            {children}
          </div>
        </div>
        {pullQuote && (
          <div className="pull reveal">
            <Trans k={pullQuote.quoteKey} className="pq" />
            <Trans k={pullQuote.attrKey} className="pa" interactive={false} />
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
            <Trans k="s5.eye" className="eyebrow" interactive={false} />
            <div className="threads">
              <span className="chip xy">
                <Trans k="t.xy" interactive={false} inline />
              </span>
            </div>
            <Trans k="s5.title" className="s-title" as="h2" />
          </div>
        </div>
        <Trans k="s5.lead" className="lead reveal" as="p" />
        <div className="pcards reveal">
          {cards.map(({ pi, role, title, desc }) => (
            <div key={pi} className="pcard">
              <div className="pi">
                {pi} · <span className="arrow">→</span>{' '}
                <Trans k={role} interactive={false} inline />
              </div>
              <Trans k={title} as="h4" />
              <Trans k={desc} as="p" />
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

export function ProxyBridgeSection() {
  return (
    <section className="s dark" id="s-proxy-bridge">
      <Wrap>
        <div className="s-head reveal">
          <div className="meta">
            <Trans k="sx.eye" className="eyebrow" interactive={false} />
            <div className="threads">
              <span className="chip vo">
                <Trans k="t.vo" interactive={false} inline />
              </span>
              <span className="chip xy">
                <Trans k="t.xy" interactive={false} inline />
              </span>
              <span className="chip ch">
                <Trans k="t.ch" interactive={false} inline />
              </span>
            </div>
            <Trans k="sx.title" className="s-title" as="h2" />
          </div>
        </div>
        <Trans k="sx.lead" className="lead reveal" as="p" />
        <div className="vasc reveal">
          <svg viewBox="0 0 760 480" aria-hidden="true">
            <defs>
              <marker
                id="arr-vo"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M0 0 L10 5 L0 10 z" fill="#ff3d17" />
              </marker>
              <marker
                id="arr-ch"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M0 0 L10 5 L0 10 z" fill="#9bd400" />
              </marker>
              <marker
                id="arr-xy"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M0 0 L10 5 L0 10 z" fill="#48dbe6" />
              </marker>
            </defs>

            {/* regeneration feedback loops — value returning to its source */}
            <path
              d="M270 422 C110 405 95 210 152 122"
              stroke="#ff3d17"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="5 7"
              opacity="0.55"
              markerEnd="url(#arr-vo)"
            />
            <path
              d="M490 422 C650 405 665 210 608 122"
              stroke="#ff3d17"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="5 7"
              opacity="0.55"
              markerEnd="url(#arr-vo)"
            />
            <text
              x="380"
              y="470"
              textAnchor="middle"
              fontFamily="JetBrains Mono,monospace"
              fontSize="10"
              fill="#857d68"
              letterSpacing="2"
            >
              VALUE RETURNS — REGENERATION LOOP
            </text>

            {/* source: Voltaire */}
            <rect x="80" y="60" width="160" height="60" rx="3" fill="rgba(255,61,23,.05)" stroke="#ff3d17" strokeWidth="1.5" />
            <text x="160" y="94" textAnchor="middle" fontFamily="Anton,sans-serif" fontSize="22" fill="#ff3d17" letterSpacing="1">
              VOLTAIRE
            </text>
            <text x="160" y="111" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#857d68" letterSpacing="1">
              ABUNDANCE · GROWTH
            </text>

            {/* source: Chagra */}
            <rect x="520" y="60" width="160" height="60" rx="3" fill="rgba(155,212,0,.06)" stroke="#9bd400" strokeWidth="1.5" />
            <text x="600" y="94" textAnchor="middle" fontFamily="Anton,sans-serif" fontSize="22" fill="#9bd400" letterSpacing="1">
              CHAGRA
            </text>
            <text x="600" y="111" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#857d68" letterSpacing="1">
              REGENERATION · RETURN
            </text>

            {/* convergence into the proxy */}
            <path d="M160 120 C250 152 252 178 320 200" stroke="#ff3d17" strokeWidth="1.5" fill="none" markerEnd="url(#arr-vo)" />
            <path d="M600 120 C510 152 508 178 440 200" stroke="#9bd400" strokeWidth="1.5" fill="none" markerEnd="url(#arr-ch)" />
            <text x="232" y="152" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#ff3d17" letterSpacing="2">
              ENGINE
            </text>
            <text x="528" y="152" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#9bd400" letterSpacing="2">
              CONSTRAINT
            </text>

            {/* the biomimicry proxy — hexagon with a branching-flow glyph */}
            <polygon
              points="380,163 442,199 442,271 380,307 318,271 318,199"
              fill="rgba(72,219,230,.05)"
              stroke="#48dbe6"
              strokeWidth="1.5"
            />
            <g stroke="#48dbe6" strokeWidth="2" fill="none">
              <path d="M380 290 L380 248" />
              <path d="M380 248 L345 220" />
              <path d="M380 248 L415 220" />
              <path d="M345 220 L329 200" />
              <path d="M345 220 L357 197" />
              <path d="M415 220 L403 197" />
              <path d="M415 220 L431 200" />
            </g>
            <circle cx="329" cy="200" r="2.6" fill="#c8ff2e" />
            <circle cx="357" cy="197" r="2.6" fill="#48dbe6" />
            <circle cx="403" cy="197" r="2.6" fill="#48dbe6" />
            <circle cx="431" cy="200" r="2.6" fill="#c8ff2e" />
            <text x="380" y="300" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#48dbe6" letterSpacing="3">
              PROXY
            </text>
            <text x="380" y="332" textAnchor="middle" fontFamily="Anton,sans-serif" fontSize="18" fill="#48dbe6" letterSpacing="1">
              BIOMIMICRY PROXY
            </text>
            <text x="380" y="349" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#857d68" letterSpacing="1">
              ANTS · SLIME MOULD · RIVERS
            </text>

            {/* output into Xylem */}
            <path d="M380 357 L380 392" stroke="#48dbe6" strokeWidth="1.5" fill="none" markerEnd="url(#arr-xy)" />
            <text x="392" y="378" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#48dbe6" letterSpacing="1">
              ROUTES VALUE
            </text>
            <rect x="270" y="392" width="220" height="60" rx="3" fill="rgba(72,219,230,.06)" stroke="#48dbe6" strokeWidth="1.5" />
            <text x="380" y="425" textAnchor="middle" fontFamily="Anton,sans-serif" fontSize="22" fill="#48dbe6" letterSpacing="1">
              XYLEM OF SOCIETY
            </text>
            <text x="380" y="442" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#857d68" letterSpacing="1">
              COORDINATED · REGENERATIVE ABUNDANCE
            </text>
          </svg>
          <Trans k="sx.cap" className="vasc-cap" interactive={false} as="p" />
        </div>
        <div className="grid2 reveal" style={{ marginTop: 30 }}>
          <Trans k="sx.p1" className="copy" as="p" />
          <Trans k="sx.p2" className="copy" as="p" />
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
            <Trans k="s9.eye" className="eyebrow" interactive={false} />
            <div className="threads">
              <span className="chip xy">
                <Trans k="t.xy" interactive={false} inline />
              </span>
              <span className="chip ch">
                <Trans k="t.ch" interactive={false} inline />
              </span>
              <span className="chip vo">
                <Trans k="t.vo" interactive={false} inline />
              </span>
            </div>
            <Trans k="s9.title" className="s-title" as="h2" />
          </div>
        </div>
        <Trans k="s9.lead" className="lead reveal" as="p" />
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
          <Trans k="s9.cap" className="vasc-cap" interactive={false} as="p" />
        </div>
        <div className="grid2 reveal" style={{ marginTop: 30 }}>
          <Trans k="s9.p1" className="copy" as="p" />
          <Trans k="s9.p2" className="copy" as="p" />
        </div>
      </Wrap>
    </section>
  )
}
