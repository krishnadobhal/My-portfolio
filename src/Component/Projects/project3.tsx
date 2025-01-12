import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";

export default function Project2(){
    return(
        <div className="grid grid-cols-12">
                        <div className="col-span-5 flex items-center">
                            <DirectionAwareHover 
                            imageUrl="https://res.cloudinary.com/dpz1gkni7/image/upload/v1736665851/Portfolio/tkpv9ldbrv6huo5m5mve.jpg">
                                Video Streaming
                            </DirectionAwareHover>
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-6 flex flex-col pt-5 pb-10 gap-6">
                            <div className="flex items-center gap-10" >
                                <div className="text-6xl font-extrabold">
                                    01
                                </div>
                                <div className="text-4xl">
                                    <Link href={"https://github.com/krishnadobhal/Video-Streaming"}>
                                        <ImNewTab />
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="text-3xl font-bold ml-5">Video Streaming</div>
                            <div className="text-lg ml-9">
                                <ul className="gap-y-2 list-disc">
                                    <li>
                                        Developed a comprehensive pet e-commerce platform using Next.js and React, offering a wide range of products and upcoming video consultation services
                                    </li>
                                    <li>
                                        Implemented an intuitive user interface with secure authentication (JWT and Google Auth), easy navigation, and streamlined checkout process
                                    </li>
                                    <li>
                                        Created an advanced semantic product search using vectorDB, enhancing product discoverability and user experience
                                    </li>
                                </ul>
                            </div>
                        </div>
                
                    </div>
    )
}