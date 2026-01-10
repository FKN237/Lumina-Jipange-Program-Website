import { Navigation } from "@/components/navigation"
import { BackgroundElements } from "@/components/background-elements"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { ProblemSection } from "@/components/problem-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { WhoWeServeSection } from "@/components/who-we-serve-section"
import { InclusiveApproachSection } from "@/components/inclusive-approach-section"
import { ProgramSection } from "@/components/program-section"
import { PersonalisationSection } from "@/components/personalisation-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { ProofSection } from "@/components/proof-section"
import { TeamSection } from "@/components/team-section"
import { JourneySection } from "@/components/journey-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <BackgroundElements />
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ProblemSection />
      <WhatWeDoSection />
      <WhoWeServeSection />
      <InclusiveApproachSection />
      <ProgramSection />
      <PersonalisationSection />
      <OutcomesSection />
      <ProofSection />
      <TeamSection />
      <JourneySection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
