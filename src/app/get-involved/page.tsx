'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Eye, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fern/5 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sunlit-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-earth-green/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="Child Arise Tennessee Logo"
                width={300}
                height={90}
                className="mx-auto h-20 w-auto"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-lato font-bold text-black mb-8">
              Get{' '}
              <span className="text-fern">Involved</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed mb-8">
              Real change happens when people step up and take action. Here are meaningful ways 
              you can support children of incarcerated parents and help transform our justice system.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
            >
              <p className="text-lg font-semibold text-black">
                Choose one action below and commit to it today
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Educate Yourself */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-fern/5 to-earth-green/5 rounded-2xl p-8 border border-fern/10"
            >
              <div className="w-16 h-16 bg-fern/10 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-fern" />
              </div>
              <h3 className="text-2xl font-lato font-bold text-black mb-4">
                Educate Yourself
              </h3>
              <p className="text-black/80 leading-relaxed mb-6">
                Learn about Tennessee&apos;s incarceration system and its impact on families. 
                Knowledge is the first step toward meaningful change.
              </p>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-fern flex-shrink-0 mt-0.5" />
                  <span>Research Tennessee Department of Correction statistics and policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-fern flex-shrink-0 mt-0.5" />
                  <span>Read about the children left behind when parents are incarcerated</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-fern flex-shrink-0 mt-0.5" />
                  <span>Understand the cycle of poverty and how to break it</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-fern flex-shrink-0 mt-0.5" />
                  <span>Learn about trauma-informed approaches to helping children</span>
                </li>
              </ul>
            </motion.div>

            {/* Visit & Witness */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-earth-green/5 to-sunlit-amber/5 rounded-2xl p-8 border border-earth-green/10"
            >
              <div className="w-16 h-16 bg-earth-green/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-earth-green" />
              </div>
              <h3 className="text-2xl font-lato font-bold text-black mb-4">
                Visit & Witness
              </h3>
              <p className="text-black/80 leading-relaxed mb-6">
                See the reality of our prison system firsthand. Nothing changes minds like 
                personal experience and human connection.
              </p>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-earth-green flex-shrink-0 mt-0.5" />
                  <span>Apply to visit Tennessee correctional facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-earth-green flex-shrink-0 mt-0.5" />
                  <span>Volunteer with prison ministry or advocacy organizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-earth-green flex-shrink-0 mt-0.5" />
                  <span>Attend court hearings to understand the justice process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-earth-green flex-shrink-0 mt-0.5" />
                  <span>Connect with incarcerated individuals and their families</span>
                </li>
              </ul>
            </motion.div>

            {/* Help Your Neighbors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sunlit-amber/5 to-clay-beige/50 rounded-2xl p-8 border border-sunlit-amber/20"
            >
              <div className="w-16 h-16 bg-sunlit-amber/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-sunlit-amber" />
              </div>
              <h3 className="text-2xl font-lato font-bold text-black mb-4">
                Help Your Neighbors
              </h3>
              <p className="text-black/80 leading-relaxed mb-6">
                Look around your community. Families affected by incarceration are everywhere, 
                often struggling in silence. Your support can make all the difference.
              </p>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sunlit-amber flex-shrink-0 mt-0.5" />
                  <span>Offer practical help: groceries, transportation, childcare</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sunlit-amber flex-shrink-0 mt-0.5" />
                  <span>Be a mentor or positive role model for children in need</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sunlit-amber flex-shrink-0 mt-0.5" />
                  <span>Connect families with local resources and support services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sunlit-amber flex-shrink-0 mt-0.5" />
                  <span>Advocate for policy changes that support families</span>
                </li>
              </ul>
            </motion.div>

            {/* Support Child Arise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-moss-brown/5 to-fern/5 rounded-2xl p-8 border border-moss-brown/10"
            >
              <div className="w-16 h-16 bg-moss-brown/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-moss-brown" />
              </div>
              <h3 className="text-2xl font-lato font-bold text-black mb-4">
                Support Child Arise
              </h3>
              <p className="text-black/80 leading-relaxed mb-6">
                Join our mission to provide comprehensive support to Tennessee families 
                affected by parental incarceration.
              </p>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-moss-brown flex-shrink-0 mt-0.5" />
                  <span>Make a financial donation to fund our programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-moss-brown flex-shrink-0 mt-0.5" />
                  <span>Volunteer your time and skills with our team</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-moss-brown flex-shrink-0 mt-0.5" />
                  <span>Spread awareness about our work in your networks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-moss-brown flex-shrink-0 mt-0.5" />
                  <span>Partner with us as a community organization</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-clay-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <h3 className="text-3xl md:text-4xl font-lato font-bold text-black mb-6">
              Ready to Take Action?
            </h3>
            <p className="text-lg text-black/75 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every journey begins with a single step. Choose one action above and commit to it today. 
              Together, we can break cycles of poverty and build stronger communities across Tennessee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/donate">
                Donate Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-lato font-bold text-black mb-6">
              Resources to Get Started
            </h2>
            <p className="text-lg text-black/75 max-w-3xl mx-auto">
              Here are some starting points for your journey to make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-fern/5 border border-fern/10"
            >
              <h4 className="text-xl font-semibold text-black mb-3">Tennessee Department of Correction</h4>
              <p className="text-black/70 mb-4">
                Learn about Tennessee&apos;s prison system, visitation policies, and inmate programs.
              </p>
              <div className="text-sm text-fern font-medium">Visit their official website</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-earth-green/5 border border-earth-green/10"
            >
              <h4 className="text-xl font-semibold text-black mb-3">Local Volunteer Opportunities</h4>
              <p className="text-black/70 mb-4">
                Find organizations in your area that support families affected by incarceration.
              </p>
              <div className="text-sm text-earth-green font-medium">Connect with local nonprofits</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-sunlit-amber/5 border border-sunlit-amber/20"
            >
              <h4 className="text-xl font-semibold text-black mb-3">Educational Materials</h4>
              <p className="text-black/70 mb-4">
                Research and reports on children affected by parental incarceration and best practices.
              </p>
              <div className="text-sm text-sunlit-amber font-medium">Explore research databases</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 