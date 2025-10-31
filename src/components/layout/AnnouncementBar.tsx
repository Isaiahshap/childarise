'use client';

import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function AnnouncementBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled more than 30px
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!isScrolled && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 right-0 bg-gradient-to-r from-fern to-earth-green text-white z-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 py-2">
              {/* Icon */}
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 hidden sm:block" />
              
              {/* Message */}
              <div className="flex flex-row items-center gap-1 sm:gap-2 text-center whitespace-nowrap">
                <span className="font-semibold text-[10px] sm:text-xs md:text-sm">
                  🎉 Child Arise TN is now a 501(c)(3)!
                </span>
                <Link 
                  href="/donate"
                  className="text-[10px] sm:text-xs md:text-sm text-white hover:text-sunlit-amber transition-colors font-semibold no-underline"
                >
                  Donate Now →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

