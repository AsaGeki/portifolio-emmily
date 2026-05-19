import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

import { FloralOrnament } from "@/components/floral";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { dailyRates, identity, starterPackages } from "@/lib/content";
import { toWhatsAppLink } from "@/lib/phone";

export default function PrecosPage() {
  const whatsappHref = toWhatsAppLink({
    countryCode: identity.whatsappCountryCode,
    phone: identity.phone,
    text: "Olá! Quero saber mais sobre os pacotes e diárias.",
  });

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
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-[color:var(--line)] bg-white/60 backdrop-blur hover:bg-white",
              )}
            >
              Voltar
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/25 hover:bg-primary/90",
              )}
            >
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="relative flex-1">
        <section className="relative overflow-hidden py-14 sm:py-20">
          <FloralOrnament className="opacity-70" />
          <div className="absolute left-0 top-0 h-full w-3 bg-primary" />
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="outline" className="rounded-full px-3 py-1">
                Preços
              </Badge>
              <h1 className="mt-5 text-balance font-[family-name:var(--font-serif)] text-5xl leading-[0.95] text-foreground sm:text-6xl">
                Diárias e pacotes
              </h1>
              <p className="mt-4 text-muted-foreground">
                Se quiser, eu monto um pacote sob medida para o seu negócio.
              </p>
            </div>
          </div>
        </section>

        <Section id="pacotes" eyebrow={starterPackages.eyebrow} title={starterPackages.title}>
          <div className="absolute left-0 top-0 h-full w-3 bg-primary" />
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              {starterPackages.items.map((p) => (
                <Card
                  key={p.title}
                  className="rounded-3xl border border-[color:var(--line)] bg-white/70 p-6 backdrop-blur sm:p-7"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/25">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      <h2 className="text-lg font-semibold text-foreground">
                        {p.title}
                      </h2>
                    </div>
                    <Badge
                      variant="secondary"
                      className="rounded-full px-4 py-1 text-sm font-semibold text-foreground"
                    >
                      {p.price}
                    </Badge>
                  </div>
                  <p className="mt-4 whitespace-pre-line leading-7 text-muted-foreground">
                    {p.description}
                  </p>
                </Card>
              ))}
            </div>
            <div className="relative hidden lg:col-span-5 lg:block">
              <div className="sticky top-28">
                <Card className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white/40 p-6 shadow-[0_30px_70px_rgba(0,0,0,0.12)]">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/assets/phone-hand.png"
                      alt="Celular"
                      fill
                      className="object-contain"
                      sizes="420px"
                    />
                  </div>
                </Card>
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Conteúdos prontos para postar, com estética e estratégia.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="diarias" eyebrow={dailyRates.eyebrow} title={dailyRates.title}>
          <div className="grid gap-6 lg:grid-cols-3">
            {dailyRates.items.map((r) => (
              <Card
                key={r.title}
                className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--accent-soft)]/55 p-6 sm:p-8"
              >
                <CardHeader className="px-0 pb-0 pt-0">
                  <CardTitle className="rounded-full bg-primary/20 px-4 py-2 text-center text-sm font-medium text-foreground">
                    {r.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="mt-6 text-center text-muted-foreground">
                    {r.description}
                  </p>
                  <div className="mt-6 text-center">
                    <p className="text-sm font-semibold text-foreground">
                      A partir de:
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-serif)] text-4xl text-foreground sm:text-5xl">
                      {r.price}
                    </p>
                    <p className="mt-4 text-lg tracking-[0.2em] uppercase text-foreground/75">
                      {r.unit}
                    </p>
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

