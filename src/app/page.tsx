import { HeroSection } from '@/components/sections/HeroSection'
import { ChaosIntroSection } from '@/components/sections/ChaosIntroSection'
import { BrainTabsSection } from '@/components/sections/BrainTabsSection'
import { StorySection } from '@/components/sections/StorySection'
import { RandomFactSection } from '@/components/sections/RandomFactSection'
import { DidntWorkSection } from '@/components/sections/DidntWorkSection'
import { QuestionsSection } from '@/components/sections/QuestionsSection'
import { MindChangesSection } from '@/components/sections/MindChangesSection'
import { SportsSection } from '@/components/sections/SportsSection'
import { GitHubSection } from '@/components/sections/GitHubSection'
import { LearningSection } from '@/components/sections/LearningSection'
import { NowSection } from '@/components/sections/NowSection'
import { ZeptoSection } from '@/components/sections/ZeptoSection'
import { IdeasGraveyardSection } from '@/components/sections/IdeasGraveyardSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Divider } from '@/components/ui/Divider'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Divider />
      <ChaosIntroSection />
      <Divider />
      <BrainTabsSection />
      <Divider />
      <StorySection />
      <Divider />
      <RandomFactSection />
      <Divider />
      <DidntWorkSection />
      <Divider />
      <QuestionsSection />
      <Divider />
      <MindChangesSection />
      <Divider />
      <SportsSection />
      <Divider />
      <GitHubSection />
      <Divider />
      <LearningSection />
      <Divider />
      <NowSection />
      <Divider />
      <ZeptoSection />
      <Divider />
      <IdeasGraveyardSection />
      <Divider />
      <ContactSection />
    </>
  )
}
