import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { ImpactSection } from '@/components/sections/ImpactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <ServicesOverview />
      <ImpactSection />
    </>
  );
}
