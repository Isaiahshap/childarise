'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const aboutLinks = [
  { name: 'About Child Arise', href: '/about' },
  { name: 'Our Staff', href: '/about/staff' },
  { name: 'Resources', href: '/about/resources' },
];

const navItems = [
  { name: 'Services', href: '/services' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const isAboutActive =
    pathname === '/about' ||
    pathname.startsWith('/about/staff') ||
    pathname.startsWith('/about/resources');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setAboutOpen(false);
    setMobileAboutOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed w-full z-40 border-b border-border transition-colors duration-150 ${
        isScrolled ? 'top-0 bg-paper/95 backdrop-blur-sm' : 'top-0 md:top-8 bg-paper'
      }`}
    >
      <div className="section-container">
        <div className="flex justify-between items-center h-[4.5rem] md:h-24">
          <Link href="/" className="flex items-center gap-3 md:gap-4 min-w-0">
            <Image
              src="/images/logo.png"
              alt="Child Arise Tennessee"
              width={180}
              height={54}
              className="h-9 md:h-10 w-auto flex-shrink-0"
              priority
            />
            <div className="md:hidden min-w-0">
              <div className="font-serif text-sm text-ink leading-tight">
                Child Arise Tennessee
              </div>
            </div>
            <div className="hidden md:block min-w-0 border-l border-border pl-4">
              <div className="font-serif text-base text-ink leading-tight truncate">
                Child Arise Tennessee
              </div>
              <div className="font-sans text-[0.6875rem] uppercase tracking-wider text-ink-soft mt-0.5">
                Nashville, Tennessee
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-stretch gap-10" aria-label="Main">
            <div
              className="relative self-stretch flex items-center"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 font-sans text-[0.9375rem] transition-colors ${
                  isAboutActive ? 'text-accent' : 'text-ink-muted hover:text-accent'
                } ${aboutOpen && !isAboutActive ? 'text-accent' : ''}`}
                aria-haspopup="true"
                aria-expanded={aboutOpen}
              >
                About
                <ChevronDown
                  className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                    aboutOpen ? 'rotate-180' : ''
                  }`}
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`absolute left-0 top-full pt-7 min-w-[14rem] transition-opacity duration-200 ${
                  aboutOpen
                    ? 'visible opacity-100 pointer-events-auto'
                    : 'invisible opacity-0 pointer-events-none'
                }`}
              >
                <div className="border border-border bg-paper shadow-sm py-1">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2.5 font-sans text-sm transition-colors ${
                        pathname === link.href
                          ? 'text-accent bg-paper-deep/40'
                          : 'text-ink-muted hover:text-accent hover:bg-paper-deep/30'
                      }`}
                      onClick={() => setAboutOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`self-center font-sans text-[0.9375rem] transition-colors ${
                  pathname === item.href
                    ? 'text-accent'
                    : 'text-ink-muted hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/donate" className="btn-donate ml-2 self-center">
              Donate
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden font-sans text-sm text-ink-muted px-2 py-1"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          className="lg:hidden border-t border-border bg-paper animate-fade-in"
          aria-label="Mobile"
        >
          <div className="section-container py-6 space-y-1">
            <div>
              <button
                type="button"
                className={`flex w-full items-center justify-between py-3 font-sans border-b border-border-light ${
                  isAboutActive ? 'text-accent' : 'text-ink-muted'
                }`}
                aria-expanded={mobileAboutOpen}
                onClick={() => setMobileAboutOpen((open) => !open)}
              >
                About
                <span className="text-xs" aria-hidden="true">
                  {mobileAboutOpen ? '−' : '+'}
                </span>
              </button>
              {mobileAboutOpen && (
                <div className="pb-2 border-b border-border-light animate-fade-in">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block py-2.5 pl-4 font-sans text-sm ${
                        pathname === link.href ? 'text-accent' : 'text-ink-muted hover:text-accent'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 font-sans border-b border-border-light last:border-0 ${
                  pathname === item.href ? 'text-accent' : 'text-ink-muted hover:text-accent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/donate" className="btn-donate" onClick={() => setIsOpen(false)}>
                Donate
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
