import type { Metadata } from "next";
import { FactParagraph } from "@/components/fact-paragraph";
import { PageHeader } from "@/components/page-header";
import { contactChannels, contactFormNote, contactNotes } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Contact",
  description: contactFormNote,
};

export default function ContactPage() {
  return (
    <article className="flex max-w-xl flex-col gap-8 [overflow-wrap:anywhere]">
      <PageHeader index="04" title="Contact" lede={contactFormNote} />
      <ul className="m-0 list-none p-0">
        {contactChannels.map((channel) => (
          <li key={channel.label} className="border-t border-line py-4">
            <p className="m-0 font-mono text-[0.72rem] tracking-[0.14em] text-muted uppercase">
              {channel.label}
            </p>
            <a
              href={channel.href}
              className="mt-1 inline-block font-serif text-[1.45rem] leading-tight tracking-[-0.03em] break-all no-underline"
            >
              {channel.value}
            </a>
          </li>
        ))}
      </ul>
      {contactNotes.map((note) => (
        <FactParagraph key={note.text} text={note.text} />
      ))}
    </article>
  );
}
