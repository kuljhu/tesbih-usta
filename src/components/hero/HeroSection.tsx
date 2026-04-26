"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const midY     = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY    = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100dvh] min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* Katman 1 — arka zemin */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-ink">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* Katman 2 — orta */}
      <motion.div style={{ y: midY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[40%]"
          style={{ background: "linear-gradient(to top, rgba(201,168,76,0.05) 0%, transparent 100%)" }}
        />
      </motion.div>

      {/* Katman 3 — metin */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-[10px] uppercase text-gold mb-8 tracking-[0.3em]"
        >
          {t("label")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-cream"
        >
          <p className="text-2xl md:text-3xl font-light leading-relaxed mb-6">
            {t("headline")}
          </p>
          <div className="text-base md:text-lg font-light leading-loose text-cream-dim max-w-lg mx-auto space-y-4">
            <p>{t("body1")}</p>
            <p className="font-serif italic text-gold/70 text-sm">{t("dua1")}</p>
            <p>{t("body2")}</p>
            <p className="font-serif italic text-gold/70 text-sm">{t("dua2")}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="my-8 w-24 h-px bg-gold/50 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-serif italic text-sm md:text-base text-muted"
        >
          {t("tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#galeri" className="rounded-full bg-gold text-ink px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-light transition-colors duration-300">
            {t("cta_gallery")}
          </a>
          <a href="#iletisim" className="text-xs uppercase tracking-[0.2em] text-cream-dim hover:text-gold transition-colors duration-300 underline underline-offset-4 decoration-gold/30">
            {t("cta_contact")}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-12 text-[11px] text-muted/60 font-serif italic"
        >
          {t("seal")}
        </motion.p>
      </motion.div>

      {/* Scroll göstergesi */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-muted/50">{t("scroll")}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
