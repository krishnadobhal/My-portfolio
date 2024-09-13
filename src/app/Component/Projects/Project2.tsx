import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";

export default function Project2(){
    return(
        <div className="grid grid-cols-12">
                        <div className="col-span-5">
                            <DirectionAwareHover 
                            imageUrl="https://res.cloudinary.com/dpz1gkni7/image/upload/v1726248908/e-commerce_oql45r.png">
                                Pet Palace
                            </DirectionAwareHover>
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-6 flex flex-col pt-5 pb-10 gap-6">
                            <div className="flex items-center gap-10" >
                                <div className="text-6xl font-extrabold">
                                    02
                                </div>
                                <div className="text-4xl">
                                    <Link href={"/"}>
                                        <ImNewTab />
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="text-3xl font-bold ml-5">Twitter Clone</div>
                            <div className="text-lg ml-9">
                                <ul className="gap-y-2 list-disc">
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque a sed ducimus aspernatur est perferendis.
                                    </li>
                                    <li>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quos quibusdam odio, iure sequi in?
                                    </li>
                                    <li>
                                    lorem15
                                    </li>
                                </ul>
                            </div>
                        </div>
                
                    </div>
    )
}