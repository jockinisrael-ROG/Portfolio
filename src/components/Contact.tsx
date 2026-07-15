import { motion } from "framer-motion";
import { SectionTitle } from "./ui";
import { GitBranch, Briefcase, Mail, AtSign, Download, Send, MapPin, CheckCircle2, Phone } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: GitBranch, label: "GitHub", href: "https://github.com/jockinisrael-ROG" },
  { icon: Briefcase, label: "LinkedIn", href: "https://www.linkedin.com/in/jockin-israel-r" },
  { icon: Mail, label: "Email", href: "mailto:jockinisrael@gmail.com" },
  { icon: AtSign, label: "Instagram", href: "https://instagram.com/emperorjockin" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle tag="07 · Contact" title="Get In" accent="Touch" />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="glass rounded-2xl p-6 border-glow relative">
              <h3 className="text-2xl font-bold mb-3">
                Let's build the <span className="gradient-text">future</span>.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Have an AI project, research idea, or opportunity? I'd love to hear from you.
              </p>
              <div className="flex flex-col gap-2.5 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-cyan-300" /> Tamil Nadu, India
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-cyan-300" />
                  <a href="tel:7010342521" className="hover:text-cyan-300 transition-colors font-mono">+91 7010342521</a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-5 border-glow relative">
              <div className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-3">Connect</div>
              <div className="grid grid-cols-2 gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg glass border border-white/10 text-gray-300 hover:border-cyan-400/50 hover:text-white transition-colors"
                    data-hover
                  >
                    <s.icon size={16} />
                    <span className="text-sm">{s.label}</span>
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="mt-3 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 text-black"
              >
                <Download size={15} /> Download Resume
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 border-glow relative space-y-4 h-fit"
          >
            <div>
              <label className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-black disabled:opacity-70"
            >
              {sent ? <><CheckCircle2 size={15} /> Sent!</> : <><Send size={15} /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 flex items-center justify-center font-bold text-black text-[10px]">
            J
          </div>
          <span>Jockin Israel R · 2026</span>
        </div>
        <div>Crafted with <span className="text-pink-400">♥</span> · React · Framer Motion</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Online
        </div>
      </div>
    </footer>
  );
}
