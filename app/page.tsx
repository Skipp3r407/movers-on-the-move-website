import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SectionDivider } from "@/components/sections/SectionDivider";

export const metadata: Metadata = {
  title: {
    absolute:
      "Movers On The Move | Moving Labor & Delivery Services in Orlando, FL",
  },
  description:
    "Movers On The Move offers reliable moving labor and delivery services in Orlando, FL. Call today for local moving help, furniture delivery, and loading or unloading assistance.",
  keywords: [
    "movers in Orlando FL",
    "moving labor Orlando",
    "local movers Orlando",
    "furniture delivery Orlando FL",
    "loading and unloading services Orlando",
    "apartment movers Orlando",
    "moving help near me Orlando",
    "Central Florida moving help",
  ],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <SectionDivider variant="blue" />
      <ServicesPreview />
      <WhyChooseUs />
      <HowItWorks />
      <SectionDivider variant="orange" />
      <AboutPreview />
      <TestimonialsSection limit={3} />
      <ServiceAreasSection />
      <CTABanner />
      <ContactSection />
    </>
  );
}
