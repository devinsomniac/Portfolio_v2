import Navbar from "@/Components/Navbar"
import { RiScrollToBottomLine } from "react-icons/ri";
import React from "react"
import { Button } from "@/Components/ui/button";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import ProjectsDetails from "@/Projects";
import Card from "@/Components/Card";
import TechStacks from "@/TechStack";
import Image from "next/image";

const page = () => {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <div  className="h-screen snap-start flex flex-col">
        <Navbar />
        <div className="bg-yellow-50 h-full w-full flex flex-col justify-center items-center ">
          <div className=" flex justify-center items-center">
            <h1 className="text-3xl md:text-6xl mx-[20%] text-center text-black font-typewritter">&ldquo;First, solve the <span className="font-bold">problem</span>. Then, write the <span className="font-bold">code</span>.&rdquo;<br /> – <span className="font-helight">John Johnson</span></h1>
          </div>
          <div className="flex justify-center items-center m-8">
            <RiScrollToBottomLine className="font-bold  text-3xl md:text-6xl animate-bounce " />
          </div>
        </div>
      </div>
      <div id="about" style={{ backgroundColor: "#2b4162", backgroundImage: "linear-gradient(315deg, #2b4162 0%, #12100e 74%)" }} className=" min-h-screen snap-start p-8 text-white">
        <h2 className="text-3xl md:text-6xl text-white">About me</h2>
        <div className="my-2 flex justify-center items-center">
          <p className="px-8 text-white font-bold md:text-3xl font-typewritter">I am passionate about building software that is innovative, efficient, and impactful,
            turning ideas into seamless digital experiences. I am also excited about the new era of
            AI and its potential to revolutionize how we interact with technology.</p>
        </div>
        <div className="p-8 py-12 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center items-start py-10">
            <h2 className="font-hartsfolk md:text-4xl">Inzamam Ul Haque <span className="text-red-500">Chowdhury</span></h2>
            <p className="py-1">
              Upcoming Masters Scholar at <br />
              <span className="font-bold">Cardiff University,Wales UK 🇬🇧 - 2027</span>
            </p>
            <p className="py-1">Research Intern at <br />
              <span className="font-bold">National Institute of Technology, Kurukshetra,Haryana, India 🇮🇳 - 2024</span></p>
            <p className="py-1"> Graduated in B.tech in Computer Engineering <br />
              <span className="font-bold">National Institute of Technology, Kurukshetra,Haryana, India 🇮🇳 - 2024</span></p>
            <Button className="bg-slate-600" > <a href="/Inzamam.pdf" download="Inzamam_Resume.pdf" className="no-underline">Download Resume</a></Button>
            <div className="flex gap-2 mt-3 text-2xl">
              <a href="https://wa.me/916909442143"><IoLogoWhatsapp className="text-green-600" /></a>
              <a href="https://www.instagram.com/responsible_mess_/"><FaSquareInstagram className="text-pink-700" /></a>
              <a href="https://www.linkedin.com/in/inzamam-chowdhury/"><FaLinkedin className="text-blue-800" /></a>
            </div>
          </div>
          <div className="py-10 text-xl md:text-2xl">
            <p>I am a Computer Engineering graduate from NIT Kurukshetra with expertise in full-stack development.
              I have a strong foundation in building robust and scalable applications, and I am passionate about
              creating innovative software solutions. Currently, I am focusing on AI agents and exploring their potential,
              working on a recommender system project that leverages AI and machine learning to offer personalized experiences.</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#2234ae", backgroundImage: "linear-gradient(315deg, #2234ae 0%, #191714 74%)"}} className="min-h-screen snap-start p-8">
      <h2 className="text-3xl md:text-6xl text-center text-white mb-4">Tech Stack</h2>
      <div className="flex justify-center items-center">
      <div className="p-20 grid  grid-cols-2 md:grid-cols-4 gap-14">
      {TechStacks.map((tech,index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <Image src={tech.imageLink} alt="tech" height={50} width={80} className="rounded-full"/>
          <p className="text-white">{tech.name}</p>
        </div>
      ))}
    </div>
      </div>
      </div>
      <div id="projects" style={{ background: "#fde7f9", backgroundImage: "linear-gradient(315deg, #fde7f9 0%, #aacaef 74%)" }} className="min-h-screen snap-start p-8">
        <h2 className="text-3xl md:text-6xl text-center mb-4">Portfolio Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-2">
        {ProjectsDetails.map((project,index) =>(
          <Card project={project} key={index}/>
        ))}
        </div>
      </div>
      <div id="contact" style={{ background: "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)" }} className="h-screen snap-start p-8 flex flex-col justify-center items-center">
        <h2 className="text-6xl">Contact Me</h2>
        <div className="text-center flex-grow flex flex-col justify-center items-center">
          <p className="font-bold text-gray-600">Let&apos;s Build Something Great Together! </p>
          <h1 className="text-4xl md:text-8xl font-thin">Let’s Start a Conversation!</h1>
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center p-4 my-5">
            <a href="mailto:inzamamchowdhury20@gmail.com" className="flex justify-center items-center gap-2 p-2 border border-black rounded-full hover:-translate-y-1 hover:-translate-x-1 hover:transition-transform duration-300 ease-in-out">
              <MdOutlineEmail />
             Send me an email
            </a>
            <a href="tel:+8801784542917" className="flex justify-center items-center gap-2 p-2 border border-black rounded-full hover:-translate-y-1 hover:-translate-x-1 hover:transition-transform duration-300 ease-in-out">
              <IoCallOutline />
              Call me
            </a>
            <a href="https://www.linkedin.com/in/inzamam-chowdhury/" target="_blank" className="flex justify-center items-center gap-2 p-2 border border-black rounded-full hover:-translate-y-1 hover:-translate-x-1 hover:transition-transform duration-300 ease-in-out">
              <SlSocialLinkedin />
              Connect with me on LinkedIn</a>
          </div>
        </div>
        <h2 className="text-center md:text-3xl">You Can Call me <span className="font-bold">Insomniac </span>;)</h2>
      </div>
    </main>
  )
}

export default page
