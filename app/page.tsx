import { Check, Zap, Shield, TrendingUp, ArrowRight, Code2, Rocket, Cpu, Sparkles, Globe } from "lucide-react";
import Image from "next/image";

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

const capabilities = [
  {
    icon: Code2,
    title: "Next.js + Tailwind",
    desc: "Blazing fast, SEO-friendly React sites with pixel-perfect styling.",
  },
  {
    icon: Cpu,
    title: "Supabase Backend",
    desc: "Auth, database, storage, and real-time — all without building a backend.",
  },
  {
    icon: Zap,
    title: "Vercel Deploy",
    desc: "Edge-deployed with CI/CD, CDN, and preview deployments for every push.",
  },
  {
    icon: Shield,
    title: "Payments & Auth",
    desc: "Stripe, Paystack, OAuth — everything users need to sign up and pay.",
  },
];

const showcaseItems = [
  {
    img: "/images/mockup-laptop.jpg",
    title: "Landing Pages",
    desc: "High-converting, beautifully branded first impressions.",
  },
  {
    img: "/images/dashboard-dark.jpg",
    title: "Admin Dashboards",
    desc: "Data-rich interfaces that don’t feel like spreadsheets.",
  },
  {
    img: "/images/mobile-apps.jpg",
    title: "Mobile-First Apps",
    desc: "PWA-ready experiences that feel native on every device.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white relative overflow-hidden">
      {/* Subtle grid overlay for texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ===== HERO ===== */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] text-center px-6">
        {/* Abstract background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-abstract.jpg"
            alt="Abstract tech background"
            fill
            className="object-cover opacity-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-amber-400/80 mb-6 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Full-Stack Web Development
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Websites that{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              work while you sleep
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto leading-relaxed mb-10">
            From landing pages to full-stack SaaS MVPs — shipped fast, built right, and designed to convert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@shwme.app?subject=Book%20a%20project"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all"
            >
              Start a project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-neutral-700 text-neutral-300 font-medium hover:bg-neutral-800 hover:text-white transition-all"
            >
              See pricing
            </a>
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section className="relative z-10 px-6 py-24 max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="relative p-6 rounded-2xl border border-neutral-800/70 bg-neutral-900/40 hover:bg-neutral-900/60 hover:border-neutral-700 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <cap.icon className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-semibold text-base mb-1.5">{cap.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SHOWCASE ===== */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What gets built</h2>
          <p className="text-neutral-400 max-w-lg mx-auto">
            Every project is custom — no templates, no cookie-cutter solutions. Here is what that looks like.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {showcaseItems.map((item, i) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden border border-neutral-800/70 bg-neutral-900/40 hover:border-neutral-700 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="relative z-10 px-6 pb-8 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-neutral-400 max-w-lg mx-auto">No hidden fees. No surprise scope creep. Pick what fits.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                tier.popular
                  ? "border-amber-500/40 bg-neutral-900/60"
                  : "border-neutral-800/70 bg-neutral-900/30"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500 text-black">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
              <p className="text-sm text-neutral-400 mb-4">{tier.tagline}</p>
              <div className="text-2xl font-bold mb-1">{tier.price}</div>
              <div className="text-sm text-neutral-500 mb-6">{tier.timeline}</div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-amber-400" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:info@shwme.app?subject=${encodeURIComponent(`Book ${tier.name} tier`)}`}
                className={`block text-center py-2.5 rounded-xl text-sm font-medium transition ${
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

      {/* ===== TRUST / FOOTER ===== */}
      <section className="relative z-10 px-6 py-16 mt-16">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <Image
            src="/images/server-futuristic.jpg"
            alt="Tech infrastructure"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-neutral-950/60" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
              <Globe className="w-6 h-6 text-amber-400" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to ship?</h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Built with the same stack powering <span className="text-neutral-300">shwme.app</span> and{" "}
            <span className="text-neutral-300">jer-website</span>. Fast, reliable, and ready to scale.
          </p>
          <a
            href="mailto:info@shwme.app?subject=Book%20a%20project"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all"
          >
            <Rocket className="w-4 h-4" />
            Start a project
          </a>
          <p className="mt-6 text-xs text-neutral-600">
            Built by Josh Abbey · info@shwme.app · Typical response within 24h
          </p>
        </div>
      </section>
    </main>
  );
}
