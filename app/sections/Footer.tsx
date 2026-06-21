"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-[#E1E0CC]">
          ShowMe <span className="text-primary">Web & App</span>
        </Link>
        <div className="flex items-center gap-8 text-sm text-primary/70">
          <Link href="/onboarding" className="hover:text-[#E1E0CC] transition-colors">Brief</Link>
          <a href="#work" className="hover:text-[#E1E0CC] transition-colors">Work</a>
          <a href="#pricing" className="hover:text-[#E1E0CC] transition-colors">Pricing</a>
          <a href="#about" className="hover:text-[#E1E0CC] transition-colors">About</a>
          <a href="mailto:info@shwme.app" className="hover:text-[#E1E0CC] transition-colors">info@shwme.app</a>
        </div>
        <p className="text-xs text-primary/40">© 2026 ShowMe Web & App. All rights reserved.</p>
      </div>
    </footer>
  );
}
