import type { PageAnchor } from '../../config/pageAnchors'
import { usePageAnchors } from '../../hooks/usePageAnchors'
import '../../styles/page-anchors.css'

type Props = {
  anchors: PageAnchor[]
  variant?: 'home' | 'society'
}

export default function PageAnchorNav({ anchors, variant = 'home' }: Props) {
  const { active, goTo, goNext, goPrev, canPrev, canNext } = usePageAnchors(anchors)

  return (
    <nav className={`page-anchors page-anchors--${variant}`} aria-label="Page sections">
      <button
        type="button"
        className="page-anchors__step"
        onClick={goPrev}
        disabled={!canPrev}
        aria-label="Previous section"
      >
        ↑
      </button>

      <ol className="page-anchors__list">
        {anchors.map(({ id, label }, index) => (
          <li key={id}>
            <button
              type="button"
              className={`page-anchors__dot${active === index ? ' is-active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={label}
              aria-current={active === index ? 'true' : undefined}
              title={label}
            >
              <span className="page-anchors__label">{label}</span>
            </button>
          </li>
        ))}
      </ol>

      <button
        type="button"
        className="page-anchors__step"
        onClick={goNext}
        disabled={!canNext}
        aria-label="Next section"
      >
        ↓
      </button>
    </nav>
  )
}
