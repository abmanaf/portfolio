import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    size: {
      lead: "text-lg leading-relaxed sm:text-xl sm:leading-relaxed",
      body: "text-base leading-relaxed",
      small: "text-sm leading-relaxed",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: { size: "body", tone: "muted" },
});

type TextProps = React.ComponentProps<"p"> & VariantProps<typeof textVariants>;

export function Text({ size, tone, className, ...props }: TextProps) {
  return <p className={cn(textVariants({ size, tone }), "max-w-[62ch]", className)} {...props} />;
}
