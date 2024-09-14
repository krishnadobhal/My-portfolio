"use client"
import React from 'react';
import { Person } from './person_svg';
import SocialComponent from './Social';


const Intro = () => {
    return (
        <div>
            <div className='grid grid-cols-12 text-black '> 
                <div className='col-span-8 flex flex-col'>
                    <div>
                        <span className='text-6xl '>Hello I&apos;m</span>
                        <span className="text-6xl font-black px-3">Krishna Dobhal</span>
                    </div>
                    <div className='mt-4'>
                        <span  className='text-6xl '>Computer Science</span>
                        <span className='px-5 text-6xl font-black'>Graduate</span>
                    </div>
                    <SocialComponent className='relative top-[10rem]'/>
                </div>
                <div className='col-span-4'>
                    <div className='relative top-[-5rem] '>
                        <Person/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
