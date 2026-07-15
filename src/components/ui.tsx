import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function SectionTitle({ tag, title, accent }: { tag: string; title: string; accent?: string }) {
  return (
    <div className="mb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full glass border border-cyan-500/20"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase">{tag}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
      >
        {title} {accent && <span className="gradient-text">{accent}</span>}
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />
    </div>
  );
}

export function Counter({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, target, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
      className="glass rounded-xl p-5 border-glow relative cursor-default"
    >
      <div className="text-3xl font-black gradient-text font-mono tabular-nums">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="mt-1 text-[10px] text-gray-500 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hoveringRef = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotPos.current = { x: e.clientX, y: e.clientY };
      const t = e.target as HTMLElement;
      hoveringRef.current = !!t.closest("a, button, [data-hover]");
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      ringPos.current.x += (dotPos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (dotPos.current.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        const size = hoveringRef.current ? 40 : 20;
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.borderColor = hoveringRef.current ? "rgba(139,92,246,0.8)" : "rgba(34,211,238,0.6)";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="hidden md:block fixed rounded-full border pointer-events-none z-[9999] mix-blend-difference transition-[width,height] duration-200" />
      <div ref={dotRef} className="hidden md:block fixed w-1 h-1 rounded-full bg-cyan-400 pointer-events-none z-[9999]" />
    </>
  );
}
