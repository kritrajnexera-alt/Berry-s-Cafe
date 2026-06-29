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
    { name: "Espresso", price: "\u20B9 120", desc: "Strong & bold single shot" },
    { name: "Americano", price: "\u20B9 150", desc: "Smooth black coffee" },
    { name: "Cappuccino", price: "\u20B9 180", desc: "Classic frothy delight" },
    { name: "Latte", price: "\u20B9 200", desc: "Creamy steamed milk coffee" },
    { name: "Mocha", price: "\u20B9 220", desc: "Chocolate & espresso bliss" },
    { name: "Flat White", price: "\u20B9 210", desc: "Velvety double shot" },
    { name: "Irish Coffee", price: "\u20B9 250", desc: "Coffee with a kick" },
    { name: "Filter Coffee", price: "\u20B9 140", desc: "South Indian classic" },
  ],
  "cold-beverages": [
    { name: "Iced Latte", price: "\u20B9 200", desc: "Chilled & refreshing" },
    { name: "Cold Brew", price: "\u20B9 220", desc: "Slow-steeped perfection" },
    { name: "Frappuccino", price: "\u20B9 250", desc: "Blended icy treat" },
    { name: "Berry Smoothie", price: "\u20B9 230", desc: "Mixed berry & yogurt" },
    { name: "Mango Shake", price: "\u20B9 190", desc: "Seasonal favourite" },
    { name: "Lemonade", price: "\u20B9 130", desc: "Freshly squeezed" },
    { name: "Iced Tea", price: "\u20B9 150", desc: "Peach or lemon" },
    { name: "Virgin Mojito", price: "\u20B9 180", desc: "Mint & lime fizz" },
  ],
  "berry-specials": [
    { name: "Berry Bliss Latte", price: "\u20B9 260", desc: "Our signature berry latte" },
    { name: "Strawberry Cooler", price: "\u20B9 230", desc: "Fresh strawberry crush" },
    { name: "Berry Blast Shake", price: "\u20B9 250", desc: "Triple berry explosion" },
    { name: "Mixed Berry Fizz", price: "\u20B9 240", desc: "Sparkling berry refresher" },
    { name: "Berry Smoothie Bowl", price: "\u20B9 280", desc: "Acai & granola bowl" },
    { name: "Hot Berry Cider", price: "\u20B9 220", desc: "Warm spiced berry punch" },
  ],
  snacks: [
    { name: "Garlic Bread", price: "\u20B9 160", desc: "Crispy & buttery" },
    { name: "Cheese Toast", price: "\u20B9 180", desc: "Melted cheese delight" },
    { name: "French Fries", price: "\u20B9 140", desc: "Golden & crunchy" },
    { name: "Chicken Wrap", price: "\u20B9 250", desc: "Tortilla with spicy chicken" },
    { name: "Veg Sandwich", price: "\u20B9 190", desc: "Grilled garden fresh" },
    { name: "Club Sandwich", price: "\u20B9 280", desc: "Loaded triple-layer" },
    { name: "Nachos", price: "\u20B9 220", desc: "With cheese & salsa" },
    { name: "Mozzarella Sticks", price: "\u20B9 230", desc: "Fried cheese goodness" },
  ],
  desserts: [
    { name: "Berry Cheesecake", price: "\u20B9 290", desc: "Baked with berry compote" },
    { name: "Chocolate Brownie", price: "\u20B9 220", desc: "Warm & gooey" },
    { name: "Berry Tart", price: "\u20B9 260", desc: "Fresh berries & cream" },
    { name: "Muffin", price: "\u20B9 150", desc: "Blueberry or chocolate" },
    { name: "Waffle", price: "\u20B9 280", desc: "Crispy with syrup & berries" },
    { name: "Pancakes", price: "\u20B9 250", desc: "Stack with honey & fruit" },
    { name: "Ice Cream Sundae", price: "\u20B9 210", desc: "With berry drizzle" },
    { name: "Berry Parfait", price: "\u20B9 240", desc: "Layered yogurt & berries" },
  ],
};

export default function MenuPage() {
  const [active, setActive] = useState<Category>("hot-coffee");

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
            Menu
          </h2>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-ink">
            What we serve
          </h1>
        </motion.div>

        <div
          className="flex flex-wrap gap-1 mb-14"
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
              className={`font-nav text-xs uppercase tracking-[0.2em] px-5 py-2.5 transition-colors duration-300 focus-visible:outline-1 focus-visible:outline-berry ${
                active === cat.id
                  ? "text-berry bg-rose/10"
                  : "text-ink/30 hover:text-ink/60"
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {menu[active].map((item, i) => (
              <motion.div
                key={item.name}
                className="border-b border-rose/20 pb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-heading text-lg font-light text-ink/80">
                    {item.name}
                  </h3>
                  <span className="font-body text-sm text-ink/30 shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="font-body text-sm text-ink/40">
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
