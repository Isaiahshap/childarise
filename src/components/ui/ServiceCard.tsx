'use client';

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
}

export const ServiceCard = memo<ServiceCardProps>(({ service, index }) => {
  const Icon = service.icon;

  return (
    <article
      className="h-full flex flex-col border border-neutral-200 rounded-md bg-white p-6 hover:border-fern/30 transition-colors duration-200"
      role="article"
      aria-labelledby={`service-${index}-title`}
    >
      <header className="flex items-start gap-4 mb-5">
        <div className="bg-fern/10 p-3 rounded-md flex-shrink-0">
          <Icon className="w-6 h-6 text-fern" aria-hidden="true" />
        </div>
        <div>
          <h3 id={`service-${index}-title`} className="text-lg font-lato font-bold text-neutral-900 mb-1 leading-tight">
            {service.title}
          </h3>
          <p className="text-sm font-medium text-fern">{service.subtitle}</p>
        </div>
      </header>

      <div className="flex-1">
        <p className="text-neutral-600 mb-5 leading-relaxed text-sm">{service.description}</p>

        <ul className="space-y-2 mb-5">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
              <Check className="w-4 h-4 text-fern flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="bg-neutral-50 border border-neutral-100 rounded-md p-3">
          <p className="text-sm text-neutral-700">
            <span className="font-semibold text-fern">Impact: </span>
            {service.impact}
          </p>
        </div>
      </div>
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';
