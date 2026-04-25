"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { label: "Malzemeler", href: "#malzemeler" },
  { label: "Galeri", href: "#galeri" },
  { label: "Süreç", href: "#surec" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-ink/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:py-5">
          {/* Logo */}
          <a href="#" className="font-serif text-xl md:text-2xl tracking-widest text-cream uppercase">
            UMT
            <span className="text-gold"> · </span>
            <span className="font-light">Rosary Art</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs uppercase tracking-[0.2em] text-cream-dim hover:text-gold transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#siparis"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Sipariş
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-cream origin-center transition-colors"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-6 bg-cream"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-cream origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
      >
        {links.map((l, i) => (
          <motion.a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.07 }}
            className="font-serif text-4xl text-cream hover:text-gold transition-colors"
          >
            {l.label}
          </motion.a>
        ))}
        <motion.a
          href="#siparis"
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-4 rounded-full border border-gold/50 px-8 py-3 text-sm uppercase tracking-[0.2em] text-gold"
        >
          Sipariş
        </motion.a>
      </motion.div>
    </>
  );
}
