import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Portfolio — Web Design Case Studies",
  description:
    "Six case studies from Muthu Creatives: landing pages, business websites, web apps, and automations — each with the concrete result it produced. Houston, TX.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={
          <>
            Projects, with the <em className="text-brass">results</em> attached.
          </>
        }
        lede="Pretty screenshots don't pay your invoices. Every case study here ends the same way — with what the work actually did for the business: bookings taken, hours saved, pages that finally rank."
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
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
