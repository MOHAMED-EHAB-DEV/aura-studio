"use client";
import React, { useRef } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string; // e.g. "rgba(255, 69, 0, 0.12)"
  borderColor?: string; // e.g. "rgba(255, 69, 0, 0.25)"
  id?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 69, 0, 0.12)",
  borderColor = "rgba(255, 69, 0, 0.25)",
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
      cardRef.current.classList.add("is-hovered");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = rectRef.current || cardRef.current.getBoundingClientRect();
    if (!rectRef.current) rectRef.current = rect;
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    if (cardRef.current) {
      cardRef.current.classList.remove("is-hovered");
    }
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ["--spotlight-color" as any]: spotlightColor,
        ["--border-color" as any]: borderColor,
      }}
      className={`group/spotlight relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface transition-all duration-300 ${className}`}
    >
      {/* Spotlight Glow Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-[.is-hovered]/spotlight:opacity-100"
        style={{
          background: `radial-gradient(450px circle at var(--x, 0px) var(--y, 0px), var(--spotlight-color), transparent 80%)`,
        }}
      />
      {/* Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px z-10 rounded-3xl opacity-0 transition-opacity duration-300 group-[.is-hovered]/spotlight:opacity-100"
        style={{
          background: `radial-gradient(200px circle at var(--x, 0px) var(--y, 0px), var(--border-color), transparent 60%)`,
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
