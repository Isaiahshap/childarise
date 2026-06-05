'use client';

import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { StaffPhotoGrid } from '@/components/about/StaffPhotoGrid';
import { LeadershipTeam } from '@/components/about/LeadershipTeam';
import { FadeInSection } from '@/components/ui/FadeIn';

export default function StaffPage() {
  return (
    <article>
      <PageHero
        title="Our Staff & Board"
        subtitle="Dedicated professionals with lived experience and expertise in child advocacy, trauma-informed care, and community justice."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Our Staff' },
        ]}
        media={<StaffPhotoGrid />}
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <Link href="/about" className="btn-primary">
            About Child Arise
          </Link>
          <Link href="/about/resources" className="btn-ghost">
            Family resources
          </Link>
        </div>
      </PageHero>

      <FadeInSection instant delay={120} className="editorial-section tone-stone section-divider">
        <div className="section-container">
          <header className="mb-10 md:mb-12 max-w-3xl">
            <span className="section-label">Leadership</span>
            <h2 className="mb-4">Our Leadership Team</h2>
            <p className="prose-reading-lg">
              Child Arise Tennessee is guided by a board and staff committed to acceptance,
              access, and advocacy for children with an incarcerated parent.
            </p>
          </header>

          <LeadershipTeam />
        </div>
      </FadeInSection>

      <FadeInSection className="editorial-section tone-alt section-divider">
        <div className="section-container">
          <div className="border border-border bg-paper p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="section-label">Learn more</span>
                <h2 className="mb-4">About Child Arise</h2>
                <p className="prose-reading-lg max-w-2xl">
                  Read about our mission, vision, and the values that shape our work across
                  Tennessee.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link href="/about" className="btn-primary text-center justify-center">
                  About Child Arise
                </Link>
                <Link href="/about/resources" className="btn-ghost text-center justify-center">
                  Family resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </article>
  );
}
