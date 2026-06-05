"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn, FadeInSection } from "@/components/ui/FadeIn";

const services = [
  {
    title: "Emotional & Mental Health Support",
    description:
      "Child Arise Tennessee is building a trauma-informed approach to emotional and mental health support for children impacted by parental incarceration. Rather than providing clinical services directly, we work to identify needs, reduce barriers, and connect children and families to appropriate, trusted mental health resources through schools and community partners.",
    features: [
      "Connection to individual counseling through partner providers",
      "Referral to group-based therapeutic supports",
      "Collaboration with school-based mental health teams",
      "Crisis support coordination through established community resources",
    ],
    image: "/images/bethanyimages/IMG_0273.webp",
  },
  {
    title: "Mentorship & Life Skills",
    description:
      "We develop mentorship and life-skills programming centered on consistent relationships, positive role models, and personal growth. These offerings are designed to be implemented in partnership with schools and community organizations as funding and infrastructure allow.",
    features: [
      "Group-based shared experience opportunities",
      "Mentorship programming (in development)",
      "Life skills and resilience workshops",
      "Youth leadership development opportunities",
    ],
    image: "/images/pexels-li-abasov-1056408160-20467027.webp",
  },
  {
    title: "Academic & College Support",
    description:
      "We support children's academic success by helping families and schools identify gaps, navigate systems, and access existing educational resources. Our role focuses on advocacy, coordination, and partnership rather than direct instruction.",
    features: [
      "Academic support coordination and referrals",
      "College and career readiness guidance (in partnership)",
      "Educational advocacy in collaboration with schools",
      "Scholarship and resource navigation assistance",
    ],
    image: "/images/bethanyimages/IMG_3643.webp",
  },
  {
    title: "Family Connection Services",
    description:
      "Maintaining healthy family connections is critical for children impacted by incarceration. We explore and develop supportive strategies — in partnership with existing service providers — that help families stay connected and supported.",
    features: [
      "Support for virtual visitation access (through partners)",
      "Transportation coordination and resource referrals",
      "Family bonding and engagement opportunities",
      "Communication support and guidance",
    ],
    image: "/images/therapy.webp",
  },
  {
    title: "Caregiver & Household Support",
    description:
      "Caregivers are essential to a child's stability and success. Our model prioritizes caregiver support through connection, information sharing, and access to trusted community resources.",
    features: [
      "Caregiver support gatherings (as available)",
      "Resource navigation and referrals",
      "Community connection and partnership building",
      "Family-strengthening education and opportunities",
    ],
    image: "/images/bethanyimages/IMG_1078.webp",
  },
  {
    title: "Enrichment & Recreation",
    description:
      "We help children experience joy, creativity, and belonging. Enrichment opportunities complement academic and emotional support and are offered through partnerships and special initiatives as capacity allows.",
    features: [
      "Seasonal enrichment opportunities",
      "Creative and expressive activities (partner-led)",
      "Outdoor and recreational experiences",
      "Youth leadership and engagement opportunities",
    ],
    image: "/images/bethanyimages/IMG_1094.webp",
  },
];

export default function ServicesPage() {
  return (
    <article>
      <PageHero
        title="Our services"
        subtitle="Comprehensive, trauma-informed support for children and families — delivered with compassion, expertise, and a commitment to lasting impact."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Request support
          </Link>
          <Link href="/get-involved" className="btn-ghost">
            Get involved
          </Link>
        </div>
      </PageHero>

      <FadeInSection className="editorial-section bg-paper-alt section-divider">
        <div className="section-container space-y-24 md:space-y-32">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FadeIn
                key={service.title}
                delay={idx * 80}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start ${!isEven ? '' : ''}`}
              >
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:col-start-8 lg:order-2'}`}>
                  <div className="photo-wrap relative aspect-[4/3] bg-paper-deep">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-6 ${isEven ? 'lg:col-start-7 lg:order-2' : 'lg:col-start-1 lg:order-1'}`}>
                  <span className="section-label">{String(idx + 1).padStart(2, '0')}</span>
                  <h2 className="mb-6">{service.title}</h2>
                  <p className="prose-reading mb-8">{service.description}</p>
                  <ul className="space-y-2 font-sans text-[0.9375rem] text-ink-muted">
                    {service.features.map((feature) => (
                      <li key={feature} className="pl-4 border-l border-border-light">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </FadeInSection>

      <FadeInSection className="tone-accent section-divider">
        <div className="section-container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="section-label-light">Next steps</span>
              <h2 className="text-paper mb-4 max-w-[22ch]">
                Growing with care, accountability, and community
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
                Child Arise Tennessee expands programs as partnerships, funding, and infrastructure
                allow — always with the goal of meaningful, sustainable support. If your family,
                school, or organization needs help, we want to hear from you.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href="/contact" className="btn-primary-light text-center justify-center">
                Request support
              </Link>
              <Link href="/get-involved" className="btn-ghost-light text-center justify-center">
                Get involved
              </Link>
              <Link href="/donate" className="font-sans text-sm font-semibold text-white/70 hover:text-white transition-colors text-center py-2">
                Support our programs →
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
    </article>
  );
}
