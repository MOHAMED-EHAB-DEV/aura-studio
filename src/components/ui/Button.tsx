import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ className, variant = "primary", ...props }) => {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-full font-mono text-xs font-bold tracking-widest transition-all duration-300",
        variant === "primary"
          ? "bg-brand-primary text-brand-bg hover:bg-brand-primary-dark"
          : "bg-brand-surface border border-brand-border text-brand-text hover:bg-brand-text hover:text-brand-bg",
        className
      )}
      {...props}
    />
  );
};
