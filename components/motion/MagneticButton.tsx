"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticButtonProps extends Omit<React.ComponentPropsWithoutRef<typeof motion.button>, "style"> {
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
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Set up motion values and spring transitions
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const rect = rectRef.current || ref.current.getBoundingClientRect();
    if (!rectRef.current) rectRef.current = rect;
    
    const { left, top, width, height } = rect;
    
    // Calculate distance from center of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Max movement threshold (e.g. 25px)
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Set offset with a soft scaling
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rectRef.current = null;
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="magnetic-wrap inline-block"
    >
      <motion.button
        id={id}
        onClick={onClick}
        disabled={disabled}
        style={{ x: springX, y: springY }}
        className={className}
        whileTap={{ scale: 0.96 }}
        {...props}
      >
        {children}
      </motion.button>
    </div>
  );
};
