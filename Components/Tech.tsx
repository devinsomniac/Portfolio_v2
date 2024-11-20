import React from 'react'
import TechStacks from '@/TechStack'


const Tech = () => {
  return (
    <div className='text-white grid grid-cols-4 gap-4'>
        {TechStacks.map((tech,index) => (
           <div key={index} className='flex flex-col justify-center items-center gap-4'>
                <img src={tech.imageLink} alt="tech" height={45} width={45} />
                <p>{tech.name}</p>
           </div> 
        ))}
    </div>
  )
}

export default Tech