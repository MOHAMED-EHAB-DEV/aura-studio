"use client";
import React, { useRef, useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string; // e.g. "rgba(255, 69, 0, 0.15)"
  borderColor?: string; // e.g. "rgba(255, 69, 0, 0.3)"
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
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = () => {
    setIsFocused(true);
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = rectRef.current || cardRef.current.getBoundingClientRect();
    if (!rectRef.current) rectRef.current = rect;
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
    rectRef.current = null;
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface transition-all duration-300 ${className}`}
    >
      {isFocused && (
        <>
          {/* Spotlight Glow Background */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(450px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 80%)`,
            }}
          />
          {/* Spotlight Border Glow */}
          <div
            className="pointer-events-none absolute -inset-[1px] z-10 rounded-3xl opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, ${borderColor}, transparent 60%)`,
              padding: "1px",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
        </>
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
