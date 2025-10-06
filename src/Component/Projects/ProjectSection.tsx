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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
            <div>
                <div className="flex items-center gap-6 md:gap-10 mb-8">
                    <div className="text-4xl md:text-6xl font-extrabold">
                        {index}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-left md:ml-5">{title}</div>
                    <div className="text-3xl md:text-4xl">
                        <Link href={link}>
                            <ImNewTab />
                        </Link>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-5 flex items-center justify-center md:justify-start">
                    <DirectionAwareHover
                        imageUrl={imageUrl}>
                        {title}
                    </DirectionAwareHover>
                </div>
                <div className="hidden md:block md:col-span-1"></div>
                <div className="col-span-12 md:col-span-6 flex flex-col pt-2 md:pt-5 pb-10 gap-6">

                </div>

                <div className="text-base md:text-lg text-left md:ml-9">
                    {description}
                </div>
            </div>

        </div>
    )
}