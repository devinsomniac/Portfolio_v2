import React from 'react'
import Image from 'next/image'
import react from './../public/Tech/react.gif'
import next from './../public/Tech/next.png'
import postgres from './../public/Tech/postgres.png'
import tailwind from './../public/Tech/tailwind.png'
import node from './../public/Tech/nodeJs.png'
import js from './../public/Tech/js.png'
import ts from './../public/Tech/ts.png'
import bootstrap from './../public/Tech/bootstrap.png'
import drizzle from './../public/Tech/drizzle.jpg'
const TechStack = () => {
    return (
        <>
        
        <div className='md:px-10 text-white grid grid-cols-2 md:flex lg:flex md:gap-5 lg:gap-4 justify-center'>
            <div className='flex flex-col justify-center items-center mx-4'>
            <Image src={react} alt='reactJs' height={50} width={50}/>
            <p>React.Js</p>
            </div>
            <div className='flex flex-col justify-center items-center mx-4'>
            <Image src={next} alt='reactJs' height={50} width={80}/>
            <p>Next Js</p>
            </div>
            <div className='flex flex-col justify-center items-center mx-4'>
            <Image src={js} alt='reactJs' height={50} width={50}/>
            <p>JavaScript</p>
            </div>
            <div className='flex flex-col justify-center items-center mx-4'>
            <Image src={ts} alt='reactJs' height={50} width={65}/>
            <p>TypeScript</p>
            </div>
            <div className='flex flex-col justify-center items-center mx-4'>
            <Image src={node} alt='reactJs' height={50} width={50}/>
            <p>Node.Js</p>
            </div>
            <div className='flex flex-col justify-center items-center mx-4'>
            <Image src={postgres} alt='reactJs' height={50} width={50}/>
            <p>PostGreSQL</p>
            </div>
            <div className='flex flex-col justify-center items-center mx-4'>
            <Image src={drizzle} alt='reactJs' height={50} width={50}/>
            <p>Drizzle ORM</p>
            </div>
            <div className='flex flex-col justify-center items-center mx-4'>
            <Image src={tailwind} alt='reactJs' height={50} width={75}/>
            <p>Tailwind CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center mx-4'>
            <Image src={bootstrap} alt='reactJs' height={50} width={60}/>
            <p>Bootstrap</p>
            </div>
        
        </div>
        </>

    )
}

export default TechStack