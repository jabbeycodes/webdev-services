import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden noise-overlay">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full animate-float"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[30%] -right-[15%] w-[50vw] h-[50vw] rounded-full animate-float-delayed"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full animate-float-slow"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/[0.06]">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          ShowMe<span className="text-amber-500"> Sites</span>
        </Link>
        <Link
          href="#contact"
          className="px-5 py-2 rounded-full text-sm font-semibold bg-amber-500 text-black hover:bg-amber-400 transition-colors"
        >
          Start a project
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-6 animate-slide-up">
            Premium Web Development Studio
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Landing pages, marketing sites, and SaaS MVPs —{" "}
            <span className="text-amber-500">built to convert.</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            We design and build high-performance web experiences using Next.js, Supabase, and Vercel. From idea to launch — fast.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link
              href="#contact"
              className="glow-btn px-8 py-4 rounded-full text-black font-bold text-base inline-flex items-center gap-2"
            >
              Book a free strategy call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

        {/* Hero image */}
        <div className="mt-16 lg:mt-20 animate-slide-up" style={{ animationDelay: "0.4s" }}>
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
              {["CSS", "Supabase", "Vercel", "Stripe", "Paystack", "PostgreSQL", "Edge", "Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter", "Python"].map((tech) => (
                <span key={`${dup}-${tech}`} className="text-sm font-semibold text-neutral-500 tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="work" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">What we build</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Services designed to scale</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: "/images/dashboard-dark.jpg",
              title: "Landing Pages",
              desc: "High-converting, beautifully branded first impressions. Optimized for speed, SEO, and signups.",
            },
            {
              img: "/images/mobile-apps.jpg",
              title: "Marketing Sites",
              desc: "Multi-page experiences that tell your story. Blogs, case studies, pricing, and more — all CMS-driven.",
            },
            {
              img: "/images/workflow.jpg",
              title: "SaaS MVPs",
              desc: "Full-stack applications with auth, databases, payments, and admin dashboards. Built to launch fast.",
            },
          ].map((service, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="text-amber-500 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">How it works</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">From idea to launch in weeks</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Ideate",
              desc: "We start with your vision. Strategy call, scope definition, and a clear roadmap — so we build the right thing.",
            },
            {
              step: "02",
              title: "Design & Build",
              desc: "We design in the browser. Fast iterations, real feedback, and clean code from day one.",
            },
            {
              step: "03",
              title: "Launch & Iterate",
              desc: "Deploy to Vercel, connect your domain, and go live. Then we optimize based on real user data.",
            },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="text-5xl font-black text-amber-500/20">{item.step}</span>
              <h3 className="text-2xl font-bold mt-4 mb-3">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">Tech stack</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Built with modern tools</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Next.js + Tailwind", desc: "Blazing fast, SEO-friendly React with pixel-perfect styling." },
            { title: "Supabase Backend", desc: "Auth, DB, storage, realtime — no backend to build." },
            { title: "Vercel Edge", desc: "Global CDN, CI/CD, and preview deploys on every push." },
            { title: "Auth & Payments", desc: "OAuth, Stripe, Paystack — users can sign up & pay instantly." },
          ].map((cap, i) => (
            <div key={i} className="glass-card rounded-xl p-6 reveal" style={{ transitionDelay: `${i * 75}ms` }}>
              <h4 className="font-bold text-lg mb-2">{cap.title}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Transparent, project-based</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Starter",
              tagline: "Launch fast, look professional",
              price: "$600 — $900",
              timeline: "3–5 days",
              features: ["1-page landing site (Next.js)", "Mobile-first responsive design", "Vercel deployment + custom domain", "Contact form + basic SEO", "1 round of revisions"],
              popular: false,
            },
            {
              name: "Growth",
              tagline: "Marketing engine that scales",
              price: "$1,500 — $2,500",
              timeline: "1–2 weeks",
              features: ["Multi-page marketing site (5–8 pages)", "Automated blog pipeline", "Analytics + conversion tracking", "Supabase CMS for dynamic content", "Email capture + newsletter setup", "3 rounds of revisions"],
              popular: true,
            },
            {
              name: "Pro",
              tagline: "Full-stack SaaS MVP",
              price: "$3,000 — $5,000",
              timeline: "2–4 weeks",
              features: ["Full-stack app (Next.js + Supabase)", "Auth + user dashboards", "Payments integration", "Admin panel + analytics", "API endpoints + edge functions", "5 rounds of revisions"],
              popular: false,
            },
            {
              name: "Retainer",
              tagline: "Keep it running, keep it growing",
              price: "$300 — $500 / mo",
              timeline: "Ongoing",
              features: ["Unlimited content updates", "Performance monitoring", "Monthly SEO report", "Feature additions (small)", "Priority support (24h)", "Security patches"],
              popular: false,
            },
          ].map((tier, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 flex flex-col reveal ${tier.popular ? "glow-border" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {tier.popular && (
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">Most Popular</span>
              )}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="text-sm text-neutral-400 mt-1 mb-4">{tier.tagline}</p>
              <p className="text-2xl font-bold text-white mb-1">{tier.price}</p>
              <p className="text-xs text-neutral-500 mb-6">{tier.timeline}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="text-sm text-neutral-300 flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 text-amber-500 shrink-0" fill="none">
                      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`block text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                  tier.popular
                    ? "bg-amber-500 text-black hover:bg-amber-400"
                    : "border border-white/20 text-white hover:bg-white/5"
                }`}
              >
                Book {tier.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10 px-6 py-24 max-w-5xl mx-auto reveal">
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div
            className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full animate-pulse-glow pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 relative z-10">
            Ready to build something great?
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-8 relative z-10">
            Book a free 20-minute strategy call. We'll scope your project, suggest the right package, and give you a clear timeline.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <Link
              href="mailto:info@shwme.app"
              className="glow-btn px-8 py-4 rounded-full text-black font-bold inline-flex items-center gap-2"
            >
              Book a free strategy call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            ShowMe<span className="text-amber-500"> Sites</span>
          </Link>
          <div className="flex items-center gap-8 text-sm text-neutral-400">
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="mailto:info@shwme.app" className="hover:text-white transition-colors">info@shwme.app</Link>
          </div>
          <p className="text-xs text-neutral-500">© 2026 ShowMe Sites. All rights reserved.</p>
        </div>
      </footer>

      {/* IntersectionObserver scroll reveal script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
              document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
            })();
          `,
        }}
      />
    </main>
  );
}
