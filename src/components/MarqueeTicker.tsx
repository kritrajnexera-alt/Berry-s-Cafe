"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  "FRESHLY BREWED COFFEE",
  "BERRY TREATS",
  "SIP SAVOR REPEAT",
  "GIDC ANKLESHWAR",
  "HAPPINESS IN A CUP",
];

export default function MarqueeTicker() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="bg-blush border-y border-berry/10 overflow-hidden py-4 group"
      aria-hidden="true"
    >
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"]}}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((text, i) => (
            <span
              key={`${text}-${i}`}
              className="font-heading text-sm md:text-base font-bold tracking-[0.2em] text-berry/70"
            >
              {text}
              <span className="inline-block mx-4 text-berry/30">&bull;</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
