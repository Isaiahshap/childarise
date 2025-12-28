"use client";

import { motion, useInView } from "framer-motion";
import { Heart, Users, Video, GraduationCap, Home, Calendar } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const services = [
  {
    icon: Heart,
    title: "Emotional & Mental Health Support",
    subtitle: "Trauma-informed care for healing",
    description:
      "Child Arise Tennessee is building a trauma-informed approach to emotional and mental health support for children impacted by parental incarceration. Rather than providing clinical services directly, we work to identify needs, reduce barriers, and connect children and families to appropriate, trusted mental health resources through schools and community partners.",
    features: [
      "Connection to individual counseling through partner providers",
      "Referral to group-based therapeutic supports",
      "Collaboration with school-based mental health teams",
      "Crisis support coordination through established community resources",
    ],
    impact: "Outcome: Increased emotional regulation, coping skills, and resilience over time",
    image: "/images/1 (2).webp",
  },
  {
    icon: Users,
    title: "Mentorship & Life Skills",
    subtitle: "Building resilience through connection",
    description:
      "Child Arise is developing mentorship and life-skills programming centered on consistent relationships, positive role models, and personal growth. These offerings are designed to be implemented in partnership with schools and community organizations as funding and infrastructure allow.",
    features: [
      "Group-based shared experience opportunities",
      "Mentorship programming (in development)",
      "Life skills and resilience workshops",
      "Youth leadership development opportunities",
    ],
    impact: "Outcome: Increased confidence, self-esteem, and long-term life skills",
    image: "/images/2 (1).webp",
  },
  {
    icon: GraduationCap,
    title: "Academic & College Support",
    subtitle: "Opening pathways to success",
    description:
      "Child Arise supports children's academic success by helping families and schools identify gaps, navigate systems, and access existing educational resources. Our role focuses on advocacy, coordination, and partnership rather than direct instruction.",
    features: [
      "Academic support coordination and referrals",
      "College and career readiness guidance (in partnership)",
      "Educational advocacy in collaboration with schools",
      "Scholarship and resource navigation assistance",
    ],
    impact: "Outcome: Improved educational engagement and long-term academic pathways",
    image: "/images/3 (1).webp",
  },
  {
    icon: Video,
    title: "Family Connection Services",
    subtitle: "Strengthening family bonds",
    description:
      "Maintaining healthy family connections is critical for children impacted by incarceration. Child Arise is exploring and developing supportive strategies — in partnership with existing service providers — that help families stay connected and supported.",
    features: [
      "Support for virtual visitation access (through partners)",
      "Transportation coordination and resource referrals",
      "Family bonding and engagement opportunities",
      "Communication support and guidance",
    ],
    impact: "Outcome: Stronger family relationships and sustained connection",
    image: "/images/4 (1).webp",
  },
  {
    icon: Home,
    title: "Caregiver & Household Support",
    subtitle: "Supporting the whole family",
    description:
      "Child Arise recognizes that caregivers are essential to a child's stability and success. Our model prioritizes caregiver support through connection, information sharing, and access to trusted community resources.",
    features: [
      "Caregiver support gatherings (as available)",
      "Resource navigation and referrals",
      "Community connection and partnership building",
      "Family-strengthening education and opportunities",
    ],
    impact: "Outcome: Increased caregiver confidence and family stability",
    image: "/images/5 (1).webp",
  },
  {
    icon: Calendar,
    title: "Enrichment & Recreation",
    subtitle: "Growing through experiences",
    description:
      "Child Arise is committed to helping children experience joy, creativity, and belonging. Enrichment opportunities are designed to complement academic and emotional support and will be offered through partnerships and special initiatives as capacity allows.",
    features: [
      "Seasonal enrichment opportunities",
      "Creative and expressive activities (partner-led)",
      "Outdoor and recreational experiences",
      "Youth leadership and engagement opportunities",
    ],
    impact: "Outcome: Increased creativity, confidence, and positive identity development",
    image: "/images/hero-bg.png",
  },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-clay-beige">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fern/5 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sunlit-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-earth-green/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="Child Arise Tennessee Logo"
                width={300}
                height={90}
                className="mx-auto h-20 w-auto"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-lato font-bold text-black mb-8">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed mb-8">
              Comprehensive, trauma-informed support for children and families—delivered with compassion, expertise, and a commitment to lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Get Support
              </Button>
              <Button variant="outline" size="lg" href="/donate">
                Support Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alternating Service Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl border border-moss-brown/10 bg-white">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL="/images/hero-bg1.png"
                    />
                  </div>
                </div>
                {/* Text Content */}
                <div className="flex-1 w-full flex flex-col items-start">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-fern/10 p-4 rounded-2xl">
                      <Icon className="w-10 h-10 text-fern" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-lato font-bold text-moss-brown">
                      {service.title}
                    </h2>
                  </div>
                  <h3 className="text-lg text-fern font-semibold mb-2">{service.subtitle}</h3>
                  <p className="text-lg text-moss-brown/80 mb-6 max-w-2xl">
                    {service.description}
                  </p>
                  <ul className="list-disc pl-6 text-moss-brown/90 mb-6 space-y-2 text-base">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="bg-fern/5 rounded-xl p-4 mb-2">
                    <span className="text-fern font-medium text-base">{service.impact}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Closing Statement Section */}
      <section className="py-20 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white/60 rounded-3xl p-8 md:p-12 border border-white/20 shadow-lg relative z-0"
          >
            <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8 max-w-3xl mx-auto">
              Child Arise Tennessee is intentionally growing with care, accountability, and community guidance. Our programs will expand as partnerships, funding, and infrastructure allow — always with the goal of providing meaningful, sustainable support rather than duplicating existing services. We believe thoughtful growth is essential to lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-lato font-bold text-black mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-black/75 mb-8 max-w-2xl mx-auto">
              Your support helps us expand our reach and deepen our impact. Whether you want to donate or get involved, you can help create brighter futures for children and families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/donate">
                Donate Now
              </Button>
              <Button variant="outline" size="lg" href="/get-involved">
                Get Involved
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 