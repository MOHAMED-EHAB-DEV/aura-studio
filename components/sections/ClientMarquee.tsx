import React from "react";
import { motion } from "motion/react";
import { clients } from "../../data/agencyData";

export const ClientMarquee: React.FC = () => {
  // Duplicate list to ensure seamless infinite scroll
  const row1 = [...clients, ...clients, ...clients, ...clients];
  const row2 = [...clients, ...clients, ...clients, ...clients].reverse();

  return (
    <section className="relative w-full bg-[#030303] py-16 md:py-24 overflow-hidden border-y border-brand-border/20">
      {/* Absolute Vignette Overlay for Premium Edge Fading */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-48 bg-gradient-to-r from-brand-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-48 bg-gradient-to-l from-brand-bg to-transparent" />

      {/* Row 1: Leftward infinite scroll */}
      <div className="flex w-full overflow-hidden mb-6 md:mb-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 18,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center gap-12 md:gap-20"
        >
          {row1.map((client, index) => (
            <div
              key={`row1-${client.name}-${index}`}
              className="flex items-center space-x-4 md:space-x-6 select-none"
            >
              <span className="font-display text-4xl md:text-6xl font-black tracking-tighter text-brand-text/70 hover:text-brand-primary transition-colors cursor-default">
                {client.name}
              </span>
              <span className="font-mono text-[10px] rounded border border-brand-primary/20 px-1.5 py-0.5 text-brand-primary/85">
                {client.code}
              </span>
              <span className="text-brand-primary/65 text-xl font-bold">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Rightward infinite scroll */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center gap-12 md:gap-20"
        >
          {row2.map((client, index) => (
            <div
              key={`row2-${client.name}-${index}`}
              className="flex items-center space-x-4 md:space-x-6 select-none"
            >
              <span className="font-display text-4xl md:text-6xl font-black tracking-tighter text-brand-text/70 hover:text-brand-primary transition-colors cursor-default">
                {client.name}
              </span>
              <span className="font-mono text-[10px] rounded border border-brand-primary/20 px-1.5 py-0.5 text-brand-primary/85">
                {client.code}
              </span>
              <span className="text-brand-primary/65 text-xl font-bold">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
