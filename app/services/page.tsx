import type { Metadata } from "next";
import { ServicesClient } from "@/components/pages/ServicesClient";

export const metadata: Metadata = {
  title: "Our Services",
  description: "From immersive 3D WebGL experiences to high-performance web systems and digital branding, discover AURA Studio's technical capabilities.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <ServicesClient />;
}
