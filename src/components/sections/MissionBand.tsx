import { FadeInSection } from '@/components/ui/FadeIn';

export function MissionBand() {
  return (
    <FadeInSection className="tone-sage section-divider">
      <div className="section-container py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-center">
          <div className="lg:col-span-4">
            <span className="section-label">Who We Serve</span>
            <p className="font-sans text-sm font-semibold uppercase tracking-wider text-ink-soft">
              Statewide · Tennessee
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="font-serif text-xl md:text-2xl leading-[1.4] text-ink">
              We exist for the more than 140,000 Tennessee children who have experienced parental incarceration — offering acceptance, access, and advocacy when they need it most.
            </p>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
