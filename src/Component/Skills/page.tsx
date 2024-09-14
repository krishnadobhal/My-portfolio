"use client";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiApollographql } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";

export const Skills = () => {
    return (
        <div className="flex flex-col gap-14 justify-center items-center text-black ">
                <div className=" text-6xl"><span>My</span><span className="font-extrabold ml-5">Skills</span></div>
                <div className="flex flex-col gap-y-10 text-8xl w-full items-center">
                        <div className="flex justify-evenly w-full ">
                            <div className=" flex flex-col border-2 py-10 items-center px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50" >
                                <RiNextjsFill  className=""/>
                                <div className="text-sm">NextJs</div>
                            </div>
                            <div className=" flex flex-col border-2 py-10 items-center px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50 ">
                                <SiTypescript />
                                <div className="text-sm">TypeScript</div>
                            </div>
                            <div className=" flex flex-col border-2 py-10 items-center px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50 ">
                                <SiReactquery />
                                <div className="text-sm">TanStack Query</div>
                            </div>
                            <div className=" flex flex-col border-2 py-10 items-center px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50 ">
                                <SiApollographql />
                                <div className="text-sm">Apollo Sever</div>
                            </div>
                        </div>
                        <div className="flex justify-evenly w-full">
                            <div className=" flex flex-col border-2 py-10 items-center px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50 ">
                                <GrGraphQl />
                                <div className="text-sm">Graphql</div>
                            </div>
                            <div className="  flex flex-col border-2 py-10 items-center px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50 ">
                                <DiNodejs />
                                <div className="text-sm">Nodejs</div>
                            </div>
                            <div className=" flex flex-col border-2 py-10 items-center px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50 ">
                                <BiLogoPostgresql />
                                <div className="text-sm">PostgresSQL</div>
                            </div>
                            <div className=" flex flex-col border-2 py-10 items-center px-16 rounded-xl border-black gap-4 hover:text-white hover:bg-black transition delay-50 ">
                                <SiPrisma />
                                <div className="text-sm">Prisma</div>
                            </div>
                        </div>
                </div>
        </div>
    );
};
