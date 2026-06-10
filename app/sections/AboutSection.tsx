"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/showme-mobile.jpg"
              alt="ShowMe community mobile app"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
          </div>

          {/* Text side */}
          <div ref={ref}>
            <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-6">About</p>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E1E0CC] leading-[0.95] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              I build what I know.{" "}
              <span className="font-serif italic text-primary">Fast, clean, conversion-focused.</span>
            </motion.h2>

            <motion.div
              className="space-y-4 text-primary/70 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>
                I started ShowMe Web & App because I kept meeting founders with great ideas who were stuck waiting months for a simple website. They'd hire agencies, burn budget, and still have nothing live.
              </p>
              <p>
                I do the opposite: ship in weeks, not months. You get the full code, the real product, and a clear path forward. No vendor lock-in. No scope creep. Just results.
              </p>
              <p>
                Ghanaian by birth, US-based by hustle. I bring dual-market perspective — American tech standards with execution speed that doesn't waste your budget.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-12 h-12 rounded-full bg-[#212121] flex items-center justify-center text-lg font-bold text-[#E1E0CC]">
                J
              </div>
              <div>
                <p className="font-bold text-[#E1E0CC]">Josh Abbey</p>
                <p className="text-sm text-primary/70">Founder, ShowMe & ShowMe Web & App</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
