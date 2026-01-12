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
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        {kicker ? <div className="section-kicker">{kicker}</div> : null}
        <h2 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          {title}
        </h2>
      </div>
      {right}
    </div>
  );
}
