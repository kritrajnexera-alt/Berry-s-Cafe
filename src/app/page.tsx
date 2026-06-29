"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
} as const;

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col px-12 md:px-24 pb-28 pt-40 bg-paper">
        <div className="max-w-6xl mx-auto w-full">
          <motion.p
            className="font-nav text-[11px] uppercase tracking-[0.3em] text-ink/20 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            GIDC, Ankleshwar
          </motion.p>

          <motion.h1
            className="font-heading text-8xl md:text-[120px] lg:text-[140px] font-light leading-[0.88] text-ink tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
          >
            Brewing
            <br />
            <span className="text-berry">Happiness.</span>
          </motion.h1>

          <motion.p
            className="font-body text-base md:text-lg text-ink/30 mt-10 max-w-xs leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            One cup at a time &middot; City Center, GF, G.I.D.C
          </motion.p>
        </div>

        <motion.div
          className="mt-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          <Link
            href="/menu"
            className="font-nav text-[11px] uppercase tracking-[0.3em] text-ink/25 hover:text-berry transition-colors duration-500"
          >
            explore our menu &rarr;
          </Link>
        </motion.div>
      </section>

      {/* ── Our Story ── */}
      <section className="px-12 md:px-24 py-32 md:py-44 bg-paper border-t border-rose/15">
        <div className="max-w-4xl mx-auto">
          <motion.p
            className="font-nav text-[11px] uppercase tracking-[0.3em] text-ink/15 mb-16"
            {...fadeIn}
          >
            &mdash; Our Story
          </motion.p>

          <motion.blockquote
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light italic text-ink/70 leading-[1.15]"
            {...fadeIn}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            &ldquo;We believe
            <br />
            every cup deserves
            <br />
            a moment.&rdquo;
          </motion.blockquote>

          <motion.div
            className="w-12 h-px bg-rose/40 mt-16 mb-10"
            {...fadeIn}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />

          <motion.p
            className="font-body text-base text-ink/45 max-w-md leading-relaxed"
            {...fadeIn}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            Tucked away in GIDC, Berry&rsquo;s Cafe is where Ankleshwar comes
            to slow down. Good coffee, simple food, quiet mornings.
          </motion.p>
        </div>
      </section>

      {/* ── Menu Preview ── */}
      <section className="px-12 md:px-24 py-32 md:py-44 bg-paper border-t border-rose/15">
        <motion.div className="max-w-3xl mx-auto" {...fadeIn}>
          <p className="font-nav text-[11px] uppercase tracking-[0.3em] text-ink/15 mb-16">
            &mdash; From the Kitchen
          </p>

          <div className="space-y-8">
            {[
              { name: "Flat white", price: "120" },
              { name: "Berry smoothie", price: "150" },
              { name: "Croissant", price: "80" },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                className="flex items-baseline gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 * i }}
              >
                <span className="font-heading text-2xl md:text-3xl font-light text-ink/70 shrink-0">
                  {item.name}
                </span>
                <span className="flex-1 border-b border-dotted border-rose/25 min-w-[2rem]" />
                <span className="font-body text-sm text-ink/30 shrink-0">
                  &#8377; {item.price}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <Link
              href="/menu"
              className="font-nav text-[11px] uppercase tracking-[0.3em] text-ink/25 hover:text-berry transition-colors duration-500"
            >
              See full menu &rarr;
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Instagram Strip ── */}
      <section className="px-12 md:px-24 py-32 md:py-44 bg-paper border-t border-rose/15">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="font-nav text-[11px] uppercase tracking-[0.3em] text-ink/15 mb-14 text-center"
            {...fadeIn}
          >
            <a
              href="https://instagram.com/berrys_cafe__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/25 hover:text-berry transition-colors duration-500"
            >
              @berrys_cafe__
            </a>{" "}
            &middot; Follow
          </motion.p>

          <div className="flex gap-3 overflow-x-auto pb-4">
            {[
              { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=85&auto=format&fit=crop", alt: "Latte art on wooden table", blur: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=20&q=10&auto=format&fit=crop" },
              { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=85&auto=format&fit=crop", alt: "Pour over coffee being brewed", blur: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=20&q=10&auto=format&fit=crop" },
              { src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=85&auto=format&fit=crop", alt: "Fresh berries in a bowl", blur: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=20&q=10&auto=format&fit=crop" },
              { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=500&q=85&auto=format&fit=crop", alt: "Buttery croissant on plate", blur: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=20&q=10&auto=format&fit=crop" },
              { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&q=85&auto=format&fit=crop", alt: "Coffee cup and morning light", blur: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=20&q=10&auto=format&fit=crop" },
            ].map((img, i) => (
              <motion.div
                key={i}
                className="shrink-0 w-[220px] md:w-[260px] aspect-square overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 * i }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  placeholder="blur"
                  blurDataURL={img.blur}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
