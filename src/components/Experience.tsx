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
    <section id="experience" ref={sectionRef} className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle tag="03 · Experience" title="Professional" accent="Journey" />

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-violet-500 to-pink-500"
          />

          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`relative mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
            >
              {/* Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                  <exp.icon className="text-black" size={18} />
                </div>
              </motion.div>

              <div className={`ml-16 md:ml-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12 md:[direction:ltr]"}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -3 }}
                  className="glass rounded-2xl p-6 border-glow relative"
                >
                  <h3 className="text-xl font-bold gradient-text inline-block mb-4">{exp.title}</h3>
                  <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: bi * 0.06 }}
                        className={`flex items-start gap-2 text-sm text-gray-300 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}
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
      </div>
    </section>
  );
}
