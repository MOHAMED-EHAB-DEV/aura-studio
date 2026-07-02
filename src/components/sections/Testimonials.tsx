import React from "react";
import { testimonials } from "../../data/agencyData";
import { TiltCard } from "../motion/TiltCard";
import { VelocitySkewText } from "../motion/VelocitySkewText";
import { Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="relative w-full bg-brand-bg px-6 py-20 md:px-12 md:py-32 overflow-hidden">
      {/* Decorative background grid line */}
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-brand-border/10 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <span className="font-mono text-xs tracking-widest text-brand-primary uppercase font-bold">
            // CLIENT_SENTIMENT
          </span>
          <div className="overflow-hidden mt-2">
            <VelocitySkewText>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-brand-text md:text-6xl uppercase">
                TRUSTED_BY_LEADERS
              </h2>
            </VelocitySkewText>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <TiltCard
              key={test.id}
              maxTilt={6}
              className="flex flex-col justify-between h-full hover:border-brand-primary/30 transition-all duration-300"
              id={`test-card-${test.id}`}
            >
              <div className="text-left">
                {/* Quotation icon */}
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary">
                  <Quote size={16} className="fill-current" />
                </div>
                
                {/* Quote body */}
                <p className="text-base text-brand-text leading-relaxed font-sans mb-8 italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="text-left border-t border-brand-border/30 pt-4 mt-auto">
                <p className="font-display text-sm font-bold text-brand-text uppercase tracking-tight">
                  {test.author}
                </p>
                <div className="flex items-center justify-between font-mono text-[10px] text-brand-muted/70 mt-1">
                  <span>{test.role}</span>
                  <span className="text-brand-primary font-semibold">// {test.company}</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
