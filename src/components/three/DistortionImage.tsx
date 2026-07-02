import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "motion/react";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uTime;

  void main() {
    vec2 uv = vUv;
    
    // Distance from UV to mouse coord
    vec2 delta = uv - uMouse;
    float dist = length(delta);
    
    // Lens magnifying radius (0.25 uv radius)
    float lensRadius = 0.28;
    
    if (dist < lensRadius && uHover > 0.01) {
      // Calculate interpolation factor (fade off at edge of lens)
      float strength = 0.12 * uHover * (1.0 - smoothstep(0.0, lensRadius, dist));
      
      // Dynamic fluid wave ripple inside the lens
      float wave = sin(dist * 45.0 - uTime * 6.0) * strength * 0.15;
      
      // Offset coordinates outwards from the cursor
      uv += normalize(delta) * (strength + wave);
    }
    
    vec4 texColor = texture2D(uTexture, uv);
    
    // Add a high-contrast brightness boost within the lens for an editorial glass feel
    if (uHover > 0.01) {
      float highlight = smoothstep(lensRadius, 0.0, dist);
      texColor.rgb += vec3(0.12, 0.04, 0.0) * highlight * uHover; // subtle warm glare
    }
    
    gl_FragColor = texColor;
  }
`;

interface ShaderImagePlaneProps {
  texture: THREE.Texture;
  hoverCoords: [number, number];
  isHovered: boolean;
}

const ShaderImagePlane: React.FC<ShaderImagePlaneProps> = ({ texture, hoverCoords, isHovered }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useRef({
    uTexture: { value: texture },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uHover: { value: 0 },
    uTime: { value: 0 },
  });

  useFrame((state) => {
    const { clock } = state;
    uniforms.current.uTime.value = clock.getElapsedTime();
    
    // Interpolate hover state for smooth transitions
    const targetHover = isHovered ? 1.0 : 0.0;
    uniforms.current.uHover.value += (targetHover - uniforms.current.uHover.value) * 0.12;
    
    // Interpolate mouse coordinates with lag for extra fluid inertia
    uniforms.current.uMouse.value.x += (hoverCoords[0] - uniforms.current.uMouse.value.x) * 0.15;
    uniforms.current.uMouse.value.y += (hoverCoords[1] - uniforms.current.uMouse.value.y) * 0.15;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  );
};

interface DistortionImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const DistortionImage: React.FC<DistortionImageProps> = ({ src, alt, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverCoords, setHoverCoords] = useState<[number, number]>([0.5, 0.5]);
  const [hasWebGL, setHasWebGL] = useState(true);

  // Load the texture on mount dynamically to prevent blocking React Suspense
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const support = !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
    setHasWebGL(support);

    if (support) {
      const loader = new THREE.TextureLoader();
      loader.load(
        src,
        (tex) => {
          tex.minFilter = THREE.LinearFilter;
          tex.generateMipmaps = false;
          setTexture(tex);
        },
        undefined,
        (err) => {
          console.error("DistortionImage texture load error", err);
        }
      );
    }
  }, [src]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) setIsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height; // Invert Y for WebGL coords
    setHoverCoords([x, y]);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden select-none ${className}`}
    >
      {/* WebGL Displacement Image */}
      {!shouldReduceMotion && hasWebGL && texture ? (
        <div className="absolute inset-0 h-full w-full">
          <Canvas
            gl={{ antialias: false, powerPreference: "high-performance" }}
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 1] }}
            style={{ width: "100%", height: "100%" }}
          >
            <ShaderImagePlane
              texture={texture}
              hoverCoords={hoverCoords}
              isHovered={isHovered}
            />
          </Canvas>
        </div>
      ) : (
        // Standard high-quality CSS fallback
        fallbackContent
      )}
    </div>
  );
};
