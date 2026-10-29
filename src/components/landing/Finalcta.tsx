import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="py-20 sm:py-24">
      <Container>
        <div className="rounded-[2rem] bg-lavender-800 px-6 py-14 text-center sm:px-12 sm:py-20">
          <h2 id="cta-title" className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Ready when you are.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-lavender-200">
            Choose a handle, pick an avatar, and write the first thing that comes to mind.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <Button href="/signup" variant="light" size="lg">
              Create your handle
            </Button>
            <Link href="/login" className="text-sm text-lavender-200 underline underline-offset-4 hover:text-white">
              I already have a handle
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}