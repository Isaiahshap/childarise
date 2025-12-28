'use client';

import { motion, useInView } from 'framer-motion';
import { Heart, Users, Video, GraduationCap, Home, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { useRef } from 'react';

const services = [
  {
    icon: Heart,
    title: 'Emotional & Mental Health Support',
    subtitle: 'Trauma-informed care for healing',
    description: 'Building a trauma-informed approach to connect children and families to appropriate, trusted mental health resources through schools and community partners.',
    features: ['Connection to individual counseling through partner providers', 'Referral to group-based therapeutic supports', 'Collaboration with school-based mental health teams', 'Crisis support coordination through established community resources'],
    impact: 'Increased emotional regulation, coping skills, and resilience over time',
    color: 'fern'
  },
  {
    icon: Users,
    title: 'Mentorship & Life Skills',
    subtitle: 'Building resilience through connection',
    description: 'Developing mentorship and life-skills programming centered on consistent relationships, positive role models, and personal growth.',
    features: ['Group-based shared experience opportunities', 'Mentorship programming (in development)', 'Life skills and resilience workshops', 'Youth leadership development opportunities'],
    impact: 'Increased confidence, self-esteem, and long-term life skills',
    color: 'fern'
  },
  {
    icon: GraduationCap,
    title: 'Academic & College Support',
    subtitle: 'Opening pathways to success',
    description: 'Supporting children\'s academic success by helping families and schools identify gaps, navigate systems, and access existing educational resources.',
    features: ['Academic support coordination and referrals', 'College and career readiness guidance (in partnership)', 'Educational advocacy in collaboration with schools', 'Scholarship and resource navigation assistance'],
    impact: 'Improved educational engagement and long-term academic pathways',
    color: 'fern'
  },
  {
    icon: Video,
    title: 'Family Connection Services',
    subtitle: 'Strengthening family bonds',
    description: 'Exploring and developing supportive strategies — in partnership with existing service providers — that help families stay connected and supported.',
    features: ['Support for virtual visitation access (through partners)', 'Transportation coordination and resource referrals', 'Family bonding and engagement opportunities', 'Communication support and guidance'],
    impact: 'Stronger family relationships and sustained connection',
    color: 'fern'
  },
  {
    icon: Home,
    title: 'Caregiver & Household Support',
    subtitle: 'Supporting the whole family',
    description: 'Prioritizing caregiver support through connection, information sharing, and access to trusted community resources.',
    features: ['Caregiver support gatherings (as available)', 'Resource navigation and referrals', 'Community connection and partnership building', 'Family-strengthening education and opportunities'],
    impact: 'Increased caregiver confidence and family stability',
    color: 'fern'
  },
  {
    icon: Calendar,
    title: 'Enrichment & Recreation',
    subtitle: 'Growing through experiences',
    description: 'Helping children experience joy, creativity, and belonging through partnerships and special initiatives as capacity allows.',
    features: ['Seasonal enrichment opportunities', 'Creative and expressive activities (partner-led)', 'Outdoor and recreational experiences', 'Youth leadership and engagement opportunities'],
    impact: 'Increased creativity, confidence, and positive identity development',
    color: 'fern'
  }
];

export function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-clay-beige relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Simplified Background Elements - Static Only */}
      <div className="absolute inset-0 bg-gradient-to-br from-fern/3 via-transparent to-earth-green/3" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fern/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sunlit-amber/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 
            id="services-heading"
            className="text-4xl md:text-5xl font-lato font-bold text-black mb-6"
          >
            Comprehensive Support Services
          </h2>
          <p className="text-xl text-black/75 leading-relaxed mb-4">
            We provide wraparound support to children and families affected by parental incarceration—fostering 
            stability, resilience, and opportunity through targeted services and community engagement.
          </p>
          
          {/* Key Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/50 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-fern">2.7M</div>
              <div className="text-sm text-black/70">Children affected nationally</div>
            </div>
            <div className="bg-white/50 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-earth-green">6</div>
              <div className="text-sm text-black/70">Core service areas</div>
            </div>
            <div className="bg-white/50 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-sunlit-amber">100%</div>
              <div className="text-sm text-black/70">Dedicated to our mission</div>
            </div>
          </motion.div>
        </motion.header>

        {/* Services Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
          role="list"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            variant="primary" 
            size="lg" 
            href="/services"
            className="inline-flex items-center gap-2"
          >
            Learn More About Our Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 