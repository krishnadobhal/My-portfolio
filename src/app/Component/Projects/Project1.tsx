import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";

export default function Project1(){
    return(
        <div className="grid grid-cols-12">
                        <div className="col-span-5">
                            <DirectionAwareHover 
                            imageUrl="https://res.cloudinary.com/dpz1gkni7/image/upload/v1726238576/twitter_zzrkr1.png">
                                Twitter CLone
                            </DirectionAwareHover>
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-6 flex flex-col pt-5 pb-10 gap-6">
                            <div className="flex items-center gap-10" >
                                <div className="text-6xl font-extrabold">
                                    01
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
                                    Developed full-stack social media platform using Next.js, React, TypeScript, Node.js, Express, Apollo Server, and PostgreSQL.
                                    </li>
                                    <li>
                                    Implemented core features: user authentication, tweet creation, following/unfollowing, likes, and comments.
                                    </li>
                                    <li>
                                    Optimized performance using GraphQL and Apollo Client for efficient data fetching and real-time updates.
                                    </li>
                                </ul>
                            </div>
                        </div>
                
                    </div>
    )
}