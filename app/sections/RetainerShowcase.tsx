"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const RETAINER_PRICE = 400;

const pillars = [
  {
    title: "IT & tech support",
    summary: "Your on-call tech team for every tool you run — without the salary.",
    items: [
      "Email, cloud & productivity tools (Microsoft 365, Google Workspace, etc.)",
      "SaaS, CRM & business software admin",
      "Device & software troubleshooting",
      "Website, hosting, domains & integrations",
      "Security patches, backups & monitoring",
    ],
  },
  {
    title: "Team & admin onboarding",
    summary: "New hires set up right from day one.",
    items: [
      "Email, accounts, devices & permissions",
      "Shared drives, groups & calendar setup",
      "Agency / company admin workflows",
      "Vendor & contractor IT coordination",
    ],
  },
  {
    title: "Social & digital marketing",
    summary: "Your public face — managed and consistent.",
    items: [
      "Social page setup & profile optimization",
      "Posting, scheduling & content creation",
      "Captions, graphics & campaign ideas",
      "Digital marketing support & monthly reporting",
    ],
  },
];

const comparisons = [
  { label: "In-house IT manager", value: "$60k–$100k/yr" },
  { label: "Break-fix IT consultant", value: "$150–$250/hr" },
  { label: "Social media agency", value: "$1k–$3k/mo" },
  { label: "ShowMe Retainer", value: `$${RETAINER_PRICE}/mo`, highlight: true },
];

export function RetainerShowcase() {
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
                Monthly retainer
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E1E0CC] tracking-tight mb-3">
                Your IT manager, tech support & marketing team —{" "}
                <span className="text-primary">${RETAINER_PRICE}/month</span>
              </h3>
              <p className="text-primary/70 text-sm sm:text-base leading-relaxed">
                Most businesses pay{" "}
                <strong className="text-[#E1E0CC] font-semibold">$60,000–$100,000 a year</strong>{" "}
                for a single IT manager — plus benefits, tools, and downtime when they&apos;re sick
                or on leave. For{" "}
                <strong className="text-[#E1E0CC] font-semibold">
                  ${(RETAINER_PRICE * 12).toLocaleString()}/year
                </strong>
                , you get ongoing support for all your business tech — email, cloud apps, devices,
                SaaS tools, websites, team onboarding, social media, and digital marketing — like
                hiring three roles, not one.
              </p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-4xl sm:text-5xl font-bold text-[#E1E0CC]">${RETAINER_PRICE}</p>
              <p className="text-sm text-primary/60 mt-1">/month · cancel anytime</p>
              <p className="text-xs text-primary/45 mt-2">Less than ${Math.round(RETAINER_PRICE / 30)}/day</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {comparisons.map((row) => (
              <div
                key={row.label}
                className={`rounded-xl px-4 py-3 border ${
                  row.highlight
                    ? "border-primary/40 bg-primary/10"
                    : "border-white/[0.08] bg-black/30"
                }`}
              >
                <p className="text-[10px] uppercase tracking-wider text-primary/50 mb-1">{row.label}</p>
                <p
                  className={`text-sm font-semibold ${
                    row.highlight ? "text-primary" : "text-[#E1E0CC]/80 line-through decoration-primary/30"
                  }`}
                >
                  {row.value}
                </p>
              </div>
            ))}
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

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <p className="text-sm text-primary/60 max-w-xl">
              Priority support with 24-hour response. Best for agencies, clinics, startups, and
              small teams who need someone watching their tech — and their brand — every month.
            </p>
            <Link
              href="/onboarding"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shrink-0"
            >
              Start retainer — ${RETAINER_PRICE}/mo
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
