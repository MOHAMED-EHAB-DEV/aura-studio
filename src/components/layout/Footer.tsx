import React from "react";
import { Link } from "react-router-dom";
import ArrowUpRight from "../ui/svgs/ArrowUpRight";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "INSTAGRAM", href: "https://instagram.com" },
    { name: "LINKEDIN", href: "https://linkedin.com" },
    { name: "AWARDS", href: "https://awwwards.com" },
    { name: "DRIBBBLE", href: "https://dribbble.com" }
  ];

  return (
    <footer className="relative w-full border-t border-brand-border bg-brand-bg px-6 py-12 md:px-12 md:py-20 text-brand-text overflow-hidden">
      {/* Decorative Grid Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-16">
          {/* Col 1: Brand Statements */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4 focus:outline-none">
              <span className="font-display text-4xl font-black tracking-tighter text-brand-text">
                AURA
              </span>
            </Link>
            <p className="max-w-sm text-sm text-brand-muted leading-relaxed font-sans mb-6">
              We design and construct digital realities that stand the test of scrutiny. No compromises. No boilerplate. Just premium experiences.
            </p>
            <div className="font-mono text-xs text-brand-muted/80">
              EST. // 2023 - NY_LN
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="font-mono text-xs font-semibold text-brand-muted/80 tracking-wider mb-6">
              NAVIGATION
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-brand-muted hover:text-brand-text transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-brand-muted hover:text-brand-text transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-muted hover:text-brand-text transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-muted hover:text-brand-text transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-muted hover:text-brand-text transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Socials */}
          <div>
            <div className="font-mono text-xs font-semibold text-brand-muted/80 tracking-wider mb-6">
              SOCIALS
            </div>
            <ul className="space-y-3 text-sm">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center text-brand-muted hover:text-brand-text transition-colors"
                  >
                    <span className="relative pb-0.5">
                      {social.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Banner Row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-brand-border/40 pt-8 text-xs text-brand-muted/85">
          <div className="mb-4 md:mb-0">
            <span className="font-mono text-[10px] tracking-widest uppercase">
              AURA CREATIVE STUDIO // GLOBAL DIGITAL GATEWAY
            </span>
          </div>
          <div className="text-center md:text-right">
            <p className="font-sans">
              © {currentYear} Mohamed Ehab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
