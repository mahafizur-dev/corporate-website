"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function FocusGallerySnap() {
  const items = [
    { id: 1, src: "/img/g1.jpg", title: "Strategy" },
    { id: 2, src: "/img/g2.jpg", title: "Design" },
    { id: 3, src: "/img/g3.jpg", title: "Technology" },
    { id: 4, src: "/img/g4.jpg", title: "Growth" },
  ];

  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const indexRef = useRef(0);
  const [activeImage, setActiveImage] = useState(null);

  /* 📱 MOBILE AUTO SLIDE */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    const slides = slider.children;
    if (!slides.length) return;

    const slideWidth = slides[0].offsetWidth;

    const start = () => {
      intervalRef.current = setInterval(() => {
        indexRef.current = (indexRef.current + 1) % items.length;
        slider.scrollTo({
          left: slideWidth * indexRef.current,
          behavior: "smooth",
        });
      }, 3200);
    };

    const stop = () => clearInterval(intervalRef.current);

    start();
    slider.addEventListener("touchstart", stop);
    slider.addEventListener("touchend", start);

    return () => {
      stop();
      slider.removeEventListener("touchstart", stop);
      slider.removeEventListener("touchend", start);
    };
  }, [items.length]);

  return (
    <section className="w-full bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Our Project Gallery
          </h1>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Swipe or tap to explore
          </p>
        </div>

        {/* 📱 MOBILE SLIDER */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1"
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="snap-center min-w-[85%]"
                onClick={() => setActiveImage(item)}
              >
                <div className="rounded-xl overflow-hidden bg-white shadow-md active:scale-[0.98] transition">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-[45vw] max-h-64 w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-base font-medium">{item.title}</h3>
                    <p className="text-xs text-slate-500">
                      Tap to view fullscreen
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🖥️ DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow hover:shadow-xl transition"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🔍 FULLSCREEN PREVIEW */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage.src}
              alt={activeImage.title}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-h-[85vh] w-full max-w-md rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
