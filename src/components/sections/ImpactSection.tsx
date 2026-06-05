import { FadeInSection } from '@/components/ui/FadeIn';

const featuredStat = {
  number: '144,000',
  unit: 'children in Tennessee',
  description:
    'Approximately 10% of minors in Tennessee have at least one parent incarcerated. Child Arise Tennessee was founded to address the collateral consequences these children face — shame, grief, instability, and educational disruption.',
  source: {
    text: 'Annie E. Casey Foundation',
    url: 'https://www.aecf.org/resources/a-shared-sentence',
  },
};

const supportingStats = [
  {
    number: '#3',
    label: 'National ranking for justice-impacted youth',
    description: 'Tennessee tied for third in the nation.',
    source: { text: "Governor's Early Literacy Foundation", url: 'https://governorsfoundation.org/' },
  },
  {
    number: '7%',
    label: 'Of American children',
    description: 'Experience parental incarceration during childhood.',
    source: { text: 'Center on Juvenile and Criminal Justice', url: 'https://www.cjcj.org/' },
  },
  {
    number: '<31%',
    label: 'Receive family visits',
    description: 'Less than one-third of people in state prisons receive visits from family or friends.',
    source: { text: 'Prison Policy Initiative', url: 'https://www.prisonpolicy.org/reports/prisonvisits.html' },
  },
  {
    number: '63%',
    label: 'Held far from home',
    description: 'Of state prisoners are more than 100 miles from their communities.',
    source: { text: 'Prison Policy Initiative', url: 'https://www.prisonpolicy.org/reports/prisonvisits.html' },
  },
];

function StatSource({ text, url }: { text: string; url: string }) {
  return (
    <p className="font-sans text-xs text-ink-soft mt-3">
      <a href={url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">
        {text}
      </a>
    </p>
  );
}

export function ImpactSection() {
  return (
    <FadeInSection className="section-divider tone-stone editorial-section" aria-labelledby="impact-heading">
      <div className="section-container">
        <header className="mb-10 md:mb-12 max-w-3xl">
          <span className="section-label">Research & Context</span>
          <h2 id="impact-heading" className="mb-4">
            The need in our community
          </h2>
          <p className="prose-reading-lg">
            Understanding the scope of parental incarceration helps us serve children and families more effectively across Tennessee and the nation.
          </p>
        </header>

        <div className="border border-border bg-paper">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-6 md:p-8 lg:p-10 border-b border-border bg-paper-deep/40">
            <div className="lg:col-span-4">
              <p className="display-stat text-accent mb-2">{featuredStat.number}</p>
              <p className="font-serif text-xl md:text-2xl text-ink">{featuredStat.unit}</p>
            </div>
            <div className="lg:col-span-8 flex flex-col justify-center">
              <p className="prose-reading mb-3">{featuredStat.description}</p>
              <p className="font-sans text-sm text-ink-soft">
                Source:{' '}
                <a
                  href={featuredStat.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-accent"
                >
                  {featuredStat.source.text}
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {supportingStats.map((stat) => (
              <div key={stat.label} className="p-6 md:p-8">
                <p className="font-serif text-4xl md:text-[2.75rem] leading-none tracking-[-0.02em] text-accent mb-2 tabular-nums">
                  {stat.number}
                </p>
                <p className="font-sans text-base font-semibold text-ink mb-1.5">{stat.label}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{stat.description}</p>
                <StatSource text={stat.source.text} url={stat.source.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
