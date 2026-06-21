"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const SOCIAL_ADDON_PRICE = 250;

const includes = [
  "Business account creation on your chosen platforms",
  "Profile setup — bio, links, branding, highlights",
  "1 full month of social media management",
  "Posting, scheduling & content for month one",
  "Handoff notes so you can continue solo or on retainer",
];

export function SocialAddonShowcase() {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="rounded-3xl border border-white/[0.1] bg-[#101010] p-6 sm:p-8 lg:p-10 h-full">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-primary/80 mb-3">
              Optional add-on
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#E1E0CC] tracking-tight mb-2">
              Social account creation + 1 month management
            </h3>
            <p className="text-primary/70 text-sm sm:text-base leading-relaxed">
              Add this to any website package. We create your business social profiles, set them up
              to match your brand, and manage them for your{" "}
              <strong className="text-[#E1E0CC] font-semibold">first month</strong> — so you launch
              with a professional social presence, not empty pages.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-3xl sm:text-4xl font-bold text-[#E1E0CC]">
              +${SOCIAL_ADDON_PRICE}
            </p>
            <p className="text-sm text-primary/60 mt-1">one-time add-on</p>
            <p className="text-xs text-primary/45 mt-2">Includes 1 month of management</p>
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 gap-2 mb-6">
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

        <p className="text-xs text-primary/50 mb-6 border-t border-white/[0.06] pt-4">
          After month one, continue with the ${400}/mo retainer for ongoing social, IT, and
          marketing support — or manage accounts yourself.
        </p>

        <Link
          href="/onboarding"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors text-sm"
        >
          Add social setup in project brief
        </Link>
      </div>
    </motion.div>
  );
}
