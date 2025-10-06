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
        <div className="grid grid-cols-12">
            <div className="col-span-5 flex items-center">
                <DirectionAwareHover
                    imageUrl={imageUrl}>
                    {title}
                </DirectionAwareHover>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-6 flex flex-col pt-5 pb-10 gap-6">
                <div className="flex items-center gap-10" >
                    <div className="text-6xl font-extrabold">
                        {index}
                    </div>
                    <div className="text-4xl">
                        <Link href={link}>
                            <ImNewTab />
                        </Link>
                    </div>
                </div>

                <div className="text-3xl font-bold ml-5">{title}</div>
                <div className="text-lg ml-9">
                    {description}
                </div>
            </div>

        </div>
    )
}