import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  id?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0,
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: shouldReduceMotion ? 0 : "110%",
      opacity: shouldReduceMotion ? 0 : 1,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as any, // Custom cubic-bezier (power3.out)
      },
    },
  };

  return (
    <motion.span
      id={id}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden mr-[0.2em] pb-[0.05em]"
        >
          <motion.span
            variants={wordVariants}
            className="inline-block origin-bottom will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
