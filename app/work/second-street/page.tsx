import type { Metadata } from "next";
import { FactParagraph } from "@/components/fact-paragraph";
import { LinkList } from "@/components/link-list";
import { PageHeader } from "@/components/page-header";
import {
  recommendations,
  secondStreetAboutSentences,
  secondStreetHomeSentences,
  secondStreetLinks,
} from "@/lib/facts";

const page = recommendations[1];

export const metadata: Metadata = {
  title: "Second Street Partners",
  description: page.text,
};

export default function SecondStreetPage() {
  return (
    <article className="flex max-w-xl flex-col gap-8 [overflow-wrap:anywhere]">
      <PageHeader index="02" title="Second Street Partners" />
      {secondStreetAboutSentences.map((fact) => (
        <FactParagraph key={fact.text} text={fact.text} />
      ))}
      {secondStreetHomeSentences.map((fact) => (
        <FactParagraph key={fact.text} text={fact.text} />
      ))}
      <FactParagraph text={page.text} />
      <LinkList links={secondStreetLinks} />
    </article>
  );
}
