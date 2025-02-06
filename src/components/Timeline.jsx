import React, { Fragment } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Circle = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-violet-200 rounded-full w-4 h-4 -ml-1"
    ></motion.div>
  );
};

const Pillar = ({ index, totalEvents }) => {
  const { scrollYProgress } = useScroll();

  const pillarProgress = useTransform(
    scrollYProgress,
    [index / totalEvents, (index + 1) / totalEvents],
    [0, 1]
  );

  return (
    <div className="relative w-2 h-full mx-auto">
      <div className="absolute inset-0 bg-white/15 rounded-t-full rounded-b-full"></div>

      <motion.div
        style={{
          scaleY: pillarProgress,
          originY: "top",
        }}
        className="absolute inset-0 bg-gradient-to-b from-violet-900 to-violet-200 rounded-t-full rounded-b-full"
      ></motion.div>
    </div>
  );
};

const EventCard = ({
  heading,
  subheading,
  startyear,
  endyear,
  highlights,
  direction,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl 
                   flex flex-col gap-y-2 border-none  shadow-md rounded-xl p-4"
    >
      <p className="text-violet-300 font-bold text-lg md:text-2xl  lg:text-4xl border-b">
        {heading}
      </p>
      <div className=" md:flex font-serif items-center justify-between text-sm md:text-xl lg:text-2xl text-white/70">
        {subheading}
        <div className="md:text-sm lg:text-xl text-white/70">
          {startyear} - {endyear}
        </div>
      </div>
      <ul className="list-disc md:text-lg lg:text-lg list-inside text-sm text-gray-400 space-y-1">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Timeline = ({ events }) => {
  return (
    <motion.div
      initial="hidden"
      className="flex flex-col gap-y-3 w-full my-4 lg:px-16"
    >
      <Circle />
      {events.map((event, key) => (
        <Fragment key={key}>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 md:gap-x-6 items-center mx-auto">
            {event.direction === "left" ? (
              <>
                <Pillar index={key} totalEvents={events.length} />
                <EventCard
                  heading={event.position}
                  subheading={event.company}
                  startyear={event.startDate}
                  endyear={event.endDate}
                  highlights={event.highlights}
                  direction={event.direction}
                />
                <div></div>
              </>
            ) : (
              <>
                <div></div>
                <Pillar index={key} totalEvents={events.length} />
                <EventCard
                  heading={event.position}
                  subheading={event.company}
                  startyear={event.startDate}
                  endyear={event.endDate}
                  highlights={event.highlights}
                  direction={event.direction}
                />
              </>
            )}
          </div>
          {key < events.length - 1 && <Circle />}
        </Fragment>
      ))}
      <Circle />
    </motion.div>
  );
};

export default Timeline;
