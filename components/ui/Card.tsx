import React from "react";
import { cn } from "../../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-border bg-brand-surface text-brand-text shadow-sm",
        className
      )}
      {...props}
    />
  );
};
