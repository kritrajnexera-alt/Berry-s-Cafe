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

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

export default function AboutPage() {
  return (
    <main className="pt-40 pb-32 bg-paper min-h-screen">
      <div className="max-w-6xl mx-auto px-12 md:px-24">
        <motion.div
          className="max-w-2xl mb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-nav text-[11px] uppercase tracking-[0.3em] text-ink/15 mb-4">
            About
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-ink leading-[1.1] mb-10">
            Our story
          </h1>
          <p className="font-body text-base text-ink/50 leading-relaxed mb-5">
            Berry&rsquo;s Cafe began with a simple idea: create a quiet corner
            where the people of Ankleshwar could gather over exceptional coffee
            and lovingly made treats.
          </p>
          <p className="font-body text-base text-ink/50 leading-relaxed">
            Nestled in the heart of GIDC, we bring you handcrafted beverages,
            fresh berry-infused desserts, and savoury snacks made from the
            finest ingredients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 mb-32">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="border-t border-rose/15 pt-7"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * i }}
            >
              <h3 className="font-heading text-2xl font-light text-ink mb-4">
                {v.title}
              </h3>
              <p className="font-body text-sm text-ink/45 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="text-center max-w-3xl mx-auto"
          {...fadeIn}
        >
          <div className="w-12 h-px bg-rose/30 mx-auto mb-12" />
          <p className="font-heading text-4xl md:text-5xl font-light italic text-ink/60 leading-[1.2]">
            &ldquo;Brewing happiness since day one.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </main>
  );
}
