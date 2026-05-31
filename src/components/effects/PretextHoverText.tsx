import { useCallback, useEffect, useRef, useState, type CSSProperties, type ElementType } from 'react'
import {
  applyTextTransform,
  computeCharLayout,
  flattenHtml,
  getLayoutWidth,
  readTextMetrics,
  type CharLayout,
} from '../../lib/pretextLayout'

const HOVER_RADIUS = 110
const MAX_PUSH = 22
const MAX_ROTATION = 14
const MAX_SCALE = 0.14

type Props = {
  html: string
  className?: string
  style?: CSSProperties
  as?: ElementType
  plain?: string
  inline?: boolean
}

function accentClass(accent?: string): string {
  if (!accent) return ''
  return `pretext-char--${accent}`
}

export default function PretextHoverText({
  html,
  className = '',
  style,
  as: Tag = 'span',
  plain,
  inline = false,
}: Props) {
  const shellRef = useRef<HTMLElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  const rafRef = useRef<number>(0)
  const mouseRef = useRef({ x: -9999, y: -9999, inside: false })
  const charElsRef = useRef<(HTMLSpanElement | null)[]>([])
  const layoutRef = useRef<CharLayout[]>([])
  const lineHeightRef = useRef(0)
  const [layout, setLayout] = useState<{ chars: CharLayout[]; height: number } | null>(null)
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [coarse] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches,
  )

  const relayout = useCallback(() => {
    const shell = shellRef.current
    const measure = measureRef.current
    if (!shell || !measure) return

    const width = getLayoutWidth(shell)
    if (width <= 0) return

    const metrics = readTextMetrics(measure)
    lineHeightRef.current = metrics.lineHeight

    const styled = applyTextTransform(flattenHtml(html), metrics.textTransform)
    const next = computeCharLayout(
      styled,
      metrics.font,
      width,
      metrics.lineHeight,
      metrics.letterSpacing,
    )

    if (next.chars.length === 0) return

    layoutRef.current = next.chars
    charElsRef.current = []
    setLayout(next)
  }, [html])

  const paintChars = useCallback(() => {
    const shell = shellRef.current
    if (!shell) return

    const rect = shell.getBoundingClientRect()
    const { x: mx, y: my, inside } = mouseRef.current
    const chars = layoutRef.current
    const lineHeight = lineHeightRef.current || parseFloat(getComputedStyle(shell).lineHeight) || 20

    for (let i = 0; i < chars.length; i++) {
      const el = charElsRef.current[i]
      const char = chars[i]
      if (!el || !char) continue

      if (!inside) {
        el.style.transform = 'translate(0, 0) rotate(0deg) scale(1)'
        el.style.textShadow = ''
        continue
      }

      const cx = rect.left + char.x + char.width / 2
      const cy = rect.top + char.y + lineHeight / 2
      const dx = cx - mx
      const dy = cy - my
      const dist = Math.hypot(dx, dy)

      if (dist > HOVER_RADIUS) {
        el.style.transform = 'translate(0, 0) rotate(0deg) scale(1)'
        el.style.textShadow = ''
        continue
      }

      const force = 1 - dist / HOVER_RADIUS
      const eased = force * force
      const nx = dx / (dist || 1)
      const ny = dy / (dist || 1)
      const pushX = nx * eased * MAX_PUSH
      const pushY = ny * eased * MAX_PUSH
      const rot = nx * eased * MAX_ROTATION
      const scale = 1 + eased * MAX_SCALE

      el.style.transform = `translate(${pushX}px, ${pushY}px) rotate(${rot}deg) scale(${scale})`
      el.style.textShadow = `0 0 ${Math.round(eased * 18)}px rgba(72, 219, 230, ${eased * 0.45})`
    }
  }, [])

  useEffect(() => {
    if (reducedMotion || coarse) return

    const shell = shellRef.current
    if (!shell) return

    const runLayout = () => {
      relayout()
    }

    runLayout()

    const ro = new ResizeObserver(runLayout)
    ro.observe(shell)

    let parent: HTMLElement | null = shell.parentElement
    while (parent) {
      ro.observe(parent)
      if (parent.classList.contains('wrap') || parent.classList.contains('grid2')) break
      parent = parent.parentElement
    }

    document.fonts?.ready.then(runLayout)

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, inside: true }
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(paintChars)
    }

    const onLeave = () => {
      mouseRef.current.inside = false
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(paintChars)
    }

    shell.addEventListener('mousemove', onMove, { passive: true })
    shell.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      shell.removeEventListener('mousemove', onMove)
      shell.removeEventListener('mouseleave', onLeave)
    }
  }, [relayout, paintChars, reducedMotion, coarse, html])

  if (reducedMotion || coarse) {
    return (
      <Tag className={className} style={style} dangerouslySetInnerHTML={{ __html: html }} />
    )
  }

  const plainText = plain ?? flattenHtml(html).map((c) => c.char).join('')

  return (
    <Tag
      ref={shellRef as never}
      className={`pretext-hover${inline ? ' pretext-hover--inline' : ''} ${className}`.trim()}
      style={style}
    >
      <span className="pretext-sr">{plainText}</span>
      <span ref={measureRef} className="pretext-measure" aria-hidden="true">
        {plainText}
      </span>
      <span className="pretext-anchor" aria-hidden="true">
        {plainText}
      </span>
      <span
        className="pretext-stage"
        style={{ height: layout?.height ?? undefined }}
        aria-hidden="true"
      >
        {layout?.chars.map((char, i) => (
          <span
            key={`${i}-${char.lineIndex}-${char.x}`}
            ref={(el) => {
              charElsRef.current[i] = el
            }}
            className={`pretext-char ${accentClass(char.accent)}`.trim()}
            style={{
              left: char.x,
              top: char.y,
              width: char.width,
              height: lineHeightRef.current || undefined,
              lineHeight: lineHeightRef.current ? `${lineHeightRef.current}px` : undefined,
            }}
          >
            {char.char === ' ' ? '\u00a0' : char.char}
          </span>
        ))}
      </span>
    </Tag>
  )
}
