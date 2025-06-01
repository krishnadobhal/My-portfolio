"use client"
import { SiSuzuki } from "react-icons/si";
import Image from "next/image";


export default function Experience() {
    return (
        <div className="text-white mt-32 flex flex-col gap-10 bg-black ">
            <div className="mt-16 flex flex-col gap-12 mb-28">
            <div className="flex flex-col items-center">
                <div className=" text-6xl"><span>My</span><span className="font-extrabold ml-6">Experience</span></div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-10 border-2 rounded-2xl p-8 border-slate-700 gap-3 flex flex-col">
                    <div className="grid grid-cols-12 gap-16 items-center">
                        <div className=" col-span-1 flex items-center justify-center"> 
                            <Image
                                src="https://res.cloudinary.com/dpz1gkni7/image/upload/v1748799387/Portfolio/aqrkcd3jchw5txcamman.jpg"
                                alt="Antworks Logo"
                                width={100}
                                height={100}
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="text-4xl col-span-8 text-left font-bold">
                            Antworks Money
                        </div>
                        <div className="text-lg col-span-3 text-right mr-5">
                            March 2025 - Present
                        </div>
                    </div>
                    <div className="grid grid-cols-12 px-10">
                        <div className="col-span-1"></div>
                        <div className="col-span-11 text-xl font-bold">Software Developer Intern </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-2"></div>
                        <div className="col-span-10 text-xl">
                            <ul className="list-disc">
                                <li className="mb-2"> Working on Ant-Affiliate, a portal where users can sell services like loans and insurance and earn commissions.</li>
                                <li className="mb-2"> Built features to let admins credit or debit commissions to users, using Laravel 12 and JWT for secure access.</li>
                                <li className="mb-2"> Created clean and reliable REST APIs with proper validation, error handling, and support for transaction history.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-1"></div>
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
                            <ul className="list-disc">
                                <li className="mb-2">Implemented CSPM architecture using Prisma Cloud Security, improving security of cloud environment by 40%.</li>
                                <li className="mb-2">Enforced IAM key rotation policies, securing access control and minimizing credential exposure risks.</li>
                                <li className="mb-2">Contributed to the encryption of S3 buckets for improved data security.</li>
                                <li className="mb-2">Enhanced centralized visibility of cloud resources by integrating Prisma with AWS, improving monitoring efficiency by 30%.</li>
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