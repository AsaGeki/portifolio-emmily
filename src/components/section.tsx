import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement> & {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full scroll-mt-28 py-16 sm:py-20 lg:py-24",
        className,
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 sm:mb-14">
          {eyebrow ? (
            <p className="text-sm tracking-[0.22em] uppercase text-[color:var(--muted)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-4xl leading-[1.05] text-[color:var(--foreground)] sm:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
