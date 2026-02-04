"use client";

import { motion } from "framer-motion";

export default function FocusGallerySnap() {
  const items = [
    { id: 1, src: "/img/g1.jpg", title: "Strategy" },
    { id: 2, src: "/img/g2.jpg", title: "Design" },
    { id: 3, src: "/img/g3.jpg", title: "Technology" },
    { id: 4, src: "/img/g4.jpg", title: "Growth" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Our Project Gallery
          </h1>
          <p className="mt-4 text-base text-slate-600">
            A curated selection of our strategic, design, and technology-driven
            work
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl"
            >
              <motion.img
                src={item.src}
                alt={item.title}
                className="h-64 w-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="pointer-events-none absolute bottom-0 w-full p-5"
              >
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-200">View case study</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
