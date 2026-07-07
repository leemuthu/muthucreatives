import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import ResultsMarquee from "@/components/ResultsMarquee";
import ServicesSection from "@/components/home/ServicesSection";
import WorkSection from "@/components/home/WorkSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import HomeContact from "@/components/home/HomeContact";
import ScrollPanel from "@/components/ScrollPanel";

export const metadata: Metadata = {
  title: "Muthu Creatives | Custom Websites & Web Apps That Convert | Houston, TX",
  description:
    "We build sites that convert. Custom websites, web apps and automations, designed and coded from scratch in Houston, TX. No templates, fixed quotes, founder-led.",
  ...pageSeo("/"),
};

export default function HomePage() {
  return (
    <>
      <ScrollPanel index={1} className="bg-night">
        <Hero />
        <ResultsMarquee />
      </ScrollPanel>
      <ScrollPanel index={2} className="bg-paper">
        <ServicesSection />
      </ScrollPanel>
      <ScrollPanel index={3} className="bg-night">
        <WorkSection />
      </ScrollPanel>
      <ScrollPanel index={4} className="bg-paper">
        <ProcessSection />
      </ScrollPanel>
      <ScrollPanel index={5} className="bg-night">
        <TestimonialsSection />
      </ScrollPanel>
      <ScrollPanel index={6} className="bg-paper">
        <FaqSection />
      </ScrollPanel>
      <ScrollPanel index={7} className="bg-night" isLast>
        <HomeContact />
      </ScrollPanel>
    </>
  );
}
