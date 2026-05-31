import { useEffect } from 'react'
import { useLanguage, Trans } from '../../contexts/LanguageContext'
import { societyEn, societyEs } from '../../i18n/society'

export default function SocietyPreloader() {
  const { register } = useLanguage()

  useEffect(() => {
    register('society', societyEn, societyEs)
  }, [register])

  return (
    <div id="pre">
      <div className="scream">
        <Trans k="pre.s" interactive={false} />
      </div>
      <div className="pct">
        <span id="prePct">000</span>% — <Trans k="pre.l" interactive={false} inline />
      </div>
    </div>
  )
}
