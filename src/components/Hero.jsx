import React from "react";
import { motion } from "framer-motion";
import codingCoffee from "../assets/coding-coffee.json";
import Lottie from "lottie-react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { FlipWords } from "../components/ui/flip-words";
import { FaDownload } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import resume from "../assets/Frontenddeveloperresume.pdf";
import ScrollAnimation from "./ui/scrollanimation";

const Hero = () => {
  const roles = ["Frontend Dev", "Technical Writer", "Software Eng"];
  const technologies = ["React", "Tailwind", "Next.js"];

  return (
    <BackgroundGradientAnimation>
      <section className="z-10 absolute w-full h-screen mx-auto flex flex-col">
        <div className="absolute inset-0 top-[70px] max-w-7xl mx-3 flex flex-row items-start pb-6 gap-5 pr-6">
          <div className="flex flex-col justify-center items-center mt-5"></div>
          <div>
            <ScrollAnimation>
              <h1 className="text-white text-2xl md:text-5xl font-serif font-bold  lg:text-7xl">
                Hi, I'm a{" "}
                <FlipWords
                  words={roles}
                  className="animate-text text-5xl md:text-7xl text-violet-300 "
                />
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="mt-2 text-white/70 text-md   md:text-3xl font-light">
                Translating aesthetic designs <br className="sm:block hidden" />
                into seamless digital experiences.
              </p>
              <div>
                <div className="flex flex-wrap gap-4 mt-6">
                  {technologies.map((tech) => (
                    <div key={tech} className="relative">
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-violet-200 rounded-full opacity-20 blur-xl animate-pulse" />
                        <div
                          className="absolute inset-0 bg-violet-200 rounded-full opacity-20 blur-xl"
                          style={{
                            animation:
                              "moveGlow 3s infinite ease-in-out alternate",
                          }}
                        />
                      </div>
                      <div className="relative px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm border border-violet-200/30 text-violet-200 text-sm transition-all duration-300 hover:scale-105 hover:bg-black/30 hover:border-violet-200/50">
                        {tech}
                      </div>

                      <style>{`
  @keyframes moveGlow {
    0% {
      transform: translate(-10%, -10%) scale(1.1);
    }
    100% {
      transform: translate(10%, 10%) scale(0.9);
    }
  }
`}</style>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <div className="flex font-serif justify-evenly md:justify-start mt-7 relative z-20 gap-3 md:gap-5 items-center">
                <a
                  href={resume}
                  download="FalomoSharon_Resume.pdf"
                  className="rounded-lg text-lg flex items-center justify-center md:py-3 md:w-36 md:text-md w-full py-2 bg-violet-200  text-violet-950 font-serif"
                >
                  Resume{" "}
                  <span className="text-xl md:text-xl lg:text-2xl pl-2">
                    <FaDownload />
                  </span>
                </a>

                <a
                  href="mailto:falomosharl@gmail.com"
                  className="rounded-lg text-lg w-full flex items-center justify-center py-2 md:py-3 md:w-36 md:text-md bg-violet-200 text-violet-950 font-serif"
                >
                  Contact{" "}
                  <span className="text-xl md:text-xl lg:text-2xl pl-2">
                    <MdEmail />
                  </span>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="flex justify-center md:justify-end absolute inset-0 md:inset-[5rem] h-full w-full md:w-11/12 lg:w-full lg:inset-1 bottom-0 z-10 mt-40">
          <Lottie animationData={codingCoffee} loop={true} />
        </div>

        <div className="absolute sm:bottom-10 bottom-[70px] w-full flex justify-center sm:hidden items-center">
          <a
            onClick={() => {
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="h-3 w-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </BackgroundGradientAnimation>
  );
};

export default Hero;
