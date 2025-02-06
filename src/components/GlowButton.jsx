import React from 'react';

const GlowButton = () => {
  return (
    <div className="mt-36 relative">
      {/* Glow effect */}
      <div className="absolute h-[60px] w-[260px] rounded-[35px] blur-[25px] 
                    before:content-[''] before:absolute before:w-[99999px] before:h-[99999px] 
                    before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
                    before:bg-[conic-gradient(from_0deg,rgba(0,0,0,0),#7c97ff,rgba(0,0,0,0)_25%)] 
                    before:animate-[spin_3s_linear_infinite]">
      </div>

      {/* Button */}
      <a href="#" 
         className="flex relative h-[60px] w-[260px] rounded-[35px] text-white overflow-hidden
                    before:content-[''] before:absolute before:w-[99999px] before:h-[99999px] 
                    before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
                    before:bg-[conic-gradient(from_0deg,rgba(0,0,0,0),#7c97ff,rgba(0,0,0,0)_25%)] 
                    before:animate-[spin_3s_linear_infinite] 
                    after:content-[''] after:absolute after:z-[-1] after:left-[2px] after:top-[2px] 
                    after:w-[calc(100%-5px)] after:h-[calc(100%-5px)] after:bg-[#0d2ca7] after:rounded-[35px]">
        <span className="m-auto">blue pill</span>
      </a>
    </div>
  );
};

export default GlowButton;