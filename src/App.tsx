import { Suspense, lazy, useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from "framer-motion";
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

const slideNames = [
  "Intro",
  "About",
  "Skills",
  "Experience",
  "Internships",
  "Projects",
  "GitHub",
  "Achievements",
  "Contact"
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Monitor screen size to toggle between storytelling and native layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update active slide index based on desktop scrolling position
  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const idx = Math.min(
        8,
        Math.max(0, Math.round(window.scrollY / window.innerHeight))
      );
      setActiveIndex(idx);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  // Map active index to Navbar's expected highlights
  const navbarSectionMap = ["home", "about", "skills", "experience", "internships", "projects", "github", "github", "contact"];
  const activeSection = navbarSectionMap[activeIndex];

  // Initialize hooks at top level for all 9 slides to follow React hook guidelines
  const slideTransforms = Array.from({ length: 9 }).map((_, idx) => {
    const p = 1 / 8;

    // Slide position transforms: Alternating sideways directions
    let x;
    if (idx === 0) {
      x = useTransform(smoothProgress, [0, p], ["0vw", "-100vw"]);
    } else if (idx === 8) {
      x = useTransform(smoothProgress, [7 * p, 8 * p], ["100vw", "0vw"]);
    } else {
      const prevCenter = (idx - 1) * p;
      const currentCenter = idx * p;
      const nextCenter = (idx + 1) * p;
      
      // Odd slides enter from Right / exit to Right (moving left-to-right on exit)
      // Even slides enter from Left / exit to Left
      const isRight = idx % 2 !== 0;
      const offset = isRight ? "100vw" : "-100vw";
      
      x = useTransform(
        smoothProgress,
        [prevCenter, currentCenter, nextCenter],
        [offset, "0vw", offset]
      );
    }

    // Slide opacity transforms
    let opacity;
    if (idx === 0) {
      opacity = useTransform(smoothProgress, [0, p * 0.8, p], [1, 1, 0]);
    } else if (idx === 8) {
      opacity = useTransform(smoothProgress, [7 * p, 7.2 * p, 8 * p], [0, 0, 1]);
    } else {
      const prevCenter = (idx - 1) * p;
      const currentCenter = idx * p;
      const nextCenter = (idx + 1) * p;
      
      opacity = useTransform(
        smoothProgress,
        [prevCenter, prevCenter + (p * 0.2), currentCenter, nextCenter - (p * 0.2), nextCenter],
        [0, 1, 1, 1, 0]
      );
    }

    // Slide scale transforms: Alternating front and back depth zooms!
    let scale;
    if (idx === 0) {
      // Hero zooms forward (front) as it exits
      scale = useTransform(smoothProgress, [0, p], [1, 2.0]);
    } else if (idx === 8) {
      // Last slide zooms in from the front
      scale = useTransform(smoothProgress, [7 * p, 8 * p], [1.5, 1]);
    } else {
      const prevCenter = (idx - 1) * p;
      const currentCenter = idx * p;
      const nextCenter = (idx + 1) * p;
      
      // Odd slides: Enter from BACK (0.7 -> 1), Exit to BACK (1 -> 0.7)
      // Even slides: Enter from FRONT (1.5 -> 1), Exit to FRONT (1 -> 2.0 zooming past the camera)
      const isOdd = idx % 2 !== 0;
      const startScale = isOdd ? 0.7 : 1.5;
      const endScale = isOdd ? 0.7 : 2.0;
      
      scale = useTransform(
        smoothProgress,
        [prevCenter, currentCenter, nextCenter],
        [startScale, 1, endScale]
      );
    }

    return { x, opacity, scale };
  });

  const slidesContent = [
    <Hero />,
    <About />,
    <Skills />,
    <Experience />,
    <Internships />,
    <Projects />,
    <GitHub />,
    <Achievements />,
    <div className="w-full h-full flex flex-col justify-between pt-16 md:pt-6">
      <div className="flex-1 flex items-center justify-center">
        <Contact />
      </div>
      <Footer />
    </div>
  ];

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
      <Navbar activeSection={isMobile ? undefined : activeSection} />

      {isMobile ? (
        /* Mobile View: Vertical scrolling */
        <main className="relative z-10 pt-4">
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
      ) : (
        /* Desktop/Tablet View: Horizontal/Alternating Storytelling scroll */
        <div className="relative">
          {/* Scrollable vertical spacers representing the height pages */}
          <div className="relative z-0 select-none pointer-events-none">
            <div id="home" className="h-screen" />
            <div id="about" className="h-screen" />
            <div id="skills" className="h-screen" />
            <div id="experience" className="h-screen" />
            <div id="internships" className="h-screen" />
            <div id="projects" className="h-screen" />
            <div id="github" className="h-screen" />
            <div id="achievements" className="h-screen" />
            <div id="contact" className="h-screen" />
          </div>

          {/* Fixed viewport containing horizontal sliding pages with 3D perspective */}
          <div 
            className="fixed inset-0 w-screen h-screen overflow-hidden z-10 pointer-events-none"
            style={{ perspective: "1200px" }}
          >
            <div 
              className="relative w-full h-full pointer-events-auto"
              style={{ transformStyle: "preserve-3d" }}
            >
              {slidesContent.map((component, idx) => {
                const { x, opacity, scale } = slideTransforms[idx];

                return (
                  <motion.div
                    key={idx}
                    style={{ x, opacity, scale }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center p-6 md:p-12 overflow-y-auto scrollbar-none"
                  >
                    <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center py-16 md:py-20">
                      {component}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right side page dots indicator */}
          <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
            {slideNames.map((name, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={name}
                  onClick={() => {
                    const targetY = idx * window.innerHeight;
                    window.scrollTo({ top: targetY, behavior: "smooth" });
                  }}
                  className="group flex items-center justify-end gap-3 cursor-pointer focus:outline-none"
                >
                  <span className={`text-[10px] font-mono tracking-widest uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                    isActive ? "text-cyan-300 opacity-100 font-bold" : "text-gray-500"
                  }`}>
                    {name}
                  </span>
                  <div className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                    isActive 
                      ? "bg-cyan-400 border-cyan-400 scale-125 shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
                      : "bg-transparent border-white/30 group-hover:border-white group-hover:scale-110"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Bottom Left Slide Number Overlay */}
          <div className="fixed left-8 bottom-8 z-50 hidden lg:block font-mono">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-white">0{activeIndex + 1}</span>
              <span className="text-gray-600">/</span>
              <span className="text-xs text-gray-500">09</span>
            </div>
            <div className="text-[9px] text-cyan-400/80 tracking-widest uppercase mt-1">
              {slideNames[activeIndex]}
            </div>
          </div>

          {/* Bottom Center Scroll Hint */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden lg:flex flex-col items-center gap-1.5 opacity-40 font-mono text-[9px] tracking-widest uppercase">
            <span>SCROLL TO EXPLORE STORY</span>
            <div className="w-[1px] h-6 bg-white/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-cyan-400 animate-[scan_2s_infinite_linear]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
