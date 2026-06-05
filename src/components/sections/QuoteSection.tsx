import { FadeInSection } from '@/components/ui/FadeIn';

export function QuoteSection() {
  return (
    <FadeInSection className="tone-accent section-divider">
      <div className="section-container py-12 md:py-16">
        <div className="max-w-3xl">
          <span className="section-label-light">Perspective</span>
          <blockquote>
            <p className="font-serif text-xl md:text-2xl leading-[1.4] text-white italic mb-4">
              &ldquo;We need to stop just pulling people out of the river. We need to go upstream and find out why they&apos;re falling in.&rdquo;
            </p>
            <footer className="font-sans text-sm font-semibold uppercase tracking-wider text-white/60 not-italic">
              — Desmond Tutu
            </footer>
          </blockquote>
        </div>
      </div>
    </FadeInSection>
  );
}
