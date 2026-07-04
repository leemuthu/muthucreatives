import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "optional",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Muthu Creatives — Custom Websites & Web Apps | Houston, TX",
    template: "%s | Muthu Creatives",
  },
  description:
    "Houston web design studio building custom websites, web apps, and automations that convert — no templates. Founder-led by Lee Muthu, serving clients nationwide.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  email: site.email,
  description:
    "Web design studio building custom websites, web apps, and automations for small and mid-sized businesses. Based in Houston, TX, serving clients nationwide.",
  founder: {
    "@type": "Person",
    name: site.founder,
    jobTitle: "Founder",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Houston",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "Country", name: "United States" },
  ],
  priceRange: "$500 - $5,000+",
  sameAs: [site.social.instagram, site.social.linkedin, site.social.facebook],
  review: testimonials.map((testimonial) => ({
    "@type": "Review",
    reviewBody: testimonial.text,
    author: {
      "@type": "Person",
      name: testimonial.author,
    },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web design and development services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${site.url}/services/${service.slug}`,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${plexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={businessSchema} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
