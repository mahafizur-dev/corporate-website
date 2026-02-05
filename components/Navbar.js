"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 🔑 Auto-close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/img/logo.jpg"
            alt="logo"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 relative">
          <a
            href="/"
            className={`nav-link nav-hover ${isActive("/") ? "active" : ""}`}
          >
            Home
          </a>

          <a
            href="/about"
            className={`nav-link nav-hover ${isActive("/about") ? "active" : ""}`}
          >
            About
          </a>

          {/* Services Mega Menu */}
          <div className="relative group">
            <button
              className={`nav-link nav-hover flex items-center gap-1 ${
                isActive("/services") ? "active" : ""
              }`}
            >
              Services
              {/* <span className="text-xs">▾</span> */}
            </button>

            {/* <div className="absolute left-1/2 top-full mt-6 w-screen max-w-5xl -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 grid grid-cols-3 gap-8">
                <div>
             div     <h4 className="mega-title">Technology</h4>
                  <a href="/services/web" className="mega-link">
                    Web Development
                  </a>
                  <a href="/services/mobile" className="mega-link">
                    Mobile Applications
                  </a>
                  <a href="/services/software" className="mega-link">
                    Custom Software
                  </a>
                </div>

                <div>
                  <h4 className="mega-title">AI & Automation</h4>
                  <a href="/services/ai-chatbots" className="mega-link">
                    AI Chatbots
                  </a>
                  <a href="/services/automation" className="mega-link">
                    Business Automation
                  </a>
                  <a href="/services/crm" className="mega-link">
                    CRM Integration
                  </a>
                </div>

                <div>
                  <h4 className="mega-title">Growth & Branding</h4>
                  <a href="/services/branding" className="mega-link">
                    Brand Identity
                  </a>
                  <a href="/services/marketing" className="mega-link">
                    Digital Marketing
                  </a>
                  <a href="/services/ui-ux" className="mega-link">
                    UI/UX Design
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          <a
            href="/projects"
            className={`nav-link nav-hover ${isActive("/projects") ? "active" : ""}`}
          >
            Projects
          </a>

          <a
            href="/contact"
            className="ml-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md border border-gray-300"
        >
          ☰
        </button>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            onClick={() => setOpen(false)}
            className="self-end mb-6 text-xl"
          >
            ✕
          </button>

          <div className="flex flex-col gap-1">
            <MobileLink href="/" label="Home" active={isActive("/")} />
            <MobileLink
              href="/about"
              label="About"
              active={isActive("/about")}
            />
            <MobileLink
              href="/services"
              label="Services"
              active={isActive("/services")}
            />
            <MobileLink
              href="/projects"
              label="Projects"
              active={isActive("/projects")}
            />
          </div>

          <a
            href="/contact"
            className="mt-auto block text-center rounded-md bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .nav-link {
          position: relative;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          padding-bottom: 4px;
        }

        .nav-hover::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #111827;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }

        .nav-hover:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
        }

        .nav-link.active {
          color: #111827;
        }

        .mega-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.75rem;
        }

        .mega-link {
          display: block;
          font-size: 0.875rem;
          color: #4b5563;
          padding: 0.35rem 0.5rem;
          border-radius: 6px;
          transition:
            background 0.2s,
            color 0.2s,
            transform 0.2s;
        }

        .mega-link:hover {
          background: #f3f4f6;
          color: #111827;
          transform: translateX(4px);
        }
      `}</style>
    </header>
  );
}

/* Mobile Link Component */
function MobileLink({ href, label, active }) {
  return (
    <a
      href={href}
      className={`px-4 py-3 rounded-md text-sm transition ${
        active
          ? "bg-gray-100 border-l-4 border-gray-900 font-semibold text-gray-900"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      {label}
    </a>
  );
}
