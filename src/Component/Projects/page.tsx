import { SectionIndex } from "@/components/ui/section-index";
import ProjectSection from "./ProjectSection";

const PROJECTS = [
  {
    title: "DBShell",
    category: "Terminal SQL Client",
    description:
      "A terminal-native SQL client for Postgres, MySQL and SQLite built in React (Ink). Queries run against each native engine with no intermediate planner — 75MB resident against 1GB for Electron and JVM clients. Real cancellation via AbortController driving driver-level cancel, AES-256-GCM encryption for saved credentials, and a hand-rolled multi-tab editor with cursor tracking and live schema validation.",
    tags: ["Node.js", "TypeScript", "React Ink", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "Streaming",
    category: "Video Pipeline",
    description:
      "A microservices pipeline for upload, transcoding and adaptive streaming. Chunked uploads land in S3 and emit Kafka events; a transcode service converts to HLS with FFmpeg for adaptive playback.",
    tags: ["Next.js", "FFmpeg", "Kafka", "AWS S3", "Prisma", "Express"],
  },
];

export default function Project() {
  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12">
        <div className="md:col-span-3">
          <SectionIndex label="Selected Work" number="02" />
        </div>
        <div className="md:col-span-9">
          {PROJECTS.map((project) => (
            <ProjectSection key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
