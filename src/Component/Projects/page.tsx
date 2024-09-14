"use client"
import Project1 from "./Project1";
import Project2 from "./Project2";

export default function Project(){
    return(
        <div className="mt-16 py-20 bg-black">
            <div className="flex flex-col gap-24 text-white ">
                <div className="flex justify-center">
                    <div className=" text-6xl font-extrabold">Projects</div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-1"></div>
                    <div className="flex flex-col gap-20 col-span-10">
                        <div><Project1/></div>
                        <div><Project2/></div>
                    </div>
                    <div className="col-span-1 "></div>
                </div>  
            </div>
        </div>
    )
}