import type { Metadata } from "next";
import { Unwritten } from "@/components/unwritten";
import { PageHeader } from "@/components/page-header";
import { writingPiece } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Writing",
  description: `${writingPiece.text} ${writingPiece.gap}`,
};

export default function WritingPage() {
  return (
    <article className="flex max-w-xl flex-col gap-8">
      <PageHeader index="03" title="Writing" />
      <p className="m-0 font-serif text-[1.7rem] leading-tight tracking-[-0.03em]">
        {writingPiece.text}
      </p>
      <Unwritten label="Essay" note={writingPiece.gap} />
    </article>
  );
}
