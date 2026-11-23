import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="#top"
      className={cn(
        "font-display text-lg font-semibold tracking-[-0.02em] text-foreground",
        className,
      )}
      aria-label="Abdulmanaf Aliu, back to top"
    >
      Abdulmanaf Aliu
    </Link>
  );
}
