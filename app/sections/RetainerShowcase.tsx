"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RETAINER, formatRetainerPrice } from "../onboarding/questions";

const pillars = [
  {
    title: "IT & tech support",
    summary: "Your on-call tech team for every tool you run — without the six-figure salary.",
    items: [
      "Email, cloud & productivity tools (Microsoft 365, Google Workspace, etc.)",
      "SaaS, CRM & business software admin",
      "Device & software troubleshooting",
      "Website, hosting, domains & integrations",
      "Security patches, backups & proactive monitoring",
    ],
  },
  {
    title: "Team & admin onboarding",
    summary: "New hires productive from day one — no IT backlog.",
    items: [
      "Email, accounts, devices & permissions",
      "Shared drives, groups & calendar setup",
      "Agency / company admin workflows",
      "Vendor & contractor IT coordination",
    ],
  },
  {
    title: "Social & digital marketing",
    summary: "Ongoing management on the retainer — account setup is a separate add-on.",
    items: [
      "Posting, scheduling & content creation",
      "Captions, graphics & campaign ideas",
      "Digital marketing support & monthly reporting",
      "Social account setup available as +$250 add-on (includes 1 month management)",
    ],
  },
];

export function RetainerShowcase() {
  const annualTotal = (RETAINER.price * 12).toLocaleString("en-US");
  const perDay = Math.round(RETAINER.price / 30);

  return (
    <motion.div
      className="mt-6 md:mt-10"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[#101010]">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(222,219,200,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative p-6 sm:p-8 lg:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-primary mb-3">
                {RETAINER.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E1E0CC] tracking-tight mb-3">
                Your IT manager, tech support & marketing team —{" "}
                <span className="text-primary">{formatRetainerPrice()}/month</span>
              </h3>
              <p className="text-primary/70 text-sm sm:text-base leading-relaxed mb-4">
                {RETAINER.valueHeadline} {RETAINER.savingsNote}
              </p>
              <p className="text-sm text-primary/55 leading-relaxed border-l-2 border-primary/30 pl-4">
                {RETAINER.roiNote}
              </p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-4xl sm:text-5xl font-bold text-[#E1E0CC]">
                {formatRetainerPrice()}
              </p>
              <p className="text-sm text-primary/60 mt-1">/month · cancel anytime</p>
              <p className="text-xs text-primary/50 mt-2">${annualTotal}/year</p>
              <p className="text-xs text-primary/45 mt-1">Less than ${perDay}/day</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
            {RETAINER.comparisons.map((row) => (
              <div
                key={row.label}
                className="rounded-xl px-4 py-3 border border-white/[0.08] bg-black/30"
              >
                <p className="text-[10px] uppercase tracking-wider text-primary/50 mb-1">{row.label}</p>
                <p className="text-sm font-semibold text-[#E1E0CC]/80 line-through decoration-primary/30">
                  {row.value}
                </p>
              </div>
            ))}
            <div className="rounded-xl px-4 py-3 border border-primary/40 bg-primary/10 sm:col-span-2 lg:col-span-1">
              <p className="text-[10px] uppercase tracking-wider text-primary/70 mb-1">ShowMe Retainer</p>
              <p className="text-sm font-bold text-primary">
                {formatRetainerPrice()}/mo
              </p>
              <p className="text-[10px] text-primary/60 mt-0.5">${annualTotal}/yr</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/[0.08] bg-black/25 p-5"
              >
                <h4 className="text-base font-bold text-[#E1E0CC] mb-1">{pillar.title}</h4>
                <p className="text-xs text-primary/55 mb-4">{pillar.summary}</p>
                <ul className="space-y-2">
                  {pillar.items.map((item) => (
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
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 mb-8">
            <p className="text-sm font-semibold text-[#E1E0CC] mb-2">Why businesses switch to the retainer</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-primary/75">
              {RETAINER.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <p className="text-sm text-primary/60 max-w-xl">
              {RETAINER.perDayNote} Priority 24-hour response. Built for agencies, clinics,
              startups, and growing teams who can&apos;t afford downtime — or a bad hire.
            </p>
            <Link
              href="/onboarding"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shrink-0"
            >
              Start retainer — {formatRetainerPrice()}/mo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
