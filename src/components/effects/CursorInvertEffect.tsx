import { useEffect, useRef, useCallback } from 'react'

export default function CursorInvertEffect() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef(false)
  const posRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  const paint = useCallback(() => {
    const el = spotlightRef.current
    if (!el) return
    const { x, y } = posRef.current
    el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
  }, [])

  useEffect(() => {
    const spotlight = spotlightRef.current
    if (!spotlight) return

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(paint)
    }

    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest('.cursor-invert-target')
      if (target) {
        activeRef.current = true
        spotlight.classList.add('active')
      }
    }

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Element | null
      if (!related?.closest?.('.cursor-invert-target')) {
        activeRef.current = false
        spotlight.classList.remove('active', 'pressed')
      }
    }

    const onDown = () => spotlight.classList.add('pressed')
    const onUp = () => spotlight.classList.remove('pressed')

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
    }
  }, [paint])

  return <div ref={spotlightRef} className="cursor-spotlight" aria-hidden="true" />
}
