import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

const ToolkitItems = ({ items, className, itemsWrapperClassName }) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6",
              itemsWrapperClassName
            )}>
        {[...new Array(2)].fill(0).map((_, index) =>
        <Fragment key={index}>
        {items.map((item) => (
          <div
            key={item.title}
            className=
              "inline-flex items-center gap-4 py-2 px-3 "
          >
            <img
              src={item.icon}
              alt={item.title}
              className="size-10  object-contain" 
            />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}

        </Fragment>
        )}

      </div>
    </div>
  );
};

export default ToolkitItems;
