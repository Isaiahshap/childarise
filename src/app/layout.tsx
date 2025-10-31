import type { Metadata } from "next";
import Script from "next/script";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Child Arise Tennessee | Supporting Children of Incarcerated Parents",
    template: "%s | Child Arise Tennessee"
  },
  description: "Providing comprehensive support for children and families impacted by parental incarceration through counseling, mentorship, education, and community connection in Nashville, Tennessee.",
  keywords: [
    "children of incarcerated parents",
    "family support services",
    "youth mentorship",
    "Nashville",
    "Tennessee",
    "counseling services",
    "community support",
    "family reunification"
  ],
  authors: [{ name: "Child Arise Tennessee" }],
  creator: "Child Arise Tennessee",
  publisher: "Child Arise Tennessee",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://childarisetn.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://childarisetn.org",
    siteName: "Child Arise Tennessee",
    title: "Child Arise Tennessee | Supporting Children of Incarcerated Parents",
    description: "Providing comprehensive support for children and families impacted by parental incarceration through counseling, mentorship, education, and community connection.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Child Arise Tennessee - Supporting Children and Families",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Child Arise Tennessee | Supporting Children of Incarcerated Parents",
    description: "Providing comprehensive support for children and families impacted by parental incarceration.",
    images: ["/images/twitter-image.jpg"],
    creator: "@childarisetenn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6C9A74" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XYVSF27L38"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XYVSF27L38');
          `}
        </Script>
        
        <AnnouncementBar />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
