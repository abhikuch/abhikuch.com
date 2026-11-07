import type { Metadata } from "next";
import { Unwritten } from "@/components/unwritten";

export const metadata: Metadata = {
  title: "Writing",
  description: "No writing by Abhimanyu Kucheria is published on this site yet.",
};

export default function WritingPage() {
  return (
    <article className="max-w-xl">
      <p className="m-0 font-mono text-[0.72rem] tracking-[0.18em] text-copper uppercase">
        03
      </p>
      <h1 className="mt-3 mb-4 font-serif text-[2.8rem] leading-none font-normal tracking-[-0.04em]">
        Writing
      </h1>
      <p className="m-0">
        No essays, notes, or posts are published here yet. When something is
        written for this site, it will be listed on this page.
      </p>
      <div className="mt-8">
        <Unwritten
          label="Pieces"
          note="Not published yet. There is no archive to browse."
        />
      </div>
    </article>
  );
}
