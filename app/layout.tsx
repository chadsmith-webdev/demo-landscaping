import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BUSINESS } from "@/lib/business";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://summithomeremodeling.com"),
  title: {
    default: "Summit Home Remodeling | Landscaping Services in Siloam Springs, AR",
    template: "%s | Summit Home Remodeling",
  },
  description:
    "Siloam Springs' premier landscaping company. Lawn care, hardscaping, irrigation systems, and garden design serving Benton County and NW Arkansas since 2011.",
  keywords: [
    "landscaping Siloam Springs AR",
    "lawn care Siloam Springs",
    "hardscaping Northwest Arkansas",
    "irrigation systems Benton County",
    "landscape design Siloam Springs",
    "Summit Home Remodeling",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://summithomeremodeling.com",
    siteName: BUSINESS.name,
    title: "Summit Home Remodeling | Landscaping in Siloam Springs, AR",
    description:
      "Siloam Springs' most trusted landscaping company. Serving Benton County since 2011.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Summit Home Remodeling" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://summithomeremodeling.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  "@id": "https://summithomeremodeling.com/#business",
  name: BUSINESS.name,
  description:
    "Professional landscaping services including lawn care, hardscaping, irrigation systems, and garden design serving Siloam Springs, AR and surrounding communities in Northwest Arkansas.",
  url: "https://summithomeremodeling.com",
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  foundingDate: BUSINESS.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Siloam Springs", containedIn: { "@type": "State", name: "Arkansas" } },
    { "@type": "City", name: "Gentry", containedIn: { "@type": "State", name: "Arkansas" } },
    { "@type": "City", name: "Decatur", containedIn: { "@type": "State", name: "Arkansas" } },
    { "@type": "City", name: "Gravette", containedIn: { "@type": "State", name: "Arkansas" } },
    { "@type": "City", name: "Cave Springs", containedIn: { "@type": "State", name: "Arkansas" } },
    { "@type": "City", name: "Bentonville", containedIn: { "@type": "State", name: "Arkansas" } },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "140",
    bestRating: "5",
  },
  sameAs: [BUSINESS.social.facebook, BUSINESS.social.instagram, BUSINESS.social.google],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
