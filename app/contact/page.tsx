import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email, X, and GitHub for Abhimanyu Kucheria. That is the whole public contact list.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "X",
    value: site.x.handle,
    href: site.x.href,
  },
  {
    label: "GitHub",
    value: site.github.handle,
    href: site.github.href,
  },
] as const;

export default function ContactPage() {
  return (
    <article className="max-w-xl">
      <p className="m-0 font-mono text-[0.72rem] tracking-[0.18em] text-copper uppercase">
        04
      </p>
      <h1 className="mt-3 mb-4 font-serif text-[2.8rem] leading-none font-normal tracking-[-0.04em]">
        Contact
      </h1>
      <p className="m-0 max-w-md">
        Three public addresses. That is the whole contact list for now. There
        is no form on this page.
      </p>
      <ul className="mt-8 list-none p-0">
        {channels.map((channel) => (
          <li key={channel.label} className="border-t border-line py-4">
            <p className="m-0 font-mono text-[0.72rem] tracking-[0.14em] text-muted uppercase">
              {channel.label}
            </p>
            <a
              href={channel.href}
              className="mt-1 inline-block font-serif text-[1.7rem] leading-tight tracking-[-0.03em] no-underline"
            >
              {channel.value}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
