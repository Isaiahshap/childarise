import Image from 'next/image';
import Link from 'next/link';
import { FadeInSection } from '@/components/ui/FadeIn';

export function HeroSection() {
  return (
    <FadeInSection instant className="relative min-h-[62vh] md:min-h-[58vh] lg:min-h-[56vh] flex items-start">
      <div className="absolute inset-0 z-0 photo-wrap">
        <Image
          src="/images/hro.png"
          alt="Children and families in Tennessee"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
      </div>

      <div className="hero-radial-overlay" aria-hidden="true" />

      <div className="relative z-10 w-full pt-40 pb-12 md:pt-48 md:pb-14 lg:pt-52">
        <div className="section-container">
          <div className="relative max-w-xl md:max-w-2xl lg:max-w-[34rem] text-left">
            <div className="relative">
              <p className="section-label-light mb-4">
                Child Arise Tennessee
              </p>
              <h1 className="display-hero mb-5">
                Supporting children. Strengthening families.
              </h1>
              <p className="lead-light mb-8">
                Counseling, mentorship, and community connection for children and caregivers impacted by parental incarceration across Nashville and Tennessee.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <Link href="/donate" className="btn-primary-light">
                  Support our mission
                </Link>
                <Link href="/about" className="btn-ghost-light">
                  About our organization
                </Link>
              </div>
              <p className="font-sans text-xs md:text-sm text-white/55">
                501(c)(3) nonprofit · EIN 33-1723186
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
