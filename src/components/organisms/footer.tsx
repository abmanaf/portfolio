import { Container } from "@/components/atoms/container";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
        <p>© 2026 {profile.name}</p>
        <p>{profile.location}</p>
      </Container>
    </footer>
  );
}
