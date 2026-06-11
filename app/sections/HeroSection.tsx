"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "../components/WordsPullUp";

export function HeroSection() {
  return (
    <section className="relative h-screen p-4 md:p-6">
      <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-cabin-cliffs.mp4"
        />

        {/* Noise overlay */}
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />

        {/* Navbar */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-30 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
          <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {["Work", "Process", "Pricing", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] sm:text-xs md:text-sm transition-colors duration-300 hover:text-[#E1E0CC]"
                  style={{ color: "rgba(225, 224, 204, 0.8)" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-8 lg:p-12">
          <div className="lg:flex lg:flex-row lg:items-end lg:gap-8">
            {/* Left: Giant heading */}
            <div className="lg:flex-1 lg:min-w-0">
              <div className="relative">
                <WordsPullUp
                  text="I build it. You launch it. Code you own, deadlines I keep."
                  className="text-[7vw] sm:text-[9vw] md:text-[7vw] lg:text-[5vw] xl:text-[4.5vw] font-medium leading-[0.95] tracking-[-0.02em] text-[#E1E0CC]"
                  showAsterisk={false}
                />
              </div>
            </div>

            {/* Right: Description + CTA */}
            <div className="mt-4 lg:mt-0 lg:max-w-sm xl:max-w-md flex flex-col gap-3 lg:gap-4 lg:mb-2">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.3 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                High-converting websites and mobile apps for founders who want to ship this month — not next quarter. Built with Next.js, Flutter, Supabase, and Vercel. You own everything.
              </motion.p>

              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-primary rounded-full text-black font-medium text-sm sm:text-base px-5 py-3 w-fit hover:gap-3 transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span>Book a free strategy call</span>
                <span className="bg-black rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
