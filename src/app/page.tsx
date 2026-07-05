import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ResultsMarquee from "@/components/ResultsMarquee";
import ServicesSection from "@/components/home/ServicesSection";
import WorkSection from "@/components/home/WorkSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import HomeContact from "@/components/home/HomeContact";

export const metadata: Metadata = {
  title: "Muthu Creatives | Custom Websites & Web Apps That Convert | Houston, TX",
  description:
    "We build sites that convert. Custom websites, web apps and automations, designed and coded from scratch in Houston, TX. No templates, fixed prices, founder-led.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ResultsMarquee />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <HomeContact />
    </>
  );
}
