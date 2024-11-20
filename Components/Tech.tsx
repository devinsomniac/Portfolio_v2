import React from "react";
import TechStacks from "@/TechStack";

const Tech = () => {
  return (
    <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-black">
        {TechStacks.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center gap-2 text-white  p-2"
        >
          <img src={tech.imageLink} alt="tech" height={45} width={45} />
          <p className="text-sm font-medium">{tech.name}</p>
        </div>
      ))}
        </div>
      
    </div>
  );
};

export default Tech;
