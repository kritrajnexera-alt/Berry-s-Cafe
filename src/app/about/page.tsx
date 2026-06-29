"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Fresh Ingredients",
    desc: "We source the finest coffee beans and freshest berries because quality starts with what goes in.",
  },
  {
    title: "Happy Vibes",
    desc: "Warm smiles, cozy corners, and the kind of atmosphere that makes you want to stay a little longer.",
  },
  {
    title: "Local Love",
    desc: "Proudly serving Ankleshwar, supporting local growers, and building community around great food.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          className="max-w-2xl mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-nav text-xs uppercase tracking-[0.25em] text-ink/30 mb-4">
            About
          </h2>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-ink mb-8">
            Our story
          </h1>
          <p className="font-body text-base text-ink/60 leading-relaxed mb-4">
            Berry&rsquo;s Cafe began with a simple idea: create a quiet corner
            where the people of Ankleshwar could gather over exceptional coffee
            and lovingly made treats.
          </p>
          <p className="font-body text-base text-ink/60 leading-relaxed">
            Nestled in the heart of GIDC, we bring you handcrafted beverages,
            fresh berry-infused desserts, and savoury snacks made from the
            finest ingredients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 mb-24">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="border-t border-rose/20 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <h3 className="font-heading text-xl font-light text-ink mb-3">
                {v.title}
              </h3>
              <p className="font-body text-sm text-ink/50 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-heading text-3xl md:text-4xl font-light italic text-ink/70 leading-[1.3]">
            &ldquo;Brewing happiness since day one.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </main>
  );
}
