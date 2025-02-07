import React from "react";
import SectionHeader from "./SectionHeader";
import { Card } from "../components/Card";
import CardHeader from "./CardHeader";
import ToolkitItems from "./ToolkitItems";
import BioContent from "./BioContent";
import { resumeData } from "../constants";
import { EarthCanvas, StarsCanvas } from "../components/canvas";
import { motion } from "framer-motion";
import { useRef } from "react";
import { slideIn } from "../utils/motion";
import { hobbies } from "../constants";
import { toolkitItems } from "../constants";
import ScrollAnimation from "./ui/scrollanimation";

const studyType = resumeData.education[0].studyType;

const About = () => {
  const constraintRef = useRef(null);
  return (
    <div className="pb-20 lg:py-20">
      <div className="px-8 md:px-12">
        <ScrollAnimation>
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="Learn more about who i am, what i do and what inspire me"
          />
        </ScrollAnimation>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8  md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] rounded-3xl md:col-span-2 lg:col-span-1 ">
              <CardHeader
                title="My Bio"
                description="Know more about me"
                className="lg:pb-2"
              />

              <BioContent studyType={studyType} />
            </Card>
            <Card className="h-[320px] z-0 rounded-3xl md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My ToolKit"
                description="Explore technology, skills and tools used to build amazing
                digital experiences"
                className=""
              />
              <ToolkitItems
                items={toolkitItems}
                className="border-2 border-violet-200/20"
                itemsWrapperClassName="animate-moveLeft [animation-duration:30s]"
              />
              <ToolkitItems
                items={toolkitItems}
                className="border-2 mt-1 border-violet-200/20 "
                itemsWrapperClassName="animate-moveRight [animation-duration:35s] "
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 relative z-0 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] rounded-3xl p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond tech"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-violet-200/20  rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-white ">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 rounded-3xl relative md:col-span-2 lg:col-span-1">
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto xl:mt-8 md:h-[420px] h-[320px] mx-auto  lg:w-full lg:h-[350px] md:mt-0"
              >
                <EarthCanvas />
              </motion.div>
              <StarsCanvas />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
