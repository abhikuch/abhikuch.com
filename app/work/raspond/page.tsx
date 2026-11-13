import type { Metadata } from "next";
import { FactParagraph } from "@/components/fact-paragraph";
import { LinkList } from "@/components/link-list";
import { PageHeader } from "@/components/page-header";
import {
  raspondLinks,
  raspondProduct,
  raspondProfile,
  raspondUnnamed,
  recommendations,
} from "@/lib/facts";

const page = recommendations[3];

export const metadata: Metadata = {
  title: "Raspond",
  description: raspondUnnamed.text,
};

export default function RaspondPage() {
  return (
    <article className="flex max-w-xl flex-col gap-8 [overflow-wrap:anywhere]">
      <PageHeader index="02" title="Raspond" />
      <FactParagraph text={raspondProduct.text} />
      <FactParagraph text={raspondProfile.text} />
      <FactParagraph text={raspondUnnamed.text} />
      <FactParagraph text={page.text} />
      <LinkList links={raspondLinks} />
    </article>
  );
}
