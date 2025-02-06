
import React from "react";
import Timeline from "../components/Timeline";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { resumeData } from "../constants/index"
import { TabsDemo}  from "../components/TabsDemo";



const Works = () => {
  return (
    <div className="h-full px-8 md:px-14 pb-14">
      <motion.div
        variants={textVariant}
        className="mt-12"
        viewport={{ once: false }}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <Timeline events={resumeData.work} />

	  <TabsDemo />


    </div>
  );
};

export default Works;
