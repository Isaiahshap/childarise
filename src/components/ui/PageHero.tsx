'use client';

import Image from 'next/image';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/ui/Breadcrumbs';
import { FadeInSection } from '@/components/ui/FadeIn';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  meta?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  imageAspect?: string;
  media?: React.ReactNode;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  children,
  meta,
  image,
  imageAlt,
  imageAspect = 'aspect-[16/9] lg:aspect-[2/1]',
  media,
}: PageHeroProps) {
  const hasSideMedia = Boolean(image || media);

  return (
    <FadeInSection instant className="pt-32 md:pt-36 pb-16 md:pb-20 bg-paper section-divider">
      <div className="section-container">
        {hasSideMedia && media ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            <div className="lg:col-span-7 order-1">
              {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
              {meta}
              <h1 className="max-w-[48rem] mb-6">{title}</h1>
              {subtitle && (
                <p className="prose-reading max-w-reading mb-0 lg:mb-8">{subtitle}</p>
              )}
            </div>

            <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 order-2 w-full">
              {media}
            </div>

            <div className="lg:col-span-7 order-3 pt-2 lg:pt-0">
              {children}
            </div>
          </div>
        ) : (
        <div className={hasSideMedia ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center' : undefined}>
          <div className={hasSideMedia ? 'lg:col-span-7' : undefined}>
            {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
            {meta}
            <h1 className="max-w-[48rem] mb-6">{title}</h1>
            {subtitle && (
              <p className="prose-reading max-w-reading mb-8">{subtitle}</p>
            )}
            {children}
          </div>

          {image ? (
            <div className="lg:col-span-5 lg:max-w-md lg:justify-self-end w-full">
              <div className={cn('photo-wrap relative overflow-hidden bg-paper-alt', imageAspect)}>
                <Image
                  src={image}
                  alt={imageAlt ?? ''}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          ) : null}
        </div>
        )}
      </div>
    </FadeInSection>
  );
}
