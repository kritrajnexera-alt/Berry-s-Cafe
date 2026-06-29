"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[8%] text-berry/10 text-7xl"
          variants={floatingVariants}
          animate="animate"
          aria-hidden="true"
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M2 21V19H20V21H2ZM20 8V5H22V11H20V10H6.5L9.26 13.14L8.38 14.5L4.5 10.57L2.72 12.35L1.5 11.12L2 5.62L3 6L3.5 9.5L8.5 4L9.5 4.92L6.5 8H20Z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] right-[10%] text-berry/10"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
          aria-hidden="true"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M13,7V11H17V13H13V17H11V13H7V11H11V7H13Z" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-blush text-berry text-xs font-bold font-body uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="text-yellow-500 text-sm">&#9733;</span>
            4.4 &middot; Ankleshwar&apos;s Favourite Coffee Spot
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal leading-tight mb-6">
            BREWING HAPPINESS,
            <br />
            <span className="text-berry">ONE CUP AT A TIME</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto mb-10">
            Fresh coffee &amp; berrylicious treats &middot; GIDC Ankleshwar
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-berry text-white font-bold font-body px-8 py-3.5 rounded-full hover:bg-berry-light transition-colors duration-300 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry"
            >
              View Menu
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-berry text-berry font-bold font-body px-8 py-3.5 rounded-full hover:bg-berry hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry"
            >
              Find Us
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-berry/40"
          aria-hidden="true"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
