"use client"
import React from 'react';
import Image from 'next/image';
interface Project {
  id: number;
  name: string;
  tech: string[]; 
  link: string;
  image: string;
}

const Card = ({ project } : {project : Project}) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
    <div className="
          md:w-[350px]
          md:h-[300px] 
          lg:w-[290px] 
          lg:[290px] 
          shadow-white 
          shadow-sm  
          bg-slate-50 
          rounded-xl 
          border 
          text-black flex flex-col justify-center items-center">
      <h2 className='font-semibold text-2xl'>{project.name}</h2>
      <div className="p-1">
        <Image
          src={project.image}
          alt="Project Image"
          height={300}
          width={250}
          className="border-black border-b-4 rounded-xl shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      <div className="md:mt-3 flex overflow-hidden p-3 shadow-2xl rounded-full">
        {project.tech.map((item, index) => (
          <Image
            src={item}
            alt="Tech"
            height={30}
            width={30}
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            key={index}
          />
        ))}
      </div>
    </div>
    </a>
  );
};

export default Card;
