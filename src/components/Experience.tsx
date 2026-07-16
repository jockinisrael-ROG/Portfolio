import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionTitle } from "./ui";
import { Brain, Gamepad2, Eye, Code2 } from "lucide-react";

const experiences = [
  {
    icon: Brain,
    title: "AI Developer",
    color: "from-cyan-400 to-blue-500",
    bullets: [
      "Built AI assistants using Large Language Models",
      "Developed RAG pipelines",
      "Integrated Whisper speech recognition",
      "Implemented Text-to-Speech systems",
      "Created conversational AI experiences",
    ],
  },
  {
    icon: Gamepad2,
    title: "Unity Developer",
    color: "from-violet-400 to-pink-500",
    bullets: [
      "Created interactive AI avatars",
      "Implemented VRM avatars & lip-sync",
      "Integrated Python backend with Unity",
      "Built desktop AI assistants",
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    color: "from-emerald-400 to-cyan-500",
    bullets: [
      "Built face detection systems",
      "Developed YOLO object detection",
      "Created real-time monitoring systems",
      "Integrated AI vision with Unity",
    ],
  },
  {
    icon: Code2,
    title: "Full Stack",
    color: "from-pink-400 to-orange-400",
    bullets: [
      "Built responsive web applications",
      "Developed FastAPI backends",
      "Integrated AI services into web platforms",
    ],
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 80%", "end 20%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={sectionRef} className="relative py-12 md:py-0 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        <SectionTitle tag="03 · Experience" title="Professional" accent="Journey" />

        {/* Mobile Vertical Timeline */}
        <div className="relative mt-12 md:hidden">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-violet-500 to-pink-500"
          />

          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className="relative mb-12"
            >
              {/* Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="absolute left-4 top-6 -translate-x-1/2 z-10"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                  <exp.icon className="text-black" size={18} />
                </div>
              </motion.div>

              <div className="ml-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -3 }}
                  className="glass rounded-2xl p-6 border-glow relative"
                >
                  <h3 className="text-xl font-bold gradient-text inline-block mb-4">{exp.title}</h3>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: bi * 0.06 }}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className={`shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color}`} />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:block relative mt-8">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-pink-500/20 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-4 gap-5 relative z-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 border-glow relative flex flex-col justify-between h-[360px]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shrink-0`}>
                      <exp.icon className="text-black" size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">{exp.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-[13px] text-gray-300 leading-normal">
                        <span className={`shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-right mt-4">
                  0{i + 1} // Phase
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
