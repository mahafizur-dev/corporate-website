"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Globe,
  BarChart3,
  ShieldCheck,
  Zap,
} from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    tag: "FINANCIAL SERVICES",
    year: "2025",
    title: "Global Asset Management Platform",
    description:
      "Redesigning the digital wealth management experience for high-net-worth institutional clients.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    icon: <BarChart3 size={20} />,
    stat: "42% Increase in UX Efficiency",
  },
  {
    id: 2,
    tag: "INFRASTRUCTURE",
    year: "2024",
    title: "Sustainable Urban Power Grids",
    description:
      "Implementing smart-grid technology to optimize renewable energy distribution in metropolitan areas.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200",
    icon: <Zap size={20} />,
    stat: "Carbon Neutral by 2030",
  },
  {
    id: 3,
    tag: "CYBERSECURITY",
    year: "2025",
    title: "Enterprise Defense Systems",
    description:
      "Next-generation quantum-resistant encryption protocols for decentralized cloud architectures.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    icon: <ShieldCheck size={20} />,
    stat: "Zero Data Breaches to Date",
  },
  {
    id: 4,
    tag: "LOGISTICS",
    year: "2024",
    title: "AI-Driven Supply Chain Logistics",
    description:
      "Predictive analytics and automated warehousing solutions for cross-border e-commerce giants.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    icon: <Globe size={20} />,
    stat: "18% Faster Fulfillment",
  },
];

function ProjectGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const getCardStyle = (index) => {
    const total = PROJECTS.length;
    let distance = index - activeIndex;

    // Circular logic
    if (distance > total / 2) distance -= total;
    if (distance < -total / 2) distance += total;

    const isActive = distance === 0;
    const isNext = distance === 1;
    const isPrev = distance === -1;

    let baseClasses =
      "transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) absolute top-0 w-full h-full rounded-sm overflow-hidden border border-white/10";

    if (isActive) {
      return {
        className: `${baseClasses} z-30 opacity-100 shadow-2xl shadow-black/50`,
        transform: `translateX(0%) scale(1)`,
        visibility: "visible",
      };
    } else if (isNext) {
      return {
        className: `${baseClasses} z-20 opacity-40 hover:opacity-60`,
        transform: `translateX(75%) scale(0.8) rotateY(-15deg)`,
        visibility: "visible",
      };
    } else if (isPrev) {
      return {
        className: `${baseClasses} z-20 opacity-40 hover:opacity-60`,
        transform: `translateX(-75%) scale(0.8) rotateY(15deg)`,
        visibility: "visible",
      };
    } else {
      return {
        className: `${baseClasses} z-10 opacity-0`,
        transform: `translateX(${distance > 0 ? "120%" : "-120%"}) scale(0.6)`,
        visibility: "hidden",
      };
    }
  };

  return (
    <div className="relative w-full max-w-7xl px-4 flex flex-col items-center">
      {/* Editorial Grid Background Decoration */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-r border-white h-full" />
        ))}
      </div>

      {/* Main Slider Area */}
      <div className="relative w-full h-[650px] flex items-center justify-center perspective-[2000px]">
        <div className="relative w-full max-w-3xl h-[500px]">
          {PROJECTS.map((project, index) => {
            const { className, transform, visibility } = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={project.id}
                className={className}
                style={{ transform, visibility }}
                onClick={() => !isActive && setActiveIndex(index)}
              >
                {/* Visual Layer */}
                <div className="absolute inset-0 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  {/* Subtle Grain Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent transition-opacity duration-700 ${isActive ? "opacity-90" : "opacity-60"}`}
                  />
                </div>

                {/* Content Layer */}
                <div
                  className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-end transition-all duration-700 ${isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-emerald-400">
                      {project.icon}
                    </span>
                    <div className="h-[1px] w-12 bg-white/20" />
                    <span className="text-[10px] tracking-[0.3em] font-bold text-white/60 uppercase">
                      {project.tag} — {project.year}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6 leading-[1.1]">
                    {project.title}
                  </h2>

                  <p className="text-neutral-400 text-lg max-w-xl mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">
                        Key Outcome
                      </span>
                      <span className="text-sm font-semibold text-emerald-400 tracking-wide">
                        {project.stat}
                      </span>
                    </div>

                    <button className="ml-auto group flex items-center gap-3 py-3 px-6 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-emerald-400 transition-all">
                      View Case Study
                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Interface */}
      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-8 mt-4 z-40 border-t border-white/5 pt-12">
        {/* Project Index */}
        <div className="flex items-center gap-6">
          <div className="text-white/20 text-5xl font-serif italic">
            0{activeIndex + 1}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] mb-1">
              Up Next
            </span>
            <span className="text-sm text-white/80 font-medium">
              {PROJECTS[(activeIndex + 1) % PROJECTS.length].title}
            </span>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="hidden md:flex gap-3">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-[2px] transition-all duration-500 ${idx === activeIndex ? "w-12 bg-emerald-400" : "w-4 bg-white/10 hover:bg-white/30"}`}
            />
          ))}
        </div>

        {/* Control Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="p-4 border border-white/10 text-white/60 hover:text-white hover:border-white/40 transition-all rounded-full group"
          >
            <ChevronLeft
              size={20}
              className="group-active:-translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={handleNext}
            className="p-4 border border-white/10 text-white/60 hover:text-white hover:border-white/40 transition-all rounded-full group"
          >
            <ChevronRight
              size={20}
              className="group-active:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center py-20 overflow-hidden font-sans selection:bg-emerald-500/30">
      <div className="w-full max-w-7xl px-4 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-emerald-400 text-xs font-bold tracking-[0.4em] uppercase">
              Selection — 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Impact Through <br /> Strategic Excellence
            </h1>
          </div>
          <p className="text-neutral-500 max-w-md text-lg leading-relaxed md:pb-2">
            Showcasing our most transformative partnerships across global
            markets. We build digital-first solutions for the world's leading
            enterprises.
          </p>
        </div>
      </div>

      <ProjectGallery />
    </main>
  );
}
