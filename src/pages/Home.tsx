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
import SEO from "../components/seo/SEO";

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden"
    >
      <SEO
        title="AURA Studio // Premium Creative Digital Agency"
        description="AURA Studio is a premium creative agency designing award-winning digital experiences, immersive 3D interactions, and next-generation brand identities."
        path="/"
      />
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
export default Home;
