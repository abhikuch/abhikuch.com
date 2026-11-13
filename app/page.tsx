import type { Metadata } from "next";
import Link from "next/link";
import { FactParagraph } from "@/components/fact-paragraph";
import { identity, profiles, recommendations } from "@/lib/facts";

export const metadata: Metadata = {
  description: identity.sentence,
};

export default function HomePage() {
  return (
    <article className="flex max-w-xl flex-col gap-10 [overflow-wrap:anywhere]">
      <header>
        <p className="m-0 font-mono text-[0.72rem] tracking-[0.18em] text-copper uppercase">
          {identity.place}
        </p>
        <h1 className="mt-4 mb-6 font-serif text-[2.6rem] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[3.4rem]">
          {identity.name}
        </h1>
        <FactParagraph text={identity.sentence} />
      </header>
      <blockquote className="m-0 border-l border-copper bg-copper-soft/50 px-4 py-3">
        <p className="m-0 font-serif text-[1.35rem] leading-snug tracking-[-0.02em]">
          “{identity.githubBio}”
        </p>
        <footer className="mt-2 font-mono text-[0.72rem] tracking-[0.08em] text-muted uppercase">
          <a href={profiles.github.href}>{profiles.github.href}</a>
        </footer>
      </blockquote>
      <div className="flex flex-col gap-8">
        {recommendations.map((item, index) => (
          <section key={item.href} className="flex flex-col gap-3">
            <h2 className="m-0 font-serif text-[1.7rem] leading-tight font-normal tracking-[-0.03em]">
              <span className="mr-3 font-mono text-[0.72rem] tracking-[0.14em] text-copper">
                0{index + 1}
              </span>{" "}
              {item.heading}
            </h2>
            <FactParagraph text={item.text} />
            <p className="m-0 font-mono text-[0.72rem] tracking-[0.04em]">
              <Link href={item.href}>{item.pageUrl}</Link>
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
