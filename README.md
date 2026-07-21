# AURA Studio // Premium Creative Digital Agency Template

## ✨ Overview
AURA Studio is a state-of-the-art creative agency and portfolio template designed for digital studios, production houses, design agencies, and ambitious freelancers. Built with a dark luxury aesthetic, rich atmospheric lighting, tactile audio feedback, and fluid interactive animations, AURA Studio creates a memorable brand presence that engages visitors from the very first glance.

## 🌟 What Makes It Unique
- **Tactile Audio Feedback Engine**: Implements immersive, tactile click and scroll audio ticks that add a physical quality to the digital layout.
- **GSAP Horizontal Scroll Showcase**: A custom-pinned case study section that transitions horizontally with high performance.  
- **Hardware-Accelerated CSS Mesh Aura**: Ambient background gradient matching dark luxury aesthetics with 0% CPU/GPU rendering overhead.
- **Interactive Cursor Experience**: Fluid custom cursor that reacts dynamically to interactive links, buttons, and media cards across desktop screens.
- **Dedicated 404 Void Page**: A unique, custom-designed page for missing links that keeps the experience consistent without distraction.
- **Ultra-Fast & Responsive**: Optimized for smooth performance, instant page loads, and flawless display on mobile, tablet, and desktop devices.

## 🚀 Key Features
- **Tactile Audio Feedback Engine**: Integrated audio ticks for click & scroll interactions with audio mute controls.
- **GSAP ScrollTrigger Motion Systems**: Custom horizontal showcase, magnetic button physics, tilt perspective cards, and scroll progress tracking.
- **Hardware-Accelerated CSS Mesh Background**: Multi-layer atmospheric ambient gradient with cursor proximity light field (0% CPU/GPU overhead).
- **Responsive Navigation Suite**: Fixed header with volume toggle, full-screen video overlay menu, and accessible mobile controls.
- **High-Performance Custom Cursor**: Desktop custom cursor with interactive element scaling and global `<select>`/`input` encapsulation.
- **SEO & Search Engine Optimization**: Built-in JSON-LD organization schema, automated dynamic sitemap generation, robots.txt, and complete OpenGraph/Twitter card metadata.
- **Isolated Custom 404 Void Page**: Dedicated digital reality void page separated from standard headers/footers via Next.js route groups (`(website)`).
- **Accessibility & Focus Controls**: Global focus-visible rings, keyboard focus trapping, body scroll locking for dialogs, and reduced-motion fallback compliance.
- **Centralized Data Engine**: Easily update all projects, copy, services, metrics, and office locations from a single `data/agencyData.ts` configuration file.

## 🎯 Perfect For
- Creative Agencies & Production Studios
- Digital Artists & Freelancers
- Premium Brands & High-End Portfolios
- Designers aiming to make a bold first impression

## 📄 Pages Included
| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Immersive home featuring split headers, ambient aura mesh, horizontal showcase, and client logos |
| **Work** | `/work` | Categorized project grid with magnetic layouts and rich interactive cards |
| **Services** | `/services` | Detailed studio capabilities, pricing tier lists, and strategic approach stages |
| **About** | `/about` | Leadership team showcases, agency values, and philosophy blocks |
| **Contact** | `/contact` | Full contact sheet with location grids, local coordinates, and custom inquiry fields |
| **404 Void** | `/not-found` | Isolated digital reality not found page stripped of global Navbar/Footer |

## 🎨 Design System
| Font Family | Variable | Weights | Used For |
|---|---|---|---|
| **Syne** | `--font-display` | 100-800 (Bold/Black) | Headings, display text |
| **Manrope** | `--font-body` | 100-800 (Light, Regular, Medium, Semibold, Bold) | Body text, UI, mono details |

---

## 📁 Project File Structure
```
app/                 ← Next.js App Router root layout, fonts, robots, sitemap
  (website)/         ← Route group for main site pages & website Navbar layout
  not-found.tsx      ← Standalone custom 404 page (no Navbar/Footer)
components/          ← UI, Motion, Layout, Sections, Three
data/                ← Centralized project & agency data (agencyData.ts)
hooks/               ← Focus trapping, scroll locking, magnetic, tilt, count-up hooks
lib/                 ← Class merger utilities, GSAP registration
styles/              ← Tailwind v4 CSS variables & design tokens (globals.css)
types/               ← Type definitions
```

