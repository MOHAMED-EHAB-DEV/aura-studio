import { useEffect } from "react";

export function useEscapeKey(callback: () => void, active: boolean) {
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, callback]);
}
