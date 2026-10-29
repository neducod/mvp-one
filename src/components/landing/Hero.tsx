import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { HeroComposer } from "./HeroComposer";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <h1
            id="hero-title"
            className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl"
          >
            A quiet place to say what&apos;s been weighing on you.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Vapp is an anonymous space to vent, write, and be heard by people who will never know your name.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/signup" size="lg">
              Start writing
            </Button>
            <Button href="/feed" variant="secondary" size="lg">
              Read the feed
            </Button>
          </div>
          <p className="mt-5 text-sm text-ink-faint">Pick a handle and an avatar. No real name needed.</p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            {/* A single offset plate behind the card gives it depth without extra decoration. */}
            <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-card bg-lavender-100" />
            <HeroComposer />
          </div>
        </div>
      </Container>
    </section>
  );
}