"use client"
import SVG from "./Svg";

export default function About() {
    return (
        <div className="flex flex-col text-black gap-10 mt-24" id="about">
            <div className="flex justify-center">
                <div className="text-6xl">
                    <span className="font-extrabold">About</span>
                    <span className="ml-6">me</span>
                </div>
            </div>

            <div className="grid grid-cols-12">
                <div className="col-span-1"></div>

                <div className="col-span-10 flex gap-14">
                    <div className="hidden md:block">
                        <SVG />
                    </div>

                    <div className="flex flex-col py-6 text-xl gap-4 leading-relaxed">
                        <div>
                            Hello! I&apos;m <span className="font-bold">Krishna Dobhal</span>, a passionate <span className="font-bold">Software Developer</span> from Gurugram with a strong focus on building scalable and efficient web applications. 
                            I recently completed an internship at <span className="font-bold">Maruti Suzuki India Limited</span> as a Cloud Operations Intern, where I worked on <span className="font-bold">Cloud Security Posture Management (CSPM)</span> using Prisma Cloud by Palo Alto.
                        </div>

                        <div>
                            My technical toolkit includes languages like <span className="font-bold">C++</span>, <span className="font-bold">TypeScript</span>, and <span className="font-bold">Python</span>, along with frameworks such as 
                            <span className="font-bold"> Next.js</span>, <span className="font-bold">React</span>, <span className="font-bold">Express</span>, and <span className="font-bold">Node.js</span>. 
                            I also work with <span className="font-bold">GraphQL</span>, <span className="font-bold">Prisma</span>, and <span className="font-bold">PostgreSQL</span> to create robust backend systems, and use <span className="font-bold">AWS</span> for cloud integration.
                        </div>

                        <div>
                            I have a strong grasp of <span className="font-bold">Data Structures & Algorithms</span>, <span className="font-bold">Object-Oriented Programming</span>, and <span className="font-bold">System Design</span>. 
                            I’ve solved over <span className="font-bold">300+ problems on LeetCode</span>, continuously improving my problem-solving and analytical thinking skills.
                        </div>

                        <div>
                            I enjoy architecting microservice-based systems and have built projects like a <span className="font-bold">video streaming platform</span> and a <span className="font-bold">pet e-commerce app</span> with real-time analytics, semantic search, and PayPal integration.
                        </div>

                        <div>
                            I’m always eager to explore new technologies, solve challenging problems, and contribute to products that make an impact.
                        </div>
                    </div>
                </div>

                <div className="col-span-1"></div>
            </div>
        </div>
    )
}
