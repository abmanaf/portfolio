import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";

export function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Heading as="h3" level="small">
        {title}
      </Heading>
      <Text size="small">{items}</Text>
    </div>
  );
}
