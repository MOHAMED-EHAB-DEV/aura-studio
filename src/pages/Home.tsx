import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { ManifestoSection } from "../components/sections/ManifestoSection";
import { ServicesBento } from "../components/sections/ServicesBento";
import { WorkShowcase } from "../components/sections/WorkShowcase";
import { ClientMarquee } from "../components/sections/ClientMarquee";
import { Testimonials } from "../components/sections/Testimonials";
import { CTABanner } from "../components/sections/CTABanner";
import { Footer } from "../components/layout/Footer";
import { motion } from "motion/react";

export const Home: React.FC = () => {
  return (
    <motion.main
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
    </motion.main>
  );
};
export default Home;
