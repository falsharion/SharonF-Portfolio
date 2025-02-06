import React from "react";
import { cn } from "../utils/lib/utils";
import { gallery } from "../constants";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gallery.map((item, index) => (
        <div key={index} className="max-w-xs w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
              "bg-cover"
            )}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

            <div className="flex flex-col justify-between h-full relative z-10">
              <div className="flex flex-col">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 mb-2">
                  {item.role}
                </h1>
              </div>

              <div className="text content mt-auto">
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  {item.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
