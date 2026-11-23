import { Heading } from "@/components/atoms/heading";
import { Tag } from "@/components/atoms/tag";
import { Text } from "@/components/atoms/text";
import type { Project } from "@/data/portfolio";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="grid gap-4 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[11rem_1fr] md:gap-10">
      <p className="text-sm text-primary">{project.category}</p>
      <div className="flex flex-col gap-4">
        <Heading as="h3" level="item">
          {project.title}
        </Heading>
        <Text>{project.description}</Text>
        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
