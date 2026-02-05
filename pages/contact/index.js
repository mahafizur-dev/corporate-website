export default function Contact() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>

          <div className="w-14 h-1 bg-orange-500 mb-6"></div>

          <p className="text-gray-600 text-lg mb-4">
            Let’s turn your vision into execution.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Whether you’re exploring trading, development, or strategic growth —
            we offer direct, actionable insights to help you move fast and
            smart.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl bg-white">
          {/* Form */}
          <div className="p-10 md:p-14">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Send Us A Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
              >
                Contact Us
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 p-10 md:p-14">
            <h3 className="text-2xl font-semibold text-gray-900 mb-10">
              Contact Info
            </h3>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Call Us</p>
                  <p className="text-gray-600 text-sm">+91 79855-55281</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  ✉️
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Our Email</p>
                  <p className="text-gray-600 text-sm">info@example.com</p>
                  <p className="text-gray-600 text-sm">info@example.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Our Location</p>
                  <p className="text-gray-600 text-sm">
                    Sema, Chetganj,
                    <br />
                    Varanasi, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  ⏰
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Working Hours</p>
                  <p className="text-gray-600 text-sm">
                    Mon–Fri: 10AM–5PM
                    <br />
                    Sat–Sun: 10AM–1PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-5">
                Follow Us
              </h4>

              <div className="flex gap-3">
                {["f", "t", "g+", "in", "ig"].map((item, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center cursor-pointer hover:bg-orange-600 transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
