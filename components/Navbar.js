export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/img/logo.jpg"
              alt="logo"
              className="h-9 w-auto object-contain"
            />
          </a>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Services
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Projects
          </a>

          {/* CTA */}
          <a
            href="#"
            className="ml-2 inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
