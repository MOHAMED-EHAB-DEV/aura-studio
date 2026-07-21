import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </main>
    </>
  );
}
