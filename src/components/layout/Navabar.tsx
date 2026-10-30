"use client"; // needs state (mobile menu) and the current URL (active link)

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { cn } from "@/src/lib/cn";

const links = [
  { href: "/feed", label: "Feed" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/guidelines", label: "Guidelines" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-lavender-100 hover:text-ink",
                pathname === link.href ? "bg-lavender-100 text-ink" : "text-ink-soft",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="/login" variant="ghost" size="sm">
            Log in
          </Button>
          <Button href="/signup" size="sm">
            Sign up
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-ink hover:bg-lavender-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </Container>

      <div id="mobile-menu" hidden={!open} className="border-t border-line bg-paper md:hidden">
        <Container className="flex flex-col gap-1 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-ink-soft hover:bg-lavender-100 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Button href="/login" variant="secondary" onClick={() => setOpen(false)}>
              Log in
            </Button>
            <Button href="/signup" onClick={() => setOpen(false)}>
              Sign up
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}