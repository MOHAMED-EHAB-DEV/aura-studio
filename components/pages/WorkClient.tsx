"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/data/agencyData";
import { PageHero } from "@/components/ui/PageHero";
import { DistortionImage } from "@/components/three/DistortionImage";
import { Footer } from "@/components/layout/Footer";
import ArrowUpRight from "@/components/ui/svgs/ArrowUpRight";
import Hash from "@/components/ui/svgs/Hash";

export const WorkClient: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full"
    >
      <PageHero
        category="PORTFOLIO_INDEX"
        title="SELECTED WORKS (23-26)"
        subtitle="A meticulous record of core product architectures, digital systems, and visual narratives curated over the past three calendar years."
      />

      {/* Masonry-Style Interactive Grid */}
      <section className="relative bg-brand-bg px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          
          {/* Work count indicators */}
          <div className="mb-8 flex items-center justify-between font-mono text-[10px] tracking-wider text-brand-muted/80 uppercase">
            <span>INDEX_RECORDS: 04_ITEMS</span>
            <span>FILTER // ALL_SECTIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, index) => {
              const isAnyHovered = hoveredId !== null;
              const isMeHovered = hoveredId === project.id;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group flex flex-col items-start transition-all duration-500 ease-out ${
                    isAnyHovered && !isMeHovered ? "opacity-35 scale-[0.98] blur-[1px]" : "opacity-100"
                  }`}
                >
                  {/* Thumbnail Image Container */}
                  <div className="relative h-[45vh] md:h-[55vh] w-full overflow-hidden rounded-2xl border border-brand-border/40 bg-brand-surface shadow-md">
                    <DistortionImage
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                    
                    {/* Hover Card Reveal Overlay (Pure Tailwind styling) */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-6 text-left">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.services.slice(0, 2).map((service) => (
                          <span
                            key={service}
                            className="rounded-full bg-brand-primary/20 border border-brand-primary/40 px-2.5 py-1 font-mono text-[8px] tracking-wider text-brand-primary uppercase font-bold"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                      <p className="font-mono text-[9px] text-white/80 tracking-widest uppercase">
                        CLIENT: {project.client}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Title Row */}
                  <div className="mt-6 flex w-full items-start justify-between text-left">
                    <div>
                      <div className="flex items-center space-x-1.5 font-mono text-[10px] text-brand-primary font-semibold uppercase mb-1">
                        <Hash size={10} />
                        <span>0{index + 1} // YEAR: {project.year}</span>
                      </div>
                      <h2 className="font-display text-2xl font-black tracking-tight text-brand-text group-hover:text-brand-primary transition-colors uppercase">
                        {project.title}
                      </h2>
                      <p className="font-mono text-[11px] text-brand-muted uppercase mt-0.5 tracking-wider">
                        {project.category}
                      </p>
                    </div>

                    {/* Quick Explore Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-surface text-brand-text group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300">
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
export default WorkClient;
