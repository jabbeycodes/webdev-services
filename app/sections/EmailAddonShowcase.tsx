"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const EMAIL_ADDON_PRICE = 50;

const includes = [
  "Professional email on your domain (hello@yourbrand.com)",
  "Google Workspace, Microsoft 365, Zoho, or host email",
  "DNS & mailbox configuration",
  "Send/receive tested before handoff",
];

export function EmailAddonShowcase() {
  return (
    <motion.div
      className="mt-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="rounded-3xl border border-white/[0.1] bg-[#101010] p-6 sm:p-8 h-full">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-5">
          <div className="max-w-xl">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-primary/80 mb-3">
              Optional add-on
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#E1E0CC] tracking-tight mb-2">
              Custom business email setup
            </h3>
            <p className="text-primary/70 text-sm leading-relaxed">
              Look professional from day one —{" "}
              <strong className="text-[#E1E0CC] font-semibold">hello@yourbrand.com</strong> instead
              of a personal Gmail. We configure your mailboxes and DNS so everything works.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-3xl sm:text-4xl font-bold text-[#E1E0CC]">+${EMAIL_ADDON_PRICE}</p>
            <p className="text-sm text-primary/60 mt-1">one-time add-on</p>
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 gap-2 mb-5">
          {includes.map((item) => (
            <li key={item} className="text-sm text-primary/80 flex items-start gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                className="mt-0.5 text-primary shrink-0"
                fill="none"
              >
                <path
                  d="M3 8.5l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors text-sm"
        >
          Add business email in project brief
        </Link>
      </div>
    </motion.div>
  );
}
