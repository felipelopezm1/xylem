import { Link } from 'react-router-dom'
import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

export default function SocietyHero() {
  return (
    <section className="hero" id="top">
      <span className="disc d-orange" />
      <span className="disc d-lime" />
      <Wrap>
        <span className="kicker">
          <Trans k="hero.kicker" />
        </span>
        <h1 className="cursor-invert-target">
          Xylem <span className="of">of</span>
          <br />
          Society
        </h1>
        <p className="subhead cursor-invert-target">
          <Trans k="hero.sub" />
        </p>
        <div className="volt">
          <div className="q cursor-invert-target">
            <Trans k="hero.vq" />
          </div>
          <div className="a">
            <Trans k="hero.va" />
          </div>
        </div>
        <p className="lead-intro cursor-invert-target">
          <Trans k="hero.intro" />
        </p>
        <div className="cta-row">
          <a href="#s1" className="btn fill">
            <Trans k="hero.cta1" />
          </a>
          <Link to="/" className="btn">
            <Trans k="hero.cta2" />
          </Link>
        </div>
      </Wrap>
    </section>
  )
}
