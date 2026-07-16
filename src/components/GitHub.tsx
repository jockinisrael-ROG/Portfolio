import { motion } from "framer-motion";
import { SectionTitle } from "./ui";
import { GitBranch, Star, Flame, BookOpen, Users, ArrowUpRight } from "lucide-react";

const repos = [
  { name: "Project-Alpha", desc: "A Python project showcasing intelligent algorithms.", lang: "Python", stars: 1 },
  { name: "Truth-Lens", desc: "TypeScript application built to analyze and process dataset verification.", lang: "TypeScript", stars: 0 },
];

const topLangs = [
  { name: "Python", pct: 45, color: "#3572A5" },
  { name: "TypeScript", pct: 20, color: "#2b7489" },
  { name: "Java", pct: 15, color: "#b07219" },
  { name: "C#", pct: 12, color: "#178600" },
  { name: "C", pct: 8, color: "#555555" },
];

function Heatmap() {
  const cells: number[] = [];
  for (let i = 0; i < 210; i++) {
    const r = Math.random();
    // Adjusted to generate a sparse heatmap matching the 64 contributions screenshot.
    if (r < 0.92) cells.push(0);
    else if (r < 0.96) cells.push(1);
    else if (r < 0.99) cells.push(2);
    else cells.push(3);
  }
  const intensity = ["bg-white/5", "bg-emerald-500/30", "bg-emerald-500/60", "bg-emerald-400"];
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-1">
      {cells.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.002 }}
          className={`w-2.5 h-2.5 rounded-sm ${intensity[c]}`}
        />
      ))}
    </div>
  );
}

export function GitHub() {
  return (
    <section id="github" className="relative py-24 md:py-0 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <SectionTitle tag="06 · GitHub" title="Open" accent="Source" />

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Stats + Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-2xl p-6 border-glow relative"
          >
            {/* GitHub Profile Info Header */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center overflow-hidden">
                    <Users className="text-gray-400" size={20} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-md font-bold text-white">Jockin Israel R</h4>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase tracking-wider">PRO</span>
                  </div>
                  <a 
                    href="https://github.com/jockinisrael-ROG" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1"
                  >
                    @jockinisrael-ROG <ArrowUpRight size={10} />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { icon: BookOpen, val: "7", label: "Repos", color: "text-cyan-300" },
                { icon: Star, val: "7", label: "Stars", color: "text-amber-300" },
                { icon: Users, val: "0", label: "Followers", color: "text-pink-300" },
                { icon: GitBranch, val: "1", label: "Following", color: "text-violet-300" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <s.icon className={`mx-auto mb-2 ${s.color}`} size={20} />
                  <div className="text-2xl font-bold text-white font-mono">{s.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-3 flex items-center gap-1">
              <Flame size={10} /> 64 contributions in the last year
            </div>
            <div className="overflow-x-auto pb-2">
              <Heatmap />
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 border-glow relative"
          >
            <h3 className="font-bold text-white mb-4">Top Languages</h3>
            <div className="space-y-3">
              {topLangs.map((l, i) => (
                <div key={l.name}>
                  <div className="flex items-center justify-between mb-1 text-xs">
                    <span className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                      {l.name}
                    </span>
                    <span className="text-gray-500 font-mono">{l.pct}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ background: l.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Repos */}
        <div className="grid md:grid-cols-2 gap-4 mt-5">
          {repos.map((r, i) => (
            <motion.a
              key={r.name}
              href={`https://github.com/jockinisrael-ROG/${r.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-4 border-glow relative cursor-pointer block"
              data-hover
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <BookOpen size={13} className="text-gray-500" />
                  <span className="font-mono text-sm text-cyan-300">{r.name}</span>
                </div>
                <ArrowUpRight size={12} className="text-gray-500" />
              </div>
              <p className="text-xs text-gray-400 mb-3">{r.desc}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: r.lang === "Python" ? "#3572A5" : "#2b7489" }} 
                  />
                  {r.lang}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={11} /> {r.stars}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
