import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { ImpactSection } from '@/components/sections/ImpactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ImpactSection />
    </>
  );
}
