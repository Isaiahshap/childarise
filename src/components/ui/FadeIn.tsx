'use client';

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type RefObject,
} from 'react';
import { cn } from '@/lib/utils';

function useFadeInVisible(instant: boolean, ref: RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    if (instant) {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const el = ref.current;
    if (!el) return;

    const show = () => setVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show();
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [instant]);

  return visible;
}

const fadeClass = (visible: boolean, className?: string) =>
  cn(
    'transition-opacity duration-700 ease-out',
    visible ? 'opacity-100' : 'opacity-0',
    className
  );

export function FadeIn({
  className,
  children,
  delay = 0,
  instant = false,
  style,
  ...props
}: ComponentPropsWithoutRef<'div'> & { delay?: number; instant?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useFadeInVisible(instant, ref);

  return (
    <div
      ref={ref}
      className={fadeClass(visible, className)}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}

export function FadeInSection({
  className,
  children,
  delay = 0,
  instant = false,
  style,
  ...props
}: ComponentPropsWithoutRef<'section'> & { delay?: number; instant?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const visible = useFadeInVisible(instant, ref);

  return (
    <section
      ref={ref}
      className={fadeClass(visible, className)}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </section>
  );
}
