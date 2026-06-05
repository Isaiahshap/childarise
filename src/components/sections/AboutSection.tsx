import Image from 'next/image';
import Link from 'next/link';
import { FadeInSection } from '@/components/ui/FadeIn';

export function AboutSection() {
  return (
    <FadeInSection className="editorial-section tone-warm section-divider">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="section-label">Our Mission</span>
            <h2 className="mb-5 max-w-[18ch]">Hope, healing, and opportunity for every child</h2>
            <div className="pull-quote mb-6">
              <p className="prose-reading-lg text-ink">
                Child Arise Tennessee is dedicated to children and families affected by parental incarceration — because no child should carry that weight alone.
              </p>
            </div>
            <div className="prose-reading prose-stack max-w-[36rem]">
              <p>
                Through trauma-informed care, mentorship, education, and community connection, we work alongside schools, caregivers, and partner organizations to help children build resilience and thrive.
              </p>
              <p>
                We grow thoughtfully and intentionally — expanding programs as partnerships and capacity allow, always prioritizing meaningful support over duplicating existing services.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about" className="btn-ghost">
                Our story, leadership, and values
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="photo-wrap relative aspect-[4/3] lg:aspect-[5/4] bg-paper-alt">
              <Image
                src="/images/heronew.webp"
                alt="Mentorship and community support in action"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <p className="font-sans text-sm text-ink-soft mt-3 max-w-md">
              Community programs connecting children with mentorship, support, and belonging.
            </p>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

export default AboutSection;
