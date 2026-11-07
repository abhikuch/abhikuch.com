import type { Metadata } from "next";
import { Unwritten } from "@/components/unwritten";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Abhimanyu Kucheria in Dubai. A public home page, with the longer sections still unwritten.",
};

export default function HomePage() {
  return (
    <article className="max-w-xl">
      <p className="m-0 font-mono text-[0.72rem] tracking-[0.18em] text-copper uppercase">
        Public index
      </p>
      <h1 className="mt-4 mb-6 font-serif text-[2.6rem] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[3.4rem]">
        A home page.
        <span className="block text-muted">The rest is still blank.</span>
      </h1>
      <p className="m-0 text-[1.15rem] leading-relaxed">
        {site.name} is in {site.place} and works at {site.company}. This site
        is the place those public facts can grow into about, work, writing,
        and contact. Only the facts already public are filled in.
      </p>
      <blockquote className="my-8 border-l border-copper bg-copper-soft/50 px-4 py-3">
        <p className="m-0 font-serif text-[1.35rem] leading-snug tracking-[-0.02em]">
          “{site.githubBio}”
        </p>
        <footer className="mt-2 font-mono text-[0.72rem] tracking-[0.08em] text-muted uppercase">
          GitHub profile, {site.github.handle}
        </footer>
      </blockquote>
      <div>
        <Unwritten
          label="Biography"
          note="Not written yet. Nothing on this site guesses at one."
        />
        <Unwritten
          label="Work"
          note="Not listed yet. No projects have been added."
        />
        <Unwritten
          label="Writing"
          note="Not published yet. There are no essays here."
        />
      </div>
    </article>
  );
}
