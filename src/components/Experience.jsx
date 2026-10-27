import { motion } from "framer-motion";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./SectionHeading";

const Chip = ({ children }) => (
  <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-line text-[12px] text-white-100 font-mono">
    {children}
  </span>
);

const Bullets = ({ points }) => (
  <ul className="mt-3 space-y-2">
    {points.map((point) => (
      <li key={point} className="flex gap-3 text-secondary text-[14px] leading-[24px]">
        <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-accent2 shrink-0" />
        {point}
      </li>
    ))}
  </ul>
);

const ExperienceCard = ({ experience, index }) => (
  <motion.article
    variants={fadeIn("up", "spring", 0.1, 0.8)}
    className="relative pl-8 sm:pl-12 pb-12 last:pb-0"
  >
    <span className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-accent/60 via-line to-transparent" />
    <span className="absolute -left-[5px] top-2 w-[11px] h-[11px] rounded-full bg-accent shadow-glow" />

    <div className="glass rounded-2xl p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center font-display font-bold text-primary text-[18px]">
            {experience.company.charAt(0)}
          </span>
          <div>
            <h3 className="font-display text-white text-[20px] font-semibold">
              {experience.role}
            </h3>
            <p className="text-accent2 text-[14px] font-medium">{experience.company}</p>
          </div>
        </div>
        <span className="font-mono text-[12px] text-secondary border border-line rounded-full px-3 py-1">
          {experience.period}
        </span>
      </div>

      <p className="mt-5 text-white-100/90 text-[15px] leading-[26px]">{experience.summary}</p>

      {experience.projects && (
        <div className="mt-6 grid gap-4">
          {experience.projects.map((project) => (
            <div key={project.name} className="rounded-xl bg-white/[0.025] border border-line p-5">
              <h4 className="text-white text-[15px] font-semibold">{project.name}</h4>
              <Bullets points={project.points} />
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {experience.points && (
        <>
          <Bullets points={experience.points} />
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
        </>
      )}
    </div>
  </motion.article>
);

const Experience = () => (
  <>
    <SectionHeading index="02" eyebrow="Experience" title="Where I've shipped.">
      Two roles, more than ten production applications, and a consistent focus on
      clean APIs, reliable data and interfaces people enjoy using.
    </SectionHeading>

    <div className="mt-14 max-w-4xl">
      {experiences.map((experience, index) => (
        <ExperienceCard key={experience.company} experience={experience} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, "experience");
