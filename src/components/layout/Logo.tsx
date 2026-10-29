import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="Vapp home" className="inline-flex items-center gap-2">
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <path
          d="M16 3C8.8 3 3 8.1 3 14.4c0 3.5 1.8 6.6 4.6 8.7L6.5 29l6-3.1c1.1.3 2.3.4 3.5.4 7.2 0 13-5.1 13-11.9S23.2 3 16 3Z"
          className="fill-lavender-600"
        />
        <circle cx="16" cy="14.5" r="2.6" fill="#fff" />
      </svg>
      <span className="font-display text-2xl font-semibold tracking-tight text-ink">vapp</span>
    </Link>
  );
}