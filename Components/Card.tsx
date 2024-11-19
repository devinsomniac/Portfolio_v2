import React from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  tech: string[]; // Array of strings for tech icons
  link: string;
  image: string;
}

const Card = ({ project } : {project : Project}) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
    <div className="w-[300px] h-[350px]  p-7 bg-slate-50 rounded-xl border text-black flex flex-col justify-center items-center hover:scale-105">
      <h2 className='font-semibold text-2xl'>{project.name}</h2>
      <div className="p-1">
        <Image
          src={project.image}
          alt="Project Image"
          height={300}
          width={300}
          className="border-black border-b-4 rounded-xl shadow-2xl hover:scale-105"
        />
      </div>
      <div className="mt-3 flex -space-x-2 overflow-hidden p-4 shadow-2xl rounded-md">
        {project.tech.map((item, index) => (
          <Image
            src={item}
            alt="Tech"
            height={40}
            width={40}
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            key={index}
          />
        ))}
      </div>
    </div>
    </a>
  );
};

export default Card;
