import { Hero } from "@/src/components/landing/Hero";
import { HowItWorks } from "@/src/components/landing/HowItWorks";
import { FeedPreview } from "@/src/components/landing/FeedPreview";
import { Principles } from "@/src/components/landing/Principles";
import { FinalCta } from "@/src/components/landing/Finalcta";

// The page itself only decides the order of sections.
export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeedPreview />
      <Principles />
      <FinalCta />
    </>
  );
}