import React from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-sm font-sans text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-primary transition-colors",
        className
      )}
      {...props}
    />
  );
};
