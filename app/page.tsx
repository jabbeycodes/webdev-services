import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    tagline: "Launch fast, look professional",
    price: "$600 — $900",
    timeline: "3–5 days",
    features: [
      "1-page landing site (Next.js + Tailwind)",
      "Mobile-first responsive design",
      "Vercel deployment + custom domain",
      "Contact form + basic SEO",
      "1 round of revisions",
    ],
    cta: "Book Starter",
    popular: false,
  },
  {
    name: "Growth",
    tagline: "Marketing engine that scales",
    price: "$1,500 — $2,500",
    timeline: "1–2 weeks",
    features: [
      "Multi-page marketing site (5–8 pages)",
      "Automated blog pipeline (SEO content)",
      "Analytics + conversion tracking",
      "Supabase CMS for dynamic content",
      "Email capture + newsletter setup",
      "3 rounds of revisions",
    ],
    cta: "Book Growth",
    popular: true,
  },
  {
    name: "Pro",
    tagline: "Full-stack SaaS MVP",
    price: "$3,000 — $5,000",
    timeline: "2–4 weeks",
    features: [
      "Full-stack app (Next.js + Supabase)",
      "Auth + user dashboards",
      "Payments integration (Stripe / Paystack)",
      "Admin panel + analytics",
      "API endpoints + edge functions",
      "Vercel deploy + CI/CD setup",
      "5 rounds of revisions",
    ],
    cta: "Book Pro",
    popular: false,
  },
  {
    name: "Retainer",
    tagline: "Keep it running, keep it growing",
    price: "$300 — $500 / mo",
    timeline: "Ongoing",
    features: [
      "Unlimited content updates",
      "Performance monitoring",
      "Monthly SEO + analytics report",
      "Feature additions (small)",
      "Priority support (24h response)",
      "Security patches + dependency updates",
    ],
    cta: "Start Retainer",
    popular: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
          Websites that work while you sleep
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          I build fast, modern web products — from landing pages to full-stack SaaS MVPs.
          Ship in days, not months.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-neutral-500">
          <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">Next.js</span>
          <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">Supabase</span>
          <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">Vercel</span>
          <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">Tailwind</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                tier.popular
                  ? "border-amber-500/40 bg-neutral-900/60"
                  : "border-neutral-800 bg-neutral-900/30"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500 text-black">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-semibold mb-1">{tier.name}</h2>
              <p className="text-sm text-neutral-400 mb-4">{tier.tagline}</p>
              <div className="text-2xl font-bold mb-1">{tier.price}</div>
              <div className="text-sm text-neutral-500 mb-6">{tier.timeline}</div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:info@shwme.app?subject=${encodeURIComponent(`Book ${tier.name} tier`)}`}
                className={`block text-center py-2.5 rounded-lg text-sm font-medium transition ${
                  tier.popular
                    ? "bg-amber-500 text-black hover:bg-amber-400"
                    : "bg-neutral-800 text-white hover:bg-neutral-700"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="px-6 pb-20 text-center text-sm text-neutral-500 max-w-2xl mx-auto">
        <p>
          Built with the same stack powering <span className="text-neutral-300">shwme.app</span>,{" "}
          <span className="text-neutral-300">jer-website</span>, and automated content pipelines.
          No templates. No bloat. Ship and move on.
        </p>
      </section>
    </main>
  );
}
