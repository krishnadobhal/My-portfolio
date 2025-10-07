import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";

interface ProjectSectionProps {
    title: string;
    imageUrl: string;
    description: React.ReactNode;
    link: string;
    index: number
}

export default function ProjectSection({ title, imageUrl, description, link, index }: ProjectSectionProps) {
    return (
        <div className=" ">
            <div className="flex items-center gap-6 md:gap-10 mb-8">
                <div className="text-4xl md:text-6xl font-extrabold">
                    {index}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-left md:ml-5">{title}</div>
                <div className="text-3xl md:text-4xl">
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        <ImNewTab />
                    </Link>
                </div>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-10 flex flex-col">
                <div className="md:col-span-6">
                    <DirectionAwareHover
                        height={800}
                        width={800}
                        imageUrl={imageUrl}>
                        {title}
                    </DirectionAwareHover>
                </div>
                <div className="text-base md:text-lg text-left md:ml-9 mt-6 md:mt-0 md:col-span-6">
                    <div className="flex items-center">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}