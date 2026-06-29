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
    <main className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-3">
            Our Menu
          </h1>
          <p className="font-body text-charcoal/70 max-w-lg mx-auto">
            Handcrafted with love &mdash; every item tells a story
          </p>
        </motion.div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
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
              className={`font-body text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-berry focus-visible:outline-offset-2 ${
                active === cat.id
                  ? "bg-berry text-white shadow-md"
                  : "bg-white text-charcoal/70 hover:text-berry border border-berry/10"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {menu[active].map((item, i) => (
              <motion.div
                key={item.name}
                className="bg-white rounded-2xl p-6 border border-berry/5 hover:border-berry/20 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(139, 26, 74, 0.12)",
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-lg font-bold text-charcoal">
                    {item.name}
                  </h3>
                  <span className="font-heading font-bold text-berry text-sm whitespace-nowrap ml-3">
                    {item.price}
                  </span>
                </div>
                <p className="font-body text-sm text-charcoal/70">
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
