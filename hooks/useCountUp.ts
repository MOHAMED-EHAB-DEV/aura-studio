import { useState, useEffect } from "react";

export function useCountUp(endVal: number, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easeVal = progressPercentage * (2 - progressPercentage);
      setCount(Math.floor(easeVal * endVal));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endVal, duration]);

  return count;
}
