'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/home/HeroSection'
import VideoSection from '@/components/home/VideoSection'
import DesignerTypesBanner from '@/components/home/DesignerTypesBanner'
import BrokenSection from '@/components/home/BrokenSection'
import StatsSection from '@/components/home/StatsSection'
import GrowthJourneySection from '@/components/home/GrowthJourneySection'
import AboutSection from '@/components/home/AboutSection'
import FAQSection from '@/components/home/FAQSection'
import BlogsSection from '@/components/home/BlogsSection'
import { ProgramRecommendationProvider } from '@/contexts/ProgramRecommendationContext'

export default function Home() {
  return (
    <ProgramRecommendationProvider>
      <main className="min-h-screen bg-white">
        <Navigation />
        <HeroSection />
        <VideoSection />
        <DesignerTypesBanner />
        <BrokenSection />
        <StatsSection />
        <GrowthJourneySection />
        <AboutSection />
        <FAQSection />
        <BlogsSection />
        <Footer />
      </main>
    </ProgramRecommendationProvider>
  )
}
