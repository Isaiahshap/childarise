import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Child Arise Tennessee's privacy policy. Learn how we protect and handle your personal information and data.",
  keywords: [
    "privacy policy",
    "data protection",
    "child arise tennessee privacy",
    "personal information",
    "data security",
    "nonprofit privacy",
    "family services privacy"
  ],
  openGraph: {
    title: "Privacy Policy | Child Arise Tennessee",
    description: "Learn how Child Arise Tennessee protects and handles your personal information and data.",
    url: "/privacy",
    images: [
      {
        url: "/images/privacy-og.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Child Arise Tennessee",
      },
    ],
  },
  twitter: {
    title: "Privacy Policy | Child Arise Tennessee",
    description: "Learn how Child Arise Tennessee protects and handles your personal information and data.",
    images: ["/images/privacy-twitter.jpg"],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 