import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

export default function HomeFooter() {
  return (
    <>
      <section id="contact" />
      <footer>
        <Wrap>
          <div className="foot-top">
            <div className="reveal">
              <Trans k="ft.big" className="foot-big" as="p" />
            </div>
            <div className="foot-col reveal">
              <Trans k="ft.work" as="h6" interactive={false} />
              <a href="#xylem">
                <Trans k="ft.w1" interactive={false} />
              </a>
              <a href="#code">
                <Trans k="ft.w2" interactive={false} />
              </a>
              <a href="https://chagra-net.vercel.app/en" target="_blank" rel="noopener noreferrer">
                <Trans k="ft.w3" interactive={false} />
              </a>
              <a href="https://sketch-real-mvp.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Trans k="ft.w5" interactive={false} />
              </a>
              <a href="https://letrina-store.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Trans k="ft.w4" interactive={false} />
              </a>
              <a href="/legacy/tide-xylem-deck.html">
                <Trans k="ft.w6" interactive={false} />
              </a>
              <a href="/legacy/jec26-xylem-deck.html">
                <Trans k="ft.w7" interactive={false} />
              </a>
            </div>
            <div className="foot-col reveal">
              <Trans k="ft.contact" as="h6" interactive={false} />
              <Trans k="ft.c1" as="p" interactive={false} />
              <a href="https://portfolio-felipe-lopez.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Trans k="ft.c2" interactive={false} />
              </a>
              <Trans k="ft.c3" as="p" interactive={false} />
              <Trans k="ft.c4" as="p" interactive={false} />
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Felipe López Mantilla</span>
            <Trans k="ft.tag" interactive={false} inline />
            <span className="mono">MODEL · MEASURE · MENTOR</span>
          </div>
        </Wrap>
      </footer>
    </>
  )
}
