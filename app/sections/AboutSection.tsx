"use client";

import { WordsPullUpMultiStyle } from "../components/WordsPullUp";
import { AnimatedLetter } from "../components/AnimatedLetter";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          <div className="text-center lg:text-left">
            <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-8">About</p>

            <div className="text-3xl sm:text-4xl md:text-5xl leading-[0.95] sm:leading-[0.9] mb-8">
              <WordsPullUpMultiStyle
                segments={[
                  {
                    text: "I am Josh Abbey,",
                    className: "font-normal text-[#E1E0CC]",
                  },
                  {
                    text: "founder of ShowMe.",
                    className: "font-serif italic text-primary",
                  },
                ]}
              />
            </div>

            <div className="max-w-lg mx-auto lg:mx-0">
              <AnimatedLetter
                text="I started ShowMe Web & App because I kept meeting founders with great ideas who were stuck waiting months for a simple website. I build what I know: fast, clean, conversion-focused web experiences using the same stack that powers my own product. Ghanaian by birth, US-based by hustle. I bring dual-market perspective — American tech standards with execution speed that doesn't waste your budget."
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-relaxed"
              />
            </div>

            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <div className="w-12 h-12 rounded-full bg-[#212121] flex items-center justify-center text-lg font-bold text-[#E1E0CC]">
                J
              </div>
              <div>
                <p className="font-bold text-[#E1E0CC]">Josh Abbey</p>
                <p className="text-sm text-primary/70">Founder, ShowMe & ShowMe Web & App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
