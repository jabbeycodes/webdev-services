"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "ShowMe",
    tag: "Community Platform",
    desc: "A full-stack community operating system with feeds, events, gamification, and payments. Built with Flutter, Next.js, and Supabase.",
    img: "/images/showme-platform.jpg",
  },
  {
    title: "ShowMe App",
    tag: "Mobile App",
    desc: "Cross-platform iOS and Android app for discovering compounds, joining communities, and learning from coaches — built with Flutter and Supabase.",
    img: "/images/showme-mobile-app.jpg",
  },
  {
    title: "JER Website",
    tag: "Hotel & Hospitality",
    desc: "Marketing site for Jirapa Executive Residence — private corporate stays in Upper West Ghana, with availability requests, gallery, and mobile-first booking flow.",
    img: "/images/jer-website.jpg",
  },
  {
    title: "SiteForge",
    tag: "SaaS MVP",
    desc: "Auto-generated business websites for local Columbia, MO shops. Stripe subscriptions, Google Places API, static generation.",
    img: "/images/saas-dashboard.jpg",
  },
  {
    title: "ShowMe Blog",
    tag: "Content Engine",
    desc: "Automated SEO content pipeline generating 3 posts daily with Supabase scheduling, Resend email, and social publishing.",
    img: "/images/site-redesign.jpg",
  },
  {
    title: "PulsePoint Clinic",
    tag: "Healthcare Site",
    desc: "A responsive medical clinic website with appointment booking, patient portal, and mobile-first design for cardiovascular care.",
    img: "/images/pulsepoint-clinic.jpg",
  },
  {
    title: "NovaLaunch",
    tag: "SaaS Landing Page",
    desc: "A conversion-focused landing page for an AI scheduling startup. Clean dark mode, animated sections, and integrated Calendly booking.",
    img: "/images/hero-premium.jpg",
  },
  {
    title: "Your Project",
    tag: "Next",
    desc: "Have an idea? We turn concepts into live products. Book a call and let's scope it out.",
    img: "/images/premium-site.jpg",
    cta: true,
  },
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#E1E0CC]">Projects we've shipped.</h2>
          <p className="text-primary/70 mt-4 max-w-xl mx-auto">Real products for real founders. From community platforms to marketing sites.</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-[#101010] rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] sm:text-xs font-medium bg-black/60 backdrop-blur-sm text-primary px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-[#E1E0CC] mb-2">{project.title}</h3>
                <p className="text-primary/70 text-sm leading-relaxed">{project.desc}</p>
                {project.cta && (
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center text-primary text-sm font-semibold gap-1 hover:gap-2 transition-all"
                  >
                    Start a project
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
