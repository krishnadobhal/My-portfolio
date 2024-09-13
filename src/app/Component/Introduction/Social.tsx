"use client"
import React, { FC } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

interface SocialComponentProps{
    className?:string
}

export const SocialComponent:FC<SocialComponentProps> = ({className}) => {
  return (
    <div className={className}> 
        <div className='flex gap-7 text-4xl'>
            <div className='border-2 p-3 rounded-xl border-black hover:text-white hover:bg-black transition delay-50'>
                <FaXTwitter/>
            </div>
            <div className='border-2 p-3 rounded-xl border-black hover:text-white hover:bg-black transition delay-50'>
                <FaGithub/>
            </div>
            <div className='border-2 p-3 rounded-xl border-black hover:text-white hover:bg-black transition delay-50'>
                <FaLinkedin/>
            </div>
            <div className='border-2 p-3 rounded-xl border-black hover:text-white hover:bg-black transition delay-50'>
                <FaDiscord/>
            </div>
        </div>
    </div>
  );
};

export default SocialComponent;
