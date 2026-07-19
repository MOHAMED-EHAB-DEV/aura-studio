"use client";
import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const ServicesBento = dynamic(() => import("@/components/sections/ServicesBento").then((mod) => mod.ServicesBento));
const WorkShowcase = dynamic(() => import("@/components/sections/WorkShowcase").then((mod) => mod.WorkShowcase));
const ClientMarquee = dynamic(() => import("@/components/sections/ClientMarquee").then((mod) => mod.ClientMarquee));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials));
const CTABanner = dynamic(() => import("@/components/sections/CTABanner").then((mod) => mod.CTABanner));
const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));

export const HomeClient: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden"
    >
      <HeroSection />
      <ManifestoSection />
      <ServicesBento />
      <WorkShowcase />
      <ClientMarquee />
      <Testimonials />
      <CTABanner />
      <Footer />
    </motion.div>
  );
};
export default HomeClient;
