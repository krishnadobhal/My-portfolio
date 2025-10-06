"use client";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSpring } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";


const data = [
    { skill: "kafka", icon: <SiApachekafka /> },
    { skill: "NextJs", icon: <RiNextjsFill /> },
    { skill: "Spring Boot", icon: <SiSpring /> },
    { skill: "TypeScript", icon: <SiTypescript /> },
    { skill: "TanStack Query", icon: <SiReactquery /> },
    { skill: "Graphql", icon: <GrGraphQl /> },
    { skill: "Nodejs", icon: <DiNodejs /> },
    { skill: "PostgresSQL", icon: <BiLogoPostgresql /> },
];

export const Skills = () => {
    return (
        <div className="flex flex-col gap-14 justify-center items-center text-black md:px-14 px-4" id="skills">
                <div className=" text-6xl"><span>My</span><span className="font-extrabold ml-5">Skills</span></div>
                <div className=" flex flex-col gap-y-5 text-8xl w-full items-center">  
                        <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-4 md:grid-rows-2 md">
                        {data.map((item, index) => (
                            <div key={index} className="grid place-items-center px-6 py-6 border-2 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50">
                                {item.icon}
                                <div className="flex justify-center text-sm">{item.skill}</div>
                            </div>
                        ))}
                        </div>
                </div>
        </div>
    );
};
