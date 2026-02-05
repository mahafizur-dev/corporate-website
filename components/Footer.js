import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <footer className="bg-[#1f1f1f] text-white py-14">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Company */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Our Company</h2>

          <ul className="space-y-2 text-orange-500 text-base">
            {[
              "Who We Are",
              "About Company",
              "Services We Provide",
              "What We Have Done",
            ].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Contact Details</h2>

          <div className="space-y-2 text-orange-500 text-base">
            <p>Sema, Chetganj, Varanasi, Uttar Pradesh</p>
            <p>+91 79855-55281</p>
            <p>info@example.com</p>
          </div>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center
                  bg-gray-700 hover:bg-gray-600
                  transition-colors duration-200 cursor-pointer"
                >
                  <Icon size={14} />
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2026 Deepshikha & Swati Corporation. All rights reserved.
      </div>
    </footer>
  );
}
