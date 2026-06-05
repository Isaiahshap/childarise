import Image from 'next/image';
import Link from 'next/link';
import { FadeInSection } from '@/components/ui/FadeIn';

const programs = [
  {
    number: '01',
    title: 'Emotional & Mental Health Support',
    description:
      'We connect children and families to trusted mental health resources through schools and community partners — including counseling referrals, group therapeutic supports, school collaboration, and crisis coordination.',
    image: '/images/bethanyimages/IMG_0273.webp',
    featured: true,
  },
  {
    number: '02',
    title: 'Mentorship & Life Skills',
    description:
      'Consistent relationships and positive role models through mentorship, resilience workshops, and youth leadership development.',
  },
  {
    number: '03',
    title: 'Academic & College Support',
    description:
      'Advocacy and coordination helping families navigate educational systems and access resources for long-term success.',
  },
  {
    number: '04',
    title: 'Family Connection Services',
    description:
      'Strategies to help families stay connected — visitation support, transportation, and communication guidance.',
  },
];

export function ServicesOverview() {
  const [featured, ...rest] = programs;

  return (
    <FadeInSection className="section-divider tone-alt editorial-section" aria-labelledby="programs-heading">
      <div className="section-container">
        <header className="mb-10 md:mb-12 max-w-3xl">
          <span className="section-label">Programs</span>
          <h2 id="programs-heading" className="mb-4">
            Comprehensive support for children and families
          </h2>
          <p className="prose-reading-lg">
            Six core service areas — from emotional health to family connection — delivered through trauma-informed care and community partnership across Tennessee.
          </p>
        </header>

        <div className="border border-border bg-paper">
          <article className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
            <div className="photo-wrap relative aspect-[4/3] lg:aspect-auto lg:min-h-[18rem]">
              <Image
                src={featured.image!}
                alt={featured.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase mb-2">
                {featured.number}
              </p>
              <h3 className="text-xl md:text-2xl mb-3 leading-snug">{featured.title}</h3>
              <p className="prose-reading">{featured.description}</p>
            </div>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {rest.map((program) => (
              <article key={program.number} className="p-6 md:p-8">
                <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase mb-2">
                  {program.number}
                </p>
                <h3 className="font-serif text-lg md:text-xl text-ink mb-2 leading-snug">
                  {program.title}
                </h3>
                <p className="prose-reading text-[0.9375rem]">{program.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-sans text-sm text-ink-soft">
            Plus caregiver support and enrichment programs.
          </p>
          <Link href="/services" className="btn-ghost shrink-0">
            Explore all programs
          </Link>
        </div>
      </div>
    </FadeInSection>
  );
}
