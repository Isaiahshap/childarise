'use client';

import { motion } from 'framer-motion';
import { Users, MapPin, AlertTriangle, Home, Eye, TrendingUp } from 'lucide-react';

const impactStats = [
  {
    icon: Users,
    number: '10%',
    label: 'Tennessee Minors Affected',
    description: 'Of minors in Tennessee have at least one parent incarcerated (~144,000 children)',
    sources: [
      {
        text: 'Annie E. Casey Foundation',
        url: 'https://www.aecf.org/resources/a-shared-sentence'
      }
    ]
  },
  {
    icon: MapPin,
    number: '#3',
    label: 'National Ranking',
    description: 'Tennessee is tied for 3rd in the nation for most justice-impacted youth',
    sources: [
      {
        text: "Governor's Early Literacy Foundation",
        url: 'https://governorsfoundation.org/governors-early-literacy-foundation-bridges-the-gap-behind-bars-for-incarcerated-parents-and-their-children-with-a-gift-of-700-books-and-158-home-libraries/#:~:text=Tennessee%20is%20tied%20with%20five,after%20the%20child%20was%20born.'
      }
    ]
  },
  {
    icon: AlertTriangle,
    number: '7%',
    label: 'Nationwide Impact',
    description: 'Of American children experience parental incarceration at some point in childhood',
    sources: [
      {
        text: 'Center on Juvenile and Criminal Justice',
        url: 'https://www.cjcj.org/news/blog/let-kids-be-kids-the-effects-of-parental-incarceration-on-children#:~:text=Altogether%2C%207%25%20of%20American%20children,experiencing%20parental%20death%20or%20divorce.'
      }
    ]
  },
  {
    icon: Eye,
    number: '<31%',
    label: 'Receive Visitors',
    description: 'Less than 1/3 of prisoners in state prisons receive visitors',
    sources: [
      {
        text: 'Prison Policy Initiative',
        url: 'https://www.prisonpolicy.org/reports/prisonvisits.html'
      }
    ]
  },
  {
    icon: Home,
    number: '63%',
    label: 'Far from Home',
    description: 'Of incarcerated in state prisons are more than 100 miles from home',
    sources: [
      {
        text: 'Prison Policy Initiative',
        url: 'https://www.prisonpolicy.org/reports/prisonvisits.html'
      }
    ]
  },
  {
    icon: TrendingUp,
    number: '500%',
    label: 'Rise Since 1980',
    description: 'Increase in children with a father in prison or jail from 1980 to 2000',
    sources: [
      {
        text: 'Annie E. Casey Foundation',
        url: 'https://www.aecf.org/topics/parental-incarceration'
      }
    ]
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
            The Need in Our Community
          </h2>
          <p className="text-xl text-moss-brown/80 max-w-3xl mx-auto leading-relaxed">
            Understanding the scope and impact of parental incarceration helps us better serve 
            children and families in Tennessee and across the nation.
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
                <p className="text-moss-brown/70 leading-relaxed mb-3">
                  {stat.description}
                </p>
                {stat.sources && (
                  <div className="text-sm">
                    <span className="text-moss-brown/60">Source: </span>
                    {stat.sources.map((source, sourceIndex) => (
                      <span key={sourceIndex}>
                        <a 
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fern hover:text-earth-green underline transition-colors duration-200"
                        >
                          {source.text}
                        </a>
                        {sourceIndex < stat.sources.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                )}
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