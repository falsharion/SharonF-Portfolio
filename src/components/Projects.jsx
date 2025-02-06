import React from "react";
import { portfolio } from "../constants";
import SectionHeader from "./SectionHeader";
import ArrowUpIcon from "../assets/ArrowUpIcon";
import Card from "./Card";
import ScrollAnimation from "./ui/scrollanimation";

const Projects = () => {
  return (
    <section id="projects-section" className="pb-16">
      <div className="px-6">
      <ScrollAnimation> 
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        /> </ScrollAnimation>
        <div className="flex md:px-10 flex-col mt-10 gap-20 md:mt-20">
          {portfolio.map((project, projectIndex) => (
            <Card
              key={project.projectIndex}
              className="bg-[#0c0323] rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 pt-8 px-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <div className="lg:pb-16">
                    <h3 className="font-serif text-2xl md:text-4xl mt-2">
                      {project.name}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                    {/* Animated Tags */}
                    <div className="flex flex-wrap gap-4 mt-6">
                      {project.tags.map((tag) => (
                        <div
                          key={`${project.name}-${tag.name}`}
                          className="relative"
                        >
                          {/* Animated glow effect */}
                          <div className="absolute inset-0 -z-10">
                            <div
                              className="absolute inset-0 rounded-full opacity-20 blur-xl animate-pulse"
                              style={{
                                backgroundColor: getTagColor(tag.color),
                              }}
                            />
                            <div
                              className="absolute inset-0 rounded-full opacity-20 blur-xl"
                              style={{
                                backgroundColor: getTagColor(tag.color),
                                animation:
                                  "moveGlow 3s infinite ease-in-out alternate",
                              }}
                            />
                          </div>
                          <div
                            className="relative px-4 py-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 text-sm transition-all duration-300 hover:scale-105 hover:bg-black/30 hover:border-white/50"
                            style={{ color: getTagColor(tag.color) }}
                          >
                            #{tag.name}
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-md mt-4 text-white/50 md:mt-5 md:max-w-96 text-base">
                      {project.description}
                    </p>
                    <button
                      onClick={() =>
                        window.open(project.source_code_link, "_blank")
                      }
                      className="bg-white text-grey-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span className="text-black">Visit live site</span>
                      <ArrowUpIcon />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-16 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    alt="project image"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

    </section>
  );
};

const getTagColor = (color) => {
  const colorMap = {
    "blue-text-gradient": "#dbefff", 
    "green-text-gradient": "#f7dbff", 
    "orange-text-gradient": "#f97316", 
    "pink-text-gradient": "#ec4899", 
  };
  return colorMap[color] || "#64748b"; 
};

export default Projects;
