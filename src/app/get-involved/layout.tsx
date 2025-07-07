import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Join Child Arise Tennessee's mission to support families. Volunteer opportunities, partner with us, or become an advocate for children affected by parental incarceration.",
  keywords: [
    "volunteer child arise tennessee",
    "get involved nashville",
    "family support volunteer",
    "mentorship opportunities",
    "nonprofit volunteer",
    "community partnership",
    "advocate for children",
    "parental incarceration support"
  ],
  openGraph: {
    title: "Get Involved | Child Arise Tennessee",
    description: "Make a difference in the lives of children and families. Discover meaningful ways to get involved with our mission.",
    url: "/get-involved",
    images: [
      {
        url: "/images/volunteer-og.jpg",
        width: 1200,
        height: 630,
        alt: "Get Involved with Child Arise Tennessee",
      },
    ],
  },
  twitter: {
    title: "Get Involved | Child Arise Tennessee",
    description: "Make a difference in the lives of children and families. Discover meaningful ways to get involved with our mission.",
    images: ["/images/volunteer-twitter.jpg"],
  },
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 