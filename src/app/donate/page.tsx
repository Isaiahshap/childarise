'use client';

import { motion, useInView } from 'framer-motion';
import { Heart, Shield, Users, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

const impactItems = [
  {
    icon: Heart,
    title: 'Mental Health Support',
    description: 'Providing trauma-informed counseling and emotional support services',
    stat: 'Individual & group therapy sessions'
  },
  {
    icon: Users,
    title: 'Family Connections',
    description: 'Facilitating meaningful visits and communication between families',
    stat: 'Virtual & in-person visitation support'
  },
  {
    icon: Target,
    title: 'Educational Support',
    description: 'Academic tutoring, advocacy, and college preparation programs',
    stat: 'Tutoring & educational resources'
  },
  {
    icon: Shield,
    title: 'Crisis Intervention',
    description: 'Emergency support and stabilization services when families need them most',
    stat: 'Crisis response & stabilization'
  }
];



export default function DonatePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  const impactRef = useRef<HTMLDivElement>(null);
  const isImpactInView = useInView(impactRef, { once: true, margin: "-100px" });

  const widgetRef = useRef<HTMLDivElement>(null);
  const isWidgetInView = useInView(widgetRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // Load DonorBox script
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/widget.js';
    script.setAttribute('paypalExpress', 'true');
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://donorbox.org/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-24 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fern/5 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sunlit-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-earth-green/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
              Make a{' '}
              <span className="text-fern">Difference</span>{' '}
              <span className="text-earth-green">Today</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed mb-8">
              Your donation directly impacts children and families affected by parental incarceration, 
              providing hope, healing, and the resources they need to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => {
                  const donateSection = document.getElementById('donate-widget');
                  donateSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Donate Now
              </Button>
              <Button variant="outline" size="lg" href="/about">
                Learn About Our Impact
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={impactRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isImpactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-lato font-bold text-black mb-6">
              Your Impact in Action
            </h2>
            <p className="text-xl text-black/75 max-w-3xl mx-auto">
              Every dollar you donate goes directly toward supporting children and families 
              in our Tennessee communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {impactItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isImpactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-clay-beige to-earth-green/10 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-fern/10 rounded-xl">
                    <item.icon className="w-8 h-8 text-fern" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-lato font-bold text-black mb-3">{item.title}</h3>
                    <p className="text-black/70 mb-4">{item.description}</p>
                    <div className="inline-flex items-center gap-2 bg-fern/10 rounded-full px-4 py-2">
                      <CheckCircle className="w-4 h-4 text-fern" />
                      <span className="text-sm font-medium text-fern">{item.stat}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Donation Widget Section */}
      <section 
        ref={widgetRef}
        id="donate-widget"
        className="py-20 bg-white relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay for opacity control */}
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWidgetInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-lato font-bold text-black mb-6">
              Make Magic Happen! ✨
            </h2>
            <p className="text-xl text-black/75 max-w-2xl mx-auto">
              Every donation creates ripples of hope, healing, and transformation. 
              See how your generosity changes lives!
            </p>
          </motion.div>

          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isWidgetInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md bg-gradient-to-br from-clay-beige/50 to-earth-green/10 rounded-3xl p-4 shadow-xl border border-earth-green/20">
              <div className="bg-white rounded-2xl p-3 shadow-sm overflow-hidden">
                <iframe 
                  src="https://donorbox.org/embed/child-arise-tennessee?default_interval=m" 
                  name="donorbox" 
                  seamless
                  frameBorder="0" 
                  scrolling="no" 
                  height="320px" 
                  width="100%" 
                  style={{
                    border: 'none',
                    borderRadius: '12px',
                    display: 'block'
                  }}
                  allow="payment"
                  title="Child Arise Tennessee Donation Form"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Disclaimer Section */}
      <section className="py-12 bg-clay-beige/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-lato font-semibold text-moss-brown mb-4">Important Information</h3>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-earth-green/20">
              <p className="text-sm text-black/70 leading-relaxed mb-4">
                <strong>Disclaimer:</strong> Child Arise Tennessee is a 501(c)(3) nonprofit organization. 
                Donation amounts mentioned are examples of how contributions may be used to support our programs. 
                Actual program costs vary and donations are pooled to support all areas of our mission.
              </p>
              <p className="text-sm text-black/70 leading-relaxed mb-4">
                Impact statements reflect our program goals and general outcomes. Individual results may vary. 
                We are committed to using donations efficiently and effectively to serve children and families 
                affected by parental incarceration.
              </p>
              <p className="text-sm text-black/70 leading-relaxed">
                Your donation is tax-deductible to the extent allowed by law. You will receive a receipt 
                for your records. For questions about our programs or financials, please contact us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-fern to-earth-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-lato font-bold text-white mb-6">
              Every Child Deserves Hope
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your support helps us provide stability, resources, and opportunities 
              to children whose lives have been impacted by parental incarceration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  const donateSection = document.getElementById('donate-widget');
                  donateSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Donate Today
              </Button>
              <Button variant="outline" size="lg" href="/contact" className="border-white text-white hover:bg-white hover:text-fern">
                Get Involved
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 