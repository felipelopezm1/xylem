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
      <div className="scream cursor-invert-target">
        <Trans k="pre.s" />
      </div>
      <div className="pct">
        <span id="prePct">000</span>% —{' '}
        <span className="cursor-invert-target">
          <Trans k="pre.l" />
        </span>
      </div>
    </div>
  )
}
