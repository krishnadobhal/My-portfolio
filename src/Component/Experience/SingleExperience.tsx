
interface ExperienceSectionProps {
    title: string;
    description: React.ReactNode;
    duration: string;
    position: string;
    logo: React.ReactNode;
}

export default function ExperienceSection({ title, description, duration, position, logo }: ExperienceSectionProps) {
    return (
        <div className="p-3">
            <div className="border-2 rounded-2xl p-8 border-slate-700 gap-3 flex flex-col">
                <div className="md:grid md:grid-cols-12 md:gap-16 md:items-center">
                    <div className="text-3xl md:col-span-1 md:ml-5 flex justify-center items-center mb-3 text-white rounded-full">
                        <div>
                            {logo}
                        </div>
                    </div>
                    <div className="text-4xl md:col-span-7 md:text-left font-bold text-center">
                        {title}
                    </div>
                    <div className="text-lg md:col-span-4 text-right mr-5 mt-4">
                        {duration}
                    </div>
                </div>
                <div className="md:grid md:grid-cols-12 md:px-10">
                    <div className="md:col-span-1"></div>
                    <div className="md:col-span-11 text-xl font-bold my-2">{position}</div>
                </div>
                <div className="md:grid md:grid-cols-12">
                    <div className="md:col-span-1"></div>
                    <div className="md:col-span-10 text-xl">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}