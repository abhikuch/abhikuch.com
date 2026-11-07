"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, type NavHref } from "@/lib/site";

function isCurrent(pathname: string, href: NavHref): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Sections">
      <ol className="m-0 flex list-none flex-col gap-1 p-0">
        {nav.map((item) => {
          const current = isCurrent(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`grid grid-cols-[2.4rem_1fr] items-baseline gap-2 py-1 no-underline ${
                  current ? "text-ink" : "text-muted"
                }`}
              >
                <span className="font-mono text-[0.72rem] tracking-[0.14em] text-copper">
                  {item.index}
                </span>
                <span
                  className={`font-serif text-[1.35rem] leading-none tracking-[-0.03em] ${
                    current ? "border-b border-copper" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
