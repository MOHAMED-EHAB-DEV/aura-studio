import React from "react";
import { services } from "../../data/agencyData";
import { SpotlightCard } from "../motion/SpotlightCard";
import { VelocitySkewText } from "../motion/VelocitySkewText";
import ArrowUpRight from "../ui/svgs/ArrowUpRight";
import Cpu from "../ui/svgs/Cpu";
import Layers from "../ui/svgs/Layers";
import Sparkles from "../ui/svgs/Sparkles";
import TrendingUp from "../ui/svgs/TrendingUp";
import { Link } from "react-router-dom";

export const ServicesBento: React.FC = () => {
  // Map icons to the corresponding service ids
  const getIcon = (id: string) => {
    switch (id) {
      case "strategy":
        return <TrendingUp className="text-brand-primary h-6 w-6" />;
      case "branding":
        return <Sparkles className="text-brand-primary h-6 w-6" />;
      case "web3":
        return <Cpu className="text-brand-primary h-6 w-6" />;
      case "motion":
        return <Layers className="text-brand-primary h-6 w-6" />;
      default:
        return <Layers className="text-brand-primary h-6 w-6" />;
    }
  };

  // Define column span styles for a highly custom, asymmetric bento layout
  const getBentoSpan = (id: string) => {
    switch (id) {
      case "strategy":
        return "md:col-span-2 md:row-span-1";
      case "branding":
        return "md:col-span-1 md:row-span-2";
      case "web3":
        return "md:col-span-1 md:row-span-1";
      case "motion":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1";
    }
  };

  return (
    <section className="relative w-full bg-brand-bg px-6 py-20 md:px-12 md:py-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-brand-primary uppercase font-bold">
              // CORE_CAPABILITIES
            </span>
            <div className="overflow-hidden mt-2">
              <VelocitySkewText>
                <h2 className="font-display text-4xl font-extrabold tracking-tight text-brand-text md:text-6xl uppercase">
                  WHAT_WE_DO
                </h2>
              </VelocitySkewText>
            </div>
          </div>
          <p className="max-w-md text-sm text-brand-muted leading-relaxed">
            We do not offer generic full-service packages. We engineer bespoke, category-defining systems tailored for industries demanding aesthetic supremacy.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[310px]">
          {services.map((service) => (
            <SpotlightCard
              key={service.id}
              className={`p-8 flex flex-col justify-between h-full hover:border-brand-primary/40 ${getBentoSpan(
                service.id
              )}`}
              id={`service-card-${service.id}`}
            >
              <div className="w-full">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bg border border-brand-border/60">
                    {getIcon(service.id)}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-brand-muted/75 font-bold uppercase">
                    SEC_0{services.indexOf(service) + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-2xl font-bold tracking-tight text-brand-text mb-2">
                  {service.title}
                </h3>
                <p className="font-mono text-xs text-brand-primary mb-4 font-semibold uppercase tracking-wider">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-brand-muted leading-relaxed font-sans max-w-lg">
                  {service.description}
                </p>
              </div>

              {/* Capabilities Bullets / Bottom Row */}
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-brand-border/30">
                {service.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full bg-brand-bg border border-brand-border/60 px-3 py-1 font-mono text-[9px] tracking-wider text-brand-text uppercase"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Bento footer CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/services"
            className="group flex items-center space-x-2 rounded-full border border-brand-border bg-brand-surface/40 px-6 py-3 font-mono text-xs font-bold tracking-widest text-brand-text hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
          >
            <span>VIEW_ALL_CAPABILITIES</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
