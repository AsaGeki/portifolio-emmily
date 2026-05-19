import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { FloralOrnament } from "@/components/floral";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { identity, projects } from "@/lib/content";

export default function ProjetosPage() {
  return (
    <div className="relative flex min-h-full flex-col">
      <header className="sticky top-0 z-20 border-b border-[color:var(--line)] bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="font-[family-name:var(--font-script)] text-xl leading-none text-primary sm:text-2xl">
              {identity.name}
            </span>
            <span className="hidden text-xs tracking-[0.24em] uppercase text-muted-foreground sm:inline">
              {identity.roles.join(" • ")}
            </span>
          </Link>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full border-[color:var(--line)] bg-white/60 backdrop-blur hover:bg-white",
            )}
          >
            Voltar
          </Link>
        </div>
      </header>

      <main className="relative flex-1">
        <section className="relative overflow-hidden py-14 sm:py-20">
          <FloralOrnament className="opacity-70" />
          <div className="absolute left-0 top-0 h-full w-3 bg-primary" />
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="outline" className="rounded-full px-3 py-1">
                Portfólio
              </Badge>
              <h1 className="mt-5 text-balance font-[family-name:var(--font-serif)] text-5xl leading-[0.95] text-foreground sm:text-6xl">
                {projects.title}
              </h1>
              <p className="mt-4 text-muted-foreground">{projects.description}</p>
            </div>
          </div>
        </section>

        <Section id="lista" title="Seleção de projetos">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.items.map((p) => (
              <Card
                key={p.title}
                className="rounded-3xl border border-[color:var(--line)] bg-white/70 backdrop-blur"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-4">
                    <span className="text-foreground">{p.title}</span>
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                        aria-label={`Abrir ${p.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-full">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}

