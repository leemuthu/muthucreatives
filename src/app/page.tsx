import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ResultsMarquee from "@/components/ResultsMarquee";
import ServicesSection from "@/components/home/ServicesSection";
import WorkSection from "@/components/home/WorkSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Muthu Creatives — Custom Websites & Web Apps That Convert | Houston, TX",
  description:
    "We build sites that convert. Custom websites, web apps, and automations for businesses serious about growth — designed and coded from scratch in Houston, TX.",
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
      <CtaBanner
        title="Ready when you are."
        subtitle="Book a free 20-minute call with Lee. You'll leave with straight answers about scope, timeline, and price — whether or not we work together."
      />
    </>
  );
}
