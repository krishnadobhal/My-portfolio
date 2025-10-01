"use client"
import SVG from "./Svg";

export default function About() {
    return (
        <div className="flex flex-col text-black gap-10 mt-24" id="about">
            <div className="flex justify-center">
                <div className=" text-6xl"><span className="font-extrabold">About</span><span className=" ml-6">me</span></div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-10 flex gap-14">
                    <div className="hidden md:block">
                        <SVG />
                    </div>
                    <div className="flex flex-col py-6 text-xl gap-4">
                        <div>
                            Hello! I&apos;m a final-year student based in Gurugram, with a strong foundation in <span className="font-bold">software development</span> and <span className="font-bold">cloud operations</span>. I recently completed an internship at <span className="font-bold">Maruti Suzuki India Limited</span> as a Cloud Operations intern, where I gained hands-on experience in <span className="font-bold">cloud technologies</span>.
                        </div>
                        <div>
                            My technical expertise spans a variety of programming languages such as <span className="font-bold">C++</span>, <span className="font-bold">Python</span>, and JavaScript, as well as tools like POSTMAN, <span className="font-bold">AWS Console</span>, VS Studio PowerBI, and <span className="font-bold">Git</span>. I&apos;m also proficient in modern web development frameworks and libraries, including <span className="font-bold">Express</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">React</span>, <span className="font-bold">Apollo Client</span>, and <span className="font-bold">Tailwind CSS</span>, along with server-side technologies like <span className="font-bold">Node.js</span>, <span className="font-bold">Apollo Server</span>, and <span className="font-bold">Prisma</span>.
                        </div>
                        <div>
                            I have a solid understanding of key IT constructs like <span className="font-bold">Data Structures & Algorithms (DSA)</span>, <span className="font-bold">Object-Oriented Programming (OOPS)</span>, <span className="font-bold">Web Development</span>, <span className="font-bold">DBMS</span>, and <span className="font-bold">Operating Systems (OS)</span>. I&apos;ionate about creating scalable, efficient web applications, and enjoy working with backend technologies, especially <span className="font-bold">GraphQL</span> and <span className="font-bold">PostgreSQL</span>.
                        </div>

                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    )
}