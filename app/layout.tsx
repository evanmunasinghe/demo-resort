import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} — Cliffside Resort in Uluwatu, Bali`,
    template: `%s — ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Bali resort",
    "Uluwatu hotel",
    "cliffside resort Bali",
    "luxury villa Uluwatu",
    "spa resort Bali",
    "beachfront villa",
    "Solace Bay",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} — Cliffside Resort in Uluwatu, Bali`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} — Cliffside Resort in Uluwatu, Bali`,
    description: siteConfig.description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export const viewport: Viewport = {
  themeColor: "#0c1f1a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: siteConfig.fullName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Pantai Suluban No. 8, Pecatu",
    addressLocality: "Uluwatu",
    addressRegion: "Bali",
    postalCode: "80361",
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: -8.8156, longitude: 115.0887 },
  checkinTime: "14:00",
  checkoutTime: "12:00",
  priceRange: "$$$",
  image: `${siteConfig.url}/416527700.jpg`,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Infinity pool" },
    { "@type": "LocationFeatureSpecification", name: "Spa" },
    { "@type": "LocationFeatureSpecification", name: "Beach access" },
    { "@type": "LocationFeatureSpecification", name: "Yoga pavilion" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-2.5 focus:text-sm focus:text-pine-950"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
