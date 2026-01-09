export function SectionTitle({
  kicker,
  title,
  right,
}: {
  kicker?: string;
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        {kicker ? (
          <div className="text-[11px] tracking-[0.35em] uppercase text-zinc-500">
            {kicker}
          </div>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      {right}
    </div>
  );
}
