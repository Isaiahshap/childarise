import Link from 'next/link';
import Image from 'next/image';

const exploreLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Child Arise', href: '/about' },
  { name: 'Our Staff', href: '/about/staff' },
  { name: 'Resources', href: '/about/resources' },
  { name: 'Our Services', href: '/services' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
  { name: 'Donate', href: '/donate' },
];

const resourceLinks = [
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Accessibility', href: '/accessibility' },
];

export function Footer() {
  return (
    <footer>
      <div className="bg-accent text-paper border-t border-accent-muted">
        <div className="section-container py-14 md:py-16">
          <div className="pb-10 mb-10 border-b border-white/15">
            <p className="font-serif text-xl md:text-2xl text-paper leading-relaxed max-w-3xl">
              Supporting children and families affected by parental incarceration through counseling, mentorship, and community connection.
            </p>
            <p className="font-sans text-sm text-white/60 mt-4">
              Serving families across Tennessee · Nashville headquarters · 501(c)(3) · EIN 33-1723186
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-4 sm:col-span-2">
              <Image
                src="/images/logo.png"
                alt="Child Arise Tennessee"
                width={160}
                height={48}
                className="h-11 w-auto mb-4 brightness-0 invert opacity-90"
              />
              <p className="font-serif text-xl text-paper mb-1">Child Arise Tennessee</p>
              <p className="font-sans text-sm text-white/70 mb-5">Nashville, Tennessee</p>

              <div className="pt-5 border-t border-white/15">
                <h2 className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-3">
                  Contact
                </h2>
                <address className="not-italic font-sans text-[0.9375rem] text-white/90 space-y-1.5 leading-relaxed">
                  <p>
                    <a href="mailto:bethany@childarisetn.org" className="text-white hover:text-paper transition-colors">
                      bethany@childarisetn.org
                    </a>
                  </p>
                  <p>
                    <a href="tel:6154901844" className="text-white hover:text-paper transition-colors">
                      (615) 490-1844
                    </a>
                  </p>
                  <p className="text-white/60 text-sm">Mon – Fri, 9 AM – 5 PM CST</p>
                </address>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-5">
              <h2 className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-4">
                Explore
              </h2>
              <ul className="space-y-2.5 font-sans text-[0.9375rem]">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/90 hover:text-paper transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 lg:col-start-7">
              <h2 className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-4">
                Resources
              </h2>
              <ul className="space-y-2.5 font-sans text-[0.9375rem]">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/90 hover:text-paper transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <h2 className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-3">
                Support Our Work
              </h2>
              <p className="font-sans text-sm text-white/75 mb-5 leading-relaxed">
                Tax-deductible contributions fund counseling, mentorship, and community programs for children and caregivers statewide.
              </p>
              <Link href="/donate" className="btn-primary-light">
                Make a donation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-paper-warm border-t border-border text-ink-soft">
        <div className="section-container py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 font-sans text-xs">
          <p>© {new Date().getFullYear()} Child Arise Tennessee. All rights reserved.</p>
          <a
            href="https://www.causehouse.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft hover:text-accent transition-colors"
          >
            Website by CauseHouse
          </a>
        </div>
      </div>
    </footer>
  );
}
