import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import type { Experience } from "@/data/portfolio";

export function ExperienceItem({ item }: { item: Experience }) {
  const meta = [item.org, item.place].filter(Boolean).join(", ");

  return (
    <article className="grid gap-3 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[11rem_1fr] md:gap-10">
      <p className="text-sm text-muted-foreground">{item.period}</p>
      <div className="flex flex-col gap-3">
        <div>
          <Heading as="h3" level="item">
            {item.role}
          </Heading>
          {meta ? <p className="mt-1 text-sm text-primary">{meta}</p> : null}
        </div>
        {item.intro ? <Text>{item.intro}</Text> : null}
        <ul className="flex max-w-[62ch] list-disc flex-col gap-2 pl-5 text-muted-foreground marker:text-border">
          {item.points.map((point) => (
            <li key={point} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
