"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 pb-24 pt-32 bg-paper">
        <div className="max-w-5xl mx-auto w-full">
          <motion.h1
            className="font-heading text-7xl md:text-8xl lg:text-[96px] font-light leading-[0.95] text-ink tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Brewing
            <br />
            <span className="text-berry">Happiness.</span>
          </motion.h1>

          <motion.p
            className="font-body text-base md:text-lg text-ink/40 mt-6 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            One cup at a time &middot; GIDC, Ankleshwar
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-12 left-8 md:left-16"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/menu"
            className="font-nav text-xs uppercase tracking-[0.25em] text-ink/40 hover:text-berry transition-colors duration-300 underline underline-offset-4 decoration-rose/50 hover:decoration-berry"
          >
            explore our menu &rarr;
          </Link>
        </motion.div>
      </section>

      {/* ── Our Story ── */}
      <section className="px-8 md:px-16 py-28 md:py-36 bg-paper border-t border-rose/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="font-nav text-xs uppercase tracking-[0.25em] text-ink/30 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <motion.blockquote
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-light italic text-ink/80 leading-[1.3]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            &ldquo;We believe every cup deserves a moment.&rdquo;
          </motion.blockquote>
          <motion.p
            className="font-body text-base text-ink/50 mt-10 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tucked away in the heart of GIDC, Berry&rsquo;s Cafe is where
            Ankleshwar comes to slow down. Good coffee, simple food, and the
            quiet joy of a morning well spent.
          </motion.p>
        </div>
      </section>

      {/* ── Menu Preview ── */}
      <section className="px-8 md:px-16 py-28 md:py-36 bg-paper border-t border-rose/20">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            className="font-nav text-xs uppercase tracking-[0.25em] text-ink/30 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            From the kitchen
          </motion.h2>

          <div className="space-y-6">
            {[
              { name: "Flat white", price: "\u20B9 120" },
              { name: "Berry smoothie", price: "\u20B9 150" },
              { name: "Croissant", price: "\u20B9 80" },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                className="flex items-baseline gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="font-heading text-xl md:text-2xl font-light text-ink/80 shrink-0">
                  {item.name}
                </span>
                <span className="flex-1 border-b border-dotted border-rose/30 min-w-[2rem]" />
                <span className="font-body text-sm text-ink/40 shrink-0">
                  {item.price}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Link
              href="/menu"
              className="font-nav text-xs uppercase tracking-[0.25em] text-ink/40 hover:text-berry transition-colors duration-300 underline underline-offset-4 decoration-rose/50 hover:decoration-berry"
            >
              See full menu &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Instagram Strip ── */}
      <section className="px-8 md:px-16 py-28 md:py-36 bg-paper border-t border-rose/20">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="font-body text-sm text-ink/30 mb-10 text-center tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://instagram.com/berrys_cafe__"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              @berrys_cafe__
            </a>{" "}
            &middot; Follow for daily joy
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
                blur: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23FDFAF6' width='400' height='400'/%3E%3C/svg%3E",
                alt: "Coffee art",
              },
              {
                src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
                blur: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23FDFAF6' width='400' height='400'/%3E%3C/svg%3E",
                alt: "Latte art",
              },
              {
                src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
                blur: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23FDFAF6' width='400' height='400'/%3E%3C/svg%3E",
                alt: "Berry dessert",
              },
              {
                src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&q=80",
                blur: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23FDFAF6' width='400' height='400'/%3E%3C/svg%3E",
                alt: "Cafe interior",
              },
            ].map((img, i) => (
              <motion.div
                key={i}
                className="aspect-square overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
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
