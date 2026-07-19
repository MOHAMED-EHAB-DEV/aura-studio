import React from "react";
import Link from "next/link";
import { MagneticButton } from "../motion/MagneticButton";
import ArrowRight from "../ui/svgs/ArrowRight";

export const CTABanner: React.FC = () => {
  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-40 px-6 overflow-hidden border-t border-brand-border/10">
      {/* Intense Glowing Radial Background Accent */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-200 max-h-200 bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="pointer-events-none absolute inset-y-0 left-12 right-12 z-0 grid grid-cols-4 opacity-5">
        <div className="border-r border-brand-text" />
        <div className="border-r border-brand-text" />
        <div className="border-r border-brand-text" />
      </div>

      <div className="mx-auto max-w-6xl text-center relative z-10 flex flex-col items-center">
        <span className="font-mono text-xs tracking-widest text-brand-primary uppercase font-bold mb-4 md:mb-6">
          // INITIATE_ENGAGEMENT
        </span>

        {/* Screen-Filling Headline */}
        <h2 className="font-display text-[7.5vw] md:text-[5.5vw] font-black leading-[0.95] tracking-tighter text-brand-text mb-12 uppercase select-none">
          HAVE A VISION?<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-[#FF7300]">
            LET'S TALK.
          </span>
        </h2>

        {/* Massive Magnetic Project Starter Button */}
        <div>
          <Link href="/contact">
            <MagneticButton
              className="group flex h-36 w-36 md:h-44 md:w-44 flex-col items-center justify-center rounded-full bg-brand-primary text-white hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-brand-primary/20"
              id="cta-start-project-btn"
            >
              <span className="font-mono text-[10px] md:text-xs font-black tracking-widest uppercase">
                START_PROJECT
              </span>
              <ArrowRight size={20} className="mt-2 group-hover:translate-x-2 transition-transform duration-300" />
            </MagneticButton>
          </Link>
        </div>

        {/* Subtle status tag */}
        <div className="mt-16 font-mono text-[9px] tracking-wider text-brand-muted/75">
          PROJECT_AVAILABILITY // Q2-Q3 2026: 2 SLOTS OPEN
        </div>
      </div>
    </section>
  );
};
