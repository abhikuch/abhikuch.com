export function LinkList({
  links,
}: {
  links: readonly { label: string; href: string }[];
}) {
  return (
    <ul className="m-0 list-none p-0">
      {links.map((link) => (
        <li key={link.href} className="border-t border-line py-3">
          <p className="m-0 font-mono text-[0.72rem] tracking-[0.14em] text-muted uppercase">
            {link.label}
          </p>
          <a href={link.href} className="mt-1 inline-block break-all">
            {link.href}
          </a>
        </li>
      ))}
    </ul>
  );
}
