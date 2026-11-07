import type { Metadata } from "next";
import { Unwritten } from "@/components/unwritten";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Work for Abhimanyu Kucheria is not listed yet. Futurebits Tech is the company named publicly.",
};

export default function WorkPage() {
  return (
    <article className="max-w-xl">
      <p className="m-0 font-mono text-[0.72rem] tracking-[0.18em] text-copper uppercase">
        02
      </p>
      <h1 className="mt-3 mb-4 font-serif text-[2.8rem] leading-none font-normal tracking-[-0.04em]">
        Work
      </h1>
      <p className="m-0">
        {site.company} is the company named on his public GitHub profile. No
        projects, clients, or case studies are published here yet.
      </p>
      <div className="mt-8">
        <Unwritten
          label="Projects"
          note="Not listed yet. Public GitHub repositories are not arranged into a portfolio on this page."
        />
      </div>
    </article>
  );
}
