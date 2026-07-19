import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { projects } from "../../data/agencyData";
import { DistortionImage } from "../three/DistortionImage";
import { useAudio } from "../../context/AudioContext";
import ArrowUpRight from "../ui/svgs/ArrowUpRight";
import Award from "../ui/svgs/Award";
import Hash from "../ui/svgs/Hash";
import ArrowRight from "../ui/svgs/ArrowRight";
import { MagneticButton } from "../motion/MagneticButton";

export const WorkShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { playTick } = useAudio();
  const [activePanel, setActivePanel] = useState(0);

  // Reference to track previous active index in scroll loop to prevent duplicate ticks
  const prevIndexRef = useRef(0);

  useGSAP(() => {
    if (!scrollRef.current || !containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const scrollEl = scrollRef.current;
      const containerEl = containerRef.current;
      if (!scrollEl || !containerEl) return;
      
      const scrollWidth = scrollEl.scrollWidth;
      const amountToScroll = scrollWidth - window.innerWidth;

      const trigger = ScrollTrigger.create({
        trigger: containerEl,
        pin: true,
        scrub: 0.8,
        start: "top top",
        end: `+=${amountToScroll}`,
        animation: gsap.to(scrollEl, {
          x: -amountToScroll,
          ease: "none"
        }),
        onUpdate: (self) => {
          // Track current panels in viewport
          const progress = self.progress;
          const index = Math.min(
            Math.round(progress * (projects.length - 1)),
            projects.length - 1
          );

          if (index !== prevIndexRef.current) {
            prevIndexRef.current = index;
            setActivePanel(index);
            // Play physical tactile tick sound on panel change
            playTick();
          }
        }
      });

      return () => {
        trigger.kill();
      };
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative bg-brand-bg select-none">
      <h2 className="sr-only">Selected Case Studies</h2>
      {/* Scroll indicator overlay */}
      <div className="hidden md:flex absolute top-12 left-12 z-30 items-center space-x-6 font-mono text-[10px] tracking-widest text-brand-muted/75">
        <span>PROJECTS_04</span>
        <div className="flex space-x-2">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                activePanel === i ? "bg-brand-primary w-4" : "bg-brand-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main showcase scroll track */}
      <div
        ref={scrollRef}
        className="flex flex-col md:flex-row md:flex-nowrap md:h-screen w-full"
      >
        {projects.map((project, index) => (
          <section
            key={project.id}
            className="showcase-panel flex-shrink-0 h-screen w-full md:w-screen flex flex-col justify-center px-6 py-20 md:px-16 md:py-12 border-b md:border-b-0 md:border-r border-brand-border/20 relative"
          >
            {/* Grid background visual */}
            <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4 opacity-5">
              <div className="border-r border-brand-text" />
              <div className="border-r border-brand-text" />
              <div className="border-r border-brand-text" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl h-full flex flex-col md:grid md:grid-cols-12 md:gap-12 md:items-center">
              
              {/* Column 1: Image Wrapper (Col 7) */}
              <div className="md:col-span-7 h-[42vh] md:h-[65vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-border/40 relative group mb-6 md:mb-0">
                <DistortionImage
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                
                {/* Micro-Interaction Project Year tag */}
                <div className="absolute top-4 left-4 rounded-full bg-brand-bg/80 backdrop-blur-md border border-brand-border/40 px-4 py-1.5 font-mono text-[10px] tracking-wider text-brand-text">
                  RELEASE // {project.year}
                </div>
              </div>

              {/* Column 2: Details Column (Col 5) */}
              <div className="md:col-span-5 flex flex-col text-left justify-center h-full">
                <div className="flex items-center space-x-2 font-mono text-xs text-brand-primary font-semibold mb-2">
                  <Hash size={12} />
                  <span>0{index + 1}_CASE_STUDY</span>
                </div>

                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-brand-text mb-4 uppercase">
                  {project.title}
                </h3>

                <p className="font-mono text-xs text-brand-muted uppercase tracking-wider mb-6 pb-2 border-b border-brand-border/20">
                  CATEGORY: {project.category}
                </p>

                <p className="text-sm md:text-base text-brand-muted leading-relaxed font-sans mb-8">
                  {project.description}
                </p>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-4 mb-8 border-y border-brand-border/20 py-4 font-mono">
                  {project.metrics.map((metric, i) => {
                    const [val, label] = metric.split(" ");
                    return (
                      <div key={i} className="text-left">
                        <span className="block text-lg font-bold text-brand-primary">{val}</span>
                        <span className="block text-[9px] tracking-wider text-brand-muted/85 uppercase">
                          {label || "Uplift"}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Link */}
                <div>
                  <MagneticButton
                    className="group inline-flex items-center space-x-3 rounded-full border border-brand-text bg-brand-surface px-6 py-3 font-mono text-xs font-bold tracking-widest text-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-300"
                    id={`view-project-btn-${project.id}`}
                  >
                    <span>EXPLORE_CASE</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </MagneticButton>
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* Portfolio Index CTA Bar */}
      <div className="relative py-12 md:py-16 border-t border-brand-border/20 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-left">
          <p className="font-mono text-xs text-brand-primary font-semibold">// CURATED_WORK</p>
          <p className="font-display text-xl font-bold text-brand-text mt-1">Want to see all projects?</p>
        </div>
        <Link
          to="/work"
          className="group flex items-center space-x-3 rounded-full border border-brand-border bg-brand-surface px-6 py-3.5 font-mono text-xs font-bold tracking-widest text-brand-text hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
        >
          <span>PORTFOLIO_INDEX</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
