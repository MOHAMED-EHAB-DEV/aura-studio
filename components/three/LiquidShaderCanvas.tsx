"use client";
import React, { useEffect, useId, useRef } from "react";

// ── Mouse-tracking constants (mirrors the shader's uMouse lerp of 0.08/frame) ──
const MOUSE_SMOOTHING = 0.08;
const SETTLE_EPSILON = 0.0008;

export const LiquidShaderCanvas: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const targetPos = useRef<[number, number]>([0.5, 0.5]);
  const currentPos = useRef<[number, number]>([0.5, 0.5]);
  const rafRef = useRef<number | null>(null);
  const prefersReducedMotionRef = useRef(false);

  // Unique SVG filter id — safe for multiple instances on one page
  const rawId = useId().replace(/[:]/g, "");
  const filterId = `liquid-${rawId}`;

  // ── rAF lerp loop: smoothly interpolates --mx / --my CSS vars toward cursor ──
  const tick = () => {
    const [tx, ty] = targetPos.current;
    const [cx, cy] = currentPos.current;
    const dx = tx - cx;
    const dy = ty - cy;

    currentPos.current = [cx + dx * MOUSE_SMOOTHING, cy + dy * MOUSE_SMOOTHING];

    const el = wrapperRef.current;
    if (el) {
      el.style.setProperty("--mx", `${currentPos.current[0] * 100}%`);
      el.style.setProperty("--my", `${currentPos.current[1] * 100}%`);
    }

    if (Math.abs(dx) > SETTLE_EPSILON || Math.abs(dy) > SETTLE_EPSILON) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      rafRef.current = null;
    }
  };

  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotionRef.current) return;

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ensureLoopRunning = () => {
    if (rafRef.current === null && !prefersReducedMotionRef.current) {
      rafRef.current = requestAnimationFrame(tick);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotionRef.current) return;
    rectRef.current = e.currentTarget.getBoundingClientRect();
    wrapperRef.current?.setAttribute("data-active", "true");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotionRef.current) return;
    const rect = rectRef.current ?? e.currentTarget.getBoundingClientRect();
    if (!rectRef.current) rectRef.current = rect;

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    targetPos.current = [x, y];
    ensureLoopRunning();
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotionRef.current) return;
    rectRef.current = null;
    targetPos.current = [0.5, 0.5];
    wrapperRef.current?.setAttribute("data-active", "false");
    ensureLoopRunning();
  };

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-active="false"
      aria-hidden="true"
      className="group absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#050505] contain-[layout_style_paint] [content-visibility:auto] [--mx:50%] [--my:50%]"
    >
      {/* ── SVG filters ──
          filterBlur: turbulence + displacement + built-in Gaussian blur (one GPU pass
          instead of stacking CSS blur() on top of the SVG filter = two passes).
          filterRaw: turbulence + displacement only, for the counter-drift orange layer. */}
      <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id={`${filterId}-blur`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.014"
              numOctaves={2}
              seed={7}
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="20s"
                values="0.008 0.014;0.016 0.005;0.005 0.018;0.008 0.014"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={55}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation={14} />
          </filter>
          <filter id={`${filterId}-raw`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.014"
              numOctaves={2}
              seed={7}
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="20s"
                values="0.008 0.014;0.016 0.005;0.005 0.018;0.008 0.014"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={55}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* ── Layer 1: Indigo field + orange blobs (merged) ──
          Combining both into one div = one SVG filter pass instead of two.
          The blur is baked into the SVG filter via feGaussianBlur. */}
      <div
        style={{ filter: `url(#${filterId}-blur)` }}
        className="absolute inset-[-20%] z-0 animate-liquid-drift will-change-transform motion-reduce:hidden
          bg-[radial-gradient(60%_60%_at_75%_25%,rgba(20,8,46,0.9)_0%,transparent_70%),radial-gradient(50%_70%_at_25%_75%,rgba(20,8,46,0.7)_0%,transparent_65%),radial-gradient(70%_50%_at_55%_45%,rgba(20,8,46,0.45)_0%,transparent_60%),radial-gradient(45%_45%_at_70%_30%,rgba(255,69,0,0.14)_0%,transparent_70%),radial-gradient(35%_55%_at_30%_65%,rgba(255,69,0,0.1)_0%,transparent_65%)]"
      />

      {/* ── Layer 2: Orange counter-drift blobs ──
          Separate animation timing so the two layers visually drift through each other.
          Uses the raw filter (no extra blur) — the displacement alone is sufficient at this opacity. */}
      <div
        style={{ filter: `url(#${filterId}-raw)` }}
        className="absolute inset-[-20%] z-10 animate-crest-pulse will-change-transform motion-reduce:hidden
          bg-[radial-gradient(40%_50%_at_65%_60%,rgba(255,69,0,0.12)_0%,transparent_65%),radial-gradient(55%_35%_at_20%_35%,rgba(255,69,0,0.1)_0%,transparent_60%),radial-gradient(30%_45%_at_80%_80%,rgba(255,69,0,0.07)_0%,transparent_55%)]"
      />

      {/* ── Layer 3: Mouse-reactive glow ──
          No SVG filter — just a CSS radial gradient following the cursor.
          Cheapest layer: only composites on opacity transition, no transform animation. */}
      <div
        className="absolute inset-0 z-20 opacity-0 transition-opacity duration-600 ease-out group-data-[active=true]:opacity-100 motion-reduce:hidden
          bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(255,69,0,0.35)_0%,rgba(255,69,0,0.14)_18%,rgba(255,69,0,0.04)_38%,transparent_55%)]"
      />

      {/* ── Reduced-motion fallback ── */}
      <div className="hidden motion-reduce:block absolute inset-0 z-30 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.15)_0%,rgba(5,5,5,0)_70%)]">
        <div className="absolute inset-0 animate-pulse bg-linear-to-tr from-[#050505] via-[#120024] to-[#050505] opacity-80" />
      </div>
    </div>
  );
};