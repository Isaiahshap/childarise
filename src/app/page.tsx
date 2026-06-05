import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { MissionBand } from '@/components/sections/MissionBand';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { SafetySection } from '@/components/sections/SafetySection';
import { ImpactSection } from '@/components/sections/ImpactSection';

export default function HomePage() {
  return (
    <article>
      <HeroSection />
      <AboutSection />
      <MissionBand />
      <ServicesOverview />
      <QuoteSection />
      <ImpactSection />
      <SafetySection />
    </article>
  );
}
