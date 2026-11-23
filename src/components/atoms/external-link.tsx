import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ExternalLinkProps = React.ComponentProps<"a"> & {
  icon?: React.ReactNode;
};

export function ExternalLink({
  className,
  children,
  icon,
  href,
  ...props
}: ExternalLinkProps) {
  const isExternal = href?.startsWith("http");

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-foreground underline decoration-border decoration-1 underline-offset-[6px] transition-colors hover:decoration-primary",
        className,
      )}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {icon}
      {children}
      {isExternal ? (
        <ArrowUpRight
          aria-hidden
          className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
        />
      ) : null}
    </a>
  );
}
