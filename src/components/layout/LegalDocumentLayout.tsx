import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { FadeInSection } from '@/components/ui/FadeIn';

const defaultRelated = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/accessibility', label: 'Accessibility' },
];

interface LegalDocumentLayoutProps {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  effectiveDate: string;
  lastUpdated: string;
  children: React.ReactNode;
  currentPath: string;
}

export function LegalDocumentLayout({
  title,
  subtitle,
  breadcrumbLabel,
  effectiveDate,
  lastUpdated,
  children,
  currentPath,
}: LegalDocumentLayoutProps) {
  const related = defaultRelated.filter((link) => link.href !== currentPath);

  return (
    <article>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: breadcrumbLabel },
        ]}
        meta={
          <p className="font-sans text-sm text-ink-soft mb-6">
            Child Arise Tennessee · 501(c)(3) nonprofit · EIN 33-1723186
          </p>
        }
      />

      <FadeInSection className="editorial-section tone-alt section-divider">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <aside className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="border border-border bg-paper p-6 md:p-8 space-y-6">
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">
                    Document dates
                  </p>
                  <dl className="font-sans text-sm text-ink-muted space-y-3">
                    <div>
                      <dt className="text-ink-soft text-xs uppercase tracking-wider mb-0.5">
                        Effective
                      </dt>
                      <dd>{effectiveDate}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-soft text-xs uppercase tracking-wider mb-0.5">
                        Last updated
                      </dt>
                      <dd>{lastUpdated}</dd>
                    </div>
                  </dl>
                </div>

                <div className="border-t border-border-light pt-6">
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">
                    Related policies
                  </p>
                  <ul className="space-y-2 font-sans text-sm">
                    {related.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-ink-muted hover:text-accent transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border-light pt-6">
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-accent mb-3">
                    Questions
                  </p>
                  <p className="font-sans text-sm text-ink-muted mb-3">
                    Nashville, Tennessee
                  </p>
                  <p className="font-sans text-sm">
                    <a
                      href="mailto:bethany@childarisetn.org"
                      className="text-accent font-semibold hover:underline underline-offset-2"
                    >
                      bethany@childarisetn.org
                    </a>
                  </p>
                  <p className="font-sans text-sm text-ink-muted mt-2">
                    <a href="tel:6154901844" className="hover:text-accent transition-colors">
                      (615) 490-1844
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8 border border-border bg-paper p-6 md:p-10 lg:p-12 legal-prose">
              {children}
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="tone-accent section-divider">
        <div className="section-container py-12 md:py-16">
          <div className="max-w-2xl">
            <span className="section-label-light">Contact</span>
            <h2 className="text-paper text-xl md:text-2xl mb-3">Questions about this document?</h2>
            <p className="text-white/85 text-base leading-relaxed mb-5">
              We are happy to clarify any part of our policies. Reach out during business hours,
              Monday through Friday, 9 AM – 5 PM CST.
            </p>
            <Link href="/contact" className="btn-primary-light">
              Contact our team
            </Link>
          </div>
        </div>
      </FadeInSection>
    </article>
  );
}
