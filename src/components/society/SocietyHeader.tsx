import { Link } from 'react-router-dom'
import Wrap from '../layout/Wrap'
import LangSwitcher from '../layout/LangSwitcher'
import { Trans } from '../../contexts/LanguageContext'

export default function SocietyHeader() {
  return (
    <header id="hdr">
      <Wrap className="nav">
        <Link className="back" to="/">
          <Trans k="nav.back" />
        </Link>
        <LangSwitcher />
      </Wrap>
    </header>
  )
}
