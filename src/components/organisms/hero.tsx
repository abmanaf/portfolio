import { ArrowDown, Mail } from "lucide-react";

import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { FitPlot } from "@/components/molecules/fit-plot";
import { Button } from "@/components/ui/button";
import { contact, profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="py-16 sm:py-24 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <Text size="body" className="text-primary">
            {profile.role}
          </Text>
          <Heading as="h1" level="display" id="hero-title">
            {profile.headline}
          </Heading>
          <div className="flex flex-col gap-4">
            <Text size="lead">{profile.intro}</Text>
            <Text>{profile.intro2}</Text>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${contact.email}`}>
                <Mail aria-hidden />
                Email me
              </a>
            </Button>
            <Button asChild size="lg" variant="default">
              <a href="/abmanaf_resume.pdf" download>
                <ArrowDown aria-hidden />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        <FitPlot className="mx-auto w-full max-w-md lg:max-w-none" />
      </Container>
    </section>
  );
}
