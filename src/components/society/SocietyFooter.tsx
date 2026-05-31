import { Link } from 'react-router-dom'
import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

export default function SocietyFooter() {
  return (
    <footer>
      <Wrap>
        <p className="foot-big reveal cursor-invert-target">
          <Trans k="ft.big" />
        </p>
        <div className="foot-grid reveal">
          <Link to="/" className="btn fill">
            <Trans k="ft.cta1" />
          </Link>
          <a href="https://chagra-net.vercel.app/en" target="_blank" rel="noopener noreferrer" className="btn">
            <Trans k="ft.cta2" />
          </a>
        </div>
        <div className="foot-links reveal">
          <div>
            <h6>
              <Trans k="ft.sources" />
            </h6>
            <a
              href="https://oll.libertyfund.org/quotes/voltaire-on-the-benefits-which-trade-and-economic-abundance-bring-to-people-living-in-the-present-age-1736"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Trans k="ft.l1" />
            </a>
            <a href="https://www.gutenberg.org/files/18569/18569-h/18569-h.htm" target="_blank" rel="noopener noreferrer">
              <Trans k="ft.l2" />
            </a>
            <a href="https://jec2026.com/" target="_blank" rel="noopener noreferrer">
              <Trans k="ft.l3" />
            </a>
          </div>
          <div>
            <h6>
              <Trans k="ft.work" />
            </h6>
            <Link to="/">
              <Trans k="ft.w1" />
            </Link>
            <a href="https://chagra-net.vercel.app/en" target="_blank" rel="noopener noreferrer">
              <Trans k="ft.w2" />
            </a>
            <a href="https://portfolio-felipe-lopez.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Trans k="ft.w3" />
            </a>
          </div>
          <div>
            <h6>
              <Trans k="ft.note" />
            </h6>
            <p>
              <Trans k="ft.n1" />
            </p>
            <p>
              <Trans k="ft.n2" />
            </p>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Felipe López Mantilla</span>
          <span>
            <Trans k="ft.tag" />
          </span>
          <span className="mono">MODEL · MEASURE · MENTOR</span>
        </div>
      </Wrap>
    </footer>
  )
}
