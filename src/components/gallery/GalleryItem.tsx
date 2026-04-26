"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";
import { generateBIN } from "@/data/gallery";
import { useTranslations } from "next-intl";

const aspectClass: Record<GalleryItem["aspect"], string> = {
  tall:   "aspect-[3/4]",
  wide:   "aspect-[4/3]",
  square: "aspect-square",
};

const placeholderAccent: Record<string, string> = {
  "Kehribar":             "#b87820",
  "Kehribar (Yumurta)":   "#d4920a",
  "Kehribar (Açık)":      "#d4c878",
  "Kehribar (Doğal)":     "#8a4510",
  "Kehribar (Sürahi)":    "#c49010",
  "Kehribar (Kütük)":     "#b4a030",
  "Kehribar (Koyu)":      "#2a1505",
  "Kehribar (Bal)":       "#b87020",
  "Pelesenk":             "#3d1208",
  "Pelesenk (Mor)":       "#4a0a5a",
  "Gülağacı":             "#8a3020",
  "Kuka":                 "#7a4a18",
  "Öd Ağacı":             "#2a3010",
  "Yeşim":                "#1a4a2e",
  "Yeşim (Kütük)":        "#1a3a20",
  "Ametist":              "#3d1a5e",
  "Garnet":               "#5a0a0a",
  "Yeşil Katalin":        "#0a5a1a",
  "Mavi Reçine":          "#0a2a6a",
  "Deve Kemigi":          "#c4a87a",
  "Kemik":                "#c8b89a",
  "Abanoz":               "#1a1208",
  "Oltu Taşı":            "#0a0a0a",
  "Lapis Lazuli":         "#0f2245",
  "Firuze":               "#1a4a5e",
};

type Props = { item: GalleryItem; index: number };

export default function GalleryItemCard({ item, index }: Props) {
  const t      = useTranslations("gallery.fields");
  const accent = placeholderAccent[item.material] ?? "#1a1310";
  const bin    = generateBIN(item);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="masonry-item group"
    >
      {/* Fotoğraf */}
      <div className={`relative w-full ${aspectClass[item.aspect]} overflow-hidden rounded-lg`}>
        {item.src ? (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.18]"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.18]"
            style={{
              background: `radial-gradient(ellipse at 40% 40%, ${accent}cc 0%, ${accent}55 40%, #0d0905 100%)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: "160px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, #c9a84c 0%, transparent 70%)`,
                  borderRadius: "50%",
                  filter: "blur(8px)",
                }}
              />
            </div>
          </div>
        )}

        {/* Altın border glow */}
        <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-gold/30 transition-all duration-500 pointer-events-none" />
      </div>

      {/* BIN + Metadata */}
      <div className="mt-3 px-1 space-y-2">
        {/* BIN kodu */}
        <p className="font-mono text-[10px] tracking-[0.15em] text-gold/80">
          {bin}
        </p>

        {/* Bilgiler */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {[
            [t("material"),    item.material],
            [t("cut"),         item.cut],
            [t("beads"),       String(item.beadCount)],
            [t("collection"),  item.collection],
            [t("year"),        String(item.year)],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted/50">{label}</span>
              <span className="text-[11px] text-cream-dim leading-tight">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
