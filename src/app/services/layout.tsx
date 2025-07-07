import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive, trauma-informed support services for children and families affected by parental incarceration including counseling, mentorship, education, and family connection programs.",
  keywords: [
    "child counseling services",
    "family support programs",
    "mentorship programs",
    "academic support",
    "family connection services",
    "trauma-informed care",
    "youth programs nashville",
    "incarceration support services"
  ],
  openGraph: {
    title: "Our Services | Child Arise Tennessee",
    description: "Comprehensive, trauma-informed support for children and families—delivered with compassion, expertise, and a commitment to lasting impact.",
    url: "/services",
    images: [
      {
        url: "/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Child Arise Tennessee Services",
      },
    ],
  },
  twitter: {
    title: "Our Services | Child Arise Tennessee",
    description: "Comprehensive, trauma-informed support for children and families—delivered with compassion, expertise, and a commitment to lasting impact.",
    images: ["/images/services-twitter.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 