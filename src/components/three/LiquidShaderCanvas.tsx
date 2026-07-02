import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "motion/react";

// Inline GLSL Shaders for total portability and high performance
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    // Multi-octave wave generation
    float t = uTime * 0.6;
    float waveX = sin(uv.x * 6.0 + t) * 0.3 + cos(uv.y * 4.0 - t * 0.8) * 0.2;
    float waveY = cos(uv.y * 5.0 + t * 1.1) * 0.25 + sin(uv.x * 3.0 - t * 0.9) * 0.15;
    
    // Coordinates perturbed by waves
    vec2 perturbedUv = uv + vec2(waveX, waveY) * 0.2;
    
    // Mouse attraction field
    float mouseDist = distance(uv, uMouse);
    float mouseInfluence = smoothstep(0.45, 0.0, mouseDist);
    
    // Color scheme mixing
    vec3 colDarkBg = vec3(0.02, 0.02, 0.03); // #050505 deep matte black
    vec3 colIndigo = vec3(0.08, 0.03, 0.18); // Deep creative aura purple
    vec3 colOrange = vec3(1.0, 0.27, 0.0);   // Brand Primary #FF4500
    
    // Map wave density to colors
    float density = perturbedUv.x * perturbedUv.y + waveX * 0.5;
    vec3 mixA = mix(colDarkBg, colIndigo, clamp(density * 1.5, 0.0, 1.0));
    
    // Overlay the responsive energetic orange based on wave crests and mouse proximity
    float crest = smoothstep(0.1, 0.9, sin(density * 8.0 + t) * 0.5 + 0.5);
    vec3 finalColor = mix(mixA, colOrange, clamp(crest * 0.15 + mouseInfluence * 0.25, 0.0, 1.0));
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// Responsive R3F Mesh that captures mouse and renders the shader
const ShaderPlane: React.FC<{ mouseRef: React.MutableRefObject<[number, number]> }> = ({ mouseRef }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Memoize uniforms to prevent unnecessary reallocation
  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  });

  useFrame((state) => {
    const { clock } = state;
    // Update elapsed time uniform
    uniforms.current.uTime.value = clock.getElapsedTime();
    
    // Smoothly interpolate the mouse uniform for liquid inertia
    uniforms.current.uMouse.value.x += (mouseRef.current[0] - uniforms.current.uMouse.value.x) * 0.08;
    uniforms.current.uMouse.value.y += (mouseRef.current[1] - uniforms.current.uMouse.value.y) * 0.08;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

export const LiquidShaderCanvas: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hasWebGL, setHasWebGL] = useState(true);
  const mouseRef = useRef<[number, number]>([0.5, 0.5]);

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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height; // Invert Y for WebGL convention
    mouseRef.current = [x, y];
  };

  // Graceful fallback for reduced motion preferences or unsupported WebGL
  if (shouldReduceMotion || !hasWebGL) {
    return (
      <div 
        className="absolute inset-0 z-0 h-full w-full opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255, 69, 0, 0.15) 0%, rgba(5, 5, 5, 0) 70%)",
        }}
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-brand-bg via-[#120024] to-brand-bg opacity-80" />
      </div>
    );
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 z-0 h-full w-full overflow-hidden"
    >
      <Canvas
        gl={{ antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 1] }}
        style={{ width: "100%", height: "100%" }}
      >
        <ShaderPlane mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
};