## 🛠 Tech Stack
| Technology | Description |
|---|---|
| **Next.js (App Router)** | React Server Components, Route Groups (`(website)`), fast local development, and build optimization |
| **TypeScript** | Strict compile-time type safety with root `@/*` import alias |
| **Tailwind CSS (v4)** | Natively fast, custom CSS-variable powered design tokens |
| **GSAP** | Advanced ScrollTrigger timeline mapping and smooth interactions |
| **Lenis** | Physics-based smooth-scroll synchronization |

## 🚀 Setup & Installation Guide

### Prerequisites
- Node.js (v18+)
- Bun (recommended) or npm

### Installation
1. Clone or extract the project files to your directory.
2. Install project dependencies:
   ```bash
   bun install
   ```

### Environment Configuration
Rename `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### Run Locally
Launch the high-performance local server:
```bash
bun dev
```
Open `http://localhost:3000` in your browser.

### Build for Production
Create an optimized production bundle:
```bash
bun run build
```

## ⚙️ Configuration Notes
- **Colors & Design Tokens**: Edit `styles/globals.css` to customize the primary brand colors, background values, and fonts.
- **Copy & Portfolio Data**: All site copy, project items, services, team members, and metrics are centralized in `data/agencyData.ts`.
- **Path Aliases**: Path alias `@/*` maps directly to `./*` as configured in `tsconfig.json`.
- **Deployment Config**: Pre-configured `vercel.json` provides instant build & routing settings for Vercel deployment.

## 🌐 Deployment Guide
1. Import your repository into **Vercel** or **Netlify**.
2. Set the build command to `bun run build` (or `npm run build`).
3. Add `NEXT_PUBLIC_SITE_URL` to environment variables in your deployment dashboard.

## 📦 Package Contents
- Complete Next.js project with App Router route groups
- Fully responsive dark mode design system
- Tactile audio feedback system with audio assets
- Pre-configured deployment files (`vercel.json`, `robots.txt`, `sitemap.ts`)
- Built-in accessibility hooks and focus controls

## 📋 Browser Compatibility
| Chrome | Safari | Firefox | Edge | Opera |
|---|---|---|---|---|
| Chrome 90+ | Safari 14+ | Firefox 88+ | Edge 90+ | Opera 76+ |

## 📄 License
This template is provided under a Single-Use Commercial License. 
- You may use it for one end-product (personal or client project).
- Standalone redistribution, marketplace inclusion, or bundle reselling is strictly prohibited.

## 🆘 Need Help?

Need assistance setting up or customizing your template? Reach out through our support portal:

👉 **[mhd-store.vercel.app/support](https://mhd-store.vercel.app/support)**

**Frequently Asked Questions**

<details>
<summary>How do I customize the audio files used for the tactile feedback?</summary>

You can replace the audio tick files located in the `public/audio/` directory. Keep the same filenames (`tick.mp3`, `click.mp3`) to automatically apply them, or update the paths in `context/AudioContext.tsx`.
</details>

<details>
<summary>How does the GSAP horizontal scroll work, and how can I adjust scroll speed?</summary>

The horizontal scroll is powered by GSAP's `ScrollTrigger` in `components/sections/WorkShowcase.tsx`. You can adjust the `scrub` value or the end boundary parameter (`end: "+=2000"`) in the ScrollTrigger settings to speed up or slow down the movement.
</details>

<details>
<summary>How can I update the text and projects displayed in the grid?</summary>

All copy, project data, metrics, and socials are centralized in `data/agencyData.ts`. Simply modify the export arrays in that file to automatically propagate changes across all pages.
</details>

<details>
<summary>How do I deploy this template on Vercel?</summary>

Import the repository directly into Vercel. Vercel will auto-detect Next.js and apply the settings in `vercel.json`. Make sure to add `NEXT_PUBLIC_SITE_URL` to your Vercel environment variables.
</details>

<details>
<summary>Can I disable the custom cursor for mobile devices?</summary>

The custom cursor in `components/ui/CustomCursor.tsx` is automatically disabled on mobile and touch devices using a CSS media query `(min-width: 1024px) and (pointer: fine)`.
</details>

## 👤 Credits
© 2026 Mohamed Ehab. All rights reserved.
