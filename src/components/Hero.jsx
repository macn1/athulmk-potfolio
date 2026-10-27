import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile, stats } from "../constants";
import Icon from "./Icons";

const socials = [
  { name: "github", href: profile.github, label: "GitHub" },
  { name: "linkedin", href: profile.linkedin, label: "LinkedIn" },
  { name: "mail", href: `mailto:${profile.email}`, label: "Email" },
];

const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const Hero = () => {
  return (
    <section id="top" className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,124,255,0.55), rgba(56,214,196,0.15) 60%, transparent)",
        }}
        aria-hidden="true"
      />

      <div
        className={`relative max-w-7xl mx-auto ${styles.paddingX} pt-36 pb-20 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center min-h-screen`}
      >
        <div>
          <motion.div
            {...rise(0)}
            className="inline-flex max-w-full items-start gap-2 glass rounded-2xl px-4 py-1.5 text-[13px] text-white-100"
          >
            <span className="relative flex h-2 w-2 mt-[7px] shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent2 opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent2" />
            </span>
            Available for new opportunities · {profile.location}
          </motion.div>

          <motion.h1 {...rise(0.1)} className={`${styles.heroHeadText} mt-7`}>
            {profile.name}
            <span className="block gradient-text mt-1 lg:text-[52px] sm:text-[42px] xs:text-[34px] text-[28px] leading-tight">
              {profile.role}
            </span>
          </motion.h1>

          <motion.p {...rise(0.2)} className={`${styles.heroSubText} mt-6 max-w-xl`}>
            {profile.tagline}
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-semibold text-[14px] hover:bg-white-100 transition-colors shadow-glow"
            >
              View my work
              <Icon name="arrow" className="w-4 h-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-medium text-[14px] hover:border-accent/60 transition-colors"
            >
              <Icon name="download" className="w-4 h-4" />
              Download resume
            </a>
            <div className="flex items-center gap-2 sm:ml-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.name === "mail" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-secondary hover:text-white hover:border-accent/60 transition-colors"
                >
                  <Icon name={s.name} className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div {...rise(0.35)} className="hidden lg:block">
          <div className="glass rounded-2xl shadow-card overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-line">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[12px] text-secondary">athul.config.py</span>
            </div>
            <pre className="p-6 font-mono text-[13px] leading-[1.9] text-white-100 overflow-x-auto">
              <code>
                <span className="text-accent">class</span>{" "}
                <span className="text-accent2">Developer</span>:{"\n"}
                {"    "}name = <span className="text-[#f2c879]">"Athul M K"</span>
                {"\n"}
                {"    "}focus = [<span className="text-[#f2c879]">"Django"</span>,{" "}
                <span className="text-[#f2c879]">"React"</span>]{"\n"}
                {"    "}data = [<span className="text-[#f2c879]">"PostgreSQL"</span>,{" "}
                <span className="text-[#f2c879]">"MongoDB"</span>]{"\n"}
                {"    "}cloud = [<span className="text-[#f2c879]">"AWS"</span>,{" "}
                <span className="text-[#f2c879]">"Docker"</span>,{" "}
                <span className="text-[#f2c879]">"Nginx"</span>]{"\n"}
                {"    "}experience = <span className="text-[#f2c879]">"2+ years"</span>
                {"\n"}
                {"    "}based_in = <span className="text-[#f2c879]">"UAE"</span>
              </code>
            </pre>
          </div>
        </motion.div>

        <motion.dl
          {...rise(0.5)}
          className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-primary px-6 py-6">
              <dt className="font-display font-bold text-white text-[30px] tracking-tight">
                {s.value}
              </dt>
              <dd className="mt-1 text-secondary text-[13px]">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Hero;
