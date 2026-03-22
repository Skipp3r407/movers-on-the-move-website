type Props = {
  variant?: "blue" | "orange" | "dark";
};

export function SectionDivider({ variant = "blue" }: Props) {
  const bar =
    variant === "orange"
      ? "from-mo-orange via-orange-400 to-mo-orange"
      : variant === "dark"
        ? "from-mo-black via-mo-charcoal to-mo-black"
        : "from-mo-blue via-blue-400 to-mo-blue";
  return (
    <div
      className="relative h-1.5 w-full overflow-hidden bg-mo-light/80"
      aria-hidden
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${bar} opacity-90`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.35)_50%,transparent_100%)]" />
    </div>
  );
}
