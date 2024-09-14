"use client"
import { SiSuzuki } from "react-icons/si";


export default function Experience() {
    return (
        <div className="text-white mt-32 flex flex-col gap-10 bg-black ">
            <div className="mt-16 flex flex-col gap-24 mb-28">
            <div className="flex flex-col items-center">
                <div className=" text-6xl"><span>My</span><span className="font-extrabold ml-6">Experience</span></div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-10 border-2 rounded-2xl p-8 border-slate-700 gap-3 flex flex-col">
                    <div className="grid grid-cols-12 gap-16 items-center">
                        <div className="text-3xl col-span-1 ml-5">
                            <SiSuzuki />
                        </div>
                        <div className="text-4xl col-span-7 text-left font-bold">
                            Maruti suzuki Indian Limited
                        </div>
                        <div className="text-lg col-span-4 text-right mr-5">
                            June/23-Aug/23
                        </div>
                    </div>
                    <div className="grid grid-cols-12 px-10">
                        <div className="col-span-1"></div>
                        <div className="col-span-11 text-xl font-bold">Cloud Operation Intern </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-2"></div>
                        <div className="col-span-10 text-xl">
                            <ul className="list-disc gap-y-2">
                                <li>Implemented CSPM architecture using Prisma Cloud Security , improving security of cloud environment by 40%.</li>
                                <li>Added central visibility on multicloud.</li>
                                <li>Tool to monitoring continuous compliance.</li>
                                <li>Helped in encryption of S3 buckets.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
            </div>
        </div>
    )
}