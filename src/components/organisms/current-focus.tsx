import { Section } from "@/components/atoms/section";
import { FocusAreaCard } from "@/components/molecules/focus-area-card";
import { SectionIntro } from "@/components/molecules/section-intro";
import { focus } from "@/data/portfolio";

export function CurrentFocus() {
  return (
    <Section aria-labelledby="focus-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionIntro
          id="focus-title"
          title={focus.title}
          description={focus.description}
        />
        <div className="flex flex-col gap-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {focus.areas.map((area) => (
              <FocusAreaCard key={area.title} {...area} />
            ))}
          </div>
          <ul className="flex flex-col divide-y divide-border border-y border-border">
            {focus.list.map((item) => (
              <li key={item} className="py-4 text-lg leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
