'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { memo } from 'react';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  impact: string;
  color: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isInView: boolean;
}

const colorClasses = {
  'fern': {
    bg: 'bg-fern/5',
    border: 'border-fern/10',
    iconBg: 'bg-fern/10',
    iconColor: 'text-fern',
    accent: 'text-fern',
    button: 'bg-fern hover:bg-fern/90 text-white',
    glow: 'shadow-fern/20'
  }
};

export const ServiceCard = memo<ServiceCardProps>(({ service, index, isInView }) => {
  const Icon = service.icon;
  const colors = colorClasses.fern;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`group relative overflow-hidden rounded-3xl ${colors.bg} ${colors.border} border-2 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:${colors.glow} shadow-lg`}
      role="article"
      aria-labelledby={`service-${index}-title`}
    >
      <div className="relative p-8 h-full flex flex-col">
        {/* Header */}
        <header className="flex items-start gap-4 mb-6">
          <div className={`${colors.iconBg} p-4 rounded-2xl transition-transform duration-200 group-hover:scale-110`}>
            <Icon className={`w-8 h-8 ${colors.iconColor}`} aria-hidden="true" />
          </div>
          
          <div className="flex-1">
            <h3 
              id={`service-${index}-title`}
              className="text-xl font-lato font-bold text-black mb-2 leading-tight"
            >
              {service.title}
            </h3>
            <p className={`text-sm font-medium ${colors.accent} opacity-80`}>
              {service.subtitle}
            </p>
          </div>
        </header>
        
        {/* Content */}
        <div className="flex-1">
          <p className="text-black/70 mb-6 leading-relaxed">
            {service.description}
          </p>
          
          <div className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-fern flex-shrink-0 mt-0.5" />
                <span className="text-black/70">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-fern/5 rounded-xl p-4">
            <p className="text-sm text-fern font-medium">
              {service.impact}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
});

ServiceCard.displayName = 'ServiceCard'; 