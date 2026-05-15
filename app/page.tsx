"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden noise-overlay">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[30%] -right-[15%] w-[50vw] h-[50vw] rounded-full animate-float-delayed"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/[0.06]">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          ShowMe<span className="text-amber-500"> Sites</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm text-neutral-400 hover:text-white transition-colors">Work</a>
          <a href="#process" className="text-sm text-neutral-400 hover:text-white transition-colors">Process</a>
          <a href="#pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="text-sm text-neutral-400 hover:text-white transition-colors">About</a>
        </div>
        <Link
          href="#contact"
          className="px-5 py-2 rounded-full text-sm font-semibold bg-amber-500 text-black hover:bg-amber-400 transition-colors"
        >
          Start a project
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-6 animate-slide-up">
            AVAILABLE FOR NEW PROJECTS
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            You get the code.{" "}
            <span className="text-amber-500">We just build it fast.</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            High-converting landing pages, marketing sites, and full-stack apps
            for founders who want to ship this month — not next quarter. Built
            with Next.js, Supabase, and Vercel. You own everything.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="#contact"
              className="glow-btn px-8 py-4 rounded-full text-black font-bold text-base inline-flex items-center gap-2"
            >
              Book a free strategy call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <Link
              href="#work"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/5 transition-colors"
            >
              See our work
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div
          className="mt-16 flex flex-wrap gap-10 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { v: "15+", l: "Projects Shipped" },
            { v: "4.9★", l: "Client Rating" },
            { v: "30%", l: "Avg. Conversion Lift" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold text-amber-500">{s.v}</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Hero image */}
        <div className="mt-16 lg:mt-20 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="glass-card rounded-2xl overflow-hidden p-2">
            <Image
              src="/images/mockup-laptop.jpg"
              alt="ShowMe Sites portfolio showcase"
              width={1200}
              height={675}
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Tech stack marquee */}
      <section className="relative z-10 py-12 border-y border-white/[0.06] overflow-hidden bg-[#0a0a0a]/50 backdrop-blur-sm">
        <div className="flex whitespace-nowrap marquee-track">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-12 px-6">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Supabase",
                "Vercel",
                "Tailwind CSS",
                "Stripe",
                "PostgreSQL",
                "Flutter",
                "Node.js",
                "Figma",
              ].map((tech) => (
                <span
                  key={`${dup}-${tech}`}
                  className="text-sm font-semibold text-neutral-500 tracking-wide flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ── */}
      <section id="work" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            YOUR PROBLEM, OUR SOLUTION
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            From frustration to results.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {[
            {
              icon: "💻",
              title: "Your website looks outdated and unprofessional",
              desc: "First impressions matter. An old, slow site costs you credibility before visitors read a word.",
              solution:
                "We build modern, fast-loading sites that instantly communicate quality and trust.",
            },
            {
              icon: "📉",
              title: "Visitors leave without taking action",
              desc: "Confusing navigation, weak CTAs, and poor mobile experience kill conversions.",
              solution:
                "Strategic design with clear paths to conversion — every page optimized for results.",
            },
            {
              icon: "⏰",
              title: "Projects drag on for months with no end in sight",
              desc: "Agencies that over-promise and under-deliver waste your time and budget.",
              solution:
                "Fixed timelines with weekly deliverables. You'll see progress, not promises.",
            },
            {
              icon: "🔧",
              title: "You don't know how to update or maintain your site",
              desc: "Paying for every tiny change is expensive and frustrating.",
              solution:
                "Built on modern stacks you own. We train your team or handle it with our retainer.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-3">
                <p className="text-amber-400 text-sm font-medium">
                  ✓ {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            WHAT WE DO
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Services designed to scale.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: "🎯",
              title: "Landing Pages",
              desc: "High-converting single-page sites that turn visitors into leads and customers.",
            },
            {
              icon: "📱",
              title: "Marketing Sites",
              desc: "Multi-page experiences with blogs, case studies, and SEO-optimized content.",
            },
            {
              icon: "🚀",
              title: "SaaS MVPs",
              desc: "Full-stack apps with auth, databases, payments, and dashboards. Ship in weeks.",
            },
            {
              icon: "🛒",
              title: "E-commerce",
              desc: "Scalable online stores with cart, checkout, and inventory management.",
            },
            {
              icon: "🎨",
              title: "Brand Design",
              desc: "Visual identity, logo, and design systems that make you stand out.",
            },
            {
              icon: "📊",
              title: "Analytics Setup",
              desc: "Conversion tracking, heatmaps, and performance monitoring.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 reveal group"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            WHY CHOOSE US
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Expertise, Innovation, & Exceptional Service
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: "⚡",
              title: "Ship in Weeks, Not Months",
              desc: "Our design-in-browser approach means you see real progress fast.",
            },
            {
              icon: "🔒",
              title: "You Own Everything",
              desc: "Full code ownership. Deploy anywhere. No vendor lock-in.",
            },
            {
              icon: "📈",
              title: "Built to Convert",
              desc: "Every decision — from layout to copy — is optimized for results.",
            },
            {
              icon: "🌍",
              title: "US Market Expertise",
              desc: "American payment methods, user behavior, and market dynamics.",
            },
            {
              icon: "🎯",
              title: "No Scope Creep",
              desc: "Fixed-price packages with clear deliverables. No surprises.",
            },
            {
              icon: "💬",
              title: "Direct Communication",
              desc: "Talk to the builder, not a project manager. Fast feedback loops.",
            },
            {
              icon: "🔧",
              title: "Modern Tech Stack",
              desc: "Next.js, Supabase, Vercel — fast, scalable, and future-proof.",
            },
            {
              icon: "🤝",
              title: "Post-Launch Support",
              desc: "Monthly retainers for updates, monitoring, and growth.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-base mb-2">{item.title}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            OUR WORK IN ACTION
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Projects we've shipped.
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
            Real products for real founders. From community platforms to marketing sites.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "ShowMe",
              tag: "Community Platform",
              desc: "A full-stack community operating system with feeds, events, gamification, and payments. Built with Flutter, Next.js, and Supabase.",
              img: "/images/mobile-apps.jpg",
              link: "https://shwme.app",
            },
            {
              title: "JER Website",
              tag: "Marketing Site",
              desc: "A fast, SEO-optimized Next.js marketing site with automated blog pipeline, dark mode, and conversion tracking.",
              img: "/images/dashboard-dark.jpg",
              link: "https://jer-website.vercel.app",
            },
            {
              title: "SiteForge",
              tag: "SaaS MVP",
              desc: "Auto-generated business websites for local Columbia, MO shops. Stripe subscriptions, Google Places API, static generation.",
              img: "/images/server-futuristic.jpg",
              link: "https://showmesites.vercel.app",
            },
            {
              title: "ShowMe Blog",
              tag: "Content Engine",
              desc: "Automated SEO content pipeline generating 3 posts daily with Supabase scheduling, Resend email, and social publishing.",
              img: "/images/abstract-waves.jpg",
              link: "https://shwme.app/blog",
            },
            {
              title: "ShowMe Sites",
              tag: "This Website",
              desc: "The very site you're on. Next.js 15, Tailwind v4, glassmorphism, scroll reveals, and dark-mode-first design.",
              img: "/images/hero-abstract.jpg",
              link: "#",
            },
            {
              title: "Your Project",
              tag: "Next",
              desc: "Have an idea? We turn concepts into live products. Book a call and let's scope it out.",
              img: "/images/mockup-laptop.jpg",
              link: "#contact",
              cta: true,
            },
          ].map((project, i) => (
            <a
              key={i}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-card rounded-2xl overflow-hidden group reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
                {project.cta && (
                  <span className="mt-4 inline-flex items-center text-amber-500 text-sm font-semibold gap-1">
                    Start a project
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            OUR PROCESS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            From idea to launch in 5 steps.
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            {
              step: "01",
              title: "Discovery",
              desc: "30-min strategy call to understand your goals, audience, and timeline.",
            },
            {
              step: "02",
              title: "Scope & Quote",
              desc: "Clear deliverables, fixed price, and a week-by-week roadmap.",
            },
            {
              step: "03",
              title: "Design & Build",
              desc: "Design in the browser with weekly check-ins and live previews.",
            },
            {
              step: "04",
              title: "Launch",
              desc: "Vercel deploy, domain connect, analytics, and SEO setup.",
            },
            {
              step: "05",
              title: "Grow",
              desc: "Optional retainer for updates, content, and conversion optimization.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 reveal relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-4xl font-black text-amber-500/20 absolute top-4 right-4">
                {item.step}
              </span>
              <h3 className="text-lg font-bold mt-8 mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl overflow-hidden reveal">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
                ABOUT
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Built by a founder who ships.
              </h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed">
                <p>
                  Hi, I'm Josh — founder of{" "}
                  <span className="text-amber-500 font-semibold">ShowMe</span>,
                  a community platform used by coaches, creators, and event hosts
                  across two continents.
                </p>
                <p>
                  I started ShowMe Sites because I kept meeting founders with
                  great ideas who were stuck waiting months for a simple website.
                  I build what I know: fast, clean, conversion-focused web
                  experiences using the same stack that powers my own product.
                </p>
                <p>
                  Ghanaian by birth, US-based by hustle. I bring dual-market
                  perspective — American tech standards with execution speed that
                  doesn't waste your budget.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-bold text-lg">
                  J
                </div>
                <div>
                  <div className="font-bold text-white">Josh Abbey</div>
                  <div className="text-sm text-neutral-400">
                    Founder, ShowMe & ShowMe Sites
                  </div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <Image
                src="/images/hero-abstract.jpg"
                alt="Josh Abbey, founder of ShowMe Sites"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">
            PRICING
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            No surprises. No hidden fees.
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
            Fixed-price packages. You know exactly what you&apos;re paying for before we start.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Starter",
              forWho: "Founders who need to launch fast",
              price: "$900",
              priceNote: "One-time, fixed price",
              timeline: "Ships in 5 days",
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
              price: "$2,500",
              priceNote: "One-time, fixed price",
              timeline: "Ships in 2 weeks",
              bestFor: ["SaaS marketing site", "Agency portfolio", "Course / coaching business"],
              deliverables: [
                "Up to 6 custom pages",
                "Blog with CMS (you publish yourself)",
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
              price: "$4,500",
              priceNote: "One-time, fixed price",
              timeline: "Ships in 4 weeks",
              bestFor: ["SaaS MVP", "Marketplace", "Internal tool", "Membership platform"],
              deliverables: [
                "Full-stack web app (Next.js + Supabase)",
                "User authentication (email/social)",
                "Admin dashboard + analytics",
                "Stripe / PayPal payments",
                "Database + API setup",
                "Production hosting on Vercel",
                "5 revision rounds",
              ],
              notIncluded: ["Mobile app", "AI features", "Custom integrations"],
              cta: "Book Pro",
              popular: false,
            },
            {
              name: "Retainer",
              forWho: "Clients who want ongoing support",
              price: "$500",
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
          ].map((tier, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 flex flex-col reveal ${
                tier.popular ? "glow-border relative" : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </span>
              )}
              <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-2">{tier.name}</p>
              <p className="text-sm text-neutral-400 mb-4">{tier.forWho}</p>
              <div className="mb-1">
                <span className="text-3xl font-bold text-white">{tier.price}</span>
              </div>
              <p className="text-xs text-neutral-500 mb-6">{tier.priceNote}</p>
              <div className="flex items-center gap-2 mb-6 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-neutral-300">{tier.timeline}</span>
              </div>
              <div className="mb-4">
                <p className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">Best for</p>
                <ul className="space-y-1">{tier.bestFor.map((bf, j) => <li key={j} className="text-sm text-neutral-400">• {bf}</li>)}</ul>
              </div>
              <div className="mb-4 flex-1">
                <p className="text-xs font-semibold text-white uppercase tracking-wider mb-2">What you get</p>
                <ul className="space-y-2">
                  {tier.deliverables.map((d, j) => (
                    <li key={j} className="text-sm text-neutral-300 flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 text-amber-500 shrink-0" fill="none">
                        <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              {tier.notIncluded.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Not included</p>
                  <ul className="space-y-1">
                    {tier.notIncluded.map((ni, j) => (
                      <li key={j} className="text-sm text-neutral-500 flex items-start gap-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 text-neutral-600 shrink-0" fill="none">
                          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {ni}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Link
                href="#contact"
                className={`block text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                  tier.popular
                    ? "bg-amber-500 text-black hover:bg-amber-400"
                    : "border border-white/20 text-white hover:bg-white/5"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div className="mt-16 glass-card rounded-2xl p-8 reveal">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-amber-500">100%</p>
              <p className="text-sm text-neutral-400">Fixed price guarantee — no scope creep charges</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-500">50% upfront</p>
              <p className="text-sm text-neutral-400">50% on delivery. You see results before paying in full.</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-500">24h refund</p>
              <p className="text-sm text-neutral-400">Not happy within 24h? Full refund, no questions.</p>
            </div>
          </div>
        </div>

      {/* ── CTA ── */}
      <section
        id="contact"
        className="relative z-10 px-6 py-24 max-w-5xl mx-auto reveal"
      >
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div
            className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full animate-pulse-glow pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 relative z-10">
            Ready to build something great?
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-8 relative z-10">
            Book a free 20-minute strategy call. We'll scope your project,
            suggest the right package, and give you a clear timeline.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <Link
              href="mailto:info@shwme.app"
              className="glow-btn px-8 py-4 rounded-full text-black font-bold inline-flex items-center gap-2"
            >
              Book a free strategy call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <Link
              href="mailto:info@shwme.app"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              info@shwme.app
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            ShowMe<span className="text-amber-500"> Sites</span>
          </Link>
          <div className="flex items-center gap-8 text-sm text-neutral-400">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a
              href="mailto:info@shwme.app"
              className="hover:text-white transition-colors"
            >
              info@shwme.app
            </a>
          </div>
          <p className="text-xs text-neutral-500">
            © 2026 ShowMe Sites. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
