import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const observed = useRef(new Set<Element>())

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
            observed.current.delete(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    const elements = document.querySelectorAll('.reveal:not(.in)')
    elements.forEach((el, i) => {
      if (!observed.current.has(el)) {
        ;(el as HTMLElement).style.transitionDelay = `${(i % 4) * 60}ms`
        io.observe(el)
        observed.current.add(el)
      }
    })

    return () => io.disconnect()
  })
}

export function useHeaderSolid(headerId = 'hdr') {
  useEffect(() => {
    const hdr = document.getElementById(headerId)
    if (!hdr) return

    const onScroll = () => hdr.classList.toggle('solid', window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [headerId])
}

export function usePreloader(onDone: () => void) {
  useEffect(() => {
    document.body.classList.add('locked')
    let p = 0
    const fill = document.getElementById('preFill')
    const pct = document.getElementById('prePct')
    const pre = document.getElementById('pre')

    const timer = window.setInterval(() => {
      p += Math.random() * 9 + 3
      if (p >= 100) {
        p = 100
        window.clearInterval(timer)
        window.setTimeout(() => {
          pre?.classList.add('done')
          document.body.classList.remove('locked')
          onDone()
        }, 400)
      }
      if (fill) (fill as HTMLElement).style.height = `${p}%`
      if (pct) pct.textContent = String(Math.floor(p)).padStart(3, '0')
    }, 90)

    return () => {
      window.clearInterval(timer)
      document.body.classList.remove('locked')
    }
  }, [onDone])
}

export function useSocietyPreloader(onDone: () => void) {
  useEffect(() => {
    document.body.classList.add('locked')
    let p = 0
    const pct = document.getElementById('prePct')
    const pre = document.getElementById('pre')

    const timer = window.setInterval(() => {
      p += Math.random() * 10 + 4
      if (p >= 100) {
        p = 100
        window.clearInterval(timer)
        window.setTimeout(() => {
          pre?.classList.add('done')
          document.body.classList.remove('locked')
          onDone()
        }, 380)
      }
      if (pct) pct.textContent = String(Math.floor(p)).padStart(3, '0')
    }, 85)

    return () => {
      window.clearInterval(timer)
      document.body.classList.remove('locked')
    }
  }, [onDone])
}
