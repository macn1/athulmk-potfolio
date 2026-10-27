import { motion } from "framer-motion";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

const ProjectCard = ({ index, name, category, year, description, highlights, stack, accent }) => (
  <motion.article
    variants={fadeIn("up", "spring", (index % 2) * 0.12, 0.8)}
    className="glass rounded-2xl overflow-hidden flex flex-col hover:border-accent/50 transition-colors group"
  >
    <div
      className="relative h-40 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${accent[0]}, ${accent[1]})` }}
    >
      <div className="absolute inset-0 bg-primary/55" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span className="absolute -bottom-6 -right-2 font-display font-extrabold text-[120px] leading-none text-white/10 select-none">
        {name.charAt(0)}
      </span>
      <div className="absolute left-6 bottom-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
          {year}
        </p>
        <p className="mt-1 text-white text-[14px]">{category}</p>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <h3 className="font-display text-white text-[22px] font-semibold tracking-tight">
        {name}
      </h3>

      <p className="mt-3 text-secondary text-[14px] leading-[24px]">{description}</p>

      <ul className="mt-5 mb-6 space-y-2">
        {highlights.map((point) => (
          <li key={point} className="flex gap-3 text-white-100/90 text-[13.5px] leading-[22px]">
            <Icon name="check" className="w-4 h-4 mt-[3px] text-accent2 shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      <div className="pt-5 border-t border-line flex flex-wrap gap-2 mt-auto">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-line text-[12px] text-white-100 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

const Works = () => (
  <>
    <SectionHeading index="04" eyebrow="Projects" title="Selected work.">
      Products built at Stackerbee Technologies and independent platforms I designed,
      built and deployed myself.
    </SectionHeading>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.name} index={index} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "projects");
