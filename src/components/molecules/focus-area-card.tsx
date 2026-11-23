import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FocusAreaCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <Card className="gap-2 py-5">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{text}</CardDescription>
      </CardHeader>
    </Card>
  );
}
