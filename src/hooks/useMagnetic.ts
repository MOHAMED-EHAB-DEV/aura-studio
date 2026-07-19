import { useEffect, RefObject } from "react";
import { gsap } from "gsap";

export function useMagnetic(ref: RefObject<HTMLElement | null>, force = 0.3) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rect: DOMRect | null = null;

    const handleMouseEnter = () => {
      rect = el.getBoundingClientRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const currentRect = rect || el.getBoundingClientRect();
      if (!rect) rect = currentRect;
      const relX = e.clientX - currentRect.left - currentRect.width / 2;
      const relY = e.clientY - currentRect.top - currentRect.height / 2;

      gsap.to(el, {
        x: relX * force,
        y: relY * force,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      rect = null;
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, force]);
}
