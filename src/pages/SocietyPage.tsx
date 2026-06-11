import { useCallback, useEffect } from 'react'
import SocietyPreloader from '../components/society/SocietyPreloader'
import SocietyHeader from '../components/society/SocietyHeader'
import SocietyHero from '../components/society/SocietyHero'
import SocietyTicker from '../components/society/SocietyTicker'
import {
  SocietySection,
  ProxyCardsSection,
  ProxyBridgeSection,
  JecMappingSection,
  ArchitectureSection,
  SovereigntySection,
  PresentationBriefSection,
  VascularSection,
} from '../components/society/SocietySections'
import SocietyFooter from '../components/society/SocietyFooter'
import PageAnchorNav from '../components/nav/PageAnchorNav'
import { SOCIETY_ANCHORS } from '../config/pageAnchors'
import { useHeaderSolid, useScrollReveal, useSocietyPreloader } from '../hooks/useSiteEffects'
import '../styles/society.css'

export default function SocietyPage() {
  const onPreloaderDone = useCallback(() => {}, [])

  useSocietyPreloader(onPreloaderDone)
  useHeaderSolid()
  useScrollReveal()

  useEffect(() => {
    document.title = 'Xylem of Society — Economic Growth & Trade on Nature Proxies & AI'
    document.body.classList.add('page-society')
    document.body.classList.remove('page-home')
    return () => document.body.classList.remove('page-society')
  }, [])

  return (
    <>
      <div className="grain" />
      <SocietyPreloader />
      <SocietyHeader />
      <PageAnchorNav anchors={SOCIETY_ANCHORS} variant="society" />
      <main>
        <SocietyHero />
        <SocietyTicker />
        <SocietySection
          id="s1"
          num="01"
          tone="dark"
          eyebrowKey="s1.eye"
          titleKey="s1.title"
          leadKey="s1.lead"
          paragraphs={[{ key: 's1.p1' }, { key: 's1.p2' }]}
        />
        <SocietySection
          id="s2"
          num="02"
          tone="bone"
          eyebrowKey="s2.eye"
          titleKey="s2.title"
          leadKey="s2.lead"
          paragraphs={[{ key: 's2.p1' }, { key: 's2.p2' }]}
          pullQuote={{ quoteKey: 's2.pq', attrKey: 's2.pa' }}
        />
        <SocietySection
          id="s3"
          num="03"
          tone="dark"
          eyebrowKey="s3.eye"
          titleKey="s3.title"
          leadKey="s3.lead"
          paragraphs={[{ key: 's3.p1' }, { key: 's3.p2' }]}
        />
        <SocietySection
          id="s4"
          num="04"
          tone="bone"
          eyebrowKey="s4.eye"
          titleKey="s4.title"
          leadKey="s4.lead"
          paragraphs={[{ key: 's4.p1' }, { key: 's4.p2' }]}
        />
        <ProxyCardsSection />
        <JecMappingSection />
        <ProxyBridgeSection />
        <SocietySection
          id="s6"
          num="06"
          tone="bone"
          eyebrowKey="s6.eye"
          titleKey="s6.title"
          leadKey="s6.lead"
          paragraphs={[{ key: 's6.p1' }, { key: 's6.p2' }]}
        />
        <ArchitectureSection />
        <SovereigntySection />
        <SocietySection
          id="s7"
          num="07"
          tone="dark"
          eyebrowKey="s7.eye"
          titleKey="s7.title"
          leadKey="s7.lead"
          paragraphs={[{ key: 's7.p1' }, { key: 's7.p2' }]}
        />
        <SocietySection
          id="s8"
          num="08"
          tone="bone"
          eyebrowKey="s8.eye"
          titleKey="s8.title"
          leadKey="s8.lead"
          paragraphs={[{ key: 's8.p1' }, { key: 's8.p2' }]}
        />
        <VascularSection />
        <PresentationBriefSection />
        <SocietySection
          id="s10"
          num="10"
          tone="bone"
          eyebrowKey="s10.eye"
          titleKey="s10.title"
          leadKey="s10.lead"
          paragraphs={[{ key: 's10.p1' }, { key: 's10.p2' }]}
        />
        <SocietyFooter />
      </main>
    </>
  )
}
