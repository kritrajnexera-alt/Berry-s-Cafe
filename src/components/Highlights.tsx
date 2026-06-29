"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 21V19H20V21H2ZM20 8V5H22V11H20V10H6.5L9.26 13.14L8.38 14.5L4.5 10.57L2.72 12.35L1.5 11.12L2 5.62L3 6L3.5 9.5L8.5 4L9.5 4.92L6.5 8H20Z" />
      </svg>
    ),
    title: "Fresh Brewed Coffee",
    desc: "Expertly brewed from the finest beans – every cup is a moment of pure bliss.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M13,7V11H17V13H13V17H11V13H7V11H11V7H13Z" />
      </svg>
    ),
    title: "Berrylicious Treats",
    desc: "Bursting with real berries – our desserts are as beautiful as they are delicious.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
      </svg>
    ),
    title: "Cozy Cafe Vibes",
    desc: "Warm lighting, soft music, and the perfect spot to unwind with friends.",
  },
];

export default function Highlights() {
  return (
    <section className="py-20 md:py-28 bg-blush">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Why You&apos;ll Love It Here
          </h2>
          <p className="font-body text-charcoal/70 max-w-lg mx-auto">
            Every detail crafted to make your visit unforgettable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-2xl p-8 text-center border border-berry/5 hover:border-berry/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(139, 26, 74, 0.15)",
              }}
            >
              <div className="w-14 h-14 bg-blush text-berry rounded-xl flex items-center justify-center mx-auto mb-5" aria-hidden="true">
                {card.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                {card.title}
              </h3>
              <p className="font-body text-charcoal/70 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
