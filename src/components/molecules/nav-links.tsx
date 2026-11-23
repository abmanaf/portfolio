import { NavLink } from "@/components/atoms/nav-link";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type NavLinksProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
};

export function NavLinks({
  className,
  orientation = "horizontal",
  onNavigate,
}: NavLinksProps) {
  const vertical = orientation === "vertical";

  return (
    <nav aria-label="Primary" className={className}>
      <ul
        className={cn(
          "flex",
          vertical ? "flex-col items-stretch gap-1" : "items-center gap-5 sm:gap-7",
        )}
      >
        {navItems.map((item) => (
          <li key={item.href} className={cn(item.cta && vertical && "mt-3")}>
            {item.cta ? (
              <Button
                asChild
                size="sm"
                className={cn(vertical && "h-11 w-full text-base")}
              >
                <a href={item.href} download onClick={onNavigate}>
                  {item.label}
                </a>
              </Button>
            ) : (
              <NavLink
                href={item.href}
                onClick={onNavigate}
                className={cn(vertical && "block py-3 text-base")}
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}