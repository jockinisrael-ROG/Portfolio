import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SectionTitle } from "./ui";
import {
  GraduationCap,
  Bot,
  Gamepad2,
  Eye,
  FileText,
  Mic,
  Cpu,
  Search,
  ExternalLink,
  Filter,
  Sparkles,
  ChevronDown,
  Heart
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Project Data with specific custom icons, categories, tags, features, and links
const projects = [
  {
    num: "01",
    title: "AI Tutor Assistant",
    category: "Artificial Intelligence | EdTech | RAG",
    tags: ["AI", "NLP", "Unity", "Full Stack"],
    desc: "An AI-powered tutoring platform that reads PDF study materials, generates intelligent MCQs, answers questions using Retrieval-Augmented Generation (RAG), and interacts with students through an animated Unity avatar with voice support.",
    features: [
      "PDF Question Answering",
      "MCQ Generation",
      "Voice Interaction",
      "Speech Recognition",
      "Text-to-Speech",
      "Unity Avatar",
      "Student Performance Reports",
      "Semantic Search"
    ],
    tech: ["Python", "FastAPI", "Unity", "Qdrant", "Whisper", "Docker", "LLMs", "RAG"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-violet-500/20",
    glow: "rgba(34, 211, 238, 0.4)",
    icon: GraduationCap,
    github: "https://github.com/jockinisrael-ROG/Tutor-RBT",
    demo: ""
  },
  {
    num: "02",
    title: "Alpha AI Assistant",
    category: "Conversational AI",
    tags: ["AI", "NLP"],
    desc: "A personal desktop AI assistant capable of natural conversations using local Large Language Models, memory, speech recognition, text-to-speech, and document understanding.",
    features: [
      "Voice Assistant",
      "Long-Term Memory",
      "Local AI Models",
      "Document Chat",
      "RAG Pipeline",
      "Personal Knowledge Base",
      "Natural Conversations"
    ],
    tech: ["Python", "FastAPI", "Whisper", "Edge-TTS", "Docker", "LLMs"],
    gradient: "from-violet-500/20 via-indigo-500/10 to-purple-500/20",
    glow: "rgba(139, 92, 246, 0.4)",
    icon: Bot,
    github: "https://github.com/jockinisrael-ROG/Personal-LLM",
    demo: ""
  },
  {
    num: "03",
    title: "PDF Intelligence System",
    category: "Artificial Intelligence",
    tags: ["AI", "NLP"],
    desc: "A document intelligence platform that extracts knowledge from PDF files, creates vector embeddings, and answers user questions using semantic search powered by Large Language Models.",
    features: [
      "PDF Parsing",
      "Semantic Search",
      "Vector Embeddings",
      "AI Question Answering",
      "Knowledge Retrieval"
    ],
    tech: ["Python", "FastAPI", "Qdrant", "Sentence Transformers", "LLMs"],
    gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
    glow: "rgba(245, 158, 11, 0.4)",
    icon: FileText,
    github: "https://github.com/jockinisrael-ROG/Truth-Lens",
    demo: ""
  },
  {
    num: "04",
    title: "AI Voice Pipeline",
    category: "Speech AI",
    tags: ["AI", "NLP"],
    desc: "A complete AI speech pipeline supporting speech recognition, voice activity detection, text generation, and natural speech synthesis for real-time AI conversations.",
    features: [
      "Speech-to-Text",
      "Text-to-Speech",
      "Voice Activity Detection",
      "Real-Time Audio Processing",
      "AI Conversations"
    ],
    tech: ["Python", "Whisper", "Edge-TTS", "FastAPI"],
    gradient: "from-blue-500/20 via-sky-500/10 to-indigo-500/20",
    glow: "rgba(59, 130, 246, 0.4)",
    icon: Mic,
    github: "https://github.com/jockinisrael-ROG/simple-ai-chat",
    demo: ""
  },
  {
    num: "05",
    title: "Smart Voting & Attendance System",
    category: "Computer Vision | Artificial Intelligence",
    tags: ["AI", "Computer Vision", "Python"],
    desc: "A smart voting and automated attendance monitoring platform integrating face recognition algorithms for secure verification.",
    features: [
      "Face Recognition",
      "Automated Attendance",
      "Secure Voting Gateways",
      "Real-Time Processing",
      "User Authentication"
    ],
    tech: ["Python", "OpenCV", "Face-Recognition", "SQLite", "FastAPI"],
    gradient: "from-red-500/20 via-orange-500/10 to-amber-500/20",
    glow: "rgba(239, 68, 68, 0.4)",
    icon: Eye,
    github: "https://github.com/jockinisrael-ROG/smart-voting-and-attendance-system",
    demo: ""
  },
  {
    num: "06",
    title: "Project EVA",
    category: "Artificial Intelligence | Computer Vision",
    tags: ["AI", "Computer Vision", "Python"],
    desc: "An advanced AI vision and object detection assistant designed to analyze real-time environments and interact dynamically with surrounding systems.",
    features: [
      "Real-Time Object Detection",
      "Environment Scanning",
      "Interactive Alerts",
      "Multi-Object Tracking",
      "Deep Learning Inference"
    ],
    tech: ["Python", "OpenCV", "YOLOv8", "PyTorch", "CUDA"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    glow: "rgba(16, 185, 129, 0.4)",
    icon: Bot,
    github: "https://github.com/georgecpwajeff-stack/PROJECT-EVA",
    demo: ""
  },
  {
    num: "07",
    title: "Project Beta",
    category: "Full Stack Development | Team Collaboration",
    tags: ["Full Stack", "JavaScript", "React"],
    desc: "A collaborative full-stack web application designed for agile team workflows, task tracking, and seamless synchronization of engineering milestones.",
    features: [
      "Agile Task Board",
      "Team Workspace",
      "Milestone Tracking",
      "Real-time Collaboration",
      "Developer Dashboard"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "TailwindCSS"],
    gradient: "from-purple-500/20 via-pink-500/10 to-rose-500/20",
    glow: "rgba(236, 72, 153, 0.4)",
    icon: Cpu,
    github: "https://github.com/georgecpwajeff-stack/Beta",
    demo: ""
  },
  {
    num: "08",
    title: "Blood Bank Management",
    category: "Full Stack Development | Database",
    tags: ["Full Stack", "TypeScript", "Database"],
    desc: "A comprehensive blood donation platform featuring donor registration, search and request matchmakers, inventory management, and automated alerts.",
    features: [
      "Donor Registration & Matching",
      "Live Blood Requests Tracker",
      "Inventory Management",
      "Automated Email Alerts",
      "Admin Control Panel"
    ],
    tech: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    gradient: "from-rose-500/20 via-red-500/10 to-orange-500/20",
    glow: "rgba(244, 63, 94, 0.4)",
    icon: Heart,
    github: "https://github.com/jockinisrael-ROG/Blood-Bank-Management",
    demo: ""
  }
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring settings for smooth physics
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);
  
  const [isHovered, setIsHovered] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative coordinates between -0.5 and 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
    
    // Spotlight follow cursor position in CSS custom properties
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const IconComponent = project.icon;

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      style={{
        perspective: 1000,
      }}
      className="w-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-full glass border-glow rounded-3xl p-6 md:p-8 overflow-hidden group cursor-default transition-all duration-300 hover:border-white/20 select-none flex flex-col justify-between"
        data-hover
      >
        {/* Futuristic Spotlight Glow */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 card-spotlight"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${project.glow.replace("0.4", "0.15")}, transparent 85%)`
          }}
        />
        
        {/* Ambient Glow backing */}
        <div className={`absolute -inset-px bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur transition-opacity duration-500 pointer-events-none`} />

        {/* Diagonal Tech corners */}
        <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-white/5 pointer-events-none rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-white/5 pointer-events-none rounded-bl-3xl" />
        
        {/* Top edge glowing highlights */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full justify-between gap-6" style={{ transform: "translateZ(30px)" }}>
          <div>
            {/* Header: Project Badge and Icon */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-bold uppercase">
                  PROJECT · {project.num}
                </span>
                <span className="text-[11px] text-gray-500 font-medium">
                  {project.category}
                </span>
              </div>
              <motion.div
                animate={{
                  rotate: isHovered ? [0, -5, 5, 0] : 0,
                  scale: isHovered ? 1.08 : 1,
                  boxShadow: isHovered ? `0 0 20px ${project.glow}` : "0 0 0px rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))`,
                  borderColor: isHovered ? project.glow : "rgba(255, 255, 255, 0.1)"
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                <IconComponent className="w-6 h-6 text-white relative z-10" />
              </motion.div>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {project.desc}
            </p>

            {/* Key Features Accordion */}
            <div className="mb-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFeatures(!showFeatures);
                }}
                className="flex items-center gap-2 text-xs font-semibold text-cyan-400/90 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
              >
                <span>Key Features</span>
                <motion.div
                  animate={{ rotate: showFeatures ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: showFeatures ? "auto" : 0,
                  opacity: showFeatures ? 1 : 0,
                  marginTop: showFeatures ? 12 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="grid grid-cols-2 gap-2 text-xs text-gray-400 bg-white/5 rounded-xl p-4 border border-white/5">
                  {project.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/85 shadow-[0_0_6px_#22d3ee]" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-md border border-white/5 bg-white/5 text-gray-300 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-all duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto w-full">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold font-mono relative overflow-hidden group/github text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 cursor-pointer shadow-[0_0_12px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/github:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              <GithubIcon className="w-4 h-4 text-black" />
              <span>VIEW REPOSITORY</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "AI", "Machine Learning", "Computer Vision", "Unity", "IoT", "Full Stack", "NLP"];

  const filteredProjects = projects.filter((project) => {
    // Check filter first
    const matchesFilter =
      selectedFilter === "All" || project.tags.includes(selectedFilter);

    // Check search query next
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      project.title.toLowerCase().includes(query) ||
      project.desc.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.tech.some((t) => t.toLowerCase().includes(query)) ||
      project.features.some((f) => f.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Cyberpunk ambient glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl glow-spot" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl glow-spot" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle tag="05 · Projects" title="Featured" accent="Work" />

        {/* Search & Filters Controller */}
        <div className="flex flex-col gap-6 mb-12 max-w-3xl mx-auto">
          {/* Search bar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-2xl blur-lg opacity-50 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative flex items-center glass rounded-2xl border border-white/10 group-focus-within:border-cyan-500/40 transition-colors">
              <Search className="w-5 h-5 text-gray-500 ml-4 group-focus-within:text-cyan-400 transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by title, description, features, or tech stack..."
                className="w-full bg-transparent border-none py-4 px-4 text-white placeholder-gray-500 focus:outline-none text-sm font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 text-xs font-mono font-bold text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Technology Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span className="font-mono uppercase font-bold tracking-wider">Filter:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide border transition-all duration-300 cursor-pointer shrink-0 ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-black border-transparent shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                    : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:border-white/10 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="md:max-h-[55vh] overflow-y-auto pr-2 scrollbar-none">
          <motion.div 
            layout 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.num} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center py-20 glass rounded-3xl border border-white/5 max-w-xl mx-auto"
          >
            <Sparkles className="w-8 h-8 mx-auto text-gray-600 mb-3" />
            <h4 className="text-lg font-bold text-gray-400 mb-1">No Projects Found</h4>
            <p className="text-sm text-gray-500">
              Try adjusting your search query or selecting a different technology filter.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
