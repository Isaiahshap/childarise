import type { ReactNode } from 'react';
import Image from 'next/image';

export function LeaderCard({
  name,
  role,
  image,
  imageAlt,
  imagePosition = 'left',
  imageClassName = 'object-cover object-center',
  bioColumns = false,
  children,
}: {
  name: string;
  role: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  imageClassName?: string;
  bioColumns?: boolean;
  children: ReactNode;
}) {
  return (
    <article className="border border-border bg-paper overflow-hidden">
      <div
        className={
          image ? 'grid grid-cols-1 lg:grid-cols-[18rem_1fr] lg:items-stretch' : ''
        }
      >
        {image && (
          <div
            className={`photo-wrap relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[22rem] lg:max-h-[22rem] ${
              imagePosition === 'right' ? 'lg:order-2' : ''
            }`}
          >
            <Image
              src={image}
              alt={imageAlt ?? name}
              fill
              className={imageClassName}
              sizes="(max-width: 1024px) 100vw, 18rem"
            />
          </div>
        )}
        <div
          className={`p-6 md:p-8 lg:p-10 ${image && imagePosition === 'right' ? 'lg:order-1' : ''}`}
        >
          <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase mb-2">
            {role}
          </p>
          <h3 className="text-xl md:text-2xl mb-5 leading-snug">{name}</h3>
          <div className={bioColumns ? 'leadership-bio leadership-bio-columns' : 'leadership-bio'}>
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
