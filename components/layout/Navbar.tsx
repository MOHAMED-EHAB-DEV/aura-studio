"use client";
import React, { useState } from "react";
import Link from "next/link";
import Menu from "../ui/svgs/Menu";
import Volume2 from "../ui/svgs/Volume2";
import VolumeX from "../ui/svgs/VolumeX";
import { useAudio } from "../../context/AudioContext";
import { MagneticButton } from "../motion/MagneticButton";
import { FullScreenMenu } from "./FullScreenMenu";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isUnmuted, setIsUnmuted } = useAudio();

  return (
    <>
      <header className="fixed top-0 left-0 z-40 w-full bg-transparent px-6 py-6 md:px-12 md:py-8 pointer-events-none">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between pointer-events-auto">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-2.5 focus:outline-none pointer-events-auto"
            aria-label="AURA Studio Home"
          >
            <div className="w-2.5 h-2.5 bg-brand-primary rounded-full group-hover:scale-125 transition-transform duration-300 shrink-0" />
            <div className="flex flex-col items-start">
              <span className="font-display text-2xl font-black tracking-tighter text-brand-text group-hover:text-brand-primary transition-colors leading-none">
                AURA
              </span>
              <span className="font-mono text-[8px] tracking-widest text-brand-muted/70 group-hover:text-brand-primary/70 transition-colors mt-0.5 uppercase">
                creative_studio
              </span>
            </div>
          </Link>

          {/* Action Bar */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Audio Toggle (Easter Egg) */}
            <button
              onClick={() => setIsUnmuted(!isUnmuted)}
              className={`flex items-center space-x-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 ${
                isUnmuted
                  ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                  : "border-brand-border bg-brand-surface/40 text-brand-muted hover:border-brand-text hover:text-brand-text"
              }`}
              title={isUnmuted ? "Mute audio ticks" : "Unmute experience ticks"}
              aria-label="Toggle sound feedback"
            >
              {isUnmuted ? <Volume2 size={14} /> : <VolumeX size={14} />}
              <span className="hidden sm:inline font-mono">
                {isUnmuted ? "SOUND_ON" : "UNMUTE_EXPERIENCE"}
              </span>
            </button>

            {/* Hamburger Button */}
            <MagneticButton
              onClick={() => setMenuOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-brand-surface/70 text-brand-text hover:bg-brand-text hover:text-brand-bg hover:border-brand-text transition-all duration-300 shadow-sm backdrop-blur-md pointer-events-auto"
              id="hamburger-btn"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* Full Screen Menu */}
      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
