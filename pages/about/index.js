
export default function About() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Text Content */}
        <div>
          <span className="block text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
            About Us
          </span>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Deepshikha and Swati Corporation was founded as a strategic alliance
            between two visionary partners — <strong>Smt. Swati Singh</strong>{" "}
            and
            <strong> Smt. Deep Sikha Rai</strong> — driven by a shared mission
            to build an organization that is agile, lawful, and outcome-focused.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            From day one, the company has operated with clarity, equal
            ownership, and disciplined execution. Our journey spans trading,
            consulting, exports, manufacturing, and development — each
            initiative led with precision, accountability, and long-term
            purpose.
          </p>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/img/g4.jpg"
              alt="Deepshikha and Swati Corporation"
              className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

