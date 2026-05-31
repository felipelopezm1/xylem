import { useCallback, useEffect } from 'react'
import HomePreloader from '../components/home/HomePreloader'
import HomeHeader from '../components/home/HomeHeader'
import { Hero } from '../components/home/Hero'
import Prologue from '../components/home/Prologue'
import CodeSection from '../components/home/CodeSection'
import SimulationSection, { MetricsSection } from '../components/home/SimulationSection'
import ChagraSection from '../components/home/ChagraSection'
import CoevolutionSection from '../components/home/CoevolutionSection'
import WorksSection from '../components/home/WorksSection'
import FAQSection from '../components/home/FAQSection'
import HomeFooter from '../components/home/HomeFooter'
import { useHeaderSolid, usePreloader, useScrollReveal } from '../hooks/useSiteEffects'
import '../styles/home.css'

export default function HomePage() {
  const onPreloaderDone = useCallback(() => {}, [])

  usePreloader(onPreloaderDone)
  useHeaderSolid()
  useScrollReveal()

  useEffect(() => {
    document.title = 'XYLEM — Biomimicry × Agentic AI · Felipe López Mantilla'
    document.body.classList.add('page-home')
    document.body.classList.remove('page-society')
    return () => document.body.classList.remove('page-home')
  }, [])

  return (
    <>
      <HomePreloader />
      <HomeHeader />
      <main>
        <Hero />
        <Prologue />
        <CodeSection />
        <SimulationSection />
        <MetricsSection />
        <ChagraSection />
        <CoevolutionSection />
        <WorksSection />
        <FAQSection />
        <HomeFooter />
      </main>
    </>
  )
}
