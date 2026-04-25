"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0.1, 0.5], [0.92, 1]);
  const scale    = useSpring(rawScale, { stiffness: 60, damping: 20 });
  const opacity  = useTransform(scrollYProgress, [0.1, 0.35, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-40 flex items-center justify-center overflow-hidden"
    >
      {/* Arka plan: hafif altın halo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="gold-divider absolute top-0 inset-x-0" />
      <div className="gold-divider absolute bottom-0 inset-x-0" />

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 px-6 max-w-4xl mx-auto text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8">Utku Mert Tunçay</p>

        <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-snug text-cream">
          Malzeme aklına düşmeden,
          <br />
          <em className="text-gold not-italic">gönlün kesime niyet etmeden.</em>
        </blockquote>

        <p className="mt-8 font-serif italic text-base md:text-lg text-muted">
          Her tesbih böyle başlar.
        </p>
      </motion.div>
    </section>
  );
}
