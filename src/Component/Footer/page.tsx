import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";
import Svg from "../Navbar/svg";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-white p-4 max-w-full flex justify-between items-center" >
            <div className="flex text-xl md:text-2xl items-center text-black font-extrabold gap-3">
                <Svg />
                <div className="">Krishna Dobhal</div>
            </div>
            <div className="">
                <div className="flex gap-7 text-2xl md:text-4xl text-right">
                    <div className="">
                        <Link href={"https://github.com/krishnadobhal/"}>
                            <FaGithub />
                        </Link>
                    </div>
                    <Link href={"https://www.linkedin.com/in/krishnadobhal/"}>
                        <FaLinkedin />
                    </Link>
                    <div className="">
                        <Link href={"https://discord.com/users/885423663380332594"}>
                            <FaDiscord />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
