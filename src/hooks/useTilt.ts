import { useEffect, RefObject } from "react";

export function useTilt(ref: RefObject<HTMLElement | null>, maxRotation = 10) {
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
      const x = e.clientX - currentRect.left;
      const y = e.clientY - currentRect.top;
      const xc = currentRect.width / 2;
      const yc = currentRect.height / 2;
      const rotateX = ((yc - y) / yc) * maxRotation;
      const rotateY = ((x - xc) / xc) * maxRotation;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      rect = null;
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, maxRotation]);
}
