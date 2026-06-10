"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    forWho: "Founders who need to launch fast",
    price: "$600–$950",
    priceNote: "One-time project fee",
    timeline: "Ships in 7 days",
    bestFor: ["New product launch", "Event or campaign page", "Personal brand site"],
    deliverables: [
      "1 custom landing page (up to 8 sections)",
      "Mobile + desktop responsive",
      "Contact form + lead capture",
      "Domain + hosting setup",
      "Google Analytics installed",
      "2 revision rounds",
    ],
    notIncluded: ["Blog", "CMS", "User accounts", "Payments"],
    cta: "Book Starter",
    popular: false,
  },
  {
    name: "Growth",
    forWho: "Businesses ready to scale leads",
    price: "$1,200–$2,500",
    priceNote: "One-time project fee",
    timeline: "Ships in 3–4 weeks",
    bestFor: ["SaaS marketing site", "Agency portfolio", "Course / coaching business"],
    deliverables: [
      "Up to 6 custom pages",
      "Blog with autoblog — AI-generated SEO posts that bring traffic (self-publish optional)",
      "SEO optimization + sitemap",
      "Email capture + newsletter setup",
      "Social sharing (OpenGraph)",
      "Speed optimization (90+ Lighthouse)",
      "3 revision rounds",
    ],
    notIncluded: ["User auth", "Dashboard", "Payments"],
    cta: "Book Growth",
    popular: true,
  },
  {
    name: "Pro",
    forWho: "Teams building real products",
    price: "$3,000–$6,000",
    priceNote: "One-time project fee",
    timeline: "Ships in 4–6 weeks",
    bestFor: ["SaaS MVP", "Marketplace", "Internal tool", "Membership platform"],
    deliverables: [
      "Full-stack web app (Next.js + Supabase)",
      "User authentication (email/social)",
      "Admin dashboard + analytics",
      "Stripe / PayPal payments",
      "Database + API setup",
      "Production hosting on Vercel",
      "Unlimited revisions",
    ],
    notIncluded: ["Mobile app (see Mobile App)", "AI features", "Custom integrations"],
    cta: "Book Pro",
    popular: false,
  },
  {
    name: "Mobile App",
    forWho: "Founders launching on iOS & Android",
    price: "$2,500–$8,000",
    priceNote: "Scoped to your app's complexity",
    timeline: "Ships in 6–10 weeks",
    bestFor: ["Startup MVP", "Marketplace / social app", "Booking or on-demand app"],
    deliverables: [
      "Cross-platform iOS + Android (Flutter)",
      "Custom UI/UX design",
      "Auth + user profiles",
      "Supabase backend + realtime",
      "Push notifications",
      "Payments (Stripe / Paystack)",
      "App Store + Play Store submission",
      "Unlimited revisions",
    ],
    notIncluded: ["Ongoing maintenance (see Retainer)", "Hardware / IoT integrations"],
    cta: "Scope my app",
    popular: false,
  },
  {
    name: "Retainer",
    forWho: "Clients who want ongoing support",
    price: "$400",
    priceNote: "/month, cancel anytime",
    timeline: "Ongoing",
    bestFor: ["Post-launch growth", "Content updates", "Feature additions"],
    deliverables: [
      "Unlimited content updates",
      "Performance monitoring",
      "Monthly analytics report",
      "Small features (2–4 hrs/mo)",
      "Security patches + backups",
      "Priority support (24h response)",
      "Quarterly strategy review",
    ],
    notIncluded: ["Major redesigns", "New apps"],
    cta: "Start Retainer",
    popular: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#E1E0CC]">No surprises. No hidden fees.</h2>
          <p className="text-primary/70 mt-4 max-w-2xl mx-auto">Fixed-price packages. You know exactly what you're paying for before we start.</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`bg-[#101010] rounded-2xl p-6 flex flex-col ${
                tier.popular ? "ring-1 ring-primary/50" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {tier.popular && (
                <div className="mb-3">
                  <span className="text-[10px] font-semibold bg-primary text-black px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#E1E0CC] mb-1">{tier.name}</h3>
                <p className="text-primary/70 text-sm">{tier.forWho}</p>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold text-[#E1E0CC]">{tier.price}</span>
                <p className="text-primary/70 text-sm mt-1">{tier.priceNote}</p>
              </div>

              <div className="mb-4">
                <span className="text-sm text-primary font-medium">{tier.timeline}</span>
              </div>

              <div className="mb-4">
                <p className="text-[10px] font-semibold text-primary/70 uppercase tracking-wider mb-2">Best for</p>
                <ul className="space-y-1">
                  {tier.bestFor.map((item, j) => (
                    <li key={j} className="text-sm text-primary/70">• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 flex-1">
                <p className="text-[10px] font-semibold text-primary/70 uppercase tracking-wider mb-2">What you get</p>
                <ul className="space-y-2">
                  {tier.deliverables.map((d, j) => (
                    <li key={j} className="text-sm text-primary/80 flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 text-primary shrink-0" fill="none">
                        <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {tier.notIncluded.length > 0 && (
                <div className="mb-6">
                  <p className="text-[10px] font-semibold text-primary/40 uppercase tracking-wider mb-2">Not included</p>
                  <ul className="space-y-1">
                    {tier.notIncluded.map((ni, j) => (
                      <li key={j} className="text-sm text-primary/40">• {ni}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href="#contact"
                className={`block text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                  tier.popular
                    ? "bg-primary text-black hover:bg-primary/90"
                    : "bg-[#212121] text-primary hover:bg-[#2a2a2a]"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
