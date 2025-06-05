'use client';

import { motion } from 'framer-motion';
import { Heart, Users, GraduationCap, Home, Video, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const services = [
  {
    icon: Heart,
    title: 'Emotional & Mental Health Support',
    description: 'Trauma-informed counseling and therapy services for children and caregivers, including group sessions and peer support.',
    features: ['Individual Therapy', 'Group Counseling', 'School-Based Support']
  },
  {
    icon: Users,
    title: 'Mentorship & Development',
    description: 'One-on-one mentoring with trained adults, leadership workshops, and life skills development programs.',
    features: ['Shared Experiences Program', 'Life Skills Workshops', 'Youth Leadership']
  },
  {
    icon: Video,
    title: 'Family Connection Services',
    description: 'Virtual visitation hubs, transportation assistance, and family bonding activities to maintain relationships.',
    features: ['Virtual Visitation', 'Transportation Support', 'Family Bonding Kits']
  },
  {
    icon: GraduationCap,
    title: 'Educational Support',
    description: 'Academic tutoring, college preparation, scholarships, and educational advocacy for student success.',
    features: ['Academic Tutoring', 'College Prep', 'Scholarship Programs']
  },
  {
    icon: Home,
    title: 'Caregiver Empowerment',
    description: 'Support groups for caregivers, resource navigation assistance, and family strengthening programs.',
    features: ['Support Groups', 'Resource Navigation', 'Family Programs']
  },
  {
    icon: Calendar,
    title: 'Enrichment Programs',
    description: 'Summer camps, creative arts therapy, and recreational activities that build resilience and self-esteem.',
    features: ['Camp Resilience', 'Arts Therapy', 'Recreation Programs']
  }
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-clay-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-lato font-bold text-moss-brown mb-6">
            Comprehensive Support Services
          </h2>
          <p className="text-xl text-moss-brown/80 max-w-3xl mx-auto leading-relaxed">
            We provide holistic support to help children and families navigate the challenges of parental incarceration 
            and build stronger, more resilient futures together.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-soft hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-earth-green/10 p-3 rounded-lg mr-4">
                    <Icon className="w-8 h-8 text-fern" />
                  </div>
                  <h3 className="text-xl font-lato font-semibold text-moss-brown">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-moss-brown/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-moss-brown/70">
                      <div className="w-2 h-2 bg-sunlit-amber rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-earth-green/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-lato font-bold text-moss-brown mb-4">
            Ready to Learn More About Our Programs?
          </h3>
          <p className="text-lg text-moss-brown/80 mb-8 max-w-2xl mx-auto">
            Discover how our comprehensive services can make a difference in the lives of children 
            and families in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/services">
              Explore All Services
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Contact Us Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 