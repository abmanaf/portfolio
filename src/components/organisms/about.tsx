import { Heading } from "@/components/atoms/heading";
import { Section } from "@/components/atoms/section";
import { Text } from "@/components/atoms/text";
import { SectionIntro } from "@/components/molecules/section-intro";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionIntro id="about-title" title={about.title} />
        <div className="flex flex-col gap-5">
          {about.paragraphs.map((paragraph) => (
            <Text key={paragraph} size="lead" tone="default" className="text-foreground/85">
              {paragraph}
            </Text>
          ))}
          <Heading as="h3" level="item" className="mt-4 max-w-[34ch] border-l-2 border-primary pl-5">
            {about.belief}
          </Heading>
        </div>
      </div>
    </Section>
  );
}
