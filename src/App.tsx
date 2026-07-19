import React, { useEffect, Suspense } from "react";
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
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

const LayoutWrapper: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
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

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const tickCallback = (time: number) => {
      lenis.raf(time * 1000);
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded-full border border-brand-border bg-brand-surface px-4 py-2 font-mono text-xs font-bold tracking-widest text-brand-text hover:bg-brand-text hover:text-brand-bg transition-colors"
      >
        Skip to main content
      </a>

      <div className="pointer-events-none fixed inset-0 z-0 mx-auto grid max-w-7xl grid-cols-4 opacity-[0.03]">
        <div className="border-x border-brand-text" />
        <div className="border-r border-brand-text" />
        <div className="border-r border-brand-text" />
      </div>

      <Navbar />

      <CustomCursor />

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
