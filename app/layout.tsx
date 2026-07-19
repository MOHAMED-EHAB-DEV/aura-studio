import type { Metadata } from "next";
import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";

export const metadata: Metadata = {
  title: {
    default: "AURA Studio // Premium Creative Digital Agency",
    template: "%s | AURA Studio",
  },
  description: "AURA Studio is a premium creative agency designing award-winning digital experiences, immersive 3D interactions, and next-generation brand identities.",
  metadataBase: new URL("https://aura-studio-beige.vercel.app"),
  applicationName: "AURA Studio",
  keywords: [
    "Digital Agency",
    "Creative Studio",
    "Web3 Development",
    "WebGL",
    "3D Interactions",
    "Brand Identity",
    "High-Performance Web",
    "AURA Studio"
  ],
  authors: [{ name: "Mohamed Ehab", url: "https://aura-studio-beige.vercel.app" }],
  creator: "Mohamed Ehab",
  publisher: "AURA Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AURA Studio // Premium Creative Digital Agency",
    description: "AURA Studio is a premium creative agency designing award-winning digital experiences, immersive 3D interactions, and next-generation brand identities.",
    url: "https://aura-studio-beige.vercel.app",
    siteName: "AURA Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AURA Studio Premium Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA Studio // Premium Creative Digital Agency",
    description: "AURA Studio is a premium creative agency designing award-winning digital experiences, immersive 3D interactions, and next-generation brand identities.",
    images: ["/og-image.jpg"],
    creator: "@__M__O__H__",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/fonts/subset-Manrope-VariableFont_wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/subset-Syne-VariableFont_wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <AudioProvider>
          <LenisProvider>
            {/* Skip to content */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded-full border border-brand-border bg-brand-surface px-4 py-2 font-mono text-xs font-bold tracking-widest text-brand-text hover:bg-brand-text hover:text-brand-bg transition-colors">
              Skip to main content
            </a>
            
            {/* Decorative grid overlay */}
            <div className="pointer-events-none fixed inset-0 z-0 mx-auto grid max-w-7xl grid-cols-4 opacity-[0.03]">
              <div className="border-x border-brand-text" />
              <div className="border-r border-brand-text" />
              <div className="border-r border-brand-text" />
            </div>
            
            <Navbar />
            <CustomCursor />
            
            <main id="main-content" className="relative z-10">
              <PageTransitionProvider>
                {children}
              </PageTransitionProvider>
            </main>
          </LenisProvider>
        </AudioProvider>
      </body>
    </html>
  );
}
