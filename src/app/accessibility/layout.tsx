import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Child Arise Tennessee's commitment to web accessibility. Learn about our efforts to ensure our website is accessible to all users.",
  keywords: [
    "accessibility statement",
    "web accessibility",
    "ada compliance",
    "wcag guidelines",
    "inclusive design",
    "child arise tennessee accessibility",
    "assistive technology",
    "disability access"
  ],
  openGraph: {
    title: "Accessibility Statement | Child Arise Tennessee",
    description: "Learn about our commitment to making our website accessible to all users.",
    url: "/accessibility",
    images: [
      {
        url: "/images/accessibility-og.jpg",
        width: 1200,
        height: 630,
        alt: "Accessibility Statement - Child Arise Tennessee",
      },
    ],
  },
  twitter: {
    title: "Accessibility Statement | Child Arise Tennessee",
    description: "Learn about our commitment to making our website accessible to all users.",
    images: ["/images/accessibility-twitter.jpg"],
  },
};

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 