import Image from "next/image";
import light from './../../assets/light.png'
import github from './../../assets/gitub.png'
import { Button } from "@/Components/ui/button";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import TechStack from "@/Components/TechStack";
import Projects from "@/Components/Projects";



export default function Home() {
  return (
    <>
      <div>
        <Image src={light} alt="light" height={100} width={100} className='fixed top-0 left-10 ' />
      </div>
      <section className="p-20 mt-16 grid grid-cols-1 md:grid-cols-2 text-white">
        <div className="flex justify-start items-start flex-col p-5 md:ml-20">
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
              <FaLinkedin />
              <FaGithub />
              <IoLogoWhatsapp />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-5">
          <Image src={github} alt="github-link" height={200} width={200} />
        </div>
      </section>
      <section className="p-8 mx-28 flex justify-center items-center flex-col">
        <p className="font-hart text-white text-2xl mb-4">Tech Stack</p>
        <TechStack />
      </section>
      <section className="p-8 md:mx-28 flex justify-center items-center flex-col border-white-[2px]">
        <h1 className="font-hart text-2xl text-white mb-4">Projects</h1>
        <Projects />
      </section>

    </>
  );
}
