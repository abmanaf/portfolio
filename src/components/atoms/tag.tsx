import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Tag({
  className,
  ...props
}: React.ComponentProps<typeof Badge>) {
  return (
    <Badge
      variant="outline"
      className={cn("font-mono text-[0.72rem] font-normal", className)}
      {...props}
    />
  );
}
