"use client";

import { materials } from "@/data/materials";
import MaterialCard from "./MaterialCard";
import { motion } from "framer-motion";

export default function MaterialsSection() {
  return (
    <section id="malzemeler" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Bölüm başlığı */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Hammaddeler</p>
        <h2 className="font-serif text-4xl md:text-6xl font-light text-cream">
          Malzemeler & Özellikleri
        </h2>
        <p className="mt-4 mx-auto max-w-xl text-base text-muted leading-relaxed">
          Her tesbih, yüzyıllık bilgiyle seçilmiş nadir malzemelerden şekillenir.
          Hammaddenin nereden geldiği, nasıl hissettirdiği ve neden özel olduğunu keşfedin.
        </p>
      </motion.div>

      {/* Kart ızgarası — mobil 1 kolon, tablet 2, masaüstü 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {materials.map((material, i) => (
          <MaterialCard key={material.id} material={material} index={i} />
        ))}
      </div>
    </section>
  );
}
