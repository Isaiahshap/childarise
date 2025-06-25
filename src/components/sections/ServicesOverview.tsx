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
    description: 'Professional counseling and therapy services designed specifically for children and families navigating the complex emotions of parental incarceration.',
    features: ['Individual Therapy Sessions', 'Group Therapy Programs', 'School-Based Mental Health Support', 'Crisis Intervention Services'],
    impact: 'Students show improved emotional regulation and resilience',
    color: 'fern'
  },
  {
    icon: Users,
    title: 'Mentorship & Life Skills',
    subtitle: 'Building resilience through connection',
    description: 'Matching children with trained mentors who understand their unique journey, focusing on goal setting, life skills, and personal development.',
    features: ['Shared Experiences Program', 'One-on-One Mentoring', 'Life Skills & Resilience Workshops', 'Youth Leadership Development'],
    impact: 'Enhanced self-esteem and improved life outcomes',
    color: 'fern'
  },
  {
    icon: GraduationCap,
    title: 'Academic & College Support',
    subtitle: 'Opening pathways to success',
    description: 'Comprehensive educational support including tutoring, college preparation, and advocacy to ensure academic success and future opportunities.',
    features: ['Academic Tutoring Services', 'College Readiness Programs', 'Educational Advocacy', 'Scholarship Assistance'],
    impact: 'Improved academic performance and college enrollment rates',
    color: 'fern'
  },
  {
    icon: Video,
    title: 'Family Connection Services',
    subtitle: 'Strengthening family bonds',
    description: 'Innovative solutions to maintain and strengthen family relationships through technology, transportation assistance, and family bonding activities.',
    features: ['Virtual Visitation Support', 'Transportation Assistance', 'Family Bonding Programs', 'Communication Facilitation'],
    impact: 'Stronger family connections and improved relationships',
    color: 'fern'
  },
  {
    icon: Home,
    title: 'Caregiver & Household Support',
    subtitle: 'Supporting the whole family',
    description: 'Empowering caregivers with support groups, resource navigation, and community connections to strengthen the entire family system.',
    features: ['Caregiver Support Groups', 'Resource Navigation Services', 'Community Connections', 'Family Strengthening Programs'],
    impact: 'Increased caregiver confidence and family stability',
    color: 'fern'
  },
  {
    icon: Calendar,
    title: 'Enrichment & Recreation',
    subtitle: 'Growing through experiences',
    description: 'Creative and recreational programs that build resilience, self-esteem, and leadership skills while creating positive memories and experiences.',
    features: ['Summer Enrichment Programs', 'Arts & Creative Therapy', 'Outdoor & Recreational Activities', 'Youth Leadership Opportunities'],
    impact: 'Enhanced creativity, leadership skills, and self-confidence',
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