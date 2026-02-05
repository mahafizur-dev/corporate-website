"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContentTwo() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const CARDS = [
    {
      id: 1,
      title: "Trading",
      description: "High-demand goods sourced and distributed with precision",
    },
    {
      id: 2,
      title: "Consulting",
      description:
        "Execution-driven business systems designed for scalable growth",
    },
    {
      id: 3,
      title: "Exports",
      description: "Compliant export operations enabling global market access",
    },
    {
      id: 4,
      title: "Real Estate",
      description:
        "End-to-end real estate execution delivering long-term value",
    },
    {
      id: 5,
      title: "Manufacturing",
      description: "Lean production systems built for speed and consistency",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Cards stagger
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full bg-[#F9F7F6] text-[#0A2540]">
      <section ref={sectionRef} className="w-full px-4 sm:px-8 py-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-14 text-center">
          <h1 className="text-xl sm:text-2xl font-semibold">Our Services</h1>

          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Core business verticals executed with precision, discipline, and
            long-term accountability.
          </p>

          <div className="w-12 h-[1px] bg-slate-300 mx-auto mt-5" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* MOBILE: 2–2–1 GRID */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            {CARDS.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`bg-white border border-slate-200 flex flex-col
                  ${
                    index === CARDS.length - 1
                      ? "col-span-2 max-w-[320px] mx-auto"
                      : ""
                  }`}
              >
                {/* Number */}
                <div className="px-4 pt-5">
                  <div className="w-8 h-8 border border-slate-300 flex items-center justify-center text-[11px] font-semibold text-slate-700">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 pt-3 space-y-2 flex flex-col flex-1 text-left">
                  <h2 className="text-[12px] font-semibold uppercase tracking-wide">
                    {card.title}
                  </h2>

                  <p className="text-[12px] text-slate-600 leading-relaxed flex-1">
                    {card.description}
                  </p>

                  <span className="text-[12px] font-medium">
                    View details →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP: CORPORATE GRID */}
          <div className="hidden sm:grid grid-cols-3 gap-8">
            {CARDS.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white border border-slate-200 flex flex-col"
              >
                {/* Number */}
                <div className="px-5 pt-6">
                  <div className="w-9 h-9 border border-slate-300 flex items-center justify-center text-xs font-semibold text-slate-700">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-4 space-y-2 flex flex-col flex-1 text-left">
                  <h2 className="text-sm font-semibold uppercase tracking-wide">
                    {card.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {card.description}
                  </p>

                  <span className="text-sm font-medium">View details →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
