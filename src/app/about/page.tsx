'use client';

import { motion, useInView } from 'framer-motion';
import { Heart, Users, Target, Eye, Lightbulb, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useRef } from 'react';
import Image from 'next/image';

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Every child deserves love, understanding, and support regardless of their circumstances.'
  },
  {
    icon: Users,
    title: 'Community-Centered',
    description: 'We believe in the power of community to heal, support, and uplift families in need.'
  },
  {
    icon: Target,
    title: 'Trauma-Informed',
    description: 'All our services are designed with deep understanding of trauma and its impact on children.'
  },
  {
    icon: Lightbulb,
    title: 'Empowerment',
    description: 'We focus on building resilience, self-esteem, and life skills that last a lifetime.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in our programs, partnerships, and outcomes.'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We operate with integrity, accountability, and openness in all our work.'
  }
];






export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  const valuesRef = useRef<HTMLDivElement>(null);
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  


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
              About{' '}
              <span className="text-fern">Child Arise</span>{' '}
              <span className="text-earth-green">Tennessee</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed mb-8">
              Fostering hope, healing, and opportunity for children and families 
              affected by parental incarceration across Tennessee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Get Involved Today
              </Button>
              <Button variant="outline" size="lg" href="/services">
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-lato font-bold text-black mb-6">Our Mission</h2>
              <p className="text-lg text-black/80 leading-relaxed mb-8">
                To provide comprehensive wraparound support to children and families affected by 
                parental incarceration—fostering stability, resilience, and opportunity through 
                targeted services, community engagement, and trauma-informed care.
              </p>
              <div className="space-y-4">
                {[
                  'Trauma-informed mental health support',
                  'Educational advocacy and tutoring',
                  'Family connection facilitation',
                  'Caregiver empowerment programs'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-fern flex-shrink-0" />
                    <span className="text-black/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-clay-beige to-earth-green/10 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-lato font-bold text-black mb-6">Our Vision</h3>
              <p className="text-lg text-black/80 leading-relaxed mb-6">
                A Tennessee where every child affected by parental incarceration has access to 
                the support, resources, and opportunities they need to thrive—regardless of 
                their family&apos;s circumstances.
              </p>
              <blockquote className="border-l-4 border-fern pl-4 italic text-black/70">
                &quot;We envision communities where these children are not defined by their parents&apos; 
                situation, but empowered to create their own bright futures.&quot;
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-clay-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-lato font-bold text-black mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-black/75 max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-fern/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-fern" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-black/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-20 bg-clay-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-lato font-bold text-black mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-black/75 max-w-3xl mx-auto">
              Dedicated professionals with lived experience and expertise in child advocacy.
            </p>
          </motion.div>

          {/* Bethany Roberts Mann - Image Left, Text Right */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-64 h-64 mx-auto relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/bethany.webp"
                    alt="Bethany Roberts Mann"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl md:text-4xl font-lato font-bold text-black mb-3">
                  Bethany Roberts Mann
                </h3>
                <div className="text-lg font-semibold text-fern mb-6 border-l-4 border-fern pl-4">
                  Founder & Executive Director
                </div>
                <p className="text-lg text-black/80 leading-relaxed">
                  Bethany Roberts Mann was born in prison and is mother of four and grandmother to one. 
                  She has been visiting the men on death row for 15 years. She lives intentionally every 
                  day to break the cycle of poverty one life at a time. She recently founded a non-profit 
                  called Child Arise, TN that advocates for and works to advance children of the incarcerated.
                </p>
              </div>
            </div>
          </div>

          {/* Linda Manning - Text Left, Image Right */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl md:text-4xl font-lato font-bold text-black mb-3">
                  Linda Manning, PhD
                </h3>
                <div className="text-lg font-semibold text-earth-green mb-6 border-l-4 border-earth-green pl-4">
                  Clinical Supervisor & Consultant
                </div>
                <p className="text-lg text-black/80 leading-relaxed">
                  Linda Manning, PhD provides supervision and consultation for therapists interested in somatic 
                  psychotherapy and working with trauma. She was an Adjunct Assistant Professor in the Human 
                  Development Counseling Program at Vanderbilt University, where she taught a course on Trauma: 
                  Impact and Intervention for twenty years. Before retiring from full-time practice in 2019, she 
                  was the Interim Director of the Osher Center for Integrative Medicine. Dr. Manning received her 
                  PhD from the University of Texas at Austin and has completed advanced training in somatic 
                  psychotherapy, mindfulness-based practices, and the treatment of trauma.
                </p>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="w-64 h-64 mx-auto relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/linda.webp"
                    alt="Linda Manning, PhD"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <h3 className="text-3xl md:text-4xl font-lato font-bold text-black mb-6">
              Join Our Mission
            </h3>
            <p className="text-lg text-black/75 mb-8 max-w-2xl mx-auto">
              Whether through volunteering, donating, or partnering with us, there are many ways 
              to support children and families affected by parental incarceration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Get Involved Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/donate">
                Make a Donation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 