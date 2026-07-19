import React from "react";
import { IconProps } from "./types";

export const Quote: React.FC<IconProps> = ({
  size = 24,
  className = "",
  stroke = "currentColor",
  strokeWidth = 2,
  fill = "none",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h4c0 3-2 4-5 4v5zm12 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h4c0 3-2 4-5 4v5z" />
  </svg>
);

export default Quote;
