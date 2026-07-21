"use client";
import React from "react";
import Image from "next/image";

interface DistortionImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const DistortionImage: React.FC<DistortionImageProps> = ({
  src,
  alt,
  className = "",
  priority = false,
}) => {
  return (
    <div className={`group relative overflow-hidden select-none ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={priority}
      />
      {/* Subtle hover vignette overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
    </div>
  );
};
