import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  id?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionIntro({
  id,
  title,
  description,
  className,
}: SectionIntroProps) {
  return (
    <div className={cn("flex flex-col gap-4 lg:sticky lg:top-24", className)}>
      <Heading id={id} level="section">
        {title}
      </Heading>
      {description ? <Text>{description}</Text> : null}
    </div>
  );
}
