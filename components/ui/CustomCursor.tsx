"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Enable custom cursor styles only when cursor is active
    document.body.classList.add("custom-cursor-active");

    const dotXTo = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });
    const ringXTo = gsap.quickTo(ring, "x", { duration: 0.25, ease: "power3.out" });
    const ringYTo = gsap.quickTo(ring, "y", { duration: 0.25, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      dotXTo(mouseX - 6);
      dotYTo(mouseY - 6);
      ringXTo(mouseX - 16);
      ringYTo(mouseY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest('a, button, input, select, textarea, [role="button"], .magnetic-wrap');
      if (isInteractive) {
        gsap.to(ring, {
          scale: 2.2,
          backgroundColor: "rgba(255, 69, 0, 0.25)",
          borderColor: "rgba(255, 69, 0, 0)",
          duration: 0.2,
          overwrite: "auto",
        });
      } else {
        gsap.to(ring, {
          scale: 1,
          backgroundColor: "rgba(255, 69, 0, 0)",
          borderColor: "var(--color-primary)",
          duration: 0.2,
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-99999 h-3 w-3 rounded-full bg-brand-primary mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-99999 h-8 w-8 rounded-full border border-brand-primary mix-blend-difference"
        style={{ willChange: "transform" }}
      />
    </>
  );
};
