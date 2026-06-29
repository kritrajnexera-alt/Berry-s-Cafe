"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Fresh Ingredients",
    desc: "We source the finest coffee beans and freshest berries — because quality starts with what goes in.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.05,7.07C3.32,6.58 3.93,6.43 4.41,6.71L6.94,8.12C7.42,8.4 7.57,9 7.29,9.5L5.87,12C5.59,12.5 5,12.65 4.5,12.37L2,10.96M2.45,13.62L4.56,14.87C5.05,15.15 5.64,15 5.9,14.5L6.92,12.5C7.19,12 7,11.42 6.5,11.16L4.39,9.91C3.9,9.63 3.31,9.78 3.05,10.28L2.03,12.28C1.77,12.78 1.96,13.34 2.45,13.62M12,2C15.5,2 18.35,4.36 19,7.5L21,11.5L19,15.5C18.35,18.64 15.5,21 12,21C8.5,21 5.65,18.64 5,15.5L3,11.5L5,7.5C5.65,4.36 8.5,2 12,2M12,4C9.5,4 7.4,5.72 6.72,8H7.5C8.5,8 9.5,8.67 9.88,9.61L10.5,11H13.5L14.12,9.61C14.5,8.67 15.5,8 16.5,8H17.28C16.6,5.72 14.5,4 12,4M12,17C14.33,17 16.31,15.46 17.11,13.5L16.5,12H7.5L6.89,13.5C7.69,15.46 9.67,17 12,17M9.5,11C9.22,11 9,10.78 9,10.5C9,10.22 9.22,10 9.5,10C9.78,10 10,10.22 10,10.5C10,10.78 9.78,11 9.5,11M14.5,11C14.22,11 14,10.78 14,10.5C14,10.22 14.22,10 14.5,10C14.78,10 15,10.22 15,10.5C15,10.78 14.78,11 14.5,11Z" />
      </svg>
    ),
  },
  {
    title: "Happy Vibes",
    desc: "Warm smiles, cozy corners, and the kind of atmosphere that makes you want to stay a little longer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,9.5C7,8.67 7.67,8 8.5,8C9.33,8 10,8.67 10,9.5C10,10.33 9.33,11 8.5,11C7.67,11 7,10.33 7,9.5M14,9.5C14,8.67 14.67,8 15.5,8C16.33,8 17,8.67 17,9.5C17,10.33 16.33,11 15.5,11C14.67,11 14,10.33 14,9.5M17,14.5C17,16.09 14.76,17.5 12,17.5C9.24,17.5 7,16.09 7,14.5C7,13.12 9.24,12 12,12C14.76,12 17,13.12 17,14.5Z" />
      </svg>
    ),
  },
  {
    title: "Local Love",
    desc: "Proudly serving Ankleshwar — supporting local growers and building a community around great food.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Our Story
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="font-body text-lg text-charcoal/70 leading-relaxed mb-4">
              Berry&apos;s Cafe began with a simple idea — create a cozy corner where
              the people of Ankleshwar could gather over exceptional coffee and
              lovingly made treats.
            </p>
            <p className="font-body text-lg text-charcoal/70 leading-relaxed mb-4">
              Nestled in the heart of GIDC, we bring you handcrafted
              beverages, fresh berry-infused desserts, and savoury snacks —
              all made from the finest ingredients.
            </p>
            <p className="font-heading text-xl text-berry font-bold italic">
              Brewing happiness since day one.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="bg-white rounded-2xl p-8 text-center border border-berry/5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(139, 26, 74, 0.12)",
              }}
            >
              <div className="w-14 h-14 bg-blush text-berry rounded-xl flex items-center justify-center mx-auto mb-5" aria-hidden="true">
                {v.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                {v.title}
              </h3>
              <p className="font-body text-charcoal/70 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-blush rounded-3xl p-10 md:p-16 text-center border border-berry/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Sip. Savor. Repeat.
          </h2>
          <p className="font-body text-charcoal/70 max-w-lg mx-auto">
            At Berry&apos;s Cafe, every visit is a little celebration. Come find
            your new favourite spot in Ankleshwar.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
