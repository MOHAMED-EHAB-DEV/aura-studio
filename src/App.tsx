import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./lib/gsap";
import { AudioProvider } from "./context/AudioContext";
import { Navbar } from "./components/layout/Navbar";
import { CustomCursor } from "./components/ui/CustomCursor";

// Page component imports
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Smooth Scroll + GSAP ScrollTrigger integration manager
const LayoutWrapper: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Set up Lenis smooth scrolling linked directly to the GSAP tick stream
  useEffect(() => {
    // Enable custom cursor helper on desktop
    document.documentElement.classList.add("custom-cursor-active", "dark");

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Sync ScrollTrigger updates with Lenis scroll stream
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Add Lenis loop directly into GSAP's native high-performance tick loop
    const tickCallback = (time: number) => {
      lenis.raf(time * 1000); // Lenis uses milliseconds
    };

    gsap.ticker.add(tickCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-brand-bg text-brand-text">
      {/* Visually-hidden skip-to-content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded-full border border-brand-border bg-brand-surface px-4 py-2 font-mono text-xs font-bold tracking-widest text-brand-text hover:bg-brand-text hover:text-brand-bg transition-colors"
      >
        Skip to main content
      </a>

      {/* Dynamic Background Mesh Grid lines */}
      <div className="pointer-events-none fixed inset-0 z-0 mx-auto grid max-w-7xl grid-cols-4 opacity-[0.03]">
        <div className="border-x border-brand-text" />
        <div className="border-r border-brand-text" />
        <div className="border-r border-brand-text" />
      </div>

      {/* Global Navigation */}
      <Navbar />

      {/* Custom Spring Cursor */}
      <CustomCursor />

      {/* Route Transiting Canvas wrapped in main landmark */}
      <main id="main-content" className="relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <AudioProvider>
      <Router>
        <LayoutWrapper />
      </Router>
    </AudioProvider>
  );
}
