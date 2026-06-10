"use client";

import { WordsPullUpMultiStyle } from "../components/WordsPullUp";
import { AnimatedLetter } from "../components/AnimatedLetter";

export function AboutSection() {
  return (
    <section id="our-story" className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-3xl p-8 md:p-16 text-center">
        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-8">
          Visual arts
        </p>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: "I am Josh Abbey,",
                className: "font-normal",
              },
              {
                text: "a self-taught builder.",
                className: "font-serif italic",
              },
              {
                text: "I craft digital experiences that convert.",
                className: "font-normal",
              },
            ]}
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <AnimatedLetter
            text="Over the last seven years, I have worked with startups across Ghana and the US, building products that people actually use. From community platforms to automated content engines, I focus on shipping fast and iterating faster."
            className="text-primary text-xs sm:text-sm md:text-base leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
}
