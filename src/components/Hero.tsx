import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, Code2 } from "lucide-react";

const titles = [
  "Artificial Intelligence Engineer",
  "Full Stack Developer",
  "Unity Developer",
  "Computer Vision Engineer",
  "AI Research Enthusiast",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = deleting ? 30 : 70;
    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setTitleIndex((i) => (i + 1) % titles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-4xl mx-auto text-center z-10"
      >
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border border-cyan-400/30"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-mono tracking-widest text-cyan-300">AVAILABLE · 2026</span>
        </motion.div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-6">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="block text-white"
          >
            Jockin
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="block gradient-text"
          >
            Israel R
          </motion.span>
        </h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-10 mb-8"
        >
          <div className="text-lg md:text-2xl font-mono text-cyan-300">
            <span className="text-gray-600">&gt;&nbsp;</span>
            <span className="type-cursor">{text}</span>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 leading-relaxed mb-10"
        >
          Building intelligent systems with <span className="text-cyan-300">AI</span>,{" "}
          <span className="text-violet-300">Computer Vision</span>, and{" "}
          <span className="text-pink-300">Unity</span> to solve real-world problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 text-black"
          >
            <Code2 size={18} />
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold glass border-glow relative text-white"
          >
            <Download size={18} />
            Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold glass border-glow relative text-white"
          >
            <Mail size={18} />
            Contact
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-cyan-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
