import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Position coordinates for inner dot and outer ring
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for smooth lagging follow effect
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorRingX = useSpring(cursorX, springConfig);
  const cursorRingY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop screens with precise pointers
    const mediaQuery = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6); // Offset half width of dot
      cursorY.set(e.clientY - 6);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    // Attach listeners for interactive elements hover states
    const addHoverState = () => setIsHovered(true);
    const removeHoverState = () => setIsHovered(false);

    const attachHoverListeners = () => {
      const clickables = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .magnetic-wrap');
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", addHoverState);
        el.addEventListener("mouseleave", removeHoverState);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);
    
    // Periodically re-attach to catch dynamic DOM elements
    attachHoverListeners();
    const interval = setInterval(attachHoverListeners, 1500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      clearInterval(interval);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <motion.div
        style={{
          x: cursorRingX,
          y: cursorRingY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-50 h-3 w-3 rounded-full bg-brand-primary mix-blend-difference"
      />
      
      {/* Outer spring-damped interaction ring */}
      <motion.div
        animate={{
          scale: isHovered ? 2.2 : 1,
          backgroundColor: isHovered ? "rgba(255, 69, 0, 0.25)" : "transparent",
          borderColor: isHovered ? "transparent" : "var(--color-primary)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        style={{
          x: cursorRingX,
          y: cursorRingY,
          translateX: "-34%", // Center coordinate alignment relative to inner dot
          translateY: "-34%",
        }}
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full border border-brand-primary mix-blend-difference"
      />
    </>
  );
};
