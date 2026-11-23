import { Mail } from "lucide-react";

import { Heading } from "@/components/atoms/heading";
import { Section } from "@/components/atoms/section";
import { Text } from "@/components/atoms/text";
import { ContactLink } from "@/components/molecules/contact-link";
import { contact } from "@/data/portfolio";

export function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-title" className="pb-24 sm:pb-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-4">
          <Heading id="contact-title" level="section">
            {contact.title}
          </Heading>
        </div>
        <div className="flex flex-col gap-8">
          <Text size="lead">{contact.text}</Text>
          <ul className="flex flex-col gap-4">
            <ContactLink
              label={contact.email}
              href={`mailto:${contact.email}`}
              icon={<Mail aria-hidden className="size-5 text-primary" />}
            />
            <ContactLink label="LinkedIn" href={contact.linkedin} />
            <ContactLink label="GitHub" href={contact.github} />
          </ul>
        </div>
      </div>
    </Section>
  );
}
