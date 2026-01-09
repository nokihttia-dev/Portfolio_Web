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
        "chip",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
