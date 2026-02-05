"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContentTwo() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const ctaRefs = useRef([]);

  const CARDS = [
    {
      id: 1,
      title: "Trading",
      description: "High-demand goods sourced and distributed with precision",
      image: "img/se1.png",
    },
    {
      id: 2,
      title: "Consulting",
      description:
        "Execution-driven business systems designed for scalable growth",
      image: "img/se2.png",
    },
    {
      id: 3,
      title: "Exports",
      description: "Compliant export operations enabling global market access",
      image: "img/se3.png",
    },
    {
      id: 4,
      title: "Manufacturing",
      description: "Lean production systems built for speed and consistency",
      image: "img/se4.png",
    },
    {
      id: 5,
      title: "Real Estate",
      description:
        "End-to-end real estate execution delivering long-term value",
      image: "img/se5.png",
    },
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Section entrance
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: isMobile ? 20 : 40 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.6 : 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: isMobile ? 24 : 50 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.45 : 0.8,
          stagger: isMobile ? 0.08 : 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // Image parallax (desktop only)
      if (!isMobile) {
        imagesRef.current.forEach((img) => {
          if (!img) return;
          gsap.fromTo(
            img,
            { y: -16 },
            {
              y: 16,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      }

      // CTA hover (desktop only)
      if (!isMobile) {
        ctaRefs.current.forEach((btn) => {
          if (!btn) return;
          const tl = gsap.timeline({ paused: true });
          tl.to(btn, { scale: 1.06, duration: 0.25 });
          btn.addEventListener("mouseenter", () => tl.play());
          btn.addEventListener("mouseleave", () => tl.reverse());
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#f8fafc]">
      {/* CORPORATE BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* CONTENT */}
      <section
        ref={sectionRef}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 z-10"
      >
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Our Services
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Specialized business verticals built on execution, trust, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group rounded-xl overflow-hidden
                         bg-white
                         border border-slate-200
                         shadow-sm hover:shadow-lg
                         transition-all duration-300"
            >
              <div className="relative h-36 sm:h-40 overflow-hidden">
                <img
                  ref={(el) => (imagesRef.current[index] = el)}
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 text-center space-y-2">
                <h2 className="text-sm font-semibold text-slate-900">
                  {card.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.description}
                </p>

                <button
                  ref={(el) => (ctaRefs.current[index] = el)}
                  className="mt-2 inline-flex items-center justify-center
                             px-4 py-1.5 text-xs font-medium
                             text-slate-700
                             border border-slate-300
                             rounded-full
                             hover:bg-slate-900 hover:text-white
                             transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
