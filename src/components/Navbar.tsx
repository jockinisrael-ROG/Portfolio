import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#internships", label: "Internships" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(l => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all ${
          scrolled ? "bg-black/60" : ""
        }`}>
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 flex items-center justify-center font-bold text-black font-mono pulse-glow">
              J
              <div className="absolute inset-0 rounded-xl border border-white/30" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold tracking-wide">Jockin Israel R</div>
              <div className="text-[10px] text-cyan-300 font-mono tracking-widest">AI ENGINEER</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.href.slice(1) ? "text-cyan-300" : "text-gray-300 hover:text-white"
                }`}
              >
                {l.label}
                {active === l.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/5 border border-cyan-400/30 rounded-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="relative px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-black hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-shadow"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
