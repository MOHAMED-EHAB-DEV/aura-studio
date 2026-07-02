import React from "react";
import { motion } from "motion/react";
import { team } from "../data/agencyData";
import { PageHero } from "../components/ui/PageHero";
import { TiltCard } from "../components/motion/TiltCard";
import { Footer } from "../components/layout/Footer";
import { ArrowUpRight, Award, Compass, Heart } from "lucide-react";

export const About: React.FC = () => {
  const stats = [
    { label: "FOUNDED", val: "2023" },
    { label: "PARTNERS", val: "100%" },
    { label: "AWARDS_WIN", val: "18+" },
    { label: "CORES", val: "LN_NY" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full"
    >
      {/* Page Hero */}
      <PageHero
        category="STUDIO_PHILOSOPHY"
        title="COLLECTIVE OF DIGITAL MISFITS."
        subtitle="Bridging the severe physical layouts of editorial architecture with the fluid mathematical capabilities of modern browser runtime layers."
      />

      {/* Studio Bio / Stats Split */}
      <section className="relative bg-brand-bg px-6 py-16 md:px-12 md:py-24 border-b border-brand-border/20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Col (Col 7) */}
          <div className="lg:col-span-7 text-left">
            <span className="font-mono text-xs tracking-wider text-brand-primary uppercase font-bold mb-3 block">
              // THE_STORY
            </span>
            <h2 className="font-display text-3xl font-black text-brand-text mb-6 uppercase tracking-tight">
              COMMITTED TO DIGITAL PERMANENCE
            </h2>
            <p className="text-base text-brand-muted leading-relaxed font-sans mb-6">
              AURA was founded on a simple premise: the web is a three-dimensional medium that has been flattened by generic templates and standard grid containers. We are a collective of digital engineers, mathematicians, and visual directors who refuse to build boilerplate systems.
            </p>
            <p className="text-sm text-brand-muted/80 leading-relaxed font-sans">
              We operate as a high-density, boutique design cell. We do not have account executives, sales managers, or multiple management hierarchies. Clients work directly with creative developers and graphics engineers to model their visual statements directly inside production repositories.
            </p>
          </div>

          {/* Right Stats Grid Col (Col 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-surface/40 border border-brand-border/40 rounded-2xl p-6 text-left hover:border-brand-primary/20 transition-colors"
              >
                <span className="block font-mono text-[9px] tracking-widest text-brand-muted/50 uppercase">
                  {stat.label}
                </span>
                <span className="block font-display text-4xl font-extrabold text-brand-primary mt-2">
                  {stat.val}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Grid Section */}
      <section className="relative bg-brand-bg px-6 py-20 md:px-12 md:py-28 border-b border-brand-border/20">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-12 text-left">
            <span className="font-mono text-xs tracking-widest text-brand-primary uppercase font-bold">
              // CORE_TEAM
            </span>
            <h2 className="font-display text-2xl font-black text-brand-text mt-2 uppercase tracking-tight">
              DIRECT REPRESENTATIVES
            </h2>
          </div>

          {/* Portraits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="group flex flex-col items-start text-left"
              >
                {/* Image Box */}
                <div className="relative h-[48vh] md:h-[40vh] lg:h-[48vh] w-full overflow-hidden rounded-2xl border border-brand-border/40 bg-brand-surface shadow-md mb-6">
                  {/* Black and white portrait that colorizes and scales slightly on hover */}
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-750 ease-out group-hover:scale-105"
                  />
                  
                  {/* Decorative digital overlay on hover */}
                  <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Info block */}
                <div className="w-full">
                  <span className="font-mono text-[10px] text-brand-primary font-bold tracking-wider uppercase">
                    // {member.role}
                  </span>
                  <h3 className="font-display text-2xl font-black text-brand-text mt-1 uppercase tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed font-sans mt-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
export default About;
