import { TechTag } from "@/components/ui/tech-tag";

interface ProjectSectionProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export default function ProjectSection({
  title,
  category,
  description,
  tags,
}: ProjectSectionProps) {
  return (
    <div className="border-b border-line py-12 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h3 className="text-h1">{title}</h3>
        <div className="text-nav shrink-0 text-paper/60">{category}</div>
      </div>

      <p className="text-body mt-6 max-w-2xl text-paper/85">{description}</p>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {tags.map((tag) => (
          <TechTag key={tag}>{tag}</TechTag>
        ))}
      </div>
    </div>
  );
}
