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

  // SVG depth layers
  const svgBackRef = useRef(null);
  const svgMidRef = useRef(null);
  const svgFrontRef = useRef(null);

  const blobBackRef = useRef(null);
  const blobMidRef = useRef(null);
  const blobFrontRef = useRef(null);

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
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      imagesRef.current.forEach((img) => {
        if (!img) return;
        gsap.fromTo(
          img,
          { y: -20 },
          {
            y: 20,
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

      ctaRefs.current.forEach((btn) => {
        if (!btn) return;
        const tl = gsap.timeline({ paused: true });
        tl.to(btn, { scale: 1.06, duration: 0.25, ease: "power2.out" });
        btn.addEventListener("mouseenter", () => tl.play());
        btn.addEventListener("mouseleave", () => tl.reverse());
      });

      const backPaths = [
        "M 200 140 C 300 60 450 130 470 230 C 500 360 360 420 250 430 C 120 440 70 330 100 230 C 130 165 165 165 200 140 Z",
        "M 220 120 C 340 50 460 150 480 250 C 510 390 350 450 245 430 C 115 400 85 315 115 245 C 145 175 185 150 220 120 Z",
      ];

      const midPaths = [
        "M 760 220 C 860 130 980 200 995 290 C 1025 410 900 460 810 455 C 690 450 640 360 660 290 C 690 235 720 250 760 220 Z",
        "M 780 200 C 880 120 1000 200 1015 280 C 1045 420 910 470 805 455 C 680 440 635 350 655 300 C 680 235 720 230 780 200 Z",
      ];

      const frontPaths = [
        "M 520 160 C 600 90 700 140 720 220 C 750 310 680 360 590 355 C 480 350 450 290 460 235 C 470 190 490 185 520 160 Z",
        "M 510 150 C 610 80 720 150 735 230 C 760 330 670 380 575 370 C 470 355 445 300 460 245 C 470 195 485 175 510 150 Z",
      ];

      gsap.set(blobBackRef.current, { attr: { d: backPaths[0] } });
      gsap.set(blobMidRef.current, { attr: { d: midPaths[0] } });
      gsap.set(blobFrontRef.current, { attr: { d: frontPaths[0] } });

      gsap.to(blobBackRef.current, {
        keyframes: backPaths.map((d) => ({ attr: { d } })),
        duration: 28,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(blobMidRef.current, {
        keyframes: midPaths.map((d) => ({ attr: { d } })),
        duration: 20,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(blobFrontRef.current, {
        keyframes: frontPaths.map((d) => ({ attr: { d } })),
        duration: 14,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* SVG BACKGROUND */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="blurBack">
            <feGaussianBlur stdDeviation="40" />
          </filter>
          <filter id="blurMid">
            <feGaussianBlur stdDeviation="26" />
          </filter>
          <filter id="blurFront">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        <g ref={svgBackRef} filter="url(#blurBack)" opacity="0.3">
          <path ref={blobBackRef} fill="rgba(59,130,246,0.3)" />
        </g>

        <g ref={svgMidRef} filter="url(#blurMid)" opacity="0.4">
          <path ref={blobMidRef} fill="rgba(99,102,241,0.3)" />
        </g>

        <g ref={svgFrontRef} filter="url(#blurFront)" opacity="0.5">
          <path ref={blobFrontRef} fill="rgba(147,197,253,0.3)" />
        </g>
      </svg>

      {/* CONTENT */}
      <section
        ref={sectionRef}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 z-10"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Services
          </h1>
          <p className="mt-3 text-base text-gray-600 max-w-xl mx-auto">
            Specialized business verticals built on execution, trust, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group rounded-xl overflow-hidden
                         bg-white/60 backdrop-blur-xl
                         border border-white/30
                         shadow-md hover:shadow-xl
                         transition-all duration-300
                         hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  ref={(el) => (imagesRef.current[index] = el)}
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-4 text-center space-y-3">
                <h2 className="text-base font-semibold text-gray-900">
                  {card.title}
                </h2>

                <div className="w-8 h-0.5 bg-blue-600 mx-auto rounded-full" />

                <p className="text-xs text-gray-700 leading-relaxed">
                  {card.description}
                </p>

                <button
                  ref={(el) => (ctaRefs.current[index] = el)}
                  className="inline-flex items-center justify-center
                             px-4 py-1.5 text-xs font-medium
                             text-blue-600
                             border border-blue-600/60
                             rounded-full
                             hover:bg-blue-600 hover:text-white
                             transition-colors duration-300"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
