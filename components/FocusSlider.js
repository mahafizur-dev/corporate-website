"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const CARDS = [
  {
    id: 1,
    category: "RETAIL LOGISTICS",
    date: "JANUARY 10, 2026",
    title: "Optimizing Supply Chains in the Digital Era",
    excerpt:
      "Despite a tough market environment, specialty retailers can turn their unique combination of sensory experience into growth.",
    image: "/img/t1.jpg",
  },
  {
    id: 2,
    category: "URBAN PLANNING",
    date: "JANUARY 12, 2026",
    title: "The Architecture of Modern Solitude",
    excerpt:
      "Urban design is increasingly responding to how individuals experience solitude within dense environments.",
    image: "/img/t2.png",
  },
  {
    id: 3,
    category: "ARTIFICIAL INTELLIGENCE",
    date: "JANUARY 15, 2026",
    title: "How Specialty Retail Can Get Its Groove Back",
    excerpt:
      "Specialty retail is evolving fast as AI reshapes customer engagement and operational intelligence.",
    image: "/img/t3.jpg",
  },
  
];

export default function FocusSlider() {
  const total = CARDS.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [paused, setPaused] = useState(false);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4200);

    return () => clearInterval(timer);
  }, [paused, total]);

  /* ================= OFFSET CALC (SAFE) ================= */
  const getOffset = useMemo(() => {
    return (i) => {
      let d = i - activeIndex;
      if (d > total / 2) d -= total;
      if (d < -total / 2) d += total;
      return d;
    };
  }, [activeIndex, total]);

  return (
    <main className="w-full bg-white overflow-x-hidden">
      <section className="relative max-w-6xl mx-auto px-4 py-20 overflow-hidden">
        {/* ===== Heading ===== */}
        <div className="text-center mb-14">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Execution-Driven Business Operations
          </h1>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Trading • Consulting • Export • Manufacturing • Development
          </p>
        </div>

        {/* ===== Slider Wrapper (CRITICAL) ===== */}
        <div className="relative h-[520px] flex items-center justify-center overflow-hidden">
          {CARDS.map((card, i) => {
            const d = getOffset(i);
            const isCenter = d === 0;
            const isHovered = hoveredIndex === i;

            // limit slide distance to avoid overflow
            const translateX = d * 300;

            return (
              <div
                key={card.id}
                className="absolute transition-all duration-700 ease-out will-change-transform"
                style={{
                  transform: `translateX(${translateX}px) scale(${
                    isCenter ? 1 : 0.9
                  })`,
                  opacity: Math.abs(d) > 2 ? 0 : 1,
                  zIndex: isHovered ? 50 : isCenter ? 40 : 10 - Math.abs(d),
                }}
                onMouseEnter={() => {
                  setHoveredIndex(i);
                  setPaused(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setPaused(false);
                }}
              >
                <div className="relative w-[280px] md:w-[360px] h-[420px] rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />

                  {!isHovered && (
                    <div className="absolute inset-0 bg-black/30" />
                  )}

                  {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-xl rounded-xl p-6 w-[85%] shadow-lg">
                        <div className="text-xs font-semibold tracking-widest mb-2">
                          ARTICLE
                          <span className="ml-2 font-normal">{card.date}</span>
                        </div>

                        <h2 className="text-lg md:text-xl font-medium mb-3">
                          {card.title}
                        </h2>

                        <p className="text-sm text-neutral-600 mb-5">
                          {card.excerpt}
                        </p>

                        <button
                          aria-label="Learn more"
                          className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-500 text-black px-5 py-2 rounded-full text-sm font-semibold transition"
                        >
                          LEARN MORE <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== Controls ===== */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            aria-label="Previous slide"
            onClick={() => setActiveIndex((i) => (i - 1 + total) % total)}
            className="p-3 rounded-full bg-black/5 hover:bg-black/10 transition"
          >
            <ChevronLeft />
          </button>

          <button
            aria-label="Next slide"
            onClick={() => setActiveIndex((i) => (i + 1) % total)}
            className="p-3 rounded-full bg-black/5 hover:bg-black/10 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
}
