export default function Projects() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div className="relative order-2 md:order-1">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/img/g3.jpg"
              alt="Our Projects"
              className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <span className="block text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
            What We Do
          </span>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            Our Projects
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Our projects reflect a disciplined approach to execution, strategy,
            and long-term value creation. Each initiative is designed with a
            clear objective, measurable outcomes, and operational precision.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            From consulting-driven solutions to trading, exports, and
            development-focused ventures, we ensure every project aligns with
            compliance standards and business sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}
