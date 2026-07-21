# AURA Studio // Premium Creative Digital Agency Template

[![Preview Website](https://img.shields.io/badge/Preview-AURA%20Studio-orange?style=for-the-badge)](https://aura-studio-beige.vercel.app)

## ✨ Overview
AURA Studio is a state-of-the-art creative agency template designed for digital studios, freelancers, and premium portfolios. It delivers an unforgettable interactive experience combining WebGL graphics, tactile sound design, and ultra-smooth animations. This template is fully optimized for speed, SEO, and professional client delivery, providing a polished and commercially viable product out of the box.

## 🌟 What Makes It Unique
- **Tactile Audio Feedback Engine**: Implements immersive, tactile click and scroll audio ticks that add a physical quality to the digital layout.
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
| **Next.js (App Router)** | React Server Components, fast local development, and build optimization |
| **TypeScript** | Strict compile-time type safety |
| **Tailwind CSS (v4)** | Natively fast, custom CSS-variable powered design tokens |
| **GSAP** | Advanced ScrollTrigger timeline mapping and smooth interactions |
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

## 🎨 Design System
| Font Family | Variable | Weights | Used For |
|---|---|---|---|
| **Syne** | `--font-display` | 100-800 (Bold/Black) | Headings, display text |
| **Manrope** | `--font-body` | 100-800 (Light, Regular, Medium, Semibold, Bold) | Body text, UI, mono details |

## 📁 Folder Structure
```
src/
  app/               ← Next.js pages, layouts, robots, sitemap, globals.css
  components/
    ui/              ← CustomCursor, PageHero, Button, Badge, Card, Input, Select, Drawer, Modal, Skeleton
    motion/          ← SpotlightCard, TiltCard, MagneticButton, SplitText, VelocitySkewText
    layout/          ← Navbar, Footer, PageWrapper
    sections/        ← Hero, ServicesGrid, WorkShowcase, AboutGrid, ContactForm, etc.
  hooks/             ← useFocusTrap, useScrollLock, useEscapeKey, useSpotlight, useTilt, useMagnetic, useCountUp, useScrollProgress, useMousePosition
  lib/               ← utils.ts (cn helper), constants.ts, gsap.ts
  data/              ← agencyData.ts
  styles/
    globals.css
  types/
    index.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js
- Bun (recommended) or npm

### Installation
1. Clone the project files to your directory.
2. Install dependencies:
   ```bash
   bun install
   ```

### Setup Environment
Rename `.env.example` to `.env.local` and add relevant environment variables:
```bash
cp .env.example .env.local
```

### Run Locally
Launch the high-performance local server:
```bash
bun dev
```
Open `http://localhost:3000` to inspect.

## ⚙️ Customization Guide
- **Colors & Styling**: Open `src/styles/globals.css` to update the global light/dark CSS tokens inside the `@theme` and `:root` block.
- **Copy & Navigation**: Update text and data arrays inside `src/data/agencyData.ts` to update the UI content.
- **Custom Shaders**: Edit the fragment and vertex shaders in `src/components/three/` to alter the distortion patterns.

## 🔌 API Reference
> [!NOTE]
> **Not Applicable** — Aura Studio is a high-performance frontend-only template and does not ship with built-in API endpoints.

## 🌐 Deployment
This template is fully pre-configured for instant deployment on **Vercel**:
1. Connect your repository to Vercel.
2. The `vercel.json` file will automatically define build configurations (`npm run build`) and directory defaults (`.next`).

## 📦 What's Included
- Complete design system with CSS custom properties
- Advanced physics-based custom cursor
- Full custom layout suite (Navbar, Footer, Menu)
- Strict TypeScript compile settings
- Pre-configured Vercel deployment block

## 📋 Browser Support
| Chrome | Safari | Firefox | Edge | Opera |
|---|---|---|---|---|
| Chrome 90+ | Safari 14+ | Firefox 88+ | Edge 90+ | Opera 76+ |

## 📄 License
This template is provided under a Single-Use Commercial License. 
- You may use it for one end-product (personal or client project).
- Standalone redistribution, marketplace inclusion, or bundle reselling is strictly prohibited.

## 🆘 Need Help?

Need a hand getting this template running or customized? Check the FAQs below, or reach out through our support page:

👉 **[mhd-store.vercel.app/support](https://mhd-store.vercel.app/support)**

**FAQs**

<details>
<summary>How do I customize the audio files used for the tactile feedback?</summary>

You can replace the audio tick files located in the `public/audio/` directory. Keep the same filenames (`tick.mp3`, `click.mp3`, etc.) to automatically apply them, or update the paths in `src/context/AudioContext.tsx`.
</details>

<details>
<summary>How does the GSAP horizontal scroll work, and how can I adjust scroll speed?</summary>

The horizontal scroll is powered by GSAP's `ScrollTrigger` in `src/components/sections/WorkShowcase.tsx`. You can adjust the `scrub` value or the end boundary parameter (`end: "+=2000"`) in the ScrollTrigger settings to speed up or slow down the horizontal movement.
</details>

<details>
<summary>How can I update the text and projects displayed in the grid?</summary>

All copy, project data, metrics, and socials are centralized in `src/data/agencyData.ts`. Simply modify the export arrays in that file to automatically propagate changes to the layout.
</details>

<details>
<summary>How do I deploy this template on Vercel?</summary>

Import the repository directly into Vercel. Vercel will auto-detect Next.js and apply the settings in `vercel.json`. Make sure to add `NEXT_PUBLIC_SITE_URL` to Vercel environment variables.
</details>

<details>
<summary>Can I disable the custom cursor for mobile devices?</summary>

The custom cursor in `src/components/ui/CustomCursor.tsx` is automatically disabled on mobile and touch devices using a CSS media query `(min-width: 1024px) and (pointer: fine)`.
</details>

## 👤 Credits
© 2026 Mohamed Ehab. All rights reserved.
