import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeedPreview } from "@/components/landing/FeedPreview";
import { Principles } from "@/components/landing/Principles";
import { FinalCta } from "@/components/landing/FinalCta";

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