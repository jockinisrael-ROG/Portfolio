import { motion } from "framer-motion";
import { SectionTitle, Counter } from "./ui";
import { GraduationCap, MapPin, Brain, Cpu, Code } from "lucide-react";

const roles = [
  { icon: Brain, title: "AI Engineer", desc: "LLMs · RAG · Agents" },
  { icon: Cpu, title: "CV Engineer", desc: "YOLO · OpenCV" },
  { icon: Code, title: "Full Stack", desc: "React · FastAPI" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-0 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        <SectionTitle tag="01 · About Me" title="The Engineer" accent="Behind the Code" />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass rounded-2xl p-8 border-glow relative">
              <div className="text-xs font-mono text-cyan-300 tracking-widest uppercase mb-4">About</div>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                I am an <span className="text-cyan-300 font-semibold">AI Engineering student</span> passionate
                about building intelligent systems. I create conversational AI, computer vision
                apps, Unity experiences, and full-stack web applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My work combines <span className="text-violet-300">AI</span>, <span className="text-pink-300">ML</span>, 
                LLMs, Computer Vision, and Software Engineering to build practical products.
              </p>
            </div>

            {/* Education */}
            <div className="glass rounded-2xl p-6 border-glow relative">
              <div className="text-xs font-mono text-cyan-300 tracking-widest uppercase mb-4">Education</div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                  <GraduationCap className="text-black" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Karunya Institute of Technology</h3>
                  <p className="text-cyan-300 font-semibold text-sm">B.Tech · AI Engineering</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <MapPin size={12} /> Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Roles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {roles.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: -4 }}
                className="glass rounded-xl p-5 border-glow relative flex items-center gap-4 cursor-default"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <r.icon className="text-cyan-300" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">{r.title}</div>
                  <div className="text-xs text-gray-400">{r.desc}</div>
                </div>
              </motion.div>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-6">
              <Counter target={8} suffix="+" label="Projects" />
              <Counter target={42} suffix="+" label="Technologies" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
