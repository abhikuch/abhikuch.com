import type { Metadata } from "next";
import Link from "next/link";
import { FactParagraph } from "@/components/fact-paragraph";
import { LinkList } from "@/components/link-list";
import { PageHeader } from "@/components/page-header";
import {
  clearmindGap,
  earlierWork,
  earlierWorkNote,
  futurebitsLinks,
  futurebitsNotes,
  otherWork,
  recommendations,
} from "@/lib/facts";

const workPages = [
  recommendations[0],
  recommendations[1],
  recommendations[3],
] as const;

export const metadata: Metadata = {
  title: "Work",
  description: earlierWorkNote.text,
};

export default function WorkPage() {
  return (
    <article className="flex max-w-xl flex-col gap-10 [overflow-wrap:anywhere]">
      <PageHeader index="02" title="Work" />
      <ul className="m-0 list-none p-0">
        {workPages.map((page) => (
          <li key={page.href} className="border-t border-line py-4">
            <Link
              href={page.href}
              className="font-serif text-[1.7rem] leading-tight tracking-[-0.03em] no-underline"
            >
              {page.title}
            </Link>
            <p className="mt-2 mb-0 font-mono text-[0.72rem]">
              <Link href={page.href}>{page.pageUrl}</Link>
            </p>
          </li>
        ))}
      </ul>
      <section className="flex flex-col gap-4">
        <h2 className="m-0 font-serif text-[1.7rem] leading-tight font-normal tracking-[-0.03em]">
          Futurebits
        </h2>
        {futurebitsNotes.map((note) => (
          <FactParagraph key={note.text} text={note.text} />
        ))}
        <LinkList links={futurebitsLinks} />
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="m-0 font-serif text-[1.7rem] leading-tight font-normal tracking-[-0.03em]">
          Earlier work
        </h2>
        <FactParagraph text={recommendations[2].text} />
        <FactParagraph text={earlierWorkNote.text} />
        {earlierWork.map((role) => (
          <FactParagraph key={role.text} text={role.text} />
        ))}
        <FactParagraph text={otherWork.text} />
        <p className="m-0 font-mono text-[0.72rem] tracking-[0.14em] text-copper uppercase">
          Do not attribute
        </p>
        <FactParagraph text={clearmindGap.text} />
        <p className="m-0 font-mono text-[0.72rem]">
          <a href={clearmindGap.sourceUrl}>{clearmindGap.sourceUrl}</a>
        </p>
      </section>
    </article>
  );
}
