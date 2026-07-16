import { SectionTitle, Counter } from "./ui";
import { Trophy } from "lucide-react";

const stats = [
  { target: 8, label: "Projects", suffix: "+" },
  { target: 6, label: "AI Apps", suffix: "+" },
  { target: 1, label: "Unity Apps", suffix: "+" },
  { target: 8, label: "Repos", suffix: "+" },
  { target: 2, label: "ML Models", suffix: "+" },
  { target: 2, label: "CV Projects", suffix: "+" },
  { target: 42, label: "Technologies", suffix: "+" },
  { target: 64, label: "Contributions", suffix: "+" },
];

export function Achievements() {
  return (
    <section className="relative py-24 md:py-0 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        <SectionTitle tag="07 · Milestones" title="In" accent="Numbers" />

        <div className="flex justify-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(251,146,60,0.3)]">
            <Trophy className="text-black" size={28} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <Counter key={s.label} target={s.target} label={s.label} suffix={s.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
}
