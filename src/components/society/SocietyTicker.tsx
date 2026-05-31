import { useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const WORDS_EN = [
  'Abundance',
  'Regeneration',
  'Model',
  'Measure',
  'Mentor',
  'Reciprocity',
  'Nature Proxies',
  'Global South',
  'Chagra',
  'Trade',
]

const WORDS_ES = [
  'Abundancia',
  'Regeneración',
  'Modelo',
  'Medida',
  'Mentora',
  'Reciprocidad',
  'Proxies de la Naturaleza',
  'Sur Global',
  'Chagra',
  'Comercio',
]

export default function SocietyTicker() {
  const { lang } = useLanguage()

  useEffect(() => {
    const words = lang === 'es' ? WORDS_ES : WORDS_EN
    const seg = words.map((w) => `<span>${w}</span><span class="dot">/</span>`).join('')
    const ticker = document.getElementById('ticker')
    if (ticker) ticker.innerHTML = seg + seg
  }, [lang])

  return (
    <div className="ticker">
      <div className="run" id="ticker" />
    </div>
  )
}
