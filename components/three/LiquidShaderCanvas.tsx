"use client";
import React, { useRef } from "react";

export const LiquidShaderCanvas: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
    if (wrapperRef.current) {
      wrapperRef.current.setAttribute("data-active", "true");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rectRef.current ?? e.currentTarget.getBoundingClientRect();
    if (!rectRef.current) rectRef.current = rect;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (wrapperRef.current) {
      wrapperRef.current.style.setProperty("--mx", `${x.toFixed(2)}%`);
      wrapperRef.current.style.setProperty("--my", `${y.toFixed(2)}%`);
    }
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    if (wrapperRef.current) {
      wrapperRef.current.setAttribute("data-active", "false");
      wrapperRef.current.style.setProperty("--mx", "50%");
      wrapperRef.current.style.setProperty("--my", "50%");
    }
  };

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-active="false"
      aria-hidden="true"
      className="group absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#050505] pointer-events-auto [--mx:50%] [--my:50%]"
    >
      {/* Matte black background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Top-Right Warm Brand Atmosphere (matches exact screenshot palette) */}
      <div className="absolute -top-1/3 -right-1/4 w-250 h-250 rounded-full opacity-60 blur-[130px] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.35)_0%,rgba(20,8,46,0.6)_45%,transparent_75%)] animate-pulse duration-7000" />

      {/* Bottom-Left Deep Purple Aura */}
      <div className="absolute -bottom-1/3 -left-1/4 w-212.5 h-212.5 rounded-full opacity-50 blur-[150px] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(20,8,46,0.95)_0%,rgba(255,69,0,0.1)_50%,transparent_75%)]" />

      {/* Cursor Interactive Light Field */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-data-[active=true]:opacity-100 pointer-events-none bg-[radial-gradient(650px_circle_at_var(--mx)_var(--my),rgba(255,69,0,0.3)_0%,rgba(20,8,46,0.15)_40%,transparent_70%)]" />

      {/* Subtle Noise Grid Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />
    </div>
  );
};