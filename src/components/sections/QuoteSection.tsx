'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sunlit-amber/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-earth-green/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-lato italic text-moss-brown leading-relaxed mb-6">
            <p className="mb-4">
              We need to stop
              <br />
              just pulling people
              <br />
              out of the river.
            </p>
            <p className="mb-4">
              We need to go
              <br />
              upstream and find
              <br />
              out why they&apos;re
              <br />
              falling in.
            </p>
          </blockquote>
          <footer className="text-lg md:text-xl text-fern font-semibold">
            — Desmond Tutu
          </footer>
        </motion.div>
      </div>
    </section>
  );
}

