import type { Metadata } from "next";
import { AboutClient } from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "About the Studio",
  description: "Meet AURA Studio, a collective of digital architects, designers, and creative engineers pushing the boundaries of web experiences.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutClient />;
}
