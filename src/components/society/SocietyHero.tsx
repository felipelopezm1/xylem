import { Link } from 'react-router-dom'
import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'
import PretextHoverText from '../effects/PretextHoverText'

export default function SocietyHero() {
  return (
    <section className="hero" id="top">
      <span className="disc d-orange" />
      <Wrap>
        <Trans k="hero.kicker" className="kicker" interactive={false} as="span" />
        <PretextHoverText
          html='Xylem <span class="of">of</span> Society'
          as="h1"
          plain="Xylem of Society"
        />
        <Trans k="hero.sub" className="subhead" as="p" />
        <div className="volt">
          <Trans k="hero.vq" className="q" as="div" />
          <Trans k="hero.va" className="a" interactive={false} as="div" />
        </div>
        <Trans k="hero.intro" className="lead-intro" as="p" />
        <div className="cta-row">
          <a href="#s1" className="btn fill">
            <Trans k="hero.cta1" interactive={false} />
          </a>
          <Link to="/" className="btn">
            <Trans k="hero.cta2" interactive={false} />
          </Link>
          <a href="/legacy/jec26-xylem-deck.html" className="btn jec">
            <Trans k="hero.jec" interactive={false} />
          </a>
        </div>
      </Wrap>
    </section>
  )
}
