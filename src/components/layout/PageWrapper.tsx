import React from "react";

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="page-wrapper min-h-screen pt-24">{children}</div>;
};
