import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "@/src/components/ui/Container";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/feed", label: "Public feed" },
      { href: "/#how-it-works", label: "How it works" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/signup", label: "Sign up" },
      { href: "/login", label: "Log in" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/guidelines", label: "Community Guidelines" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              A quiet place to vent, write, and be heard without using your name.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-semibold text-ink">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-soft hover:text-lavender-700 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 border-t border-line pt-6 text-sm text-ink-faint">
          <p>Vapp is a frontend prototype. Nothing here is saved, and no real accounts exist.</p>
          <p className="mt-1">
            Vapp is not a crisis service. If you are in immediate danger, contact your local emergency services.
          </p>
        </div>
      </Container>
    </footer>
  );
}