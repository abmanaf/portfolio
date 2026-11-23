import { Container } from "@/components/atoms/container";
import { Logo } from "@/components/atoms/logo";
import { NavLinks } from "@/components/molecules/nav-links";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Container className="flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
        <Logo />
        <NavLinks />
      </Container>
    </header>
  );
}
