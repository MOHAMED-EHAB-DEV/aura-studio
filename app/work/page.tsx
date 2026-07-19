import type { Metadata } from "next";
import { WorkClient } from "@/components/pages/WorkClient";

export const metadata: Metadata = {
  title: "Selected Works",
  description: "Explore our portfolio of award-winning digital products, immersive 3D websites, and premium brand architectures designed by AURA Studio.",
  alternates: { canonical: "/work" },
};

export default function Page() {
  return <WorkClient />;
}
