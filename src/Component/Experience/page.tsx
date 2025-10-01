"use client"
import { SiSuzuki } from "react-icons/si";
import Image from "next/image";
import ExperienceSection from "./SingleExperience";

const data = [
    {
        title: "Antworks Money",
        description: (
            <ul className="list-disc">
                <li className="mb-2"> Working on Ant-Affiliate, a portal where users can sell services like loans and insurance and earn commissions.</li>
                <li className="mb-2"> Built features to let admins credit or debit commissions to users, using Laravel 12 and JWT for secure access.</li>
                <li className="mb-2"> Created clean and reliable REST APIs with proper validation, error handling, and support for transaction history.</li>
            </ul>
        ),
        duration: "March 2025 - Present",
        position: "Software Developer Intern ",
        logo: (
            <Image
                src="https://res.cloudinary.com/dpz1gkni7/image/upload/v1748799387/Portfolio/aqrkcd3jchw5txcamman.jpg"
                alt="Antworks Logo"
                width={100}
                height={100}
                className="rounded-full object-cover"
            />)
    },
    {
        title: "Maruti suzuki Indian Limited",
        description: (
            <ul className="list-disc">
                <li className="mb-2">Implemented CSPM architecture using Prisma Cloud Security, improving security of cloud environment by 40%.</li>
                <li className="mb-2">Enforced IAM key rotation policies, securing access control and minimizing credential exposure risks.</li>
                <li className="mb-2">Contributed to the encryption of S3 buckets for improved data security.</li>
                <li className="mb-2">Enhanced centralized visibility of cloud resources by integrating Prisma with AWS, improving monitoring efficiency by 30%.</li>
            </ul>
        ),
        duration: "June/23-Aug/23",
        position: "Cloud Operation Intern",
        logo: (<SiSuzuki />)
    }
]

export default function Experience() {
    return (
        <div className="text-white mt-32 flex flex-col gap-10 bg-black" id="experience">
            <div className="mt-16 flex flex-col gap-12 mb-28">
                <div className="flex flex-col items-center">
                    <div className=" text-6xl"><span>My</span><span className="font-extrabold ml-6">Experience</span></div>
                </div>
                {data.map((exp, index) => (
                    <div key={index}>
                        <ExperienceSection
                            title={exp.title}
                            description={exp.description}
                            duration={exp.duration}
                            position={exp.position}
                            logo={exp.logo}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}