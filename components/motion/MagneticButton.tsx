"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = "",
  id,
  onClick,
  disabled = false,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (!buttonRef.current || !containerRef.current) return;

    const xTo = gsap.quickTo(buttonRef.current, "x", { duration: 0.3, ease: "power3.out" });
    const yTo = gsap.quickTo(buttonRef.current, "y", { duration: 0.3, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const { left, top, width, height } = rect;

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Check if mouse is within 80px radius of center
      const radius = 80;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < radius) {
        xTo(distanceX * 0.35);
        yTo(distanceY * 0.35);
      } else {
        xTo(0);
        yTo(0);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const currentContainer = containerRef.current;
    currentContainer.addEventListener("mousemove", handleMouseMove);
    currentContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      currentContainer.removeEventListener("mousemove", handleMouseMove);
      currentContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="magnetic-wrap inline-block">
      <button
        ref={buttonRef}
        id={id}
        onClick={onClick}
        disabled={disabled}
        className={className}
        style={{ willChange: "transform" }}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
