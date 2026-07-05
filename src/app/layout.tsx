import type { Metadata } from "next";
import { Archivo, Newsreader, Space_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollProgress from "@/components/ScrollProgress";
import BookingModalProvider from "@/components/BookingModal";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: "italic",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Muthu Creatives | Websites, Web Apps, Automations & SEO | Houston, TX",
    template: "%s | Muthu Creatives",
  },
  description:
    "Houston web design agency building custom websites, web apps, automations and SEO that convert. No templates. Led hands-on by founder Lee Muthu, serving clients nationwide.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Muthu Creatives - We build sites that convert",
    },
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
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
    "Web design agency building custom websites, web apps and automations for small and mid-sized businesses. Based in Houston, TX, serving clients nationwide. Every engagement is led personally by founder Lee Muthu.",
  founder: {
    "@type": "Person",
    name: site.founder,
    jobTitle: "Founder",
    image: `${site.url}/about/lee-muthu.jpg`,
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
      className={`${archivo.variable} ${newsreader.variable} ${spaceMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={businessSchema} />
        <BookingModalProvider>
          <ScrollProgress />
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </BookingModalProvider>
      </body>
    </html>
  );
}
