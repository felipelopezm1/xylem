import { useCallback, useEffect, useRef, useState } from 'react'
import type { PageAnchor } from '../config/pageAnchors'

const SCROLL_MS = 700

export function usePageAnchors(anchors: PageAnchor[]) {
  const ids = anchors.map((a) => a.id)
  const [active, setActive] = useState(0)
  const scrolling = useRef(false)
  const scrollTimer = useRef<number | undefined>(undefined)

  const animateSection = useCallback((el: HTMLElement) => {
    el.classList.remove('page-anchor-enter')
    void el.offsetWidth
    el.classList.add('page-anchor-enter')
    window.setTimeout(() => el.classList.remove('page-anchor-enter'), SCROLL_MS)
  }, [])

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, ids.length - 1))
      const el = document.getElementById(ids[clamped])
      if (!el) return

      scrolling.current = true
      setActive(clamped)
      animateSection(el)
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })

      window.clearTimeout(scrollTimer.current)
      scrollTimer.current = window.setTimeout(() => {
        scrolling.current = false
      }, SCROLL_MS)
    },
    [animateSection, ids],
  )

  const goNext = useCallback(() => goTo(active + 1), [active, goTo])
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    document.documentElement.classList.add('page-snap')
    ids.forEach((id) => document.getElementById(id)?.classList.add('page-anchor-target'))

    return () => {
      document.documentElement.classList.remove('page-snap')
      ids.forEach((id) => {
        const el = document.getElementById(id)
        el?.classList.remove('page-anchor-target', 'page-anchor-enter')
      })
    }
  }, [ids])

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (sections.length === 0) return

    const ratios = new Map<string, number>()

    const io = new IntersectionObserver(
      (entries) => {
        if (scrolling.current) return

        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio)
        })

        let bestIdx = 0
        let bestRatio = 0
        ids.forEach((id, idx) => {
          const ratio = ratios.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestIdx = idx
          }
        })

        if (bestRatio >= 0.35) setActive(bestIdx)
      },
      { threshold: [0.2, 0.35, 0.5, 0.65, 0.8], rootMargin: '-12% 0px -12% 0px' },
    )

    sections.forEach((section) => io.observe(section))
    return () => io.disconnect()
  }, [ids])

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '')
      const idx = ids.indexOf(hash)
      if (idx >= 0) goTo(idx)
    }

    window.addEventListener('hashchange', onHash)
    if (window.location.hash) onHash()

    return () => window.removeEventListener('hashchange', onHash)
  }, [goTo, ids])

  return { active, goTo, goNext, goPrev, anchors, canPrev: active > 0, canNext: active < ids.length - 1 }
}
