import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Staff & Board',
  description:
    'Meet the leadership team and board members guiding Child Arise Tennessee\'s mission to support children and families affected by parental incarceration.',
  openGraph: {
    title: 'Our Staff & Board | Child Arise Tennessee',
    description:
      'Meet the leadership team and board members guiding Child Arise Tennessee.',
    url: '/about/staff',
  },
};

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
