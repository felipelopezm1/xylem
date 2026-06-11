import { Link } from 'react-router-dom'
import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

export default function SocietyFooter() {
  return (
    <footer id="contact">
      <Wrap>
        <Trans k="ft.big" className="foot-big reveal" as="p" />
        <div className="foot-grid reveal">
          <Link to="/" className="btn fill">
            <Trans k="ft.cta1" interactive={false} />
          </Link>
          <a href="https://chagra-net.vercel.app/en" target="_blank" rel="noopener noreferrer" className="btn">
            <Trans k="ft.cta2" interactive={false} />
          </a>
        </div>
        <div className="foot-links reveal">
          <div>
            <Trans k="ft.sources" as="h6" interactive={false} />
            <a
              href="https://oll.libertyfund.org/quotes/voltaire-on-the-benefits-which-trade-and-economic-abundance-bring-to-people-living-in-the-present-age-1736"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Trans k="ft.l1" interactive={false} />
            </a>
            <a href="https://www.gutenberg.org/files/18569/18569-h/18569-h.htm" target="_blank" rel="noopener noreferrer">
              <Trans k="ft.l2" interactive={false} />
            </a>
            <a href="https://jec2026.com/" target="_blank" rel="noopener noreferrer">
              <Trans k="ft.l3" interactive={false} />
            </a>
          </div>
          <div>
            <Trans k="ft.work" as="h6" interactive={false} />
            <Link to="/">
              <Trans k="ft.w1" interactive={false} />
            </Link>
            <a href="https://chagra-net.vercel.app/en" target="_blank" rel="noopener noreferrer">
              <Trans k="ft.w2" interactive={false} />
            </a>
            <a href="https://portfolio-felipe-lopez.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Trans k="ft.w3" interactive={false} />
            </a>
          </div>
          <div>
            <Trans k="ft.note" as="h6" interactive={false} />
            <Trans k="ft.n1" as="p" interactive={false} />
            <Trans k="ft.n2" as="p" interactive={false} />
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Felipe López Mantilla</span>
          <Trans k="ft.tag" interactive={false} inline />
          <span className="mono">MODEL · MEASURE · MENTOR</span>
        </div>
      </Wrap>
    </footer>
  )
}
