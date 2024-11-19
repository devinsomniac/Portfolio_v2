import React from 'react'
import Image from 'next/image'
import TechStacks from '@/TechStack'
const TechStack = () => {
    return (
        <>

            <div className='md:px-10 text-white grid grid-cols-2 md:flex lg:flex justify-center'>
                {TechStacks.map((tech,index) => (
                    <div className=' w-[100px] p-1 flex flex-col justify-center items-center' key={index}>
                        <Image src={tech.imageLink} alt='reactJs' height={50} width={50} unoptimized/>
                        <p className='text-sm font-light gap-2' >{tech.name}</p>
                    </div>
                ))}

            </div>
        </>

    )
}

export default TechStack