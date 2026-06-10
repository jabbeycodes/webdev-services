"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="bg-[#101010] rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full animate-pulse-glow pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(222,219,200,0.15) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E1E0CC] mb-4">
              Ready to build something great?
            </h2>
            <p className="text-primary/70 text-lg max-w-xl mx-auto mb-8">
              Book a free 20-minute strategy call. We'll scope your project, suggest the right package, and give you a clear timeline.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="mailto:info@shwme.app"
                className="inline-flex items-center gap-2 bg-primary rounded-full text-black font-bold px-8 py-4 hover:bg-primary/90 transition-colors"
              >
                <span>Book a free strategy call</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Link>
              <Link
                href="mailto:info@shwme.app"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/20 text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                info@shwme.app
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
