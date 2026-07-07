import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import CaseStudyCard from "@/components/CaseStudyCard";
import JsonLd from "@/components/JsonLd";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portfolio | Web Design Case Studies",
  description:
    "Six case studies from Muthu Creatives: landing pages, business websites, web apps and automations, each with the result it produced. Houston, TX.",
  ...pageSeo("/portfolio"),
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Muthu Creatives Portfolio",
  url: `${site.url}/portfolio`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: caseStudies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/portfolio/${study.slug}`,
      name: study.name,
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/portfolio` },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Work"
        title={
          <>
            Projects, with <span className="text-flare">receipts.</span>
          </>
        }
        lede="Pretty screenshots don't pay your invoices. Every case study here ends the same way: with what the work actually did for the business. Bookings taken, hours saved, pages that finally rank."
      />

      <div className="mx-auto max-w-7xl px-5 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={(index % 3) * 0.08} className="h-full">
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBanner title="Your business could be case study seven." />
    </>
  );
}
