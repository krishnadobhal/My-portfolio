"use client"
import React, { FC } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from 'next/link';

interface SocialComponentProps{
    className?:string
}

export const SocialComponent:FC<SocialComponentProps> = ({}) => {
  return (
    <div > 
        <div className='flex gap-7 text-4xl'>
            <div className='border-2 p-3 rounded-xl border-black hover:text-white hover:bg-black transition delay-50'>
                <Link href={"https://github.com/krishnadobhal/"}>
                    <FaGithub/>
                </Link>
            </div>
            <div className='border-2 p-3 rounded-xl border-black hover:text-white hover:bg-black transition delay-50'>
                <Link href={"https://www.linkedin.com/in/krishnadobhal/"}><FaLinkedin/></Link>
            </div>
            <div className='border-2 p-3 rounded-xl border-black hover:text-white hover:bg-black transition delay-50'>
                <Link href={"https://discord.com/users/885423663380332594"}>
                    <FaDiscord/>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default SocialComponent;
