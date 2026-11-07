import Link from "next/link";

export default function NotFound() {
  return (
    <article className="max-w-xl">
      <p className="m-0 font-mono text-[0.72rem] tracking-[0.18em] text-copper uppercase">
        Missing
      </p>
      <h1 className="mt-3 mb-4 font-serif text-[2.8rem] leading-none font-normal tracking-[-0.04em]">
        This page is not here.
      </h1>
      <p className="m-0">
        The index only has home, about, work, writing, and contact.
      </p>
      <p className="mt-6">
        <Link href="/">Back to the index</Link>
      </p>
    </article>
  );
}
