'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const footerNavigation = {
  main: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ],
  programs: [
    { name: 'Counseling Services', href: '/services#counseling' },
    { name: 'Mentorship Program', href: '/services#mentorship' },
    { name: 'Family Support', href: '/services#family-support' },
    { name: 'Educational Support', href: '/services#educational' },
  ],
  support: [
    { name: 'Donate', href: '/donate' },
    { name: 'Volunteer', href: '/get-involved#volunteer' },
    { name: 'Partner With Us', href: '/get-involved#partner' },
    { name: 'Events', href: '/events' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-moss-brown text-clay-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-4"
            >
              <Image
                src="/images/logo.png"
                alt="Child Arise Tennessee Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <div>
                <div className="text-xl font-lato font-bold text-clay-beige">
                  Child Arise Tennessee
                </div>
                <div className="text-sm text-clay-beige/70 font-medium">
                  Nashville, Tennessee
                </div>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-clay-beige/80 mb-6 leading-relaxed"
            >
              Supporting children and families impacted by incarceration through comprehensive programs, counseling, and community connection.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-earth-green" />
                <span>(615) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-earth-green" />
                <span>info@childarisetennessee.org</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-earth-green" />
                <span>Nashville, Tennessee</span>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 lg:col-span-3">
            {/* Main Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-lato font-semibold mb-4 text-earth-green">Quick Links</h3>
              <ul className="space-y-2">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-clay-beige/80 hover:text-earth-green transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-lato font-semibold mb-4 text-earth-green">Our Programs</h3>
              <ul className="space-y-2">
                {footerNavigation.programs.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-clay-beige/80 hover:text-earth-green transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-lato font-semibold mb-4 text-earth-green">Get Involved</h3>
              <ul className="space-y-2 mb-6">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-clay-beige/80 hover:text-earth-green transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-clay-beige/60 hover:text-earth-green transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={item.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-clay-beige/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-clay-beige/60 text-sm">
            © {new Date().getFullYear()} Child Arise Tennessee. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-clay-beige/60 hover:text-earth-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-clay-beige/60 hover:text-earth-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 