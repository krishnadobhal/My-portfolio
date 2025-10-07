"use client"
import ProjectSection from "./ProjectSection";

const data = [
    {
        title: "Video Streaming",
        description: (
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
        ),
        link: "https://github.com/krishnadobhal/Video-Streaming",
        img_url: "https://res.cloudinary.com/dpz1gkni7/image/upload/v1736665851/Portfolio/tkpv9ldbrv6huo5m5mve.jpg"
    },
    {
        title: "E-commerce Platform",
        description: (
            <ul className="gap-y-2 list-disc">
                <li>
                    Developed a full-featured e-commerce platform using MERN stack (MongoDB, Express.js, React.js, Node.js).
                </li>
                <li>
                    Implemented user authentication, product catalog, shopping cart, and order management features.
                </li>
                <li>
                    Integrated payment processing using Stripe API for secure transactions.
                </li>
            </ul>
        ),
        link: "https://github.com/1234bhaskar/Pet-Palace",
        img_url: "https://res.cloudinary.com/dpz1gkni7/image/upload/v1726248908/e-commerce_oql45r.png"
    },
    {
        title: "Twitter Clone",
        description: (
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
        ),
        link: "https://github.com/krishnadobhal/Twitter_clone",
        img_url: "https://res.cloudinary.com/dpz1gkni7/image/upload/v1726238576/twitter_zzrkr1.png"
    },
]

export default function Project() {
    return (
        <div className="mt-16 py-20 px-10    bg-black md:px-0" id="project">
            <div className="flex flex-col gap-16 md:gap-24 text-white">
                <div className="flex justify-center">
                    <div className="text-4xl md:text-6xl font-extrabold text-center">Projects</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="hidden md:block md:col-span-1"></div>
                    <div className="flex flex-col gap-16 md:gap-20 col-span-1 md:col-span-10">
                        {data.map((project, index) => (
                            <div key={index}>
                                <ProjectSection
                                    index={index + 1}
                                    title={project.title}
                                    imageUrl={project.img_url}
                                    description={project.description}
                                    link={project.link}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:block md:col-span-1"></div>
                </div>
            </div>
        </div>
    )
}