import { Section } from "@/components/atoms/section";
import { ProjectRow } from "@/components/molecules/project-row";
import { SectionIntro } from "@/components/molecules/section-intro";
import { projects } from "@/data/portfolio";

export function SelectedWork() {
  return (
    <Section id="work" aria-labelledby="work-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionIntro
          id="work-title"
          title="Selected work"
          description="Projects across analytics, machine learning, backend services and frontend engineering."
        />
        <div>
          {projects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
