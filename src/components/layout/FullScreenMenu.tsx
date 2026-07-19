import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import X from "../ui/svgs/X";
import ArrowUpRight from "../ui/svgs/ArrowUpRight";
import { MagneticButton } from "../motion/MagneticButton";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  label: string;
  path: string;
  videoUrl: string;
}

const navItems: NavItem[] = [
  {
    label: "HOME",
    path: "/",
    videoUrl:
      "https://player.vimeo.com/external/459389137.sd.mp4?s=894386cc7c0746e133df1fa8892f3970b55ec77b&profile_id=139&oauth2_token_id=57447761",
  },
  {
    label: "WORK",
    path: "/work",
    videoUrl:
      "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b1e2d1d07c0f187ee0618037a&profile_id=139&oauth2_token_id=57447761",
  },
  {
    label: "SERVICES",
    path: "/services",
    videoUrl:
      "https://player.vimeo.com/external/435674703.sd.mp4?s=7fcc18086208cb2820a4428383f949c259654d00&profile_id=139&oauth2_token_id=57447761",
  },
  {
    label: "ABOUT",
    path: "/about",
    videoUrl:
      "https://player.vimeo.com/external/403759328.sd.mp4?s=213bf73cb15bf69f2e34237f44d82b3d39572456&profile_id=139&oauth2_token_id=57447761",
  },
  {
    label: "CONTACT",
    path: "/contact",
    videoUrl:
      "https://player.vimeo.com/external/459389137.sd.mp4?s=894386cc7c0746e133df1fa8892f3970b55ec77b&profile_id=139&oauth2_token_id=57447761",
  },
];

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const location = useLocation();

  const menuVariants = {
    initial: { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
    animate: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] as any },
    },
    exit: {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as any },
    },
  };

  const staggerVariants = {
    animate: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const linkVariants = {
    initial: { y: 120, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.65, ease: [0.215, 0.61, 0.355, 1] as any },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 overflow-hidden bg-black text-white"
          data-lenis-prevent
        >
          {/* Dynamic Video Backing Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-black opacity-35 transition-opacity duration-500">
            {navItems.map((item) => (
              <video
                key={item.label}
                src={item.videoUrl}
                muted
                loop
                playsInline
                autoPlay
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  hoveredVideo === item.label
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              />
            ))}
          </div>

          {/* Grid Overlay for Modern Editorial Feel */}
          <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-4 border-x border-white/5">
            <div className="border-r border-white/5" />
            <div className="border-r border-white/5" />
            <div className="border-r border-white/5" />
          </div>

          {/* Scrollable Content Wrapper */}
          <div className="absolute inset-0 z-20 overflow-y-auto flex flex-col justify-between p-6 md:p-12">
            {/* Top Panel Bar */}
            <div className="relative flex w-full items-center justify-between shrink-0 mb-8 md:mb-0">
              <span className="font-display text-2xl font-bold tracking-tight text-white/75">
                AURA_MENU
              </span>
              <MagneticButton
                onClick={onClose}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
                id="menu-close-btn"
                aria-label="Close menu"
              >
                <X size={24} />
              </MagneticButton>
            </div>

            {/* Main Links List wrapped in nav landmark */}
            <nav
              aria-label="Main navigation"
              className="relative my-auto py-8 flex flex-col justify-start space-y-4 text-left shrink-0"
            >
              <motion.div
                variants={staggerVariants}
                initial="initial"
                animate="animate"
                className="flex flex-col space-y-4"
              >
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <div
                      key={item.label}
                      className="relative overflow-hidden py-1"
                      onMouseEnter={() => setHoveredVideo(item.label)}
                      onMouseLeave={() => setHoveredVideo(null)}
                    >
                      <motion.div
                        variants={linkVariants}
                        className="inline-block"
                      >
                        <Link
                          to={item.path}
                          onClick={onClose}
                          className={`group font-display text-4xl sm:text-5xl font-black tracking-tighter leading-none md:text-8xl flex items-baseline transition-all duration-300 ${
                            isActive
                              ? "text-brand-primary"
                              : "text-white/80 hover:text-white hover:translate-x-4"
                          }`}
                        >
                          <span className="mr-4 text-sm sm:text-xl font-medium tracking-normal text-white/70 group-hover:text-brand-primary">
                            /0{navItems.indexOf(item) + 1}
                          </span>
                          {item.label}
                          <ArrowUpRight className="ml-4 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-brand-primary h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </nav>

            {/* Bottom Footer Info */}
            <div className="relative flex flex-col md:flex-row justify-between border-t border-white/10 pt-6 text-sm text-white/80 shrink-0 mt-8 md:mt-0">
              <div className="flex flex-wrap gap-x-12 gap-y-4 mb-4 md:mb-0">
                <div>
                  <p className="font-semibold text-white/70 mb-1">INQUIRIES</p>
                  <a
                    href="mailto:hello@aura-studio.com"
                    className="hover:text-white transition-colors"
                  >
                    hello@aura-studio.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white/70 mb-1">OFFICES</p>
                  <p>New York / London</p>
                </div>
              </div>
              <div className="flex items-end text-left md:text-right">
                <span className="font-mono text-xs text-white/70">
                  LATITUDE: 40.7128° N, 74.0060° W
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
