import React from "react";
import { IconProps } from "./types";

export const ArrowUpRight: React.FC<IconProps> = ({
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
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </svg>
);

export default ArrowUpRight;
