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
              <p className="foot-big cursor-invert-target">
                <Trans k="ft.big" />
              </p>
            </div>
            <div className="foot-col reveal">
              <h6>
                <Trans k="ft.work" />
              </h6>
              <a href="#xylem">
                <Trans k="ft.w1" />
              </a>
              <a href="#code">
                <Trans k="ft.w2" />
              </a>
              <a href="https://chagra-net.vercel.app/en" target="_blank" rel="noopener noreferrer">
                <Trans k="ft.w3" />
              </a>
              <a href="https://sketch-real-mvp.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Trans k="ft.w5" />
              </a>
              <a href="https://letrina-store.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Trans k="ft.w4" />
              </a>
            </div>
            <div className="foot-col reveal">
              <h6>
                <Trans k="ft.contact" />
              </h6>
              <p>
                <Trans k="ft.c1" />
              </p>
              <a href="https://portfolio-felipe-lopez.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Trans k="ft.c2" />
              </a>
              <p>
                <Trans k="ft.c3" />
              </p>
              <p>
                <Trans k="ft.c4" />
              </p>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Felipe López Mantilla</span>
            <span>
              <Trans k="ft.tag" />
            </span>
            <span className="mono">MODEL · MEASURE · MENTOR</span>
          </div>
        </Wrap>
      </footer>
    </>
  )
}
