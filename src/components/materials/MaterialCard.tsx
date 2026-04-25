"use client";

import { motion } from "framer-motion";
import type { Material } from "@/data/materials";

const rarityLabel: Record<Material["rarity"], string> = {
  yaygın: "Yaygın",
  nadir: "Nadir",
  "çok nadir": "Çok Nadir",
};

const rarityColor: Record<Material["rarity"], string> = {
  yaygın: "text-cream-dim border-cream-dim/30",
  nadir: "text-gold border-gold/40",
  "çok nadir": "text-gold-light border-gold-light/60",
};

type Props = {
  material: Material;
  index: number;
};

export default function MaterialCard({ material, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
      className="group relative flex flex-col gap-4 rounded-xl border border-white/8 bg-ink-soft p-5 md:p-6 overflow-hidden"
    >
      {/* Arka plan renk aksanı */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
        style={{ backgroundColor: material.accent }}
      />

      {/* Başlık satırı */}
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-2xl md:text-3xl font-medium leading-tight text-cream">
            {material.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted">{material.origin}</p>
        </div>
        <span
          className={`shrink-0 mt-1 rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest ${rarityColor[material.rarity]}`}
        >
          {rarityLabel[material.rarity]}
        </span>
      </div>

      {/* Ayırıcı */}
      <div className="gold-divider relative" />

      {/* Özellikler ızgarası */}
      <dl className="relative grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
        <div>
          <dt className="text-[11px] uppercase tracking-widest text-muted">Sertlik</dt>
          <dd className="mt-0.5 text-cream-dim">{material.hardness}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-widest text-muted">Renk</dt>
          <dd className="mt-0.5 text-cream-dim">{material.color}</dd>
        </div>
        {material.scent && (
          <div className="col-span-2">
            <dt className="text-[11px] uppercase tracking-widest text-muted">Koku</dt>
            <dd className="mt-0.5 text-cream-dim">{material.scent}</dd>
          </div>
        )}
      </dl>

      {/* Not */}
      <p className="relative text-sm leading-relaxed text-muted group-hover:text-cream-dim transition-colors duration-300">
        {material.note}
      </p>

      {/* Alt altın çizgi — hover'da genişler */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full"
      />
    </motion.article>
  );
}
