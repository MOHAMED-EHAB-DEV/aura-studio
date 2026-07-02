# AURA Studio // Premium Creative Digital Agency Template
[![Preview Badge](https://img.shields.io/badge/Preview-Live%20Demo-orange)](https://aura-studio-beige.vercel.app/)

## ✨ Overview
AURA Studio is a state-of-the-art creative agency template designed for digital studios, freelancers, and premium portfolios. It delivers an unforgettable interactive experience combining WebGL graphics, tactile sound design, and ultra-smooth animations. This template is fully optimized for speed, SEO, and professional client delivery.

## 🌟 What Makes It Unique
- **Audio Feedback Engine**: Features immersive, tactile click and scroll audio ticks that add a tangible physical quality to the digital layout.
- **GSAP Horizontal Scroll Showcase**: A custom-pinned case study section that transitions horizontally with high performance.
- **WebGL Distortion Effects**: Implements responsive distortion shaders on images that dynamically respond to hover coordinates.
- **Liquid Shader Canvas**: Dynamic interactive background utilizing custom Three.js shaders.

## 🎯 Perfect For
- Creative Agencies & Production Studios
- Digital Artists & Freelancers
- Premium Brands & High-End Portfolios
- Designers aiming to make a bold first impression

## 🛠 Tech Stack
| Technology | Description |
|---|---|
| **Vite + React** | Ultra-fast local development and builds |
| **TypeScript** | Strict compile-time type safety |
| **Tailwind CSS (v4)** | Natively fast, custom CSS-variable powered design tokens |
| **Framer Motion** | High-performance React micro-animations |
| **GSAP** | Advanced ScrollTrigger timeline mapping |
| **Three.js & Fiber** | WebGL graphics & custom interactive image shaders |
| **Lenis** | Physics-based smooth-scroll synchronization |

## 📄 Pages Included
| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Immersive home featuring split headers, threejs distortion grid, horizontal showcase, and client logos |
| **Work** | `/work` | Categorized project grid with magnetic layouts and rich interactive cards |
| **Services** | `/services` | Detailed studio capabilities, pricing tier lists, and strategic approach stages |
| **About** | `/about` | Leadership team showcases, agency values, and philosophy blocks |
| **Contact** | `/contact` | Full contact sheet with location grids, local coordinates, and custom inquiry fields |

## 🧩 Sections & Components
- **Navbar**: High-performance header with volume toggles, magnetic navigation, and interactive logo
- **FullScreenMenu**: Fullscreen overlay with auto-playing video-backing streams reflecting active hover states
- **SpotlightCard**: Dynamic mouse-responsive radial glow overlay container
- **TiltCard**: Mousemove perspective 3D rotation component
- **MagneticButton**: Magnetized mouse magnet attraction CTA trigger
- **Footer**: Editorial layout featuring global office details and social anchors

## 📁 Folder Structure
```
src/
  components/
    ui/              ← CustomCursor, PageHero, Button, Badge, Card, Input, Modal, Skeleton
    motion/          ← SpotlightCard, TiltCard, MagneticButton, SplitText, VelocitySkewText
    layout/          ← Navbar, Footer, PageWrapper
    sections/        ← Hero, ServicesGrid, WorkShowcase, AboutGrid, ContactForm, etc.
  hooks/             ← useSpotlight, useTilt, useMagnetic, useCountUp, useScrollProgress, useMousePosition
  lib/               ← utils.ts (cn helper), constants.ts, gsap.ts
  data/              ← agencyData.ts
  styles/
    globals.css
  types/
    index.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 18.0.0)
- npm or yarn

### Installation
1. Clone the project files to your directory.
2. Install the hardened package lock:
   ```bash
   npm install
   ```

### Setup Environment
Rename `.env.example` to `.env.local` and add relevant environment variables:
```bash
cp .env.example .env.local
```

### Run Locally
Launch the high-performance local server:
```bash
npm run dev
```
Open `http://localhost:3000` to inspect.

## ⚙️ Customization Guide
- **Colors & Styling**: Open `src/index.css` to update the global light/dark CSS tokens inside the `@theme` and `:root` block.
- **Copy & Navigation**: Update text and data arrays inside `src/data/agencyData.ts` to seamlessly update the UI content.
- **Custom Shaders**: Edit the fragment and vertex shaders in `src/components/three/` to alter the distortion patterns.

## 🌐 Deployment
This Vite template is fully pre-configured for instant deployment on **Netlify**:
1. Connect your repository to Netlify.
2. The `netlify.toml` file will automatically define build configurations (`npm run build`) and directory defaults (`dist`).
3. Routing redirects are configured in `public/_redirects` to avoid page refresh 404 errors.

## 📦 What's Included
- Complete design system with CSS custom properties
- Advanced physics-based custom cursor
- Full custom layout suite (Navbar, Footer, Menu)
- Strict TypeScript compile settings
- Pre-configured Netlify config block

## 📋 Browser Support
| Chrome | Safari | Firefox | Edge | Opera |
|---|---|---|---|---|
| Chrome 90+ | Safari 14+ | Firefox 88+ | Edge 90+ | Opera 76+ |

## 📄 License
This template is provided under a Single-Use Commercial License. 
- You may use it for one end-product (personal or client project).
- Standalone redistribution, marketplace inclusion, or bundle reselling is strictly prohibited.

## 👤 Credits
© 2026 Mohamed Ehab. All rights reserved.
