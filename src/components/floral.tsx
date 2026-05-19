import type { HTMLAttributes } from "react";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function FloralOrnament({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
      {...props}
    >
      <svg
        className="absolute -right-24 -top-20 h-[28rem] w-[28rem] opacity-70"
        viewBox="0 0 200 200"
        fill="none"
      >
        <g stroke="var(--accent)" strokeOpacity="0.25" strokeWidth="1.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <circle key={i} cx="140" cy="60" r={35 + i * 6} />
          ))}
        </g>
      </svg>
      <svg
        className="absolute -left-32 -bottom-28 h-[30rem] w-[30rem] opacity-70"
        viewBox="0 0 200 200"
        fill="none"
      >
        <g stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="1.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <circle key={i} cx="70" cy="150" r={35 + i * 6} />
          ))}
        </g>
      </svg>
    </div>
  );
}

