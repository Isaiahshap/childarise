'use client';

import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { useEffect } from 'react';
import { FadeInSection } from '@/components/ui/FadeIn';

const impactAreas = [
  {
    number: '01',
    title: 'Mental health support',
    description:
      'Trauma-informed counseling referrals, group therapeutic supports, and emotional care coordination through trusted community partners.',
  },
  {
    number: '02',
    title: 'Family connections',
    description:
      'Support for meaningful contact between incarcerated parents and their children — including visitation coordination and communication guidance.',
  },
  {
    number: '03',
    title: 'Educational support',
    description:
      'Academic advocacy, tutoring coordination, and college readiness resources for children navigating disrupted educational pathways.',
  },
  {
    number: '04',
    title: 'Crisis intervention',
    description:
      'Emergency stabilization and resource navigation when families face acute need.',
  },
];

export default function DonatePage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/widget.js';
    script.setAttribute('paypalExpress', 'true');
    script.async = true;
    document.head.appendChild(script);
    return () => {
      const existingScript = document.querySelector('script[src="https://donorbox.org/widget.js"]');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  return (
    <article>
      <PageHero
        title="Support our mission"
        subtitle="Every gift helps Tennessee children and caregivers affected by parental incarceration access counseling, mentorship, and community — because no child should carry that weight alone."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Donate' },
        ]}
        image="/images/therapy.webp"
        imageAlt="Counseling and support for children and families"
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <button
            type="button"
            className="btn-primary"
            onClick={() => document.getElementById('donate-widget')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Give today
          </button>
          <Link href="/get-involved" className="btn-ghost">
            Get involved
          </Link>
        </div>
      </PageHero>

      <FadeInSection className="tone-sage section-divider">
        <div className="section-container py-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-4">
              <span className="section-label">Your impact</span>
            </div>
            <div className="lg:col-span-8">
              <p className="pull-quote font-serif text-xl md:text-2xl leading-[1.45] text-ink">
                More than 140,000 Tennessee children have experienced parental incarceration. Your
                tax-deductible gift helps Child Arise Tennessee connect families to care, belonging,
                and lasting support.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="editorial-section tone-alt section-divider">
        <div className="section-container">
          <header className="mb-10 md:mb-12 max-w-3xl">
            <span className="section-label">Allocation</span>
            <h2 className="mb-4">Where your gift goes</h2>
            <p className="prose-reading-lg">
              Contributions fund direct program support and community partnerships — not overhead
              for its own sake. We grow thoughtfully, investing where children and caregivers need
              it most.
            </p>
          </header>

          <div className="border border-border bg-paper divide-y divide-border">
            {impactAreas.map((area) => (
              <article key={area.number} className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 md:gap-8 p-6 md:p-8">
                <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase md:pt-1">
                  {area.number}
                </p>
                <div>
                  <h3 className="font-serif text-lg md:text-xl text-ink mb-2 leading-snug">
                    {area.title}
                  </h3>
                  <p className="prose-reading text-[0.9375rem]">{area.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection id="donate-widget" className="editorial-section tone-warm section-divider">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="section-label">Donation</span>
              <h2 className="mb-4">Make a secure contribution</h2>
              <p className="prose-reading-lg mb-6">
                Gifts are processed securely through Donorbox. You will receive an email receipt
                for your tax records.
              </p>

              <div className="border border-border bg-paper p-5 md:p-6 mb-6 space-y-4">
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-ink-soft mb-1">
                    Tax status
                  </p>
                  <p className="font-sans text-sm text-ink-muted">501(c)(3) tax-exempt organization</p>
                </div>
                <div className="border-t border-border-light pt-4">
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-ink-soft mb-1">
                    Federal EIN
                  </p>
                  <p className="font-sans text-sm text-ink-muted">33-1723186</p>
                </div>
                <div className="border-t border-border-light pt-4">
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-ink-soft mb-1">
                    Service area
                  </p>
                  <p className="font-sans text-sm text-ink-muted">
                    Nashville and communities across Tennessee
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm text-ink-soft">
                Prefer to give another way?{' '}
                <Link href="/contact" className="text-accent font-semibold underline underline-offset-2">
                  Contact us directly
                </Link>
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-7">
              <div className="border border-border bg-paper p-4 md:p-5 w-full max-w-[26rem]">
                <iframe
                  src="https://donorbox.org/embed/child-arise-tennessee?default_interval=m"
                  name="donorbox"
                  seamless
                  frameBorder="0"
                  scrolling="no"
                  height="420px"
                  width="100%"
                  style={{ border: 'none', display: 'block', maxWidth: '100%' }}
                  allow="payment"
                  title="Child Arise Tennessee Donation Form"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="tone-accent section-divider">
        <div className="section-container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="section-label-light">Beyond giving</span>
              <h2 className="text-paper mb-4 max-w-[20ch]">
                There are many ways to stand with these families
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
                Financial gifts sustain our work — and so do volunteers, advocates, and community
                partners. However you show up, you help children feel seen and supported.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href="/get-involved" className="btn-primary-light text-center justify-center">
                Get involved
              </Link>
              <Link href="/contact" className="btn-ghost-light text-center justify-center">
                Contact our team
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
    </article>
  );
}
