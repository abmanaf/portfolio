import * as React from "react";

import { Container } from "@/components/atoms/container";
import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  bordered?: boolean;
};

export function Section({
  className,
  children,
  bordered = true,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 sm:py-28",
        bordered && "border-t border-border",
        className,
      )}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
