"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "../components/WordsPullUp";

const features = [
  {
    type: "video",
    title: "Your creative canvas.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4",
  },
  {
    type: "card",
    number: "01",
    title: "Project Storyboard.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      "Map your user journey end to end",
      "Define conversion milestones",
      "Wireframe key screens",
      "Set ship deadlines",
    ],
  },
  {
    type: "card",
    number: "02",
    title: "Smart Critiques.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      "AI-powered UX analysis",
      "Creative feedback loops",
      "Tool integrations (Figma, Vercel)",
    ],
  },
  {
    type: "card",
    number: "03",
    title: "Immersion Capsule.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: [
      "Distraction-free build sprints",
      "Ambient focus soundscapes",
      "Calendar sync for deep work",
    ],
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (feature.type === "video") {
    return (
      <motion.div
        ref={ref}
        className="relative rounded-2xl overflow-hidden lg:h-[480px]"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={feature.videoUrl}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <p className="text-[#E1E0CC] text-lg font-medium">{feature.title}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="bg-[#212121] rounded-2xl p-6 lg:h-[480px] flex flex-col"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Icon */}
      <div className="mb-4">
        <img
          src={feature.icon}
          alt=""
          className="w-10 h-10 sm:w-12 sm:h-12 rounded"
        />
      </div>

      {/* Title with number */}
      <div className="mb-4">
        <span className="text-gray-500 text-sm">{feature.number}</span>
        <h3 className="text-primary text-xl font-medium mt-1">{feature.title}</h3>
      </div>

      {/* Checklist */}
      <ul className="space-y-3 flex-1">
        {feature.items?.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-gray-400 text-sm">{item}</span>
          </li>
        ))}
      </ul>

      {/* Learn more */}
      <a
        href="#"
        className="inline-flex items-center gap-2 text-primary text-sm mt-4 group"
      >
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
      </a>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section id="process" className="relative min-h-screen bg-black py-24 md:py-32 px-6">
      {/* Subtle noise background */}
      <div className="bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: "Studio-grade workflows for visionary creators.",
                className: "text-primary",
              },
            ]}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-4"
          />
          <WordsPullUpMultiStyle
            segments={[
              {
                text: "Built for pure vision. Powered by art.",
                className: "text-gray-500",
              },
            ]}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
