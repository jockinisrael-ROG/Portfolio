import { motion } from "framer-motion";
import { SectionTitle } from "./ui";

const skillCategories = [
  { title: "Programming", skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"] },
  { title: "AI & LLMs", skills: ["LLMs", "Prompt Eng.", "RAG", "NLP", "AI Agents", "Whisper", "TTS"] },
  { title: "Machine Learning", skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning"] },
  { title: "Computer Vision", skills: ["OpenCV", "YOLO", "Face Detection", "Object Detection"] },
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind", "Framer Motion"] },
  { title: "Backend", skills: ["FastAPI", "Node.js", "Docker", "MongoDB", "MySQL", "Qdrant"] },
  { title: "Unity / 3D", skills: ["Unity", "C#", "VRM", "Mixamo", "Lip Sync"] },
  { title: "Mobile", skills: ["Flutter", "Firebase"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Linux", "Docker"] },
];

function Marquee({ items, direction = 1 }: { items: string[]; direction?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-4">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((s, i) => (
          <div
            key={i}
            className="glass rounded-xl px-5 py-2.5 border border-white/10 text-gray-300 text-sm font-medium shrink-0"
          >
            {s}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const allSkills = skillCategories.flatMap(c => c.skills);
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  return (
    <section id="skills" className="relative py-24 md:py-0 px-6 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto">
        <SectionTitle tag="02 · Skills" title="Tech" accent="Stack" />

        {/* Marquee */}
        <div className="-mx-6 mb-8 md:mb-5">
          <Marquee items={row1} direction={1} />
          <Marquee items={row2} direction={-1} />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 border-glow relative"
            >
              <h3 className="font-bold text-white mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
