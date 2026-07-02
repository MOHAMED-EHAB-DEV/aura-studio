export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  metrics: string[];
  client: string;
  services: string[];
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  capabilities: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const projects: Project[] = [
  {
    id: "quantum-labs",
    title: "QUANTUM LABS",
    category: "Web3 / Dynamic Platform",
    year: "2025",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "Architecting a high-speed, interactive decentralized gateway. Seamless Web3 integrations paired with generative fluid art. Realized an immersive ecosystem where high-frequency transactions flow within a responsive visual space.",
    metrics: ["+140% Conversion", "0.4s Avg Load Time", "$1.2B Locked Value"],
    client: "Quantum Labs Ltd.",
    services: ["Creative Direction", "Web3 Development", "WebGL Shaders", "UX Architecture"]
  },
  {
    id: "neolith-studio",
    title: "NEOLITH STUDIOS",
    category: "Branding / Digital Identity",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Rebranding a premier architecture collective. Translating physical brutalist forms into monolithic, editorial screen realities. Using bold asymmetric grids, raw tactile layouts, and severe typographic statements.",
    metrics: ["Reddot Design Winner", "5M+ Monthly Reach", "100% Brand Recall"],
    client: "Neolith Group",
    services: ["Brand Strategy", "Corporate Identity", "Interactive Portfolio", "Spatial Design"]
  },
  {
    id: "helix-finance",
    title: "HELIX ECOSYSTEM",
    category: "Fintech / Core Interface",
    year: "2026",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    description: "A secure, gesture-driven asset workspace designed for high-net-worth tech leaders. Fluid reactive charts, real-time portfolio streams, and an interactive command interface that responds to intuitive shortcuts.",
    metrics: ["$24B Transacted", "99.99% Core Uptime", "4.9 App Store Rating"],
    client: "Helix Protocol",
    services: ["UI/UX Engineering", "Data Visualization", "Mobile App Dev", "Security Audit"]
  },
  {
    id: "lumina-fashion",
    title: "LUMINA COUTURE",
    category: "E-Commerce / Experience",
    year: "2026",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    description: "An high-end e-commerce experience showcasing seasonal collections. Integrated liquid displacement hover transitions, custom video styling rails, and an interactive tailoring simulation engine.",
    metrics: ["2.4x Cart Value", "380k Active Users", "42% Direct Uplift"],
    client: "Lumina Paris",
    services: ["Digital Experience", "Creative Direction", "3D Web Configurator", "Global SEO"]
  }
];

export const services: Service[] = [
  {
    id: "strategy",
    title: "CORE STRATEGY",
    subtitle: "Architecting the unfair advantage",
    description: "We define the digital battlefield. We replace general ideas with high-conviction product directions based on structural analysis and consumer culture. No marketing buzzwords, just clear roadmaps to market capture.",
    details: ["Competitive Positioning", "Ecosystem Mapping", "Revenue Model Innovation", "Technical Feasibility Planning"],
    capabilities: ["Market Intel", "Tech Audit", "Brand Positioning", "Growth Mapping"]
  },
  {
    id: "branding",
    title: "HIGH-END BRANDING",
    subtitle: "Identity built for longevity",
    description: "We shape visual narratives that command respect. From custom display typography to kinetic design guidelines, we build monolithic brand worlds that remain distinctive across screen, paper, and physical space.",
    details: ["Typographic Systems", "Creative Assets Production", "Kinetic Identity Rules", "Design Language Systems"],
    capabilities: ["Logomark Craft", "Brand Book", "Styleguides", "Visual Guidelines"]
  },
  {
    id: "web3",
    title: "WEB3 & ENGINE DEV",
    subtitle: "Pioneering the decentralized layer",
    description: "We design dApps and custom integrations that are structurally sound and aesthetically superior. We combine high-frequency transaction stability with immersive, WebGL-driven visual feedback that demystifies cryptography.",
    details: ["Smart Contract Architecture", "WebGL Canvas Nodes", "Tokenomics UX", "DeFi Interfaces Engineering"],
    capabilities: ["WebGL / GLSL", "DApp Frontend", "Subgraphs", "Interactive Mechanics"]
  },
  {
    id: "motion",
    title: "KINETIC & 3D MOTION",
    subtitle: "Fluidity that captures attention",
    description: "We orchestrate spatial graphics that elevate products. Through liquid layout shaders, physics-based UI elements, and high-framerate 3D interactions, we make digital spaces feel tactile, dynamic, and unforgettable.",
    details: ["WebGL Fluid Shaders", "Interactive Web3D", "Lottie & Micro-Motion", "Commercial Reels Design"],
    capabilities: ["Shader Craft", "Interactive 3D", "UI Micro-Motion", "Video Reels"]
  }
];

export const team: TeamMember[] = [
  {
    id: "member-1",
    name: "Mohamed Ehab",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Pioneering immersive interfaces that bridge WebGL, high-concept typography, and technical excellence. Committed to creating websites that feel like responsive art galleries."
  },
  {
    id: "member-2",
    name: "Aria Thorne",
    role: "Lead 3D & Graphics Engineer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "GLSL mathematical artist. Writing custom vertex and fragment shaders that translate organic natural elements like wind, liquid, and sound into real-time render steps."
  },
  {
    id: "member-3",
    name: "Marcus Vance",
    role: "UX Architect & Systems Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Focusing on performance-critical interactions and bulletproof micro-interactions. Merging strict accessibility protocols with radical experimental design formats."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "AURA didn't just build a website; they forged a premium digital artifact. Our team, investors, and clients were blown away. Absolute masterpieces.",
    author: "Elena Rostov",
    role: "VP of Product",
    company: "Quantum Labs"
  },
  {
    id: "test-2",
    quote: "They operate at the rare intersection of mathematical rigor and high art. The liquid shaders and GSAP orchestrations are stunning and highly performant.",
    author: "Kenji Takahashi",
    role: "Co-Founder",
    company: "Helix Protocol"
  },
  {
    id: "test-3",
    quote: "They challenged our traditional corporate layout assumptions and delivered an editorial masterpiece that raised our conversion rates by 140%.",
    author: "Clara Dupont",
    role: "Managing Director",
    company: "Neolith Studios"
  }
];

export const clients = [
  { name: "QUANTUM", code: "QNTM" },
  { name: "NEOLITH", code: "NLTH" },
  { name: "HELIX", code: "HLX" },
  { name: "LUMINA", code: "LMN" },
  { name: "SYNAPSE", code: "SNPS" },
  { name: "KINETIC", code: "KNTC" },
  { name: "APEX", code: "APX" },
  { name: "VORTEX", code: "VRTX" }
];
