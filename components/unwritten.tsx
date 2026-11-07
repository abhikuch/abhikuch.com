export function Unwritten({
  label,
  note,
}: {
  label: string;
  note: string;
}) {
  return (
    <div className="grid gap-2 border-t border-dashed border-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <p className="m-0 font-mono text-[0.72rem] tracking-[0.14em] text-copper uppercase">
        {label}
      </p>
      <p className="m-0 text-muted">{note}</p>
    </div>
  );
}
