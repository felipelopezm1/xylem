import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'

export type Lang = 'en' | 'es'

type Translations = Record<string, string>

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  register: (namespace: string, en: Translations, es: Translations) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const registry = new Map<string, { en: Translations; es: Translations }>()

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [, bump] = useState(0)

  const register = useCallback((namespace: string, en: Translations, es: Translations) => {
    registry.set(namespace, { en, es })
    bump((n) => n + 1)
  }, [])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    document.documentElement.lang = next
  }, [])

  const t = useCallback(
    (key: string) => {
      for (const [, dict] of registry) {
        const value = lang === 'es' ? dict.es[key] : dict.en[key]
        if (value != null) return value
      }
      return key
    },
    [lang],
  )

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, register }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export function Trans({ k, className }: { k: string; className?: string }) {
  const { t } = useLanguage()
  return <span className={className} dangerouslySetInnerHTML={{ __html: t(k) }} />
}
