"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface AudioContextType {
  isUnmuted: boolean;
  setIsUnmuted: (val: boolean) => void;
  playTick: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isUnmuted, setIsUnmuted] = useState(false);

  const playTick = () => {
    if (!isUnmuted) return;
    try {
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(1000, ctx.currentTime);
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.001);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.02);
    } catch (e) {
      console.warn("Web Audio API blocked or not supported", e);
    }
  };

  useEffect(() => {
    const handleClick = () => {
      playTick();
    };

    // Add listener to capture phase so it fires before other clicks might stop propagation
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [isUnmuted]); // Dependency on isUnmuted so playTick works properly

  return (
    <AudioContext.Provider value={{ isUnmuted, setIsUnmuted, playTick }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
