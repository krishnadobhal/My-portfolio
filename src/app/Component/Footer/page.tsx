import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Svg from "../Navbar/svg";

export default function Footer(){
    return (
        <div className="bg-white p-4 ">
            <div className="grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-8 flex text-2xl items-center text-black font-extrabold gap-3">
                    <Svg/>
                    <div className="">Krishna Dobhal</div>
                </div>
                <div className="col-span-3">
                <div className='flex gap-7 text-4xl text-right'>
            <div className=''>
                <FaXTwitter/>
            </div>
            <div className=''>
                <FaGithub/>
            </div>
            <div className=''>
                <FaLinkedin/>
            </div>
            <div className=''>
                <FaDiscord/>
            </div>
        </div>
                </div>
            </div>
        </div>
    )
}