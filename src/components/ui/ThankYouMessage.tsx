'use client';

import { motion } from 'framer-motion';
import { Check, Heart, Mail } from 'lucide-react';
import Image from 'next/image';
import { Button } from './Button';

interface ThankYouMessageProps {
  name: string;
  onClose: () => void;
}

export function ThankYouMessage({ name, onClose }: ThankYouMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full mx-auto shadow-2xl border border-earth-green/20"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="w-20 h-20 bg-fern/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-10 h-10 text-fern" />
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="Child Arise Tennessee Logo"
            width={250}
            height={75}
            className="mx-auto h-16 w-auto"
          />
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-lato font-bold text-moss-brown mb-4">
            Thank You, {name}!
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span className="text-lg text-moss-brown/80">We appreciate you reaching out</span>
            <Heart className="w-5 h-5 text-red-500 fill-current" />
          </div>
        </motion.div>

        {/* Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="space-y-4 mb-8"
        >
          <div className="bg-gradient-to-r from-fern/5 to-earth-green/5 rounded-2xl p-6 border border-fern/20">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-6 h-6 text-fern" />
              <h3 className="text-xl font-lato font-bold text-moss-brown">Message Received!</h3>
            </div>
            <p className="text-moss-brown/80 leading-relaxed">
              Your message has been successfully sent to our team at Child Arise Tennessee. 
              We&apos;ve also sent a confirmation email to you with the details.
            </p>
          </div>

          <div className="bg-gradient-to-r from-sunlit-amber/10 to-clay-beige rounded-2xl p-6 border border-sunlit-amber/30">
            <h3 className="text-lg font-lato font-bold text-moss-brown mb-2">What happens next?</h3>
            <ul className="space-y-2 text-moss-brown/80">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-fern rounded-full"></div>
                Our team will review your message within 24 hours
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-fern rounded-full"></div>
                We&apos;ll respond directly to your email address
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-fern rounded-full"></div>
                For urgent matters, call us at (615) 490-1844
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="primary"
            onClick={onClose}
            className="flex items-center justify-center gap-2"
          >
            Continue Browsing
          </Button>
          <Button
            variant="secondary"
            href="/about"
            className="flex items-center justify-center gap-2"
          >
            Learn More About Us
          </Button>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-8 pt-6 border-t border-earth-green/20"
        >
          <p className="text-sm text-moss-brown/60">
            Thank you for your interest in supporting children and families affected by parental incarceration.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 