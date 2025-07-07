import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Child Arise Tennessee's mission to provide hope, healing, and opportunity for children and families affected by parental incarceration. Every donation makes a lasting impact.",
  keywords: [
    "donate child arise tennessee",
    "support children families",
    "nonprofit donations",
    "parental incarceration support",
    "nashville charity",
    "tax deductible donation",
    "family support donations",
    "children in need"
  ],
  openGraph: {
    title: "Donate | Child Arise Tennessee",
    description: "Your donation provides critical support, services, and hope for children and families when they need it most.",
    url: "/donate",
    images: [
      {
        url: "/images/donate-og.jpg",
        width: 1200,
        height: 630,
        alt: "Donate to Child Arise Tennessee",
      },
    ],
  },
  twitter: {
    title: "Donate | Child Arise Tennessee",
    description: "Your donation provides critical support, services, and hope for children and families when they need it most.",
    images: ["/images/donate-twitter.jpg"],
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 