import { Section } from "@/components/atoms/section";
import { SectionIntro } from "@/components/molecules/section-intro";
import { SkillGroup } from "@/components/molecules/skill-group";
import { Separator } from "@/components/ui/separator";
import { expertise, growing } from "@/data/portfolio";

export function Expertise() {
  return (
    <Section id="expertise" aria-labelledby="expertise-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionIntro id="expertise-title" title="Technical expertise" />
        <div className="flex flex-col gap-10">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {expertise.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
          </div>
          <Separator />
          <SkillGroup title={growing.title} items={growing.items} />
        </div>
      </div>
    </Section>
  );
}
