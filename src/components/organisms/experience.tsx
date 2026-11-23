import { Section } from "@/components/atoms/section";
import { ExperienceItem } from "@/components/molecules/experience-item";
import { SectionIntro } from "@/components/molecules/section-intro";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionIntro id="experience-title" title="Professional experience" />
        <div>
          {experience.map((item) => (
            <ExperienceItem key={item.role + item.period} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
