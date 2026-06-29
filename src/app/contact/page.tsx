"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function ContactPage() {
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
            Contact
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-ink leading-[1.1]">
            Find us
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            className="space-y-10"
            {...fadeIn}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="border-b border-rose/15 pb-7">
              <p className="font-nav text-[11px] uppercase tracking-[0.25em] text-ink/20 mb-3">
                Address
              </p>
              <p className="font-body text-base text-ink/60 leading-relaxed">
                City Center, GF, G.I.D.C
                <br />
                Ankleshwar &mdash; 393001
              </p>
            </div>

            <div className="border-b border-rose/15 pb-7">
              <p className="font-nav text-[11px] uppercase tracking-[0.25em] text-ink/20 mb-3">
                Phone
              </p>
              <a
                href="tel:+918488945932"
                className="font-body text-base text-ink/60 hover:text-berry transition-colors duration-300"
              >
                +91 84889 45932
              </a>
            </div>

            <div className="border-b border-rose/15 pb-7">
              <p className="font-nav text-[11px] uppercase tracking-[0.25em] text-ink/20 mb-3">
                Instagram
              </p>
              <a
                href="https://instagram.com/berrys_cafe__"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base text-ink/60 hover:text-berry transition-colors duration-300"
              >
                @berrys_cafe__
              </a>
            </div>

            <a
              href="https://wa.me/918488945932"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-nav text-[11px] uppercase tracking-[0.3em] text-ink/25 hover:text-berry transition-colors duration-500"
            >
              Message on WhatsApp &rarr;
            </a>
          </motion.div>

          <motion.div
            className="aspect-[4/3] bg-rose/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d73.0!3d21.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM2JzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Berry's Cafe Location"
              className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
