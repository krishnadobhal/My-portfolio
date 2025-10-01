"use client"
import React from 'react';
import { Person } from './person_svg';
import SocialComponent from './Social';
import { MdLocationPin } from "react-icons/md";



const Intro = () => {
    return (
        <div>
            <div className='sm:grid sm:grid-cols-12 text-black '> 
                <div className='sm:col-span-8 flex flex-col'>
                    <div>
                        <div>
                            <div className='text-4xl sm:text-6xl '>Hello I&apos;m</div>
                            <span className="text-4xl sm:text-6xl font-black px-3">Krishna Dobhal</span>
                        </div>
                        <div className='mt-2 sm:mt-4'>
                            <span  className='text-4xl sm:text-6xl '>Computer Science</span>
                            <span className='px-5 text-4xl sm:text-6xl font-black'>Graduate</span>
                        </div>
                    </div>
                    <div className='mt-4 flex '>
                        <span  className='text-4xl sm:text-6xl font-semibold '>Gurugram</span>
                        <div className='px-5 text-4xl sm:text-6xl '><MdLocationPin/></div>
                    </div>
                <div className="flex justify-center sm:justify-start mt-14 sm:mt-28"><SocialComponent/></div>
                </div>
                <div className='sm:col-span-4'>
                    <div className='hidden sm:block sm:relative top-[-5rem] '>
                        <Person/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
