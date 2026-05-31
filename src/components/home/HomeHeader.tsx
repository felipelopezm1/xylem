import { useState } from 'react'
import { Link } from 'react-router-dom'
import Wrap from '../layout/Wrap'
import LangSwitcher from '../layout/LangSwitcher'
import { Trans } from '../../contexts/LanguageContext'

const NAV_LINKS = [
  { href: '#code', key: 'nav.code' },
  { href: '#xylem', key: 'nav.xylem' },
  { href: '#chagra', key: 'nav.chagra' },
  { href: '#coevo', key: 'nav.coevo' },
  { href: '#works', key: 'nav.works' },
  { href: '#contact', key: 'nav.contact' },
] as const

export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header id="hdr">
      <Wrap className="nav">
        <Link to="/" className="brand">
          <span className="dot" />
          <b>XYLEM</b>
          <span style={{ color: 'var(--muted)', fontWeight: 400, letterSpacing: '.1em' }}>
            / symbiotic code
          </span>
        </Link>
        <nav className={`navlinks${menuOpen ? ' show' : ''}`} id="navlinks">
          {NAV_LINKS.map(({ href, key }) => (
            <a key={key} href={href} onClick={() => setMenuOpen(false)}>
              <Trans k={key} />
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <LangSwitcher />
          <button
            type="button"
            className="burger"
            id="burger"
            aria-label="menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            MENU
          </button>
        </div>
      </Wrap>
    </header>
  )
}
