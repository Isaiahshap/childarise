'use client';

import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { FadeInSection } from '@/components/ui/FadeIn';

const involvementAreas = [
  {
    number: '01',
    title: 'Educate yourself',
    description:
      "Understanding Tennessee's incarceration system and its impact on children is the foundation for meaningful advocacy. Informed supporters help reduce stigma and push for policies that keep families connected.",
    items: [
      'Review Tennessee Department of Correction statistics and policies',
      'Read research on children affected by parental incarceration',
      'Learn trauma-informed approaches to supporting children',
    ],
  },
  {
    number: '02',
    title: 'Support your community',
    description:
      'Families affected by incarceration live in every neighborhood. Practical, steady help — groceries, rides, mentorship, a listening ear — often matters as much as formal programs.',
    items: [
      'Offer practical assistance to caregivers and families in need',
      'Connect families with local resources and support services',
      'Advocate for policy changes that support children and families',
    ],
  },
  {
    number: '03',
    title: 'Partner with Child Arise',
    description:
      'Join our mission to provide counseling, mentorship, and community connection for Tennessee children and caregivers impacted by parental incarceration.',
    items: [
      'Make a financial contribution to fund our programs',
      'Volunteer your time and professional skills',
      'Partner with us as a school, church, or community organization',
    ],
  },
];

const actions = [
  {
    label: 'Give',
    title: 'Fund programs that last',
    description:
      'Tax-deductible gifts support counseling referrals, mentorship, family connection, and school partnerships across Nashville and Tennessee.',
    href: '/donate',
    cta: 'Make a donation',
    primary: true,
  },
  {
    label: 'Volunteer',
    title: 'Share your time and skills',
    description:
      'From event support to professional expertise, volunteers strengthen our capacity to serve children and caregivers.',
    href: '/contact',
    cta: 'Ask about volunteering',
    primary: false,
  },
  {
    label: 'Partner',
    title: 'Collaborate with us',
    description:
      'Schools, faith communities, and nonprofits can help us reach families who need acceptance, access, and advocacy.',
    href: '/contact',
    cta: 'Start a conversation',
    primary: false,
  },
];

export default function GetInvolvedPage() {
  return (
    <article>
      <PageHero
        title="Get involved"
        subtitle="Children affected by parental incarceration deserve neighbors, advocates, and partners who show up. However you contribute — learning, giving, volunteering, or organizing — you strengthen families across Tennessee."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Get Involved' },
        ]}
        meta={
          <p className="font-sans text-sm text-ink-soft mb-6">
            501(c)(3) nonprofit · Serving Nashville and communities statewide
          </p>
        }
        image="/images/bethanyimages/IMG_1094.webp"
        imageAlt="Community members getting involved with Child Arise Tennessee"
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <Link href="/donate" className="btn-primary">
            Support our mission
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact our team
          </Link>
        </div>
      </PageHero>

      <FadeInSection className="tone-sage section-divider">
        <div className="section-container py-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="section-label">Why it matters</span>
              <p className="font-sans text-sm font-semibold uppercase tracking-wider text-ink-soft mt-1">
                140,000+ children in Tennessee
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="pull-quote font-serif text-xl md:text-2xl leading-[1.45] text-ink">
                Community involvement turns awareness into belonging — and belonging into healing.
                You do not need to be an expert to make a meaningful difference.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="editorial-section tone-alt section-divider" aria-labelledby="ways-to-help-heading">
        <div className="section-container">
          <header className="mb-10 md:mb-12 max-w-3xl">
            <span className="section-label">Three pathways</span>
            <h2 id="ways-to-help-heading" className="mb-4">
              Find the role that fits you
            </h2>
            <p className="prose-reading-lg">
              Start with one pathway below — learn, serve locally, or partner directly with
              Child Arise Tennessee.
            </p>
          </header>

          <div className="border border-border bg-paper divide-y divide-border">
            {involvementAreas.map((area) => (
              <article
                key={area.number}
                className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 md:gap-8 p-6 md:p-8"
              >
                <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase md:pt-1">
                  {area.number}
                </p>
                <div>
                  <h3 className="text-xl md:text-2xl mb-3 leading-snug">{area.title}</h3>
                  <p className="prose-reading mb-5">{area.description}</p>
                  <ul className="space-y-2.5 font-sans text-[0.9375rem] text-ink-muted">
                    {area.items.map((item) => (
                      <li key={item} className="pl-4 border-l-2 border-accent/25">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="editorial-section tone-warm section-divider">
        <div className="section-container">
          <header className="mb-10 max-w-2xl">
            <span className="section-label">Take action</span>
            <h2 className="mb-4">Ready to move from intention to impact?</h2>
            <p className="prose-reading-lg">
              Choose one step today. Our team can help you find the right fit — whether you
              are giving, volunteering, or exploring a partnership.
            </p>
          </header>

          <div className="border border-border bg-paper grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {actions.map((action) => (
              <div key={action.label} className="p-6 md:p-8 flex flex-col">
                <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase mb-3">
                  {action.label}
                </p>
                <h3 className="font-serif text-xl text-ink mb-3 leading-snug">{action.title}</h3>
                <p className="prose-reading text-[0.9375rem] flex-1 mb-6">{action.description}</p>
                <Link
                  href={action.href}
                  className={action.primary ? 'btn-primary w-fit' : 'btn-ghost w-fit'}
                >
                  {action.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="tone-accent section-divider">
        <div className="section-container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="section-label-light">Join us</span>
              <h2 className="text-paper mb-4 max-w-[20ch]">
                Every child deserves to feel seen and supported
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
                Child Arise Tennessee connects children and caregivers to counseling, mentorship,
                and lasting community. However you show up, you help families across Tennessee
                build resilience and hope.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href="/donate" className="btn-primary-light text-center justify-center">
                Donate today
              </Link>
              <Link href="/contact" className="btn-ghost-light text-center justify-center">
                Get in touch
              </Link>
              <Link
                href="/services"
                className="font-sans text-sm font-semibold text-white/70 hover:text-white transition-colors text-center py-2"
              >
                Explore our programs →
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
    </article>
  );
}
