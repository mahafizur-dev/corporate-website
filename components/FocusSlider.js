"use client";

import { useEffect, useState } from "react";
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
  {
    id: 4,
    category: "DESIGN SYSTEMS",
    date: "JANUARY 18, 2026",
    title: "Abstract Patterns in Structural Engineering",
    excerpt:
      "Structural systems are embracing abstraction to balance aesthetics with performance.",
    image: "/img/t4.jpg",
  },
  {
    id: 5,
    category: "URBAN PLANNING",
    date: "JANUARY 12, 2026",
    title: "The Architecture of Modern Solitude",
    excerpt:
      "Urban design is increasingly responding to how individuals experience solitude within dense environments.",
    image: "/img/t2.png",
  },
];

export default function FocusSlider() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const total = CARDS.length;

 
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % total);
    }, 4200);
    return () => clearInterval(id);
  }, [total]);

  const getOffset = (i) => {
    let d = i - activeIndex;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <section className="relative w-full max-w-6xl">
        <div className="center mt-8 mb-8 md:mb-12 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Execution-Driven Business Operations
          </h1>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Across – Trading • Consulting • Export • Manufacturing • Development
          </p>
        </div>
        <div className="relative h-[520px] flex items-center justify-center">
          {CARDS.map((card, i) => {
            const d = getOffset(i);
            const isHovered = hoveredIndex === i;
            const isCenter = d === 0;

            return (
              <div
                key={card.id}
                className="absolute transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${d * 320}px) scale(${
                    isCenter ? 1 : 0.85
                  })`,
                  opacity: Math.abs(d) > 2 ? 0 : 1,
                  zIndex: isHovered ? 40 : isCenter ? 30 : 10 - Math.abs(d),
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative w-[280px] md:w-[360px] h-[420px] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />

                  {!isHovered && (
                    <div className="absolute inset-0 bg-black/30 transition-opacity" />
                  )}

                  {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-xl rounded-xl p-6 w-[85%] text-black shadow-xl animate-fadeUp">
                        <div className="text-xs font-semibold tracking-widest mb-2">
                          ARTICLE{" "}
                          <span className="ml-2 font-normal">{card.date}</span>
                        </div>

                        <h2 className="text-xl font-medium mb-3">
                          {card.title}
                        </h2>

                        <p className="text-sm text-neutral-600 mb-5">
                          {card.excerpt}
                        </p>

                        <button className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-500 text-black px-5 py-2 rounded-full text-sm font-semibold transition">
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

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setActiveIndex((i) => (i - 1 + total) % total)}
            className="p-3 rounded-full bg-black/5 hover:bg-black/10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => setActiveIndex((i) => (i + 1) % total)}
            className="p-3 rounded-full bg-black/5 hover:bg-black/10"
          >
            <ChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
}
