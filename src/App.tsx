import { Suspense, lazy, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Internships } from "./components/Internships";
import { Projects } from "./components/Projects";
import { GitHub } from "./components/GitHub";
import { Achievements } from "./components/Achievements";
import { Contact, Footer } from "./components/Contact";
import { CustomCursor } from "./components/ui";
import Loader from "./components/Loader";

const AnimatedBackground = lazy(() => import("./components/AnimatedBackground"));

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

function SectionReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Noise overlay */}
      <div className="noise" />

      {/* Animated canvas background */}
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><Skills /></SectionReveal>
        <SectionReveal><Experience /></SectionReveal>
        <SectionReveal><Internships /></SectionReveal>
        <SectionReveal><Projects /></SectionReveal>
        <SectionReveal><GitHub /></SectionReveal>
        <SectionReveal><Achievements /></SectionReveal>
        <SectionReveal><Contact /></SectionReveal>
        <Footer />
      </main>
    </div>
  );
}
