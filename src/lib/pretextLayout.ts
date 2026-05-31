import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext'

export type CharLayout = {
  char: string
  x: number
  y: number
  width: number
  lineIndex: number
  accent?: string
}

export type TextMetrics = {
  font: string
  lineHeight: number
  letterSpacing: number
  textTransform: string
}

const graphemeSegmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' })

function getGraphemes(text: string): string[] {
  return Array.from(graphemeSegmenter.segment(text), (s) => s.segment)
}

export type StyledChar = { char: string; accent?: string }

export function flattenHtml(html: string): StyledChar[] {
  if (typeof document === 'undefined') return [{ char: html.replace(/<[^>]+>/g, '') }]

  const root = document.createElement('div')
  root.innerHTML = html
  const result: StyledChar[] = []

  const walk = (node: Node, accent?: string) => {
    if (node.nodeType === Node.TEXT_NODE) {
      for (const char of node.textContent ?? '') {
        if (char) result.push({ char, accent })
      }
      return
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return

    const el = node as HTMLElement
    let nextAccent = accent

    if (el.tagName === 'EM' || el.tagName === 'I') nextAccent = 'em'
    else if (el.tagName === 'B' || el.tagName === 'STRONG') nextAccent = 'strong'
    else if (el.tagName === 'SPAN') {
      if (el.classList.contains('of')) nextAccent = 'of'
      else if (el.classList.contains('x')) nextAccent = 'x'
      else if (el.classList.contains('hl')) nextAccent = 'hl'
      else if (el.classList.contains('hl2')) nextAccent = 'hl2'
      else if (el.style.color || el.className) nextAccent = 'span'
    }

    el.childNodes.forEach((child) => walk(child, nextAccent))
  }

  root.childNodes.forEach((child) => walk(child))
  return result
}

function applyTextTransformChar(char: string, transform: string): string {
  switch (transform) {
    case 'uppercase':
      return char.toUpperCase()
    case 'lowercase':
      return char.toLowerCase()
    case 'capitalize':
      return char.toUpperCase()
    default:
      return char
  }
}

export function applyTextTransform(styledChars: StyledChar[], transform: string): StyledChar[] {
  if (!transform || transform === 'none') return styledChars
  return styledChars.map((item) => ({
    ...item,
    char: applyTextTransformChar(item.char, transform),
  }))
}

export function computeCharLayout(
  styledChars: StyledChar[],
  font: string,
  maxWidth: number,
  lineHeight: number,
  letterSpacing = 0,
): { chars: CharLayout[]; height: number } {
  const text = styledChars.map((c) => c.char).join('')
  if (!text.trim() || maxWidth <= 0) return { chars: [], height: 0 }

  const prepared = prepareWithSegments(text, font, {
    letterSpacing: letterSpacing || undefined,
  })
  const result = layoutWithLines(prepared, maxWidth, lineHeight)
  const chars: CharLayout[] = []
  let styledIndex = 0

  for (let lineIdx = 0; lineIdx < result.lines.length; lineIdx++) {
    const line = result.lines[lineIdx]!
    const startSeg = line.start.segmentIndex
    const startGrapheme = line.start.graphemeIndex
    const endSeg = line.end.segmentIndex
    const endGrapheme = line.end.graphemeIndex

    let x = 0
    const y = lineIdx * lineHeight

    for (let si = startSeg; si <= endSeg && si < prepared.segments.length; si++) {
      const segment = prepared.segments[si]!
      const kind = prepared.kinds[si]!
      if (kind === 'hard-break') continue

      const graphemes = getGraphemes(segment)
      const segWidth = prepared.widths[si]!
      const gStart = si === startSeg ? startGrapheme : 0
      const gEnd = si === endSeg ? endGrapheme : graphemes.length
      const breakable = prepared.breakableFitAdvances[si]

      for (let gi = gStart; gi < gEnd; gi++) {
        const styled = styledChars[styledIndex]
        const char = graphemes[gi] ?? styled?.char ?? ' '
        const width =
          breakable && breakable.length === graphemes.length
            ? breakable[gi]!
            : segWidth / Math.max(graphemes.length, 1)

        chars.push({
          char,
          x,
          y,
          width,
          lineIndex: lineIdx,
          accent: styled?.accent,
        })

        x += width
        styledIndex++
      }
    }
  }

  return { chars, height: result.height }
}

export function readFont(el: HTMLElement): string {
  const cs = getComputedStyle(el)
  const weight = cs.fontWeight || '400'
  const size = cs.fontSize || '16px'
  const family = cs.fontFamily || 'serif'
  const style = cs.fontStyle === 'italic' ? 'italic ' : ''
  return `${style}${weight} ${size} ${family}`.trim()
}

export function readLineHeight(el: HTMLElement): number {
  const lh = getComputedStyle(el).lineHeight
  const fs = parseFloat(getComputedStyle(el).fontSize)
  if (lh === 'normal') return fs * 1.55
  return parseFloat(lh) || fs * 1.55
}

export function readTextMetrics(el: HTMLElement): TextMetrics {
  const cs = getComputedStyle(el)
  const letterSpacing =
    cs.letterSpacing && cs.letterSpacing !== 'normal' ? parseFloat(cs.letterSpacing) : 0

  return {
    font: readFont(el),
    lineHeight: readLineHeight(el),
    letterSpacing: Number.isFinite(letterSpacing) ? letterSpacing : 0,
    textTransform: cs.textTransform || 'none',
  }
}

export function getLayoutWidth(el: HTMLElement): number {
  let node: HTMLElement | null = el

  while (node) {
    const width = node.clientWidth
    if (width > 0) return width
    node = node.parentElement
  }

  return el.getBoundingClientRect().width
}
