import * as React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavLink({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "rounded-sm py-1 text-sm text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
