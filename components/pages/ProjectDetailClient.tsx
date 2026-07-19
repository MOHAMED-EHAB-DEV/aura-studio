"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Project } from "@/data/agencyData";
import { Footer } from "@/components/layout/Footer";
import ArrowUpRight from "@/components/ui/svgs/ArrowUpRight";

export const ProjectDetailClient: React.FC<{
  project: Project;
  nextProject: Project;
}> = ({ project, nextProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax calculations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative w-full bg-brand-bg">
      {/* Immersive Hero Header */}
      <section
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden flex items-end justify-between p-6 md:p-12 pb-24"
      >
        {/* Parallax Image Background */}
        <motion.div
          style={{ y: yImage }}
          className="absolute inset-0 z-0 h-[120%] w-full top-[-10%]"
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 z-5 pointer-events-none bg-linear-to-t from-brand-bg via-brand-bg/50 to-transparent" />

        {/* Hero Content Overlay */}
        <motion.div
          style={{ y: yText, opacity }}
          className="relative z-10 text-white w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <h1 className="font-display text-5xl md:text-8xl lg:text-[10vw] leading-[0.85] tracking-tighter text-brand-text uppercase w-full md:w-3/4">
            {project.title}
          </h1>

          <div className="flex flex-col gap-2 text-brand-text/80 text-sm md:text-base font-mono uppercase tracking-wider">
            <p>CLIENT // {project.client}</p>
            <p>YEAR // {project.year}</p>
            <p>CATEGORY // {project.category}</p>
          </div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-20 bg-brand-bg w-full pt-24 md:pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          {/* Left Column: Metrics & Services */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div>
              <h3 className="font-mono text-sm tracking-widest text-brand-muted mb-6 uppercase">
                Metrics
              </h3>
              <ul className="flex flex-col gap-4">
                {project.metrics.map((metric, i) => (
                  <li
                    key={i}
                    className="text-2xl md:text-3xl font-display tracking-tight text-brand-text border-b border-brand-border pb-4"
                  >
                    {metric}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-sm tracking-widest text-brand-muted mb-6 uppercase">
                Services
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-brand-border text-xs uppercase tracking-wider text-brand-text"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Long Form Content */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl md:text-4xl leading-tight font-display text-brand-text mb-8">
              {project.description}
            </h2>
            <div className="prose prose-invert prose-lg md:prose-xl text-brand-muted font-sans leading-relaxed">
              <p>{project.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-20 bg-brand-bg w-full pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-6 md:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {project.gallery.slice(0, 2).map((img, i) => (
              <div
                key={i}
                className="relative w-full aspect-4/5 md:aspect-square overflow-hidden bg-brand-border/20 group"
              >
                <Image
                  src={img}
                  alt={`${project.title} Gallery ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          {project.gallery[2] && (
            <div className="relative w-full aspect-video md:aspect-21/9 overflow-hidden bg-brand-border/20 group">
              <Image
                src={project.gallery[2]}
                alt={`${project.title} Final Gallery`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          )}
        </div>
      </section>

      {/* Next Project Footer Section */}
      <section className="relative z-20 bg-black w-full py-24 md:py-48 flex flex-col items-center justify-center overflow-hidden group">
        <Link
          href={`/work/${nextProject.id}`}
          className="absolute inset-0 z-20"
          aria-label={`Next Project: ${nextProject.title}`}
        />
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={nextProject.image}
            alt={nextProject.title}
            fill
            sizes="100vw"
            className="object-cover opacity-40 transition-opacity duration-700 group-hover:opacity-60"
          />
        </div>
        {/* Deep gradient overlay to ensure text contrast */}
        <div className="absolute inset-0 z-5 pointer-events-none bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-6 pointer-events-none">
          <p className="font-mono text-sm tracking-[0.2em] text-white/70 uppercase">
            Next Project
          </p>
          <div className="flex items-center gap-4">
            <h2 className="font-display text-5xl md:text-8xl text-white text-center tracking-tighter group-hover:scale-105 transition-transform duration-500">
              {nextProject.title}
            </h2>
            <ArrowUpRight className="w-12 h-12 md:w-24 md:h-24 text-brand-primary -mt-4 md:-mt-8 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
