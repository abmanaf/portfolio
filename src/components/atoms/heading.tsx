import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-display text-balance text-foreground", {
  variants: {
    level: {
      display:
        "text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl",
      section:
        "text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl",
      item: "text-xl font-semibold leading-snug tracking-[-0.01em]",
      small: "text-base font-semibold leading-snug",
    },
  },
  defaultVariants: { level: "section" },
});

type HeadingProps = React.ComponentProps<"h2"> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4";
  };

export function Heading({
  as: Tag = "h2",
  level,
  className,
  ...props
}: HeadingProps) {
  return <Tag className={cn(headingVariants({ level }), className)} {...props} />;
}
