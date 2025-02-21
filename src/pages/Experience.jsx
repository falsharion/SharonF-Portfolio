import React from "react";
import Timeline from "../components/Timeline";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { resumeData } from "../constants/index";
import { TabsDemo } from "../components/TabsDemo";

const Experience = () => {
  return (
    <div className=" flex flex-col h-full px-8 md:px-14 pb-14 overflow-x-hidden">
      <motion.div
        variants={textVariant}
        className="mt-7 mb-3"
        viewport={{ once: false }}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <Timeline events={resumeData.work} />

      <div className="pt-2">
        <TabsDemo />
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "Experience");
