"use client"

import { useState } from "react";

import { Container } from "@/components/atoms/container";
import { Logo } from "@/components/atoms/logo";
import { NavLinks } from "@/components/molecules/nav-links";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
        <Logo />
        <div className="flex items-center gap-2">
          <NavLinks className="hidden md:block" />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <NavLinks
                orientation="vertical"
                className="px-4"
                onNavigate={() => setOpen(false)}
              />
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
