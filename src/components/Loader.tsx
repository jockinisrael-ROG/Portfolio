import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, ShieldAlert } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING PROTOCOLS...");

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = "hidden";
    
    let currentProgress = 0;
    let timer: NodeJS.Timeout;

    const updateLoader = () => {
      if (currentProgress >= 100) {
        setProgress(100);
        setStatusText("SYSTEM SECURE & ONLINE.");
        timer = setTimeout(() => {
          onComplete();
        }, 600); // Give user a moment to see the completed state
        return;
      }

      // Update status message based on progress range
      if (currentProgress < 15) {
        setStatusText("INITIALIZING VECTOR ENGINE...");
      } else if (currentProgress < 30) {
        setStatusText("ESTABLISHING GITHUB LINK...");
      } else if (currentProgress < 50) {
        setStatusText("COMPILING RAG CORE ARCHITECTURE...");
      } else if (currentProgress < 70) {
        setStatusText("LOADING THREE.JS SHADERS...");
      } else if (currentProgress < 85) {
        setStatusText("GENERATING 3D ENVIRONMENT MESH...");
      } else if (currentProgress < 95) {
        setStatusText("OPTIMIZING PERFORMANCE COMPILERS...");
      } else {
        setStatusText("SYNCHRONIZING PORTFOLIO...");
      }

      setProgress(currentProgress);

      // Slower increment near completion to simulate loading heavy assets
      const increment = currentProgress > 75 && currentProgress < 90 
        ? Math.floor(Math.random() * 2) + 1 
        : Math.floor(Math.random() * 6) + 3;

      currentProgress = Math.min(100, currentProgress + increment);

      // Slower updates when near 80-90%
      const nextDelay = currentProgress > 75 && currentProgress < 90 
        ? Math.floor(Math.random() * 150) + 100 
        : Math.floor(Math.random() * 60) + 40;

      timer = setTimeout(updateLoader, nextDelay);
    };

    // Start loading sequence
    updateLoader();

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Circle progress calculation
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
      }}
      className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Cyberpunk grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Cyberpunk Scan Line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none opacity-20" />

      {/* Vibrant ambient glowing lights */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl glow-spot animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl glow-spot animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl glow-spot" />

      {/* Futuristic corner highlights */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/5 pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/5 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/5 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/5 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6">
        
        {/* Core Visual System Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full glass border border-white/10"
        >
          <Cpu className="text-cyan-400 w-4 h-4 animate-[spin_8s_linear_infinite]" />
          <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase font-bold">
            NEURAL_NET_PORTFOLIO v1.0.0
          </span>
        </motion.div>

        {/* SVG Circular Gradient Progress */}
        <div className="relative w-40 h-40 mb-10 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <defs>
              <linearGradient id="loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            {/* Background Track Circle */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth="6"
              fill="transparent"
            />
            {/* Animated Active Progress Circle */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="url(#loader-gradient)"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              style={{
                filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))",
                transition: "stroke-dashoffset 0.15s ease-out"
              }}
            />
          </svg>

          {/* Central Digital Percentage */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span 
              className="text-3xl font-black font-mono text-white tracking-tighter"
              style={{
                textShadow: "0 0 15px rgba(255, 255, 255, 0.2)"
              }}
            >
              {progress}%
            </motion.span>
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mt-1">
              LOADING
            </span>
          </div>
        </div>

        {/* Console / Terminal Style Log Message */}
        <div className="w-full glass border border-white/5 rounded-2xl p-4 flex flex-col gap-2 bg-black/40 min-h-[72px] relative overflow-hidden">
          {/* Subtle glow border top */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 tracking-wider mb-1">
            <span className="flex items-center gap-1.5">
              <Terminal size={11} className="text-cyan-400" />
              <span>TERMINAL_FEED</span>
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-400/5 text-cyan-300 font-bold uppercase tracking-widest border border-cyan-400/10">
              ACTIVE
            </span>
          </div>

          <div className="text-xs font-mono font-medium text-gray-300 leading-relaxed overflow-hidden">
            <span className="text-cyan-400 mr-2">&gt;</span>
            <span className="type-cursor text-[11px] tracking-wide">{statusText}</span>
          </div>
        </div>

        {/* Security / Decryptor details */}
        <div className="mt-8 flex items-center gap-4 text-[10px] font-mono text-gray-600">
          <div className="flex items-center gap-1">
            <ShieldAlert size={10} className="text-amber-500/50" />
            <span>SECURE LINK ENCRYPTED</span>
          </div>
          <span>|</span>
          <span>KARUNYA AI ENG</span>
        </div>

      </div>
    </motion.div>
  );
}
