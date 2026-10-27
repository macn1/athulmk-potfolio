import { motion } from "framer-motion";

import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./SectionHeading";

const Education = () => (
  <>
    <SectionHeading index="05" eyebrow="Education" title="Academic foundation." />

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
      {education.map((item, index) => (
        <motion.div
          key={item.title}
          variants={fadeIn("up", "spring", index * 0.15, 0.8)}
          className="glass rounded-2xl p-6 sm:p-8 flex gap-5"
        >
          <span className="w-12 h-12 rounded-xl bg-accent/15 text-accent font-display font-bold flex items-center justify-center shrink-0">
            {item.mark}
          </span>
          <div className="flex-1">
            <p className="font-mono text-[12px] text-secondary">{item.period}</p>
            <h3 className="mt-1 font-display text-white text-[17px] font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="mt-1 text-secondary text-[14px]">{item.institution}</p>
            <span className="mt-4 inline-block px-3 py-1 rounded-full border border-accent2/40 text-accent2 text-[12px] font-mono">
              {item.result}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Education, "education");
