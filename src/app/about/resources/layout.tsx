import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Family Resources',
  description:
    'Trusted Tennessee resources for caregivers, children, and parents impacted by incarceration—kinship care, family wellbeing, visitation, reentry, and trauma support.',
  keywords: [
    'kinship care tennessee',
    'relative caregiver program',
    'parental incarceration resources',
    'child visitation program tennessee',
    'family reentry support',
    'childhood trauma resources',
  ],
  openGraph: {
    title: 'Family Resources | Child Arise Tennessee',
    description:
      'A guide to Tennessee resources for families impacted by parental incarceration.',
    url: '/about/resources',
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
