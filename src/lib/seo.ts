import type { Metadata } from "next";
import { site } from "@/lib/site";

// Canonical and Open Graph URLs for a single page. Both must reflect the
// page's own path (resolved against metadataBase), not the site root, so they
// live together here to stay in sync. Next.js replaces the openGraph object
// per page rather than deep-merging it, so this returns the full set (image,
// site name, locale) that would otherwise only come from the root layout.
export function pageSeo(path: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Muthu Creatives - We build sites that convert",
        },
      ],
    },
  };
}
