import { motion } from "framer-motion";

import { services, summary } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

const ServiceCard = ({ index, title, icon, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.7)}
    className="glass rounded-2xl p-6 hover:border-accent/50 transition-colors group"
  >
    <div className="w-11 h-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors">
      <Icon name={icon} className="w-5 h-5" />
    </div>
    <h3 className="mt-5 font-display text-white text-[17px] font-semibold">{title}</h3>
    <p className="mt-2 text-secondary text-[14px] leading-[24px]">{description}</p>
  </motion.div>
);

const About = () => (
  <>
    <SectionHeading index="01" eyebrow="About" title="Building reliable products, end to end." />

    <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
      <div className="space-y-5">
        {summary.map((paragraph, i) => (
          <motion.p
            key={i}
            variants={fadeIn("", "", 0.1 + i * 0.1, 0.8)}
            className="text-secondary text-[16px] leading-[30px]"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  </>
);

export default SectionWrapper(About, "about");
