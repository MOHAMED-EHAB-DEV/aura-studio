"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { MagneticButton } from "@/components/motion/MagneticButton";
import ArrowRight from "@/components/ui/svgs/ArrowRight";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 Page Not Found | AURA Studio";
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-brand-bg px-6 py-12 text-brand-text overflow-hidden select-none">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-brand-primary/10 rounded-full blur-[140px] opacity-70" aria-hidden="true" />

      {/* Decorative grid overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 mx-auto grid max-w-7xl grid-cols-4 opacity-[0.04]" aria-hidden="true">
        <div className="border-x border-brand-text" />
        <div className="border-r border-brand-text" />
        <div className="border-r border-brand-text" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center flex flex-col items-center">
        {/* Status Tag */}
        <div className="inline-flex items-center space-x-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 font-mono text-[10px] sm:text-xs font-bold tracking-widest text-brand-primary uppercase mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping shrink-0" />
          <span>ERROR // 404_REALITY_VOID</span>
        </div>

        {/* Big Stroke 404 */}
        <h1 className="font-display text-[110px] sm:text-[180px] md:text-[230px] font-black leading-none tracking-tighter stroke-text text-transparent opacity-90">
          404
        </h1>

        {/* Heading */}
        <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4">
          DIGITAL REALITY NOT FOUND
        </h2>

        {/* Description */}
        <p className="max-w-md sm:max-w-lg text-xs sm:text-sm md:text-base text-brand-muted leading-relaxed font-sans mb-8 sm:mb-10">
          The destination node you are trying to reach has dissolved or never existed in this project space.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href="/">
            <MagneticButton className="flex items-center justify-center space-x-3 rounded-full bg-brand-primary px-8 py-4 font-mono text-xs font-bold tracking-widest text-white hover:bg-brand-primary-dark transition-all duration-300 shadow-lg shadow-brand-primary/25 w-full sm:w-auto">
              <span>RETURN_HOME</span>
              <ArrowRight size={14} />
            </MagneticButton>
          </Link>

          <Link href="/work">
            <MagneticButton className="flex items-center justify-center space-x-3 rounded-full border border-brand-border bg-brand-surface/80 px-8 py-4 font-mono text-xs font-bold tracking-widest text-brand-text hover:border-brand-text transition-all duration-300 w-full sm:w-auto">
              <span>EXPLORE_WORK</span>
            </MagneticButton>
          </Link>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="absolute bottom-6 left-0 right-0 text-center font-mono text-[9px] sm:text-[10px] text-brand-muted/50 tracking-widest uppercase">
        AURA STUDIO // 404_PAGE_SYSTEM_ONLINE
      </div>
    </div>
  );
}
