"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
  showAsterisk?: boolean;
}

export function WordsPullUp({ text, className = "", delay = 0, showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = text.split(" ");

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;
        return (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: delay + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {word}
            {showAsterisk && isLastWord && (
              <sup className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</sup>
            )}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

interface StyleSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: StyleSegment[];
  className?: string;
  delay?: number;
}

export function WordsPullUpMultiStyle({ segments, className = "", delay = 0 }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Flatten all words with their className
  const words: { text: string; className: string }[] = [];
  segments.forEach((segment) => {
    const segmentWords = segment.text.split(" ");
    segmentWords.forEach((w) => {
      words.push({ text: w, className: segment.className || "" });
    });
  });

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.25em] ${word.className}`}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          {word.text}
        </motion.span>
      ))}
    </motion.span>
  );
}
