import Image from 'next/image';
import { FadeInSection } from '@/components/ui/FadeIn';

const safeguards = [
  {
    title: 'Background screening',
    description:
      'Comprehensive criminal background checks for every staff member and volunteer before they work with children or families.',
  },
  {
    title: 'Reference & identity verification',
    description:
      'Professional references and identity confirmation — so the people in our programs are who they say they are.',
  },
  {
    title: 'Mandatory safety training',
    description:
      'Child protection, trauma-informed care, and program-specific safety protocols required before anyone serves.',
  },
  {
    title: 'Ongoing oversight',
    description:
      'Supervision, clear conduct standards, and reporting procedures that keep safety active — not a one-time checkbox.',
  },
];

export function SafetySection() {
  return (
    <FadeInSection
      className="editorial-section tone-deep section-divider"
      aria-labelledby="safety-heading"
    >
      <div className="section-container">
        <div className="border border-border bg-paper overflow-hidden">
          <div className="h-1 bg-accent" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x divide-border">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center h-full">
                <span className="section-label">Your child&apos;s safety</span>
                <h2 id="safety-heading" className="mb-5 max-w-[15ch]">
                  Every person who serves with us is vetted
                </h2>
                <p className="prose-reading-lg mb-8 max-w-md">
                  Families place their trust in us during vulnerable seasons. We honor that with rigorous
                  screening, training, and safeguards — for every staff member and every volunteer.
                </p>
                <p className="font-serif text-xl md:text-2xl text-ink leading-[1.35] border-l-[3px] border-accent pl-5 max-w-sm">
                  No exceptions. No shortcuts. Safety is the foundation of everything we do.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-full lg:h-full min-h-[14rem] bg-paper-alt">
                <Image
                  src="/images/bethanyimages/IMG_1416.webp"
                  alt="Child Arise staff and volunteers in a supervised community setting"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-border">
            {safeguards.map((item, index) => (
              <article
                key={item.title}
                className={`p-6 md:p-8 ${index >= 2 ? 'sm:border-t lg:border-t-0 border-border' : ''}`}
              >
                <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase mb-2">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-lg md:text-xl text-ink mb-2 leading-snug">{item.title}</h3>
                <p className="prose-reading text-[0.9375rem]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
