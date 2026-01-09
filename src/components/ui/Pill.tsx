export function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-[11px] font-medium tracking-[0.25em] uppercase text-zinc-700 shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
