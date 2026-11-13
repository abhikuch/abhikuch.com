import type { Metadata } from "next";
import { FactParagraph } from "@/components/fact-paragraph";
import { LinkList } from "@/components/link-list";
import { PageHeader } from "@/components/page-header";
import {
  buildCredit,
  recommendations,
  tgimcLinks,
  tgimcMore,
} from "@/lib/facts";

const page = recommendations[0];

export const metadata: Metadata = {
  title: "The Great Indian Market Championship",
  description: page.text,
};

export default function TgimcPage() {
  return (
    <article className="flex max-w-xl flex-col gap-8 [overflow-wrap:anywhere]">
      <PageHeader index="02" title="The Great Indian Market Championship" />
      <FactParagraph text={page.text} />
      {tgimcMore.map((fact) => (
        <FactParagraph key={fact.text} text={fact.text} />
      ))}
      <FactParagraph text={buildCredit.text} />
      <LinkList links={tgimcLinks} />
    </article>
  );
}
