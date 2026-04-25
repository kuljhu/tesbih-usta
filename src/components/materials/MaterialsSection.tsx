"use client";

import { materials, categoryMeta, type MaterialCategory } from "@/data/materials";
import MaterialCard from "./MaterialCard";
import { motion } from "framer-motion";

const categoryOrder: MaterialCategory[] = ["ahşap", "kemik", "taş", "sentetik"];

export default function MaterialsSection() {
  return (
    <section id="malzemeler" className="py-20 md:py-32">
      {/* Bölüm başlığı */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 mb-16 md:mb-24"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Hammaddeler</p>
        <h2 className="font-serif text-4xl md:text-6xl font-light text-cream">
          Malzemeler & Özellikleri
        </h2>
        <p className="mt-4 mx-auto max-w-lg text-base text-muted leading-relaxed">
          Temelde üç tip malzeme vardır: ahşap, kemik, taş.
          Geri kalan her şey bu üçünün gölgesinde konuşlanır.
        </p>
      </motion.div>

      {/* Kategori grupları */}
      <div className="space-y-20 md:space-y-32">
        {categoryOrder.map((cat, catIndex) => {
          const group = materials.filter((m) => m.category === cat);
          const meta  = categoryMeta[cat];

          return (
            <div key={cat} className="px-4 md:px-8 max-w-7xl mx-auto">
              {/* Kategori başlığı */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: catIndex * 0.05 }}
                className="mb-8 md:mb-10 flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gold/60">
                    0{catIndex + 1}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl font-light text-cream mt-1">
                    {meta.label}
                  </h3>
                </div>
                <p className="text-sm text-muted leading-relaxed max-w-md pb-0.5">
                  {meta.description}
                </p>
              </motion.div>

              <div className="gold-divider mb-8 md:mb-10" />

              {/* Kartlar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {group.map((material, i) => (
                  <MaterialCard key={material.id} material={material} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
