"use client"
import Link from "next/link";
import { Middle } from "./middle";
import { Resume } from "./Resume_icon";
import Svg from "./svg";
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin']
})

export default function Navbar(){
    return (
            <div className={sora.className}>
                <div className="flex justify-between items-center w-full font-extrabold text-xl ">
                    <div className="flex gap-3 items-center text-2xl ">
                        <Svg/>
                        <div className="text-black">Portfolio</div>
                    </div>
                    <Middle/>
                    <Link href={"https://drive.google.com/file/d/1UokF9BOQnfhUb1OE23f90JhczI5L4ntq/view?usp=drive_link"}><Resume/></Link>
                </div>
            </div>
    )
}