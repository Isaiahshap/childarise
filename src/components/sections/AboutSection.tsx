'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const images = [
  { src: '/images/1 (2).webp', alt: 'Mentorship in action' },
  { src: '/images/2 (1).webp', alt: 'Family connection event' },
  { src: '/images/3 (1).webp', alt: 'Art therapy session' },
];

export function AboutSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <section className="bg-[#F8F6F2] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* About Content Left */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col items-start">
          <span className="text-fern font-semibold uppercase tracking-widest mb-2 text-sm md:text-base">About Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-moss-brown mb-4 leading-tight">Who We Are</h2>
          <p className="text-lg md:text-xl text-[#4A4A36] mb-4 max-w-xl">
            Child Arise Tennessee is dedicated to providing <span className="font-semibold text-fern">hope, healing, and opportunity</span> for children and families affected by parental incarceration.
          </p>
          <p className="text-base md:text-lg text-[#4A4A36] mb-6 max-w-xl">
            Through trauma-informed care, mentorship, education, and community connection, we empower children to build resilience and thrive—no matter their circumstances.
          </p>
          <ul className="list-disc pl-6 text-[#4A4A36] mb-8 space-y-2 text-base md:text-lg">
            <li>Trauma-informed support & care</li>
            <li>Mentorship & positive role models</li>
            <li>Family & community connection events</li>
            <li>Educational resources & advocacy</li>
          </ul>
          <Link
            href="/about"
            className="inline-block bg-fern hover:bg-fern/90 text-white font-semibold px-7 py-3 rounded-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fern focus:ring-offset-2 text-lg"
            aria-label="Learn more about Child Arise Tennessee"
          >
            Learn More
          </Link>
        </div>
        {/* Carousel Right */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-moss-brown/10 bg-white">
            <div className="w-full h-full relative">
              <AnimatePresence initial={false} custom={index}>
                <motion.img
                  key={images[index].src}
                  src={images[index].src}
                  alt={images[index].alt}
                  className="object-cover w-full h-full cursor-pointer select-none absolute top-0 left-0"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ x: { type: 'spring', stiffness: 500, damping: 40 }, opacity: { duration: 0.25 } }}
                  onClick={nextImage}
                />
              </AnimatePresence>
            </div>
            {/* Dots for manual navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full border border-fern transition-colors duration-200 ${i === index ? 'bg-fern' : 'bg-moss-brown/20'}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Decorative background element */}
      <div className="hidden md:block absolute -right-32 top-0 w-[500px] h-[500px] bg-fern/10 rounded-full blur-3xl z-0" aria-hidden="true" />
    </section>
  );
}

export default AboutSection; 