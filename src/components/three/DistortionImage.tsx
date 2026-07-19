import React, { useRef, useState, useEffect, Suspense } from "react";
import { useReducedMotion } from "motion/react";

const DistortionCanvas = React.lazy(() => import("./DistortionCanvas"));

interface DistortionImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const DistortionImage: React.FC<DistortionImageProps> = ({ src, alt, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [hoverCoords, setHoverCoords] = useState<[number, number]>([0.5, 0.5]);
  const [hasWebGL, setHasWebGL] = useState(true);
  const rectRef = useRef<DOMRect | null>(null);

  // Check WebGL availability on mount
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const support = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setHasWebGL(support);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) setIsHovered(true);
    const rect = rectRef.current || e.currentTarget.getBoundingClientRect();
    if (!rectRef.current) rectRef.current = rect;
    
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height; // Invert Y for WebGL coords
    setHoverCoords([x, y]);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rectRef.current = null;
    setHoverCoords([0.5, 0.5]);
  };

  const fallbackContent = (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />
  );

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden select-none ${className}`}
    >
      {/* WebGL Displacement Image with Lazy Loading */}
      {!shouldReduceMotion && hasWebGL ? (
        <Suspense fallback={fallbackContent}>
          <DistortionCanvas
            src={src}
            isHovered={isHovered}
            hoverCoords={hoverCoords}
          />
        </Suspense>
      ) : (
        // Standard high-quality CSS fallback
        fallbackContent
      )}
    </div>
  );
};
