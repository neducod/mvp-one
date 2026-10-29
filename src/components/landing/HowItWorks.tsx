import { Heart, Lock, PenLine, UserRound } from "lucide-react";
import { Container } from "@/src/components/ui/Container";

// These really are a sequence, so they read as steps joined by a line.
const steps = [
  {
    icon: UserRound,
    title: "Choose a handle and avatar",
    body: "You never use your real name. Pick an anime-style avatar and a handle that is yours here.",
  },
  {
    icon: PenLine,
    title: "Write what you need to",
    body: "Vent about your day, write something longer, or share a small win. Add a tag so readers know what to expect.",
  },
  {
    icon: Heart,
    title: "Get a little company",
    body: "Others can like your post and reply. Reports and community guidelines help keep the space kind.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="border-y border-line bg-white py-20 sm:py-24">
      <Container>
        <h2 id="how-title" className="max-w-xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          How Vapp works
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              {/* connector line between steps (desktop only) */}
              {i < steps.length - 1 && (
                <span aria-hidden className="absolute left-14 right-[-1rem] top-6 hidden h-px bg-line md:block" />
              )}
              <span className="relative inline-flex size-12 items-center justify-center rounded-full bg-lavender-100 text-lavender-700">
                <step.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col gap-4 rounded-card bg-lavender-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-medium text-ink">Visitors can read up to ten posts.</p>
            <p className="mt-1 text-ink-soft">Create a handle to keep reading and to write your own.</p>
          </div>
          {/* Ten filled dots, then a lock: a quick picture of the visitor limit. */}
          <div aria-hidden className="flex items-center gap-1.5">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i} className="size-3 rounded-full bg-lavender-500" />
            ))}
            <span className="ml-1 inline-flex size-7 items-center justify-center rounded-full border border-dashed border-lavender-400 text-lavender-700">
              <Lock className="size-3.5" />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}