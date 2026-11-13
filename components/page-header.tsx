import type { ReactNode } from "react";

export function PageHeader({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede?: ReactNode;
}) {
  return (
    <header>
      <p className="m-0 font-mono text-[0.72rem] tracking-[0.18em] text-copper uppercase">
        {index}
      </p>
      <h1 className="mt-3 mb-4 font-serif text-[2.8rem] leading-[0.95] font-normal tracking-[-0.04em]">
        {title}
      </h1>
      {lede ? <div className="max-w-xl">{lede}</div> : null}
    </header>
  );
}
