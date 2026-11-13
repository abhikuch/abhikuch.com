import type { Metadata } from "next";
import { FactParagraph } from "@/components/fact-paragraph";
import { LinkList } from "@/components/link-list";
import { PageHeader } from "@/components/page-header";
import { companySites, educationLines, educationNote } from "@/lib/facts";

export const metadata: Metadata = {
  title: "About",
  description: educationNote.text,
};

export default function AboutPage() {
  return (
    <article className="flex max-w-xl flex-col gap-8 [overflow-wrap:anywhere]">
      <PageHeader index="01" title="About" />
      <dl className="m-0">
        {educationLines.map((line) => (
          <div
            key={line.label}
            className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-line py-3"
          >
            <dt className="font-mono text-[0.72rem] tracking-[0.12em] text-muted uppercase">
              {line.label}
            </dt>
            <dd className="m-0">{line.text}</dd>
          </div>
        ))}
      </dl>
      <FactParagraph text={educationNote.text} />
      <LinkList links={companySites} />
    </article>
  );
}
