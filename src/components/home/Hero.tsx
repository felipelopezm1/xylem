import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

export default function VeinsBackground() {
  return (
    <svg className="veins" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="rgba(124,137,168,.13)" strokeWidth="1">
        <path d="M120 950 C120 700 60 600 120 420 C160 300 120 180 200 40" />
        <path d="M420 950 C420 680 480 560 420 380 C380 250 440 140 380 0" />
        <path d="M720 980 C720 700 720 560 720 360 C720 220 720 120 720 -20" />
        <path d="M1020 950 C1020 690 960 560 1020 380 C1060 250 1000 140 1060 0" />
        <path d="M1320 950 C1320 700 1380 600 1320 420 C1280 300 1340 180 1260 40" />
      </g>
      <g stroke="url(#cg)" strokeWidth="1.4">
        <path className="flow" style={{ animationDelay: '0s' }} d="M120 950 C120 700 60 600 120 420 C160 300 120 180 200 40" />
        <path className="flow" style={{ animationDelay: '1.4s' }} d="M420 950 C420 680 480 560 420 380 C380 250 440 140 380 0" />
        <path className="flow" style={{ animationDelay: '.7s' }} d="M720 980 C720 700 720 560 720 360 C720 220 720 120 720 -20" />
        <path className="flow" style={{ animationDelay: '2.1s' }} d="M1020 950 C1020 690 960 560 1020 380 C1060 250 1000 140 1060 0" />
        <path className="flow" style={{ animationDelay: '1s' }} d="M1320 950 C1320 700 1380 600 1320 420 C1280 300 1340 180 1260 40" />
      </g>
      <defs>
        <linearGradient id="cg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#83e08a" />
          <stop offset="1" stopColor="#48dbe6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <VeinsBackground />
      <Wrap>
        <div className="hero-grid">
          <div>
            <p className="epigraph cursor-invert-target">
              <Trans k="hero.epi" />
            </p>
            <h1 className="title cursor-invert-target">
              X<span className="x">y</span>lem
            </h1>
            <p className="subtitle cursor-invert-target">
              <Trans k="hero.sub" />
            </p>
            <div className="by">
              <span className="cursor-invert-target">
                <Trans k="hero.by1" />
              </span>
              <span className="cursor-invert-target">
                <Trans k="hero.by2" />
              </span>
            </div>
            <div className="cta-row">
              <a href="#xylem" className="btn fill">
                <Trans k="hero.cta1" />
              </a>
              <a href="#code" className="btn">
                <Trans k="hero.cta2" />
              </a>
              <a href="/xylem-of-society" className="btn society">
                <Trans k="hero.cta3" />
              </a>
            </div>
          </div>
          <pre className="ascii">
            {`+----------------------------------------+
| `}
            <span className="hl">XYLEM // SYMBIOTIC CODE</span>
            {`     `}
            <span className="dim">v.2026</span>
            {` |
|----------------------------------------|
| 001  HUMAN        `}
            <span className="dim">benchmark layer</span>
            {`     |
| 010  DIJKSTRA     `}
            <span className="dim">shortest path</span>
            {`       |
| 011  ANTS         `}
            <span className="dim">colony intelligence</span>
            {` |
| 100  PHYSARUM     `}
            <span className="dim">slime pathfinding</span>
            {`   |
| 101  RIVER/STEINER `}
            <span className="dim">flow networks</span>
            {`     |
|----------------------------------------|
| MODEL · MEASURE · MENTOR               |
|         _   _   _                      |
|        ( \`-' )-'( \`-.                   |
|     ~ nature ~ machine ~ human ~       |
+----------------------------------------+`}
          </pre>
        </div>
      </Wrap>
      <div className="scrollcue">
        <span className="cursor-invert-target">
          <Trans k="hero.scroll" />
        </span>
        <span className="bar" />
      </div>
    </section>
  )
}
