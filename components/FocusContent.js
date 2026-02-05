"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Content() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    /* IMAGE PARALLAX */
    gsap.fromTo(
      imageRef.current,
      { y: 0 },
      {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    /* TEXT FADE + SLIDE */
    gsap.fromTo(
      textRef.current.children,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <main className="bg-blue-600 mt-12 mb-12">
      <section className="min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-stretch">
          {/* LEFT CONTENT */}
          <div
            ref={textRef}
            className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 text-white space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Deepshikha & Swati Corporation
            </h1>

            <div className="w-24 h-1 bg-white/80 rounded-full"></div>

            <h2 className="text-xl md:text-2xl font-semibold text-blue-100">
              Where Vision Meets Execution
            </h2>

            <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-xl">
              We engineer outcomes. Trading, consulting, export, manufacturing,
              development—built for scale, speed, and precision. Equal
              ownership. Absolute trust. Relentless execution. We build ventures
              that last.
            </p>

            <div className="pt-6">
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                Call Us Today
                <span className="text-lg">📞</span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[320px] md:min-h-screen overflow-hidden">
            <img
              ref={imageRef}
              src="img/s1.jpg"
              alt="Business collaboration"
              className="absolute inset-0 w-full h-[120%] object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-white/20"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
