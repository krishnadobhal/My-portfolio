"use client";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";


export const Skills = () => {
    return (
        <div className="flex flex-col gap-14 justify-center items-center text-black ">
                <div className=" text-6xl"><span>My</span><span className="font-extrabold ml-5">Skills</span></div>
                <div className=" flex flex-col gap-y-5 text-8xl w-full items-center">  
                        <div className=" grid grid-cols-2 gap-4 sm:flex sm:justify-evenly w-full ">
                            <div className="grid px-6 py-6 sm:flex sm:flex-col border-2 sm:py-10 sm:items-center sm:px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50 ">
                                <SiApachekafka />
                                <div className="flex justify-center text-sm">kafka</div>
                            </div>
                            <div className="grid px-6 py-6 sm:flex sm:flex-col border-2 sm:py-10 sm:items-center sm:px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50" >
                                <RiNextjsFill  className=""/>
                                <div className="flex justify-center text-sm">NextJs</div>
                            </div>
                            <div className="grid px-6 py-6 sm:flex sm:flex-col border-2 sm:py-10 sm:items-center sm:px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50 ">
                                <SiTypescript />
                                <div className="flex justify-center text-sm">TypeScript</div>
                            </div>
                            <div className="grid px-6 py-6 sm:flex sm:flex-col border-2 sm:py-10 sm:items-center sm:px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50 ">
                                <SiReactquery />
                                <div className="flex justify-center text-sm">TanStack Query</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-evenly w-full">
                            <div className="grid px-6 py-6 sm:flex sm:flex-col border-2 sm:py-10 sm:items-center sm:px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50">
                                <GrGraphQl />
                                <div className="flex justify-center text-sm">Graphql</div>
                            </div>
                            <div className="grid px-6 py-6 sm:flex sm:flex-col border-2 sm:py-10 sm:items-center sm:px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50">
                                <DiNodejs />
                                <div className="flex justify-center text-sm">Nodejs</div>
                            </div>
                            <div className="grid px-6 py-6 sm:flex sm:flex-col border-2 sm:py-10 sm:items-center sm:px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50">
                                <BiLogoPostgresql />
                                <div className="flex justify-center text-sm">PostgresSQL</div>
                            </div>
                            <div className="grid px-6 py-6 sm:flex sm:flex-col border-2 sm:py-10 sm:items-center sm:px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50">
                                <FaLaravel />
                                <div className="flex justify-center text-sm">Laravel</div>
                            </div>
                        </div>
                </div>
        </div>
    );
};
