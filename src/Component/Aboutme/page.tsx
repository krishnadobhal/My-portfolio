"use client"
import SVG from "./Svg";

export default function About(){
    return (
        <div className="mt-24">
            <div className="flex flex-col text-black gap-10">
                <div className="flex justify-center">
                    <div className=" text-6xl"><span className="font-extrabold">About</span><span className=" ml-6">me</span></div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-1"></div>
                    <div className="col-span-10 flex gap-14">
                        <div>
                            <SVG/>
                        </div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem, modi vero voluptates magnam labore repellendus consequatur aut animi! Nesciunt, inventore. Enim quas qui autem totam officia aliquam culpa ut odit quaerat ipsa! Amet suscipit molestias, delectus incidunt nobis fugiat obcaecati, vero reprehenderit aliquid quidem sunt praesentium voluptatem, quasi nisi rem quia in pariatur tenetur eos laborum. Illum dicta modi voluptatibus repudiandae eum labore nostrum ipsum aliquid, facere, culpa, corporis itaque! Natus nam necessitatibus, omnis quibusdam iste amet ipsa repellat, modi est dolores tempore. Numquam veniam a tempora eos. Possimus iusto architecto adipisci labore optio magni nostrum excepturi? Odit, iusto.</div>
                    </div>
                    <div className="col-span-1"></div>
                </div>
            </div>
        </div>
    )
}