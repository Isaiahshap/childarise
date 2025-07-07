import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Child Arise Tennessee. Contact us for program information, support services, volunteer opportunities, or partnership inquiries.",
  keywords: [
    "contact child arise tennessee",
    "nashville family services",
    "program inquiries",
    "volunteer opportunities",
    "partnership opportunities",
    "support services contact",
    "family assistance nashville",
    "nonprofit contact"
  ],
  openGraph: {
    title: "Contact Us | Child Arise Tennessee",
    description: "Ready to learn more about our programs or how you can get involved? We'd love to hear from you.",
    url: "/contact",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Child Arise Tennessee",
      },
    ],
  },
  twitter: {
    title: "Contact Us | Child Arise Tennessee",
    description: "Ready to learn more about our programs or how you can get involved? We'd love to hear from you.",
    images: ["/images/contact-twitter.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 