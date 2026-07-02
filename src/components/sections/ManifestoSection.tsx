import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { VelocitySkewText } from "../motion/VelocitySkewText";

export const ManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const manifestoText = 
    "WE REFUSE THE COMFORT OF REPETITION. IN A DIGITAL WORLD SATURATED WITH DISPOSABLE TEMPLATES AND RECYCLED IDEAS, WE CONSTRUCT MONOLITHIC STANDARDS. EVERY INTERACTION IS AN INTENTIONAL ACT OF DESIGN. WE MERGE ADVANCED MATHEMATICAL GRAPHICS WITH SEVERE TYPOGRAPHIC ARCHITECTURE TO ENGRAVE MEMORABLE MARKS ON THE DIGITAL CANVAS.";

  const words = manifestoText.split(" ");

  useGSAP(() => {
    if (!paragraphRef.current || !containerRef.current) return;

    const wordSpans = paragraphRef.current.querySelectorAll(".manifesto-word");

    gsap.fromTo(
      wordSpans,
      { opacity: 0.12, y: 3 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1, // Smooth scrub index of 1s
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[85vh] w-full flex-col justify-center bg-brand-bg px-6 py-24 md:px-12 md:py-36 overflow-hidden"
    >
      {/* Editorial Watermark */}
      <div className="absolute right-6 top-12 font-mono text-[10px] tracking-widest text-brand-muted/20 select-none">
        AURA_MANIFESTO_V3.9
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Scroll Skew Header */}
        <div className="mb-12 overflow-hidden">
          <VelocitySkewText>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-brand-primary md:text-6xl uppercase">
              OUR_MANIFESTO
            </h2>
          </VelocitySkewText>
        </div>

        {/* Pinned Scroll Storytelling Paragraph */}
        <div className="relative">
          <p
            ref={paragraphRef}
            className="font-display text-3xl font-bold leading-tight md:text-5xl lg:text-6xl text-brand-text flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]"
          >
            {words.map((word, index) => (
              <span
                key={index}
                className="manifesto-word inline-block origin-bottom will-change-transform select-none"
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Bottom indicators */}
        <div className="mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-brand-border/20 pt-8 font-mono text-xs text-brand-muted/40 gap-4">
          <span>// PERSISTENCE_OF_VISION</span>
          <span>AURA STUDIO — © MOHAMED EHAB</span>
        </div>
      </div>
    </section>
  );
};
