import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Child Arise Tennessee's mission to support children and families affected by parental incarceration through comprehensive, trauma-informed programs.",
  keywords: [
    "about child arise tennessee",
    "mission",
    "vision",
    "family support organization",
    "nonprofit nashville",
    "parental incarceration support",
    "trauma-informed care",
    "family reunification"
  ],
  openGraph: {
    title: "About Child Arise Tennessee | Supporting Families",
    description: "Discover our mission to provide hope, healing, and opportunity for children and families affected by parental incarceration.",
    url: "/about",
    images: [
      {
        url: "/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Child Arise Tennessee About Us",
      },
    ],
  },
  twitter: {
    title: "About Child Arise Tennessee | Supporting Families",
    description: "Discover our mission to provide hope, healing, and opportunity for children and families affected by parental incarceration.",
    images: ["/images/about-twitter.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 