"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

const aspectClass: Record<GalleryItem["aspect"], string> = {
  tall:   "aspect-[3/4]",
  wide:   "aspect-[4/3]",
  square: "aspect-square",
};

// Placeholder renk paleti — malzeme bazlı
const placeholderAccent: Record<string, string> = {
  "Damla Kehribar": "#c9822a",
  "Abanoz":         "#1a1208",
  "Kırmızı Mercan": "#7a1f1f",
  "Öd Ağacı":       "#2a1205",
  "Kehribar":       "#b87820",
  "Pelesenk":       "#3d1a2e",
  "Firuze":         "#1a4a5e",
  "Gül Odunu":      "#5a2535",
  "Katalin":        "#8a5a10",
  "Lapis Lazuli":   "#0f2245",
  "Mamut Dişi":     "#8a7a5a",
  "Oltu Taşı":      "#1a1a1a",
};

type Props = { item: GalleryItem; index: number };

export default function GalleryItemCard({ item, index }: Props) {
  const accent = placeholderAccent[item.material] ?? "#1a1310";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="masonry-item group relative overflow-hidden rounded-lg cursor-pointer"
    >
      <div className={`relative w-full ${aspectClass[item.aspect]} overflow-hidden`}>

        {item.src ? (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          /* Placeholder — fotoğraf gelene kadar */
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              background: `radial-gradient(ellipse at 40% 40%, ${accent}cc 0%, ${accent}55 40%, #0d0905 100%)`,
            }}
          >
            {/* Grain dokusu */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: "160px",
              }}
            />
            {/* Soyut habbe formu */}
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

        {/* Hover overlay — bilgi katmanı */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-4">
          <p className="text-gold text-xs uppercase tracking-[0.2em] mb-1">
            {item.material}
          </p>
          <p className="text-cream-dim text-xs">
            {item.cut} kesim
          </p>
        </div>

        {/* Altın border glow */}
        <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-gold/30 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}
