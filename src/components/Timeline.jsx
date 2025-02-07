import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Timeline = ({ events }) => {
 const timelineRef = useRef(null);
 const { scrollYProgress } = useScroll({
   target: timelineRef,
   offset: ["start end", "end start"],
 });

 const itemVariants = {
   hidden: { opacity: 0, x: 100 },
   visible: { 
     opacity: 1, 
     x: 0,
     transition: {
       duration: 0.5,
       ease: "easeOut"
     }
   }
 };

 return (
   <motion.ol 
     ref={timelineRef}
     className="relative border-s-4 border-gray-200/20 dark:border-gray-700"
   >
     <motion.div 
       style={{ 
         scaleY: scrollYProgress, 
         transformOrigin: 'top' 
       }}
       className="absolute top-0 left-[-3.5px] w-1 bg-violet-200 h-full z-0"
     />

     {events.map((event, index) => (
       <motion.li 
         key={index} 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.3 }}
         variants={itemVariants}
         className="mb-10 ms-4 relative z-10"
       >
         <div 
           className="absolute w-3 h-3 bg-violet-500 rounded-full mt-1.5 -start-1.5 border border-white"
           style={{
             position: 'absolute',
             left: '-25px',
             top: '6px'
           }}
         ></div>
     <h3 className="text-lg font-semibold text-violet-200 dark:text-white">
           {event.position}
         </h3>      
         <time className="mb-1 text-sm font-normal leading-none text-gray-400">
           {event.startDate} - {event.endDate}
         </time>
         <p className="mb-4 text-base font-normal text-gray-500">
           {event.company}
         </p>
         <ul className="text-base font-normal text-gray-500 list-disc list-inside space-y-2">
           {event.highlights.map((highlight, highlightIndex) => (
             <li key={highlightIndex}>{highlight}</li>
           ))}
         </ul>
       </motion.li>
     ))}
   </motion.ol>
 );
};

export default Timeline;