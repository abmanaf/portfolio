import { About } from "@/components/organisms/about";
import { Contact } from "@/components/organisms/contact";
import { CurrentFocus } from "@/components/organisms/current-focus";
import { Experience } from "@/components/organisms/experience";
import { Expertise } from "@/components/organisms/expertise";
import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";
import { Hero } from "@/components/organisms/hero";
import { SelectedWork } from "@/components/organisms/selected-work";

export function PortfolioTemplate() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <CurrentFocus />
        <SelectedWork />
        <Experience />
        <Expertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
