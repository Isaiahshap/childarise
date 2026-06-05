'use client';

import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { learningCenterSections, resourceSections } from '@/data/resources';
import { FadeInSection } from '@/components/ui/FadeIn';

function ExternalLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <li className="border-t border-border first:border-t-0">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-5 md:p-6 hover:bg-paper-deep/30 transition-colors"
      >
        <span className="font-serif text-lg text-ink group-hover:text-accent transition-colors">
          {title}
          <span className="inline-block ml-1.5 font-sans text-xs text-ink-soft group-hover:text-accent/80">
            ↗
          </span>
        </span>
        <p className="prose-reading text-[0.9375rem] mt-2">{description}</p>
      </a>
    </li>
  );
}

export default function ResourcesPage() {
  return (
    <article>
      <PageHero
        title="Family Resources"
        subtitle="A guide to the broader ecosystem of supports that families impacted by incarceration often need—caregiver assistance, child wellbeing, family connection, reentry, and trauma-informed care."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Resources' },
        ]}
        image="/images/bethanyimages/IMG_7740.webp"
        imageAlt="Families and children supported through community resources"
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Contact our team
          </Link>
          <Link href="/about" className="btn-ghost">
            About Child Arise
          </Link>
        </div>
      </PageHero>

      <FadeInSection className="editorial-section tone-warm section-divider">
        <div className="section-container">
          <div className="border border-border bg-paper">
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
              <div className="lg:col-span-7 p-6 md:p-8 lg:p-10">
                <span className="section-label">How this guide works</span>
                <h2 className="text-2xl md:text-3xl mb-5 leading-snug max-w-xl">
                  Help beyond our programs
                </h2>
                <p className="prose-reading-lg mb-4">
                  Child Arise Tennessee provides direct services to children and families. This
                  page gathers trusted external resources across Tennessee so caregivers, children,
                  and parents can find support when our programs are not the right fit—or when
                  additional help is needed.
                </p>
                <p className="prose-reading text-[0.9375rem] mb-0">
                  Every link below points to a government agency, nonprofit, or research source
                  we trust. They complement our mission without duplicating what we offer.
                </p>
              </div>

              <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 bg-paper-deep/30 flex flex-col justify-center">
                <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase mb-4">
                  Who this is for
                </p>
                <ul className="space-y-3 font-sans text-[0.9375rem] text-ink-muted mb-8">
                  <li className="pl-4 border-l-2 border-accent/25">
                    Caregivers and kinship families raising children
                  </li>
                  <li className="pl-4 border-l-2 border-accent/25">
                    Parents navigating incarceration and reentry
                  </li>
                  <li className="pl-4 border-l-2 border-accent/25">
                    Advocates, educators, and community partners
                  </li>
                </ul>
                <Link href="/services" className="btn-ghost self-start">
                  Explore our direct services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {resourceSections.map((section, index) => (
        <FadeInSection
          key={section.id}
          id={section.id}
          className={`editorial-section section-divider ${index % 2 === 0 ? 'tone-alt' : 'tone-stone'}`}
        >
          <div className="section-container">
            <header className="mb-8 md:mb-10 max-w-3xl">
              <span className="section-label">{section.label}</span>
              <h2 className="mb-4">{section.label}</h2>
              <p className="prose-reading-lg">{section.intro}</p>
            </header>

            <div className="border border-border bg-paper">
              <ul>
                {section.links.map((link) => (
                  <ExternalLink key={link.href} {...link} />
                ))}
              </ul>

              {section.topics && section.topics.length > 0 && (
                <div className="border-t border-border p-5 md:p-6 bg-paper-deep/20">
                  <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase mb-3">
                    Related topics
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 font-sans text-[0.9375rem] text-ink-muted">
                    {section.topics.map((topic) => (
                      <li key={topic} className="pl-4 border-l-2 border-accent/25">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </FadeInSection>
      ))}

      <FadeInSection className="editorial-section tone-warm section-divider">
        <div className="section-container">
          <header className="mb-10 md:mb-12 max-w-3xl">
            <span className="section-label">Learning center</span>
            <h2 className="mb-4">Guides by audience</h2>
            <p className="prose-reading-lg">
              Whether you are a caregiver, a parent, or supporting a child directly, these topic
              areas can help you navigate questions that come up at every stage—from disclosure
              and visits to reunification and resilience.
            </p>
          </header>

          <div className="border border-border bg-paper divide-y divide-border">
            {learningCenterSections.map((group) => (
              <article key={group.title} className="p-6 md:p-8">
                <h3 className="font-serif text-xl text-ink mb-4">{group.title}</h3>
                <ul className="space-y-2 font-sans text-[0.9375rem] text-ink-muted">
                  {group.items.map((item) => (
                    <li key={item} className="pl-4 border-l-2 border-accent/25">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="prose-reading text-[0.9375rem] mt-8 max-w-3xl">
            Have a resource to suggest, or need help finding support?{' '}
            <Link href="/contact" className="text-accent hover:underline">
              Contact our team
            </Link>
            —we are happy to point you in the right direction.
          </p>
        </div>
      </FadeInSection>
    </article>
  );
}
