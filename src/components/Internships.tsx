import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./ui";
import { Award, Building2, Calendar, MapPin, X, ShieldCheck } from "lucide-react";

export function Internships() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section id="internships" className="relative py-24 px-6 overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle tag="04 · Internships" title="Work" accent="Internships" />

        <div className="mt-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-8 border-glow relative overflow-hidden group"
          >
            {/* Cyberpunk corner highlights */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-3xl group-hover:border-cyan-400 transition-colors" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-violet-500/30 rounded-br-3xl group-hover:border-violet-500 transition-colors" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono font-bold tracking-wider">
                  <Calendar size={12} />
                  <span>01 JUN 2026 - 30 JUN 2026</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    AI & Data Science Intern
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-semibold">
                    <Building2 size={15} className="text-cyan-400" />
                    <span>PMDG Technologies Pvt Ltd</span>
                    <span className="text-gray-600">•</span>
                    <MapPin size={14} className="text-violet-400" />
                    <span className="text-xs">Coimbatore (Remote/On-site)</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                  Completed an intensive Artificial Intelligence and Data Science internship. Gained hands-on experience in machine learning architectures, data pre-processing, and dynamic AI model integration while delivering assigned engineering milestones with high dedication.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Artificial Intelligence", "Data Science", "Python", "Machine Learning"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center shrink-0 self-center md:self-auto">
                <button
                  onClick={() => setShowCertificate(true)}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 text-black shadow-lg hover:shadow-violet-500/30 hover:scale-105 transition-all duration-300 cursor-pointer text-sm font-mono tracking-wider"
                >
                  <Award size={16} />
                  <span>VIEW CERTIFICATE</span>
                </button>
                <span className="text-[10px] text-gray-500 font-mono mt-2 tracking-widest uppercase">Verified Credential</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setShowCertificate(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-3xl glass border border-cyan-400/40 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner tech details */}
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-gray-600 hidden md:block">
                SYSTEM_ID: SECURE_VERIFY_PMDG_2026
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowCertificate(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Certificate Inner Frame */}
              <div className="border border-white/5 bg-black/40 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col items-center text-center">
                {/* Certificate Background watermark */}
                <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center pointer-events-none select-none">
                  <ShieldCheck size={400} className="text-cyan-400" />
                </div>

                {/* Company Seal Header */}
                <div className="flex flex-col items-center gap-2 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center p-2.5">
                    <Building2 size={28} className="text-black" />
                  </div>
                  <h4 className="text-sm font-bold tracking-wider text-cyan-300 font-mono uppercase">PMDG Technologies Pvt. Ltd.</h4>
                  <p className="text-[10px] text-gray-500 font-mono">CIN: U62013TZ2024PTC030517</p>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-white mb-2 uppercase font-mono">
                  Certificate of Internship
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 mb-6" />

                {/* Body Text */}
                <p className="text-sm text-gray-400 font-mono tracking-widest uppercase text-[10px] mb-4">TO WHOMSOEVER IT MAY CONCERN</p>
                
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mb-6">
                  This is to certify that <span className="text-white font-bold underline decoration-cyan-400/50 decoration-2 underline-offset-4">Mr. Jockin Israel R</span>, a First-Year B.Tech Artificial Intelligence and Data Science student at Karunya University, has successfully completed his internship at <span className="text-white font-bold">PMDG Technologies Pvt Ltd</span> from <span className="text-cyan-300 font-bold">01st Jun 2026 to 30th Jun 2026</span>.
                </p>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xl italic mb-8">
                  "During his tenure with us, his performance was found to be good. He displayed a keen interest in learning and carried out the tasks assigned to him with sincerity and dedication."
                </p>

                {/* Signatures */}
                <div className="w-full grid grid-cols-2 gap-6 pt-6 border-t border-white/5 text-left md:px-10">
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Verification Date</span>
                    <span className="text-sm font-semibold font-mono text-white">01.07.2026</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Authorized Signatory</span>
                    <span className="text-sm font-bold text-white block">Saranya K</span>
                    <span className="text-[10px] font-mono text-violet-400 block">VP - HR & Operations</span>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="mt-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-mono">
                  <ShieldCheck size={12} />
                  <span>SECURE DIGITAL CREDENTIAL</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
