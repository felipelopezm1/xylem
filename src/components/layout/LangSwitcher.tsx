import { useLanguage } from '../../contexts/LanguageContext'

export default function LangSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="lang">
      <button type="button" className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>
        EN
      </button>
      <button type="button" className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')}>
        ES
      </button>
    </div>
  )
}
