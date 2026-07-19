import React from "react";
import { IconProps } from "./types";

export const CheckCircle: React.FC<IconProps> = ({
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
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

export default CheckCircle;
