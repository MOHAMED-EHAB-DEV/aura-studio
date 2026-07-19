"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface VelocitySkewTextProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const VelocitySkewText: React.FC<VelocitySkewTextProps> = ({
  children,
  className = "",
  id,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    let skewProxy = { skew: 0 };
    const skewSetter = gsap.quickSetter(containerRef.current, "skewY", "deg");
    const clamp = gsap.utils.clamp(-6, 6); // Cap the visual skew at 6 degrees to remain legible

    ScrollTrigger.create({
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        // Calculate raw skew based on scrolling speed
        const targetSkew = clamp(velocity / -250);
        
        // If the new skew is more extreme, update and animate back to 0 smoothly
        if (Math.abs(targetSkew) > Math.abs(skewProxy.skew)) {
          skewProxy.skew = targetSkew;
          gsap.to(skewProxy, {
            skew: 0,
            duration: 0.6,
            ease: "power2.out",
            overwrite: "auto",
            onUpdate: () => {
              skewSetter(skewProxy.skew);
            },
          });
        }
      },
    });
  }, { scope: containerRef });

  return (
    <div
      id={id}
      ref={containerRef}
      className={`inline-block origin-left will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};
