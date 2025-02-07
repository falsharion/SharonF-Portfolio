"use client";

import { Tabs } from "../components/ui/tabs";
import { toolkitItems } from "../constants";
import { resumeData } from "../constants";
import Gallery from "./Gallery";


export function TabsDemo() {
  const tabs = [
    {
      title: "Tech Stack",
      value: "Tech Stack",
      content: (
        <div className="w-full relative h-full rounded-2xl p-3 text-xl md:text-4xl font-bold text-violet-300 bg-slate-950">
          <p className="mb-4 md:mb-8">Tech Stack</p>
          <div className="max-h-[calc(100%-3rem)] md:max-h-[calc(100%-4rem)] overflow-y-auto">
            <TechGrid />
          </div>
        </div>
      ),
    },
    {
      title: "Gallery",
      value: "Gallery",
      content: (
        <div className="w-full relative h-full rounded-2xl p-3 text-xl md:text-4xl font-bold text-violet-950 bg-gradient-to-br from-violet-300 to-violet-950">
          <p className="mb-4"> Gallery</p>
          <div className="max-h-[calc(100%-3rem)] overflow-y-auto">
            <Gallery />
          </div>
        </div>
      ),
    },
    {
      title: "Soft Skills",
      value: "Soft Skills",
      content: (
        <div className="w-full relative h-full rounded-2xl p-3 text-xl md:text-4xl font-bold text-violet-950 bg-violet-200">
          <p className="mb-4 md:mb-8">Soft Skills</p>
          <div className="max-h-[calc(100%-4rem)] md:max-h-[calc(100%-6rem)] overflow-y-auto">
            <SoftSkills />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const TechGrid = () => {
  return (
    <div className="grid grid-cols-3 text-center md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-9 place-items-center justify-center max-w-4xl mx-auto">
      {toolkitItems.map((tech) => (
        <div
          key={tech.title}
          className="flex flex-col w-20 h-28 md:w-32 md:h-32 p-3 md:p-4 items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          <img
            src={tech.icon}
            alt={tech.title}
            className="w-12 h-12 md:w-16 md:h-20 object-contain mb-2"
          />
          <span className="text-sm md:text-base font-semibold text-violet-200">{tech.title}</span>
        </div>
      ))}
    </div>
  );
};

const SoftSkills = () => {
  const softSkills = resumeData.skills.find(
    skill => skill.name === "Soft skill"
  );

  return (
    <div className="space-y-4">
      {softSkills?.keywords.map((skill, index) => (
        <ul key={index} className="p-4 lg:p-7 bg-white/10 rounded-lg">
          <li className="text-base lg:text-3xl list-disc ml-4">{skill}</li>
        </ul>
      ))}
    </div>
  );
};