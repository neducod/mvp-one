import { BookOpenCheck, Flag, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const principles = [
  {
    icon: HeartHandshake,
    title: "Venting is welcome, harm is not",
    body: "Say how you feel. Targeting, harassing, or exposing other people is against the rules.",
  },
  {
    icon: Flag,
    title: "Report what crosses a line",
    body: "Any post can be reported so moderators can review it and act when needed.",
  },
  {
    icon: BookOpenCheck,
    title: "The rules are written down",
    body: "Our guidelines are short and plain, so you always know what is expected.",
  },
];

export function Principles() {
  return (
    <section aria-labelledby="principles-title" className="bg-lavender-50 py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="principles-title" className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Anonymous, but not anything goes
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
            Not having your name attached makes it easier to be honest. A few shared rules make it safer to be honest
            together.
          </p>
          <Button href="/guidelines" variant="secondary" className="mt-8">
            Read the community guidelines
          </Button>
        </div>

        <ul className="divide-y divide-lavender-200 lg:col-span-7">
          {principles.map((p) => (
            <li key={p.title} className="flex gap-5 py-6 first:pt-0 last:pb-0">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-lavender-700">
                <p.icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}