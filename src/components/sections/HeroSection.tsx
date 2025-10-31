'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-bg1.png"
          alt="Children playing in Tennessee nature"
          fill
          className="object-cover object-center"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        
        {/* Gradient Overlay with Animation */}
        <motion.div 
          className="absolute inset-0 bg-hero-gradient" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* 501(c)(3) Badge - Floating on Right (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.8,
          type: "spring",
          stiffness: 200
        }}
        className="hidden lg:block absolute top-32 right-16 z-20"
      >
        <div className="relative">
          {/* Circular Badge */}
          <div className="w-32 h-32 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-4 border-fern/30 flex flex-col items-center justify-center p-3 hover:scale-110 transition-transform duration-300">
            <CheckCircle className="w-8 h-8 text-fern mb-1" />
            <div className="text-center">
              <div className="text-sm font-bold text-fern leading-tight">501(c)(3)</div>
              <div className="text-xs font-semibold text-moss-brown/70 leading-tight">Nonprofit</div>
            </div>
          </div>
          {/* Decorative Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-fern/20"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -60, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-lato font-bold text-moss-brown mb-6 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Supporting Children,
              </motion.span>
              <br />
              <motion.span 
                className="text-fern"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                Strengthening Families
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.3,
                ease: "easeOut"
              }}
              className="text-lg md:text-xl lg:text-2xl text-moss-brown/80 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Providing comprehensive support for children and caregivers impacted by parental incarceration through counseling, mentorship, and community connection.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.6,
                ease: "easeOut"
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="/donate"
                  className="flex items-center space-x-2 shadow-lg"
                >
                  <span>Support</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  variant="secondary" 
                  size="lg" 
                  href="/services"
                  className="shadow-lg"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* 501(c)(3) Badge - Mobile Only (Below CTA) */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.9,
                type: "spring",
                stiffness: 200
              }}
              className="lg:hidden flex justify-center mt-8"
            >
              <div className="relative">
                {/* Circular Badge */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-4 border-fern/30 flex flex-col items-center justify-center p-3">
                  <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-fern mb-1" />
                  <div className="text-center">
                    <div className="text-xs md:text-sm font-bold text-fern leading-tight">501(c)(3)</div>
                    <div className="text-[10px] md:text-xs font-semibold text-moss-brown/70 leading-tight">Nonprofit</div>
                  </div>
                </div>
                {/* Decorative Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-fern/20"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Empty space for image visibility on desktop */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-moss-brown/50 rounded-full flex justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-moss-brown/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 