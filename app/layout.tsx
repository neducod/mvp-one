import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
// import { Navbar } from "@/components/layout/Navbar";
import { Navbar } from "@/src/components/layout/Navabar";
import { Footer } from "@/src/components/layout/Footer";

// next/font self-hosts these fonts and exposes them as CSS variables,
// which globals.css maps to the `font-sans` and `font-display` utilities.
const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"], display: "swap" });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Vapp: a quiet place to say it", template: "%s | Vapp" },
  description: "Vapp is an anonymous space to vent, write, and be heard. Frontend prototype.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} ${bricolage.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-float"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}