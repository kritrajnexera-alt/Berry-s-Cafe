"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=85&auto=format&fit=crop", alt: "Latte art on wooden table", blur: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=20&q=10&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=85&auto=format&fit=crop", alt: "Fresh berries in a ceramic bowl", blur: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=20&q=10&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85&auto=format&fit=crop", alt: "Pour over coffee being brewed", blur: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=20&q=10&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=85&auto=format&fit=crop", alt: "Buttery croissant on dark plate", blur: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=20&q=10&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=85&auto=format&fit=crop", alt: "Warm cafe interior with natural light", blur: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=20&q=10&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=85&auto=format&fit=crop", alt: "Morning coffee by the window", blur: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=20&q=10&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=800&q=85&auto=format&fit=crop", alt: "Coffee beans scattered on surface", blur: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=20&q=10&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=85&auto=format&fit=crop", alt: "Refreshing berry drink with mint", blur: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=20&q=10&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=85&auto=format&fit=crop", alt: "Decadent chocolate dessert", blur: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=20&q=10&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=85&auto=format&fit=crop", alt: "Wood-fired pizza with fresh toppings", blur: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=20&q=10&auto=format&fit=crop" },
];

export default function GalleryPage() {
  return (
    <main className="pt-40 pb-32 bg-paper min-h-screen">
      <div className="max-w-6xl mx-auto px-12 md:px-24">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-nav text-[11px] uppercase tracking-[0.3em] text-ink/15 mb-4">
            Gallery
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-normal text-ink leading-[1.1]">
            Moments
            <br />
            captured
          </h1>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-5 space-y-5">
          {images.map((img, i) => (
            <motion.div
              key={img.alt + i}
              className="break-inside-avoid overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.025 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                placeholder="blur"
                blurDataURL={img.blur}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
