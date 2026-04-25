"use client";

import { motion } from "framer-motion";
import { cuts, eraLabel, type CutEra } from "@/data/cuts";
import CutShape from "./CutShape";

const eraColor: Record<CutEra, string> = {
  "klasik-osmanlı":  "text-gold border-gold/40",
  "istanbul-atölye": "text-gold-light border-gold-light/50",
  "evrensel":        "text-cream-dim border-cream-dim/30",
};

export default function CutsSection() {
  return (
    <section id="kesimler" className="py-20 md:py-32">
      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 mb-16 md:mb-20"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
          Osmanlı Dönemi
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-light text-cream">
          Habbe Kesim Çeşitleri
        </h2>
        <p className="mt-4 mx-auto max-w-lg text-base text-muted leading-relaxed">
          Her kesim bir okuldur. Klasik Osmanlı atölyelerinde form, malzemenin
          tabiatına göre seçilirdi — estetik değil, anlam önce gelirdi.
        </p>
      </motion.div>

      <div className="gold-divider mx-4 md:mx-8 mb-16" />

      {/* Kart ızgarası */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {cuts.map((cut, i) => (
          <motion.article
            key={cut.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            className="group relative flex flex-col gap-4 rounded-xl border border-white/8 bg-ink-soft p-5 md:p-6 overflow-hidden"
          >
            {/* Hover arka plan */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
            />

            {/* Üst satır: SVG form + başlık */}
            <div className="relative flex items-center gap-4">
              {/* SVG habbe formu */}
              <div className="shrink-0 group-hover:scale-105 transition-transform duration-500">
                <CutShape cutId={cut.id} size={56} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-cream leading-tight">
                    {cut.name}
                  </h3>
                  {cut.ottoman && (
                    <span className="text-muted/50 text-sm font-serif">{cut.ottoman}</span>
                  )}
                </div>
                <p className="text-xs text-muted mt-0.5">{cut.form}</p>
              </div>
            </div>

            {/* Dönem rozeti */}
            <div className="relative flex items-center justify-between gap-2">
              <span className={`text-[10px] uppercase tracking-widest border rounded-full px-2.5 py-0.5 ${eraColor[cut.era]}`}>
                {eraLabel[cut.era]}
              </span>
            </div>

            {/* Ayırıcı */}
            <div className="gold-divider relative" />

            {/* Not */}
            <p className="relative text-sm leading-relaxed text-muted group-hover:text-cream-dim transition-colors duration-300">
              {cut.note}
            </p>

            {/* Malzeme etiketleri */}
            <div className="relative flex flex-wrap gap-1.5 mt-auto">
              {cut.materials.map((m) => (
                <span
                  key={m}
                  className="text-[10px] bg-white/4 border border-white/8 rounded-full px-2 py-0.5 text-cream-dim/70"
                >
                  {m}
                </span>
              ))}
            </div>

            {/* Alt altın çizgi animasyonu */}
            <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
