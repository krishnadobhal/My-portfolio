"use client"
import About from "../Component/Aboutme/page";
import Experience from "../Component/Experience/page";
import Footer from "../Component/Footer/page";
import Intro from "../Component/Introduction/page";
import Navbar from "../Component/Navbar/page"
import Project from "../Component/Projects/page";
import { Skills } from "../Component/Skills/page";

export default function Home() {
  return (
    <div>
    <div className="grid grid-cols-12 mt-8">
      <div className="col-span-1"></div>
      <div className="col-span-10 flex flex-col ">
        <div className=" h-[96vh] flex flex-col gap-32">
          <Navbar/>
          <Intro />
        </div>
        <Skills/>
      </div>
      <div className="col-span-1"></div>
    </div>
    <div className=" w-full">
        <Experience/>
        <About/>
        <Project  />
        <Footer/>
      </div>
    
    </div>
  );
}
