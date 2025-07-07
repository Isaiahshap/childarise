import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Child Arise Tennessee's terms of service and website usage guidelines. Review our terms and conditions for using our website and services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "website terms",
    "child arise tennessee terms",
    "service agreement",
    "usage guidelines",
    "nonprofit terms"
  ],
  openGraph: {
    title: "Terms of Service | Child Arise Tennessee",
    description: "Review Child Arise Tennessee's terms of service and website usage guidelines.",
    url: "/terms",
    images: [
      {
        url: "/images/terms-og.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service - Child Arise Tennessee",
      },
    ],
  },
  twitter: {
    title: "Terms of Service | Child Arise Tennessee",
    description: "Review Child Arise Tennessee's terms of service and website usage guidelines.",
    images: ["/images/terms-twitter.jpg"],
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 