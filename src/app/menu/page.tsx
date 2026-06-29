"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "hot-coffee" | "cold-beverages" | "berry-specials" | "snacks" | "desserts";

interface Item {
  name: string;
  price: string;
  desc: string;
}

const categories: { id: Category; label: string }[] = [
  { id: "hot-coffee", label: "Hot Coffee" },
  { id: "cold-beverages", label: "Cold Beverages" },
  { id: "berry-specials", label: "Berry Specials" },
  { id: "snacks", label: "Snacks & Bites" },
  { id: "desserts", label: "Desserts" },
];

const menu: Record<Category, Item[]> = {
  "hot-coffee": [
    { name: "Espresso", price: "120", desc: "Strong & bold single shot" },
    { name: "Americano", price: "150", desc: "Smooth black coffee" },
    { name: "Cappuccino", price: "180", desc: "Classic frothy delight" },
    { name: "Latte", price: "200", desc: "Creamy steamed milk coffee" },
    { name: "Mocha", price: "220", desc: "Chocolate & espresso bliss" },
    { name: "Flat White", price: "210", desc: "Velvety double shot" },
    { name: "Irish Coffee", price: "250", desc: "Coffee with a kick" },
    { name: "Filter Coffee", price: "140", desc: "South Indian classic" },
  ],
  "cold-beverages": [
    { name: "Iced Latte", price: "200", desc: "Chilled & refreshing" },
    { name: "Cold Brew", price: "220", desc: "Slow-steeped perfection" },
    { name: "Frappuccino", price: "250", desc: "Blended icy treat" },
    { name: "Berry Smoothie", price: "230", desc: "Mixed berry & yogurt" },
    { name: "Mango Shake", price: "190", desc: "Seasonal favourite" },
    { name: "Lemonade", price: "130", desc: "Freshly squeezed" },
    { name: "Iced Tea", price: "150", desc: "Peach or lemon" },
    { name: "Virgin Mojito", price: "180", desc: "Mint & lime fizz" },
  ],
  "berry-specials": [
    { name: "Berry Bliss Latte", price: "260", desc: "Our signature berry latte" },
    { name: "Strawberry Cooler", price: "230", desc: "Fresh strawberry crush" },
    { name: "Berry Blast Shake", price: "250", desc: "Triple berry explosion" },
    { name: "Mixed Berry Fizz", price: "240", desc: "Sparkling berry refresher" },
    { name: "Berry Smoothie Bowl", price: "280", desc: "Acai & granola bowl" },
    { name: "Hot Berry Cider", price: "220", desc: "Warm spiced berry punch" },
  ],
  snacks: [
    { name: "Garlic Bread", price: "160", desc: "Crispy & buttery" },
    { name: "Cheese Toast", price: "180", desc: "Melted cheese delight" },
    { name: "French Fries", price: "140", desc: "Golden & crunchy" },
    { name: "Chicken Wrap", price: "250", desc: "Tortilla with spicy chicken" },
    { name: "Veg Sandwich", price: "190", desc: "Grilled garden fresh" },
    { name: "Club Sandwich", price: "280", desc: "Loaded triple-layer" },
    { name: "Nachos", price: "220", desc: "With cheese & salsa" },
    { name: "Mozzarella Sticks", price: "230", desc: "Fried cheese goodness" },
  ],
  desserts: [
    { name: "Berry Cheesecake", price: "290", desc: "Baked with berry compote" },
    { name: "Chocolate Brownie", price: "220", desc: "Warm & gooey" },
    { name: "Berry Tart", price: "260", desc: "Fresh berries & cream" },
    { name: "Muffin", price: "150", desc: "Blueberry or chocolate" },
    { name: "Waffle", price: "280", desc: "Crispy with syrup & berries" },
    { name: "Pancakes", price: "250", desc: "Stack with honey & fruit" },
    { name: "Ice Cream Sundae", price: "210", desc: "With berry drizzle" },
    { name: "Berry Parfait", price: "240", desc: "Layered yogurt & berries" },
  ],
};

export default function MenuPage() {
  const [active, setActive] = useState<Category>("hot-coffee");

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
            Menu
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-normal text-ink leading-[1.1]">
            What we
            <br />
            serve
          </h1>
        </motion.div>

        <div
          className="flex flex-wrap gap-1 mb-16"
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              role="tab"
              aria-selected={active === cat.id}
              aria-controls={`menu-panel-${cat.id}`}
              className={`font-nav text-[11px] uppercase tracking-[0.25em] px-5 py-3 transition-colors duration-500 focus-visible:outline-1 focus-visible:outline-berry ${
                active === cat.id
                  ? "text-berry bg-rose/20"
                  : "text-ink/20 hover:text-ink/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`menu-panel-${active}`}
            role="tabpanel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-8"
          >
            {menu[active].map((item, i) => (
              <motion.div
                key={item.name}
                className="border-b border-rose/15 pb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.03 }}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-heading text-xl font-light text-ink/70 shrink-0">
                    {item.name}
                  </h3>
                  <span className="flex-1 border-b border-dotted border-rose/25 min-w-[1rem]" />
                  <span className="font-heading text-lg text-berry/60 shrink-0">
                    &#8377; {item.price}
                  </span>
                </div>
                <p className="font-body text-xs text-stone">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
