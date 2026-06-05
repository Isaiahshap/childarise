'use client';

import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { FadeInSection } from '@/components/ui/FadeIn';
import { SafetySection } from '@/components/sections/SafetySection';

const missionFocus = [
  'Trauma-informed mental health support',
  'Educational advocacy and tutoring',
  'Family connection facilitation',
  'Caregiver empowerment programs',
];

const values = [
  {
    title: 'Compassionate Care',
    description: 'Every child deserves love, understanding, and support regardless of their circumstances.',
  },
  {
    title: 'Community-Centered',
    description: 'We believe in the power of community to heal, support, and uplift families in need.',
  },
  {
    title: 'Trauma-Informed',
    description: 'All our services are designed with deep understanding of trauma and its impact on children.',
  },
  {
    title: 'Empowerment',
    description: 'We focus on building resilience, self-esteem, and life skills that last a lifetime.',
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in our programs, partnerships, and outcomes.',
  },
  {
    title: 'Transparency',
    description: 'We operate with integrity, accountability, and openness in all our work.',
  },
];

export default function AboutPage() {
  return (
    <article>
      <PageHero
        title="About Child Arise Tennessee"
        subtitle="Fostering hope, healing, and opportunity for children and families affected by parental incarceration across Tennessee."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
        image="/images/about.webp"
        imageAlt="Children and families supported by Child Arise Tennessee"
        meta={
          <p className="font-sans text-sm text-ink-soft mb-6">
            Registered 501(c)(3) nonprofit organization · EIN 33-1723186
          </p>
        }
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <Link href="/about/staff" className="btn-primary">
            Meet our staff
          </Link>
          <Link href="/about/resources" className="btn-ghost">
            Family resources
          </Link>
        </div>
      </PageHero>

      <FadeInSection className="editorial-section tone-warm section-divider">
        <div className="section-container">
          <div className="border border-border bg-paper">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
              <div className="p-6 md:p-8 lg:p-10">
                <span className="section-label">Our Mission</span>
                <p className="prose-reading-lg mb-6">
                  To provide comprehensive wraparound support to children and families affected by
                  parental incarceration—fostering stability, resilience, and opportunity through
                  targeted services, community engagement, and trauma-informed care.
                </p>
                <ul className="space-y-3 font-sans text-[0.9375rem] text-ink-muted">
                  {missionFocus.map((item) => (
                    <li key={item} className="pl-4 border-l-2 border-accent/25">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 md:p-8 lg:p-10 bg-paper-deep/40 flex flex-col justify-center">
                <span className="section-label">Our Vision</span>
                <p className="prose-reading-lg mb-6">
                  A Tennessee where every child affected by parental incarceration has access to
                  the support, resources, and opportunities they need to thrive—regardless of
                  their family&apos;s circumstances.
                </p>
                <blockquote className="pull-quote font-serif text-lg md:text-xl text-ink leading-relaxed">
                  &ldquo;We envision communities where these children are not defined by their parents&apos;
                  situation, but empowered to create their own bright futures.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="editorial-section tone-alt section-divider">
        <div className="section-container">
          <header className="mb-10 md:mb-12 max-w-3xl">
            <span className="section-label">What guides us</span>
            <h2 className="mb-4">Our Core Values</h2>
            <p className="prose-reading-lg">
              These principles guide every decision we make and every service we provide.
            </p>
          </header>

          <div className="border border-border bg-paper">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className={`p-6 md:p-8 ${index >= 3 ? 'border-t border-border' : ''}`}
                >
                  <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-serif text-lg md:text-xl text-ink mb-2 leading-snug">
                    {value.title}
                  </h3>
                  <p className="prose-reading text-[0.9375rem]">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      <SafetySection />

      <FadeInSection className="editorial-section tone-stone section-divider">
        <div className="section-container">
          <div className="border border-border bg-paper p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="section-label">Our team</span>
                <h2 className="mb-4">Leadership &amp; board</h2>
                <p className="prose-reading-lg max-w-2xl">
                  Child Arise is led by professionals with lived experience and deep expertise in
                  child advocacy, trauma-informed care, and community justice work.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link href="/about/staff" className="btn-primary text-center justify-center">
                  Meet our staff
                </Link>
                <Link
                  href="/about/resources"
                  className="btn-ghost text-center justify-center"
                >
                  Family resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="tone-accent section-divider">
        <div className="section-container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="section-label-light">Join us</span>
              <h2 className="text-paper mb-4 max-w-[18ch]">
                Help us support children and families statewide
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
                Whether through volunteering, donating, or partnering with us, there are meaningful ways
                to strengthen families affected by parental incarceration across Tennessee.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href="/get-involved" className="btn-primary-light text-center justify-center">
                Get involved
              </Link>
              <Link href="/donate" className="btn-ghost-light text-center justify-center">
                Make a donation
              </Link>
              <Link
                href="/contact"
                className="font-sans text-sm font-semibold text-white/70 hover:text-white transition-colors text-center py-2"
              >
                Contact our team →
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
    </article>
  );
}
