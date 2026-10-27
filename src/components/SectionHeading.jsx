import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const SectionHeading = ({ index, eyebrow, title, children }) => (
  <motion.div variants={textVariant()} className="max-w-4xl">
    <p className={styles.sectionSubText}>
      <span className="text-secondary">{index}</span> &nbsp;/&nbsp; {eyebrow}
    </p>
    <h2 className={`${styles.sectionHeadText} mt-3`}>{title}</h2>
    {children && (
      <p className="mt-4 text-secondary text-[16px] leading-[28px]">{children}</p>
    )}
  </motion.div>
);

export default SectionHeading;
