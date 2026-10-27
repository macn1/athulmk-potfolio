import { motion } from "framer-motion";

import { skillGroups } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

const Tech = () => (
  <>
    <SectionHeading index="03" eyebrow="Skills" title="Tools I build with.">
      A practical stack for shipping full stack products, from the first migration to
      the production server.
    </SectionHeading>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {skillGroups.map((group, index) => (
        <motion.div
          key={group.title}
          variants={fadeIn("up", "spring", index * 0.06, 0.7)}
          className="glass rounded-2xl p-6 hover:border-accent/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
              <Icon name={group.icon} className="w-[18px] h-[18px]" />
            </span>
            <h3 className="font-display text-white text-[15px] font-semibold">
              {group.title}
            </h3>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-line text-[12.5px] text-white-100"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "skills");
