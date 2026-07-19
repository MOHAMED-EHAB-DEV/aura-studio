import React, { useState, Suspense } from "react";
import Play from "../ui/svgs/Play";
import X from "../ui/svgs/X";
const LiquidShaderCanvas = React.lazy(() => import("../three/LiquidShaderCanvas").then(m => ({ default: m.LiquidShaderCanvas })));
import { MagneticButton } from "../motion/MagneticButton";
import { SplitText } from "../motion/SplitText";
import { motion, AnimatePresence } from "motion/react";

export const HeroSection: React.FC = () => {
  const [showReel, setShowReel] = useState(false);

  return (
    <>
      <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-brand-bg px-6 pb-12 pt-32 md:px-12 md:pb-16 md:pt-40">
        {/* Background WebGL Liquid Shader */}
        <Suspense fallback={<div className="absolute inset-0 z-0 h-full w-full bg-brand-bg opacity-30" />}>
          <LiquidShaderCanvas />
        </Suspense>

        {/* Decorative Grid Lines */}
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-4 border-x border-brand-border/10">
          <div className="border-r border-brand-border/10" />
          <div className="border-r border-brand-border/10" />
          <div className="border-r border-brand-border/10" />
        </div>

        {/* Top/Intro Text */}
        <div className="relative z-20 flex w-full flex-col md:flex-row justify-between items-start md:items-center text-xs font-mono tracking-widest text-brand-muted gap-4">
          <div className="flex items-center space-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-ping" />
            <span>AURA_STUDIO // NEW YORK - LONDON</span>
          </div>
          <div>
            <span>LAT: 40.7128° N, LONG: 74.0060° W</span>
          </div>
        </div>

        {/* Massive Typography Content */}
        <div className="relative z-20 my-auto flex max-w-5xl flex-col text-left">
          <h1 className="font-display text-[11vw] md:text-[8vw] font-extrabold leading-[0.9] tracking-tighter text-brand-text select-none">
            <SplitText text="WE SHAPE" className="block text-brand-primary" />
            <SplitText text="DIGITAL" className="block text-brand-text" delay={0.2} />
            <SplitText text="REALITIES." className="block stroke-text text-brand-text" delay={0.4} />
          </h1>
        </div>

        {/* Bottom Panel controls / Scroll Indicator */}
        <div className="relative z-20 flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col text-left max-w-sm">
            <p className="font-mono text-xs text-brand-primary tracking-widest uppercase mb-1 font-semibold">
              // DESIGN FOR THE FUTURE
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              We engineer immersive, hyper-designed web properties for venture-backed startups and premium corporate entities.
            </p>
          </div>

          <div className="flex items-center space-x-8">
            {/* Scroll indicator */}
            <div className="hidden md:flex flex-col items-start font-mono text-[10px] tracking-widest text-brand-muted/80">
              <span>SCROLL_TO_DISCOVER</span>
              <div className="mt-2 h-16 w-[1px] bg-brand-border/40 relative overflow-hidden">
                <motion.div
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                  className="absolute h-1/2 w-full bg-brand-primary"
                />
              </div>
            </div>

            {/* CTA button */}
            <MagneticButton
              onClick={() => setShowReel(true)}
              className="group flex items-center space-x-3 rounded-full border border-brand-primary bg-brand-primary/10 px-8 py-4 font-mono text-xs font-bold tracking-widest text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-lg shadow-brand-primary/10"
              id="view-reel-btn"
            >
              <Play size={14} className="fill-current transition-transform group-hover:scale-110" />
              <span>VIEW_REEL</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Fullscreen Video Reel Modal */}
      <AnimatePresence>
        {showReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setShowReel(false)}
              className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Close video reel"
            >
              <X size={20} />
            </button>
            <div className="aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-2xl">
              <iframe
                src="https://player.vimeo.com/video/371433846?autoplay=1&title=0&byline=0&portrait=0"
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                title="AURA Creative Reel"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
