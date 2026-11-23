import * as React from "react";

import { ExternalLink } from "@/components/atoms/external-link";

type ContactLinkProps = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export function ContactLink({ label, href, icon }: ContactLinkProps) {
  return (
    <li>
      <ExternalLink href={href} icon={icon} className="text-lg">
        {label}
      </ExternalLink>
    </li>
  );
}
