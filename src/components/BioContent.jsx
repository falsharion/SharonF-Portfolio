import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../components/ui/animated-modal";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

const profile = [
  {
    id: 1,
    name: "Falomo Sharon",
    designation: "Software Engineer",
    image: profileImg,
  },
];

const BioContent = ({ studyType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncatedText = studyType.slice(0, 150) + "...";

  return (
    <div className="px-6 z-50 flex flex-col h-[calc(100%-120px)]">
      {isModalOpen ? (
        <div>
          <p className="text-md text-white/50 md:text-sm lg:text-base dark:text-neutral-300">
            {truncatedText}
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-md text-white/50 md:text-sm lg:text-base dark:text-neutral-300">
            {truncatedText}
          </p>
        </motion.div>
      )}

      <div className="mt-auto mb-4">
        <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
          <ModalTrigger className="dark:bg-white dark:text-black text-white flex justify-center group/modal-btn relative overflow-hidden">
            <span className="group-hover/modal-btn:translate-x-32 text-base text-center transition duration-500">
              Read More
            </span>
            <div className="-translate-x-32 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white dark:text-black z-20">
              👩🏾‍💻
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <div className="sticky top-0 z-50 bg-zinc-700/50 pb-2 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg h-14 md:text-2xl text-violet-200 dark:text-neutral-100 font-bold text-center flex justify-center items-center">
                    About Me{" "}
                    <motion.span
                      initial={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-1 pt-0.5 rounded-md inline-block ml-2"
                    >
                      <div className="relative">
                        <AnimatedTooltip items={profile} />
                      </div>
                    </motion.span>
                  </h4>
                </motion.div>
              </div>
              <div className="overflow-y-auto max-h-[70vh] touch-pan-y">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex flex-col gap-6 px-2"
                >
                  <div className="text-violet-200/70 pt-2 dark:text-neutral-300 leading-relaxed">
                    {studyType.split(". ").map((paragraph, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                        className="mb-2 mt-2 text-sm  lg:my-4 lg:text-lg"
                      >
                        {paragraph}.
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default BioContent;