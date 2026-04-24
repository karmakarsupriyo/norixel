import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { BRAND_NAME } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "Services", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-300 ${
            scrolled ? "glass px-6 py-3" : "bg-transparent px-2"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="font-extrabold text-2xl tracking-tighter text-norixel-navy">
              NORIXEL
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-norixel-navy transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="bg-norixel-navy text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all hover:shadow-lg hover:shadow-norixel-navy/20 active:scale-95">
              Start Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-norixel-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full mt-2 px-6 md:hidden"
          >
            <div className="glass rounded-3xl p-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="bg-norixel-navy text-white w-full py-3 rounded-xl font-medium mt-2">
                Start Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
