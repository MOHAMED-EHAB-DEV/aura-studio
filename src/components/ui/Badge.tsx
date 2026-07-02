import React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge: React.FC<BadgeProps> = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-surface border border-brand-border px-2.5 py-0.5 text-xs font-mono font-semibold text-brand-text transition-colors",
        className
      )}
      {...props}
    />
  );
};
