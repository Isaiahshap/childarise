'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-clay-beige text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
          {/* Brand and Quick Links */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 w-full">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/images/logo.png"
                alt="Child Arise Tennessee Logo"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
              <div>
                <div className="text-xl font-lato font-bold text-black">
                  Child Arise Tennessee
                </div>
                <div className="text-sm text-black/70 font-medium">
                  Nashville, Tennessee
                </div>
                <div className="text-xs text-fern font-semibold mt-1">
                  501(c)(3) Nonprofit Organization
                </div>
              </div>
            </div>
            <nav aria-label="Footer" className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black/80 hover:text-earth-green transition-colors duration-200 text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/donate"
                className="px-7 py-3 bg-fern hover:bg-fern-dark text-white font-semibold rounded-lg shadow-lg text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fern focus:ring-offset-2"
                aria-label="Donate to Child Arise Tennessee"
              >
                Donate
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
            <span className="text-black/60">© {new Date().getFullYear()} Child Arise Tennessee. All rights reserved.</span>
            <Link href="/terms" className="text-black/60 hover:text-earth-green transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-black/60 hover:text-earth-green transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="text-black/60 hover:text-earth-green transition-colors">Accessibility</Link>
          </div>
          <a 
            href="https://www.yeshaya.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black/60 hover:text-earth-green transition-colors inline-flex items-center gap-1"
          >
            Made with ❤️ by yeshaya.dev
          </a>
        </div>
      </div>
    </footer>
  );
} 