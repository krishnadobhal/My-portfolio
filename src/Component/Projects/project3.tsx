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
                                        Designed and developed a microservices-based architecture for video upload, transcoding, and streaming using Kafka for asynchronous communication.
                                    </li>
                                    <li>
                                        Implemented an Upload Service to handle chunked video uploads, store them in Amazon S3, and trigger events via Kafka for further processing.
                                    </li>
                                    <li>
                                        Built a Transcode Service with FFmpeg to convert videos into HLS-compatible formats for adaptive streaming.
                                    </li>
                                    <li>
                                        Developed a Watch Service to dynamically serve .m3u8 files for seamless video playback.
                                    </li>
                                </ul>
                            </div>
                        </div>
                
                    </div>
    )
}