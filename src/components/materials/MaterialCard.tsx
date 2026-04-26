"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Material } from "@/data/materials";

const rarityLabel: Record<Material["rarity"], string> = {
  yaygın: "Yaygın",
  nadir: "Nadir",
  "çok nadir": "Çok Nadir",
};

const rarityColor: Record<Material["rarity"], string> = {
  yaygın:       "text-cream-dim/80 border-cream-dim/20",
  nadir:        "text-gold border-gold/40",
  "çok nadir":  "text-gold-light border-gold-light/60",
};

type Props = { material: Material; index: number };

export default function MaterialCard({ material, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
      className="group relative flex flex-col rounded-xl border border-white/8 overflow-hidden"
    >
      {/* ── HEADER ── */}
      <div className="relative h-28 md:h-36 flex flex-col justify-end px-5 md:px-6 pb-4 overflow-hidden">

        {/* Fotoğraf — varsa */}
        {material.image && (
          <Image
            src={material.image}
            alt={material.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}

        {/* Accent rengi gradient overlay — fotoğraflı kartlarda ton, fotoğrafsızlarda arka plan */}
        <div
          className="absolute inset-0"
          style={{
            background: material.image
              ? `linear-gradient(to top, ${material.accent}ee 0%, ${material.accent}88 40%, ${material.accent}22 100%)`
              : `linear-gradient(145deg, ${material.accent} 0%, ${material.accent}bb 40%, #1a1310 100%)`,
          }}
        />

        {/* Grain dokusu */}
        {!material.image && (
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "160px",
            }}
          />
        )}

        {/* Nadirlik rozeti */}
        <span
          className={`absolute top-4 right-4 md:right-5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest backdrop-blur-sm bg-black/30 ${rarityColor[material.rarity]}`}
        >
          {rarityLabel[material.rarity]}
        </span>

        {/* Malzeme adı + köken */}
        <div className="relative">
          <h3 className="font-serif text-2xl md:text-3xl font-medium leading-tight text-cream drop-shadow-md">
            {material.name}
          </h3>
          <p className="mt-0.5 text-xs text-cream/60">{material.origin}</p>
        </div>
      </div>

      {/* ── GÖVDE ── */}
      <div className="relative flex flex-col gap-4 bg-ink-soft px-5 md:px-6 py-4 md:py-5 flex-1">
        <div
          className="absolute top-0 inset-x-0 h-px opacity-40"
          style={{ background: `linear-gradient(90deg, transparent, ${material.accent}, transparent)` }}
        />

        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          <div>
            <dt className="text-[11px] uppercase tracking-widest text-muted">Sertlik</dt>
            <dd className="mt-0.5 text-cream-dim font-mono text-xs">{material.hardness}</dd>
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

        <p className="text-sm leading-relaxed text-muted group-hover:text-cream-dim transition-colors duration-300">
          {material.note}
        </p>

        <div
          className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
          style={{ background: material.accent }}
        />
      </div>
    </motion.article>
  );
}
