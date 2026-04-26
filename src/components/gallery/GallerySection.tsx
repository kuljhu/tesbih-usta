"use client";

import { motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import GalleryItemCard from "./GalleryItem";

export default function GallerySection() {
  return (
    <section id="galeri" className="py-20 md:py-32">
      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 mb-12 md:mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Eserler</p>
        <h2 className="font-serif text-4xl md:text-6xl font-light text-cream">
          Galeri
        </h2>
        <p className="mt-4 mx-auto max-w-md text-base text-muted leading-relaxed">
          Her tesbih bir kez yapılır, aynısı yapılmaz.
          Bunlar şimdiye kadar çıkanlardan.
          Sizin için hangisini yapalım?
        </p>
      </motion.div>

      <div className="gold-divider mx-4 md:mx-8 mb-10 md:mb-14" />

      {/* Masonry grid */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="masonry">
          {galleryItems.map((item, i) => (
            <GalleryItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

    </section>
  );
}
