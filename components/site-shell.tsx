import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { site } from "@/lib/site";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-desk p-2 sm:p-4">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-10 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto grid min-h-[calc(100vh-1rem)] max-w-6xl border border-line bg-paper sm:min-h-[calc(100vh-2rem)] lg:grid-cols-[18.5rem_1fr]">
        <aside className="flex flex-col gap-8 border-b border-line px-5 py-6 sm:px-7 sm:py-8 lg:border-r lg:border-b-0">
          <div className="flex items-baseline justify-between gap-4">
            <p className="m-0 font-mono text-[0.72rem] tracking-[0.22em] text-copper">
              {site.short}
            </p>
            <p className="m-0 font-mono text-[0.72rem] tracking-[0.18em] text-muted uppercase">
              {site.place}
            </p>
          </div>
          <div>
            <Link href="/" className="no-underline" aria-label={site.name}>
              <p className="m-0 font-serif text-[2.35rem] leading-[0.9] font-normal tracking-[-0.045em]">
                Abhimanyu
                <br />
                Kucheria
              </p>
            </Link>
          </div>
          <SiteNav />
          <div className="mt-auto flex flex-col gap-3 pt-6">
            <p className="m-0 text-[0.95rem]">{site.company}</p>
            <ul className="m-0 flex list-none flex-col gap-1 p-0 font-mono text-[0.72rem] tracking-[0.04em]">
              <li>
                <a href={site.github.href}>GitHub {site.github.handle}</a>
              </li>
              <li>
                <a href={site.x.href}>X {site.x.handle}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </aside>
        <main id="content" className="px-5 py-7 sm:px-10 sm:py-12">
          {children}
        </main>
      </div>
    </div>
  );
}
