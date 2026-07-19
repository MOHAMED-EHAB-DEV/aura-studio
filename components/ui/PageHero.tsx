import React from "react";
import { SplitText } from "../motion/SplitText";

interface PageHeroProps {
  category: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  category,
  title,
  subtitle,
  id,
}) => {
  return (
    <section
      id={id}
      className="relative w-full bg-brand-bg px-6 pt-36 pb-16 md:px-12 md:pt-44 md:pb-24 border-b border-brand-border/20 overflow-hidden"
    >
      {/* Decorative architectural grid overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4 opacity-5">
        <div className="border-r border-brand-text" />
        <div className="border-r border-brand-text" />
        <div className="border-r border-brand-text" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 text-left">
        {/* Category tag */}
        <span className="font-mono text-xs tracking-widest text-brand-primary uppercase font-bold">
          // {category}
        </span>

        {/* Section Headline */}
        <h1 className="font-display text-[8vw] md:text-[5vw] font-black leading-[0.95] tracking-tighter text-brand-text uppercase mt-4 mb-6 select-none max-w-5xl">
          <SplitText text={title} />
        </h1>

        {/* Secondary description caption */}
        {subtitle && (
          <p className="max-w-xl text-sm md:text-base text-brand-muted leading-relaxed font-sans">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
