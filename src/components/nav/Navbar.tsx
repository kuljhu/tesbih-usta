"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const linksLeft  = [
  { label: "Malzemeler", href: "#malzemeler" },
  { label: "Kesimler",   href: "#kesimler"   },
];
const linksRight = [
  { label: "Galeri",     href: "#galeri"     },
  { label: "Süreç",      href: "#surec"      },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const allLinks = [...linksLeft, ...linksRight];

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
        <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-5 py-3 md:py-4">

          {/* Sol — nav linkleri */}
          <ul className="hidden md:flex items-center gap-6">
            {linksLeft.map((l) => (
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

          {/* Mobil sol — hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü"
              className="flex flex-col gap-1.5 p-2"
            >
              <motion.span animate={menuOpen ? { rotate: 45,  y: 8  } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-cream origin-center" />
              <motion.span animate={menuOpen ? { opacity: 0 }          : { opacity: 1 }}       className="block h-px w-6 bg-cream" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-cream origin-center" />
            </button>
          </div>

          {/* Merkez — logo */}
          <div className="flex flex-col items-center justify-center">
            <a href="#" className="flex flex-col items-center gap-1 group">
              <Image
                src="/images/logo.png"
                alt="UMT — Utku Mert Tunçay"
                width={52}
                height={52}
                className="rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300 invert brightness-90 group-hover:brightness-100"
                priority
              />
              <span className="hidden md:block text-[9px] uppercase tracking-[0.3em] text-cream/50 group-hover:text-gold/70 transition-colors duration-300">
                Prayer Beads
              </span>
            </a>
          </div>

          {/* Sağ — nav linkleri + CTA */}
          <div className="hidden md:flex items-center justify-end gap-6">
            {linksRight.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-[0.2em] text-cream-dim hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#siparis"
              className="ml-2 rounded-full border border-gold/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Sipariş
            </a>
          </div>

          {/* Mobil sağ — sipariş */}
          <div className="md:hidden flex justify-end">
            <a
              href="#siparis"
              className="rounded-full border border-gold/50 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-gold"
            >
              Sipariş
            </a>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
      >
        {/* Logo büyük — mobil menüde */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={menuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          className="mb-4"
        >
          <Image
            src="/images/logo.png"
            alt="UMT"
            width={80}
            height={80}
            className="rounded-full invert opacity-70"
          />
        </motion.div>

        {allLinks.map((l, i) => (
          <motion.a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.07 }}
            className="font-serif text-3xl text-cream hover:text-gold transition-colors"
          >
            {l.label}
          </motion.a>
        ))}

        <motion.a
          href="#siparis"
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 rounded-full border border-gold/50 px-8 py-3 text-sm uppercase tracking-[0.2em] text-gold"
        >
          Sipariş
        </motion.a>
      </motion.div>
    </>
  );
}
