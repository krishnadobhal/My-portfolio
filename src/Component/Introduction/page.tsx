"use client"
import React from 'react';
import { Person } from './person_svg';
import SocialComponent from './Social';
import { MdLocationPin } from "react-icons/md";



const Intro = () => {
    return (
        <div className='pt-20 px-6'>
            <div className='flex-col md:grid md:grid-cols-12 text-black'>
                <div className='md:col-span-4'>
                    <div className='text-md'>
                        <Person />
                    </div>
                </div>
                <div className='md:col-span-1'></div>
                <div className='md:col-span-7 flex flex-col'>
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-black !leading-tight tracking-tight">
                        Hello I'm <span className="font-extrabold">Krishna Dobhal.</span>
                        <br />
                        <span className="font-bold text-white [text-shadow:_0_0_2px_black] md:[-webkit-text-stroke:2px_black]">
                            Software Developer
                        </span>
                        <br />
                        Based In <span className="font-extrabold">Gurugram.</span>
                    </h1>
                    </div>
                    <div className="flex justify-center md:justify-start mt-14 md:mt-14"><SocialComponent /></div>
                </div>

            </div>
        </div>
    );
};

export default Intro;
