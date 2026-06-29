"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-nav text-xs uppercase tracking-[0.25em] text-ink/30 mb-4">
            Contact
          </h2>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-ink">
            Find us
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border-b border-rose/20 pb-6">
              <p className="font-nav text-xs uppercase tracking-[0.2em] text-ink/30 mb-2">
                Address
              </p>
              <p className="font-body text-base text-ink/70">
                City Center, GF, G.I.D.C
                <br />
                Ankleshwar &mdash; 393001
              </p>
            </div>

            <div className="border-b border-rose/20 pb-6">
              <p className="font-nav text-xs uppercase tracking-[0.2em] text-ink/30 mb-2">
                Phone
              </p>
              <a
                href="tel:+918488945932"
                className="font-body text-base text-ink/70 hover:text-berry transition-colors"
              >
                +91 84889 45932
              </a>
            </div>

            <div className="border-b border-rose/20 pb-6">
              <p className="font-nav text-xs uppercase tracking-[0.2em] text-ink/30 mb-2">
                Instagram
              </p>
              <a
                href="https://instagram.com/berrys_cafe__"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base text-ink/70 hover:text-berry transition-colors"
              >
                @berrys_cafe__
              </a>
            </div>

            <a
              href="https://wa.me/918488945932"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-nav text-xs uppercase tracking-[0.25em] text-berry hover:text-ink transition-colors duration-300 underline underline-offset-4 decoration-rose/50 hover:decoration-ink/30 pt-2"
            >
              Message us on WhatsApp &rarr;
            </a>
          </motion.div>

          <motion.div
            className="aspect-[4/3] bg-rose/10 overflow-hidden"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
