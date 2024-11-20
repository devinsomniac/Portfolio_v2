"use client"
import Image from "next/image";
import light from './../../assets/light.png'
import avatar from './../../assets/avatar.png'
import { Button } from "@/Components/ui/button";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";



export default function Home() {
  return (
    <>
      <div>
        <Image src={light} alt="light" height={200} width={150} className='fixed top-0 left-10 ' />
      </div>
      <div className="p-16 md:p-20 mt-16 grid grid-cols-1 md:grid-cols-3 text-white">
        <div className="flex justify-start items-start flex-col p-5 md:ml-20 col-span-2">
          <h1 className="font-hart text-2xl md:text-5xl">Inzamam Ul Haque Chowdhury</h1>
          <p className="mt-2 mb-2">Research Intern at <br /> <span className="font-bold">National Institute of Technology, Kurukshetra,Haryana, India 🇮🇳 - 2024 </span></p>
          <p>Upcoming Masters Scholar at <br /><span className="font-bold">Cardiff University,Wales UK 🇬🇧 - 2027 </span></p>
          <div className="flex flex-col mt-2">
            <Button className="rounded-full"><a
              href="/Resume.pdf"
              download="InzamamUlHaque_Resume.pdf"
              className="text-white no-underline"
            >
              Download Resume
            </a></Button>
            <p className="font-semibold text-lg">Social Handles</p>
            <div className="flex gap-2 text-2xl mt-1">
              <FaLinkedin className="text-[#0077B5] " />
              <FaGithub className="text-[#063970]" />
              <IoLogoWhatsapp className="text-[#075E54]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 col-span-1">
          <a href="https://github.com/devinsomniac?tab=repositories" target="_blank" rel="noopener noreferrer" className="mb-2">
          <Image src={avatar} alt="github-link" height={200} width={200} className="border-[5px] border-white rounded-full shadow-2xl" />
          </a>
        </div>
      </div>
      

    </>
  );
}
