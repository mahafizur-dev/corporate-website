"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Content from "./FocusContent";
import ContentTwo from "./FocusContentTwo";
import FocusGallery from "./FocusGallery";

const CARDS = [
  {
    id: 1,
    category: "RETAIL LOGISTICS",
    date: "JANUARY 10, 2026",
    title: "Optimizing Supply Chains in the Digital Era",
    image: "img/t1.jpg",
  },
  {
    id: 2,
    category: "URBAN PLANNING",
    date: "JANUARY 12, 2026",
    title: "The Architecture of Modern Solitude",
    image: "img/t2.jpg",
  },
  {
    id: 3,
    category: "ARTIFICIAL INTELLIGENCE",
    date: "JANUARY 15, 2026",
    title: "As AI Investments Surge, CEOs Take the Lead",
    image: "img/t3.jpg",
  },
  {
    id: 4,
    category: "DESIGN SYSTEMS",
    date: "JANUARY 18, 2026",
    title: "Abstract Patterns in Structural Engineering",
    image: "img/t4.jpg",
  },
  
];

const BASE_CARD_STYLE =
  "absolute inset-0 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-grab active:cursor-grabbing";

function FocusSlider() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const total = CARDS.length;

  // -------------------------
  // Navigation helpers
  // -------------------------
  const handleNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  // -------------------------
  // Keyboard navigation
  // -------------------------
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleNext, handlePrev]);

  // -------------------------
  // Autoplay
  // -------------------------
  useEffect(() => {
    if (isPaused) return;

    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % total);
    }, 3800);

    return () => clearInterval(id);
  }, [isPaused, total]);

  // -------------------------
  // Drag + inertia + rubber band
  // -------------------------
  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const velocity = useRef(0);
  const isDragging = useRef(false);
  const resumeTimer = useRef(null);

  const DRAG_THRESHOLD = 60;
  const VELOCITY_THRESHOLD = 0.45;
  const INERTIA_MULTIPLIER = 260;

  const rubberBand = (distance, dimension = 300, resistance = 0.55) => {
    if (distance === 0) return 0;
    const sign = Math.sign(distance);
    const abs = Math.abs(distance);
    return sign * (dimension * resistance * (1 - Math.exp(-abs / dimension)));
  };

  const stopResume = () => {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  };

  const resumeAutoplay = () => {
    stopResume();
    resumeTimer.current = setTimeout(() => {
      setIsPaused(false);
    }, 700);
  };

  const onPointerDown = (e) => {
    stopResume();
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
    lastX.current = e.clientX;
    lastT.current = performance.now();
    velocity.current = 0;
    setIsPaused(true);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;

    const now = performance.now();
    const x = e.clientX;

    const rawDelta = x - dragStartX.current;
    dragDeltaX.current = rubberBand(rawDelta);

    const dx = x - lastX.current;
    const dt = Math.max(1, now - lastT.current);
    const v = dx / dt;

    velocity.current = velocity.current * 0.75 + v * 0.25;
    lastX.current = x;
    lastT.current = now;
  };

  const stepSlides = (steps) => {
    setActiveIndex((i) => (i + steps + total) % total);
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;

    const delta = dragDeltaX.current;
    const v = velocity.current;

    const projected = rubberBand(delta, 280, 0.6) + v * INERTIA_MULTIPLIER;

    const absDelta = Math.abs(delta);
    const absV = Math.abs(v);
    const absProjected = Math.abs(projected);

    const dir = projected > 0 ? -1 : projected < 0 ? 1 : 0;

    let steps = 0;
    if (absDelta > DRAG_THRESHOLD || absV > VELOCITY_THRESHOLD) {
      steps = 1;
      if (
        absProjected > DRAG_THRESHOLD * 2.2 ||
        absV > VELOCITY_THRESHOLD * 1.8
      ) {
        steps = 2;
      }
    }

    if (steps && dir !== 0) stepSlides(dir * steps);

    isDragging.current = false;
    dragDeltaX.current = 0;
    velocity.current = 0;

    resumeAutoplay();
  };

  // -------------------------
  // Layout math
  // -------------------------
  const getDistance = (index) => {
    let d = index - activeIndex;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  const getStyle = (distance) => {
    if (distance === 0) {
      return {
        z: "z-30",
        opacity: "opacity-100",
        transform: "translateX(0%) scale(1.15)",
        clickable: true,
      };
    }

    if (Math.abs(distance) === 1) {
      return {
        z: "z-20",
        opacity: "opacity-60",
        transform: `translateX(${distance * 65}%) scale(0.85) rotateY(${distance * -8}deg)`,
        clickable: true,
      };
    }

    return {
      z: "z-10",
      opacity: "opacity-0 pointer-events-none",
      transform: `translateX(${distance > 0 ? "150%" : "-150%"}) scale(0.5)`,
      clickable: false,
    };
  };

  return (
    <section className="relative w-full max-w-5xl h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <div
        className="relative w-full h-full flex items-center justify-center [perspective:1000px] select-none touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => !isDragging.current && setIsPaused(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[550px]">
          {CARDS.map((card, index) => {
            const distance = getDistance(index);
            const style = getStyle(distance);
            const isActive = distance === 0;

            return (
              <div
                key={card.id}
                className={`${BASE_CARD_STYLE} ${style.z} ${style.opacity}`}
                style={{
                  transform:
                    isDragging.current && isActive
                      ? `${style.transform} translateX(${dragDeltaX.current * 0.12}px)`
                      : style.transform,
                }}
                onClick={() => style.clickable && setActiveIndex(index)}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/90 transition-opacity ${
                    isActive ? "opacity-80" : "opacity-40"
                  }`}
                />

                <div
                  className={`absolute inset-x-0 bottom-0 p-8 transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="text-[10px] font-bold tracking-widest uppercase border border-white/20 px-2 py-1 rounded-full mb-4 inline-block">
                    {card.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-light mb-4">
                    {card.title}
                  </h2>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    READ ARTICLE <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-4 mt-8 z-40">
        <button
          onClick={() => {
            setIsPaused(true);
            handlePrev();
            resumeAutoplay();
          }}
          className="p-3 bg-black/5 rounded-full hover:bg-black/10 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => {
            setIsPaused(true);
            handleNext();
            resumeAutoplay();
          }}
          className="p-3 bg-black/5 rounded-full hover:bg-black/10 transition"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-black mb-4">
          Execution-Driven Business Operations
        </h1>
        <p className="text-neutral-400">
          Across • Trading • Consulting • Export • Manufacturing • Development
        </p>
      </div>

      <FocusSlider />
      <Content />
      <ContentTwo />
      <FocusGallery />
    </main>
  );
}
