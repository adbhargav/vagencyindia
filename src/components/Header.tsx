import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/v-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Industries", path: "#industries" },
  { name: "Our Process", path: "/process" },
  { name: "Portfolio", path: "/work" },
  { name: "Contact", path: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // ✅ FIX: scroll AFTER route + DOM update
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 py-2 ${
            scrolled
              ? "bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_-15px_rgba(19,27,42,0.15)]"
              : "bg-white/60 backdrop-blur-lg border border-white/70 shadow-[0_4px_20px_-10px_rgba(19,27,42,0.05)]"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 py-1">
            <img
              src="https://i.ibb.co/8nVFNhw8/vl.png"
              alt="V Agency"
              className="h-16 sm:h-20 w-auto object-contain transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-full border border-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path.startsWith("#") ? "/" + link.path : link.path}
                onClick={() => handleNavClick(link.path)}
                className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide text-slate-600 hover:text-[#131B2A] hover:bg-white hover:shadow-sm transition-all relative group"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/onboard"
              className="group pl-5 pr-2 py-2 rounded-full bg-[#131B2A] text-white hover:bg-slate-800 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-3 transition-all shadow-sm hover:shadow-md"
            >
              Get Onboard
              <span className="w-7 h-7 rounded-full bg-[#EB392F] flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-slate-100 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-[#131B2A] rounded-full origin-center transition-all"
            />
            <motion.span
              animate={
                isOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              className="w-3.5 h-0.5 bg-[#131B2A] rounded-full transition-all"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-[#131B2A] rounded-full origin-center transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="lg:hidden mx-4 mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-3xl p-5 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path.startsWith("#") ? "/" + link.path : link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="flex items-center justify-between py-3 px-4 rounded-2xl text-sm font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#EB392F] transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]/40" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2 mt-2 border-t border-slate-100"
              >
                <Link
                  to="/onboard"
                  onClick={() => handleNavClick("/onboard")}
                  className="w-full group py-3 px-5 rounded-full bg-[#131B2A] text-white font-bold tracking-wider uppercase text-xs flex items-center justify-between shadow-md"
                >
                  <span>Get Onboard</span>
                  <span className="w-7 h-7 rounded-full bg-[#EB392F] flex items-center justify-center text-white">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
