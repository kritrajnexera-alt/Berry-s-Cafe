"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    blur: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=20&q=10",
    alt: "Coffee art",
  },
  {
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    blur: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=20&q=10",
    alt: "Berry dessert",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    blur: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=20&q=10",
    alt: "Latte art",
  },
  {
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
    blur: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=20&q=10",
    alt: "Dessert",
  },
  {
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80",
    blur: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=20&q=10",
    alt: "Coffee shop interior",
  },
  {
    src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    blur: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=20&q=10",
    alt: "Pizza snack",
  },
  {
    src: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&q=80",
    blur: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=20&q=10",
    alt: "Coffee beans",
  },
  {
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    blur: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=20&q=10",
    alt: "Berry drink",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80",
    blur: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=20&q=10",
    alt: "Croissant",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    blur: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=20&q=10",
    alt: "Cafe ambiance",
  },
];

export default function GalleryPage() {
  return (
    <main className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-3">
            Gallery
          </h1>
          <p className="font-body text-charcoal/70 max-w-lg mx-auto">
            A visual journey through our flavours &amp; moments
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt + i}
              className="break-inside-avoid overflow-hidden rounded-2xl bg-white border border-berry/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
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
