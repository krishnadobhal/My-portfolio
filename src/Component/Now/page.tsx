import { TechTag } from "@/components/ui/tech-tag";

const STACK = [
  "TypeScript",
  "Node.js",
  "Elasticsearch",
  "Kafka",
  "PostgreSQL",
  "Next.js",
  "GraphQL",
  "Redis",
];

export default function Now() {
  return (
    <section id="now" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="text-label text-amber md:col-span-2">Now</div>
          <p className="text-body text-paper/85 md:col-span-10">
            Software developer working across Node, TypeScript, Postgres and
            Elasticsearch — search indexing, event pipelines, and the product
            surfaces on top of them. Currently building lead discovery and
            identity resolution at <span className="text-paper">Outbox Labs</span>.
          </p>
        </div>
      </div>

      <div className="border-t border-line bg-paper/[0.02] px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3">
          {STACK.map((item) => (
            <TechTag key={item}>{item}</TechTag>
          ))}
        </div>
      </div>
    </section>
  );
}
