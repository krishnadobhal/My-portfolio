import { SectionIndex } from "@/components/ui/section-index";

const CATEGORIES = [
  { label: "Languages", items: "C++, Python, TypeScript" },
  { label: "Frontend", items: "React, Next.js, Tailwind, Apollo Client, TanStack Query" },
  { label: "Backend", items: "Node.js, Express, GraphQL, Apollo Server, REST, JWT, OAuth" },
  { label: "Data", items: "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch" },
  { label: "Infra", items: "Kafka, BullMQ, Prisma, Sequelize, FFmpeg, LangChain" },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12">
        <div className="md:col-span-3">
          <SectionIndex label="Toolkit" number="03" />
        </div>

        <div className="md:col-span-9">
          <div className="grid gap-8 sm:grid-cols-2">
            {CATEGORIES.map((cat) => (
              <div key={cat.label}>
                <div className="text-label text-amber">{cat.label}</div>
                <p className="text-body mt-3 text-paper/85">{cat.items}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-10">
            <div className="text-label text-amber">Education</div>
            <h3 className="text-h2 mt-3">B.Tech Computer Science</h3>
            <p className="text-body mt-2 text-paper/60">
              Maharshi Dayanand University, 2021—2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
