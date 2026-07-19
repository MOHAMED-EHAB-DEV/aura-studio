import type { Metadata } from "next";
import { ContactClient } from "@/components/pages/ContactClient";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Get in touch with AURA Studio. Let's build immersive digital platforms, high-performance web solutions, and premium brand identities together.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactClient />;
}
