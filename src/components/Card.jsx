import React from "react";
import grainImage from "../assets/grain.jpg";
import { twMerge } from "tailwind-merge";

export const Card = ({ className, children, ...other }) => {
  return (
    <div
      className={twMerge(
        "bg-violet-950/30 rounded-3xl relative z-[1] overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none ",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </div>
  );
};
export default Card;
