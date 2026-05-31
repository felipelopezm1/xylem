import { useEffect } from 'react'
import { useLanguage, Trans } from '../../contexts/LanguageContext'
import { homeEn, homeEs } from '../../i18n/home'

export default function HomePreloader() {
  const { register } = useLanguage()

  useEffect(() => {
    register('home', homeEn, homeEs)
  }, [register])

  return (
    <div id="pre">
      <div className="pre-vein">
        <i id="preFill" />
      </div>
      <div className="pre-line cursor-invert-target">
        <Trans k="pre.line" />
      </div>
      <div className="pre-pct">
        <span id="prePct">000</span>%
      </div>
    </div>
  )
}
