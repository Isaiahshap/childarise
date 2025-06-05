'use client';

import { motion } from 'framer-motion';
import { Users, GraduationCap, Heart, Calendar, Award, Target } from 'lucide-react';

const impactStats = [
  {
    icon: Users,
    number: '2,500+',
    label: 'Children Served',
    description: 'Young lives positively impacted through our comprehensive programs'
  },
  {
    icon: Heart,
    number: '500+',
    label: 'Families Supported',
    description: 'Caregivers and family units strengthened through our services'
  },
  {
    icon: GraduationCap,
    number: '85%',
    label: 'Academic Improvement',
    description: 'Of students show improved grades and school attendance'
  },
  {
    icon: Calendar,
    number: '15+',
    label: 'Years of Service',
    description: 'Dedicated commitment to our Nashville community'
  },
  {
    icon: Award,
    number: '150+',
    label: 'Mentors Trained',
    description: 'Volunteers equipped to provide meaningful support'
  },
  {
    icon: Target,
    number: '95%',
    label: 'Program Completion',
    description: 'Participants successfully complete their support programs'
  }
];


export function ImpactSection() {
  return (
    <section className="py-20 bg-white">
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
            Making a Real Difference
          </h2>
          <p className="text-xl text-moss-brown/80 max-w-3xl mx-auto leading-relaxed">
            Through evidence-based programs and community partnerships, we&apos;re creating lasting positive change 
            in the lives of children and families across Tennessee.
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl bg-earth-green/5 hover:bg-earth-green/10 transition-colors duration-300"
              >
                <Icon className="w-12 h-12 text-fern mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-lato font-bold text-moss-brown mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-lato font-semibold text-moss-brown mb-3">
                  {stat.label}
                </h3>
                <p className="text-moss-brown/70 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>



        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-fern to-earth-green rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-lato font-bold mb-4">
            Be Part of the Change
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your support helps us expand our reach and deepen our impact. 
            Together, we can create brighter futures for more children and families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/donate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-fern font-semibold rounded-lg hover:bg-clay-beige transition-colors duration-200"
            >
              Make a Donation
            </motion.a>
            <motion.a
              href="/get-involved"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-fern transition-colors duration-200"
            >
              Get Involved
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 