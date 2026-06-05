'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function AnnouncementBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isScrolled) return null;

  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 bg-paper-deep z-50 border-b border-border">
      <div className="section-container">
        <p className="py-2 text-center text-xs font-sans text-ink-soft tracking-wide">
          Registered 501(c)(3) nonprofit · EIN 33-1723186 · Nashville, Tennessee
        </p>
      </div>
    </div>
  );
}
