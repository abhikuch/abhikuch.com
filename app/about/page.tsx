import type { Metadata } from "next";
import { Unwritten } from "@/components/unwritten";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Public facts about Abhimanyu Kucheria. A longer biography is not written yet.",
};

const facts = [
  { label: "Name", value: site.name },
  { label: "Place", value: site.place },
  { label: "Company", value: site.company },
  { label: "GitHub", value: site.github.handle, href: site.github.href },
  { label: "X", value: site.x.handle, href: site.x.href },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
] as const;

export default function AboutPage() {
  return (
    <article className="max-w-xl">
      <p className="m-0 font-mono text-[0.72rem] tracking-[0.18em] text-copper uppercase">
        01
      </p>
      <h1 className="mt-3 mb-4 font-serif text-[2.8rem] leading-none font-normal tracking-[-0.04em]">
        About
      </h1>
      <p className="m-0 max-w-md text-muted">
        What is already public. A longer account of his life and work is not
        on this page.
      </p>
      <dl className="mt-8 mb-2">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-line py-3"
          >
            <dt className="font-mono text-[0.72rem] tracking-[0.12em] text-muted uppercase">
              {fact.label}
            </dt>
            <dd className="m-0">
              {"href" in fact ? (
                <a href={fact.href}>{fact.value}</a>
              ) : (
                fact.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      <Unwritten
        label="Biography"
        note="Not written yet. This page will not invent a history, a role, or a story."
      />
    </article>
  );
}
