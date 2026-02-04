export default function Content() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 shadow-2xl">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
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

            <div className="pt-4">
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                Call Us Today
                <span className="text-lg">📞</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="img/s1.jpg"
              alt="Business collaboration"
              className="rounded-2xl shadow-xl object-cover w-full h-[320px] md:h-[420px]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
