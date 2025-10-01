"use client"
import Navbar from "@/Component/Navbar/page";
import About from "../Component/Aboutme/page";
import Experience from "../Component/Experience/page";
import Footer from "../Component/Footer/page";
import Intro from "../Component/Introduction/page";
import Project from "../Component/Projects/page";
import { Skills } from "../Component/Skills/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-full md:h-screen flex flex-col justify-start">
        <Navbar />
        <Intro />
      </div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="about"><About /></div>
      <div id="project"><Project /></div>
      <Footer />
    </div>
  );
}