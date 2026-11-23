import { NavLink } from "@/components/atoms/nav-link";
import { navItems } from "@/data/portfolio";

export function NavLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Primary" className={className}>
      <ul className="flex items-center gap-5 sm:gap-7">
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
