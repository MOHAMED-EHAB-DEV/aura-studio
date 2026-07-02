import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "../data/agencyData";
import { PageHero } from "../components/ui/PageHero";
import { Footer } from "../components/layout/Footer";
import { Plus, Minus, CheckCircle, ArrowRight } from "lucide-react";
import { MagneticButton } from "../components/motion/MagneticButton";
import { Link } from "react-router-dom";

export const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("strategy");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
        category="CAPABILITIES"
        title="WHAT WE DO."
        subtitle="Unlocking unparalleled product design and technological efficiency through tailored development frameworks and specialized media mechanics."
      />

      {/* Accordion List Section */}
      <section className="relative bg-brand-bg px-6 py-20 md:px-12 md:py-28 border-b border-brand-border/20">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-12 font-mono text-[10px] tracking-widest text-brand-muted/40 uppercase">
            // SERVICE_CATEGORIES: 04_CHANNELS
          </div>

          <div className="border-t border-brand-border/30">
            {services.map((service, index) => {
              const isExpanded = expandedId === service.id;

              return (
                <div
                  key={service.id}
                  className="border-b border-brand-border/30 transition-colors"
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="flex w-full items-center justify-between py-8 text-left focus:outline-none group"
                    aria-expanded={isExpanded}
                    aria-controls={`service-panel-${service.id}`}
                  >
                    <div className="flex items-center space-x-6 md:space-x-12">
                      <span className="font-mono text-sm text-brand-muted/40 group-hover:text-brand-primary transition-colors">
                        /0{index + 1}
                      </span>
                      <h3 className="font-display text-2xl md:text-4xl font-black tracking-tight text-brand-text group-hover:text-brand-primary transition-colors uppercase">
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-brand-surface text-brand-text group-hover:border-brand-primary group-hover:text-brand-primary transition-all duration-300">
                      {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  {/* Accordion Detail Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`service-panel-${service.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-12 md:pl-24 pr-4 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                          
                          {/* Left: Detailed Pitch (Col 6) */}
                          <div className="lg:col-span-6">
                            <p className="font-mono text-xs text-brand-primary uppercase tracking-wider font-semibold mb-3">
                              // METHODOLOGY_DESCRIPTION
                            </p>
                            <p className="text-sm md:text-base text-brand-muted leading-relaxed max-w-xl font-sans mb-6">
                              {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {service.capabilities.map((cap) => (
                                <span
                                  key={cap}
                                  className="rounded-full bg-brand-surface border border-brand-border/60 px-3 py-1 font-mono text-[9px] tracking-wider text-brand-text/80 uppercase"
                                >
                                  {cap}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Right: Technical Deliverables (Col 6) */}
                          <div className="lg:col-span-6 bg-brand-surface/40 rounded-2xl border border-brand-border/40 p-6 md:p-8">
                            <p className="font-mono text-xs text-brand-text uppercase tracking-widest font-bold mb-4 border-b border-brand-border/20 pb-2">
                              CORE_DELIVERABLES
                            </p>
                            
                            <ul className="space-y-3 font-sans text-sm text-brand-muted">
                              {service.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start space-x-3">
                                  <CheckCircle size={16} className="text-brand-primary mt-0.5 shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Accordion secondary conversion prompt */}
      <section className="bg-brand-bg py-16 px-6 relative overflow-hidden text-center flex flex-col items-center">
        <h4 className="font-display text-xl md:text-2xl font-bold text-brand-text mb-2 uppercase">
          Require a tailored capability consultation?
        </h4>
        <p className="text-xs text-brand-muted max-w-md font-sans mb-6">
          We construct specialized development sprint groups for premium entities. Tell us what you are modeling.
        </p>
        <Link to="/contact">
          <MagneticButton
            className="group inline-flex items-center space-x-3 rounded-full border border-brand-primary bg-brand-primary/10 px-6 py-3 font-mono text-xs font-bold tracking-widest text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
            id="service-cta-btn"
          >
            <span>DISCUSS_PROJECT</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
export default Services;
