import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";

import { FloralOrnament } from "@/components/floral";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { toWhatsAppLink } from "@/lib/phone";
import {
  about,
  benefits,
  contact,
  identity,
  services,
} from "@/lib/content";

const buildYear = new Date().getFullYear();

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-foreground/80 transition hover:text-foreground"
    >
      {children}
    </a>
  );
}

function CircleArrow() {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/25">
      <ArrowRight className="h-5 w-5" />
    </span>
  );
}

export default function Home() {
  const whatsappHref = toWhatsAppLink({
    countryCode: identity.whatsappCountryCode,
    phone: identity.phone,
    text: "Olá! Gostaria de saber mais sobre os serviços.",
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
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#beneficios">Benefícios</NavLink>
            <Link
              href="/projetos"
              className="text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              Projetos
            </Link>
            <Link
              href="/precos"
              className="text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              Preços
            </Link>
            <NavLink href="#contato">Contato</NavLink>
          </nav>
          <a
            href="#contato"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-sm shadow-primary/25 hover:bg-primary/90",
            )}
          >
            Reservar data
          </a>
        </div>
      </header>

      <main className="relative flex-1">
        <section className="relative overflow-hidden py-16 sm:py-28">
          <FloralOrnament />
          <Spotlight
            className="-top-64 left-1/2 -translate-x-1/2 md:-top-44 md:left-16 md:translate-x-0"
            fill="var(--primary)"
          />
          <div className="absolute left-0 top-0 h-full w-3 bg-primary" />
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                <Badge variant="outline" className="rounded-full px-3 py-1">
                  Proposta
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1">
                  Comercial
                </Badge>
              </div>

              <p className="font-[family-name:var(--font-script)] text-5xl leading-none text-primary sm:text-6xl">
                {identity.name}
              </p>
              <p className="mt-5 text-xs tracking-[0.4em] uppercase text-foreground/80">
                {identity.roles.join(" - ")}
              </p>

              <h1 className="mt-8 text-balance font-[family-name:var(--font-serif)] text-5xl leading-[0.95] text-foreground sm:mt-10 sm:text-7xl">
                PROPOSTA <span className="block text-primary">COMERCIAL</span>
              </h1>
              <div className="mx-auto mt-6 max-w-2xl">
                <TextGenerateEffect
                  words="Conteúdos em alta definição, com estética dinâmica e pensada para engajar."
                  className="font-[family-name:var(--font-sans)]"
                />
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/precos"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "h-12 w-full rounded-full bg-foreground px-6 text-background hover:bg-foreground/90 sm:w-auto",
                  )}
                >
                  Ver preços
                </Link>
                <a
                  href="#sobre"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 w-full rounded-full border-[color:var(--line)] bg-white/60 px-6 text-foreground backdrop-blur hover:bg-white sm:w-auto",
                  )}
                >
                  Conhecer mais
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section id="sobre" title={about.title}>
          <FloralOrnament className="opacity-70" />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-6 top-10 h-2 w-20 bg-primary" />
              <Card className="relative overflow-hidden rounded-sm bg-white p-5 shadow-[0_22px_50px_rgba(0,0,0,0.18)]">
                <Image
                  src="/assets/emmily-portrait.png"
                  alt="Foto de Emmily Dias"
                  width={900}
                  height={1100}
                  className="h-auto w-full rounded-sm object-cover"
                  priority
                />
              </Card>
            </div>

            <div className="max-w-xl">
              <p className="font-semibold text-primary">{about.lead}</p>
              <div className="mt-6 space-y-6 text-lg leading-8 text-muted-foreground">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-10">
                <Separator className="bg-[color:var(--line)]" />
                <p className="mt-6 text-sm tracking-[0.35em] uppercase text-foreground/70">
                  {identity.name}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="servicos" title={services.title}>
          <div className="absolute left-0 top-0 h-full w-3 bg-primary" />
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="font-[family-name:var(--font-serif)] text-5xl leading-[1] text-foreground">
                Como posso ajudar sua empresa?
              </h3>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Conteúdos com estética, clareza e intenção — tudo pensado para
                engajar e elevar a percepção da sua marca.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute left-6 top-8 hidden h-[calc(100%-2rem)] w-px bg-[color:var(--line)] lg:block" />
                <div className="space-y-8">
                  {services.items.map((item, idx) => (
                    <Card
                      key={item.title}
                      className="relative rounded-2xl border border-[color:var(--line)] bg-white/60 p-6 backdrop-blur"
                    >
                      <div className="absolute -left-2 top-6 hidden h-10 w-10 items-center justify-center rounded-full bg-primary text-2xl font-[family-name:var(--font-serif)] text-white shadow-lg shadow-primary/25 lg:flex">
                        {idx + 1}
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-foreground lg:hidden">
                          <span className="font-[family-name:var(--font-serif)] text-2xl">
                            {idx + 1}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-foreground" />
                            <h4 className="text-lg font-semibold text-foreground">
                              {item.title}
                            </h4>
                          </div>
                          <p className="mt-3 leading-7 text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="beneficios" title={benefits.title}>
          <FloralOrnament className="opacity-60" />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <ul className="space-y-6">
                {benefits.items.map((b) => (
                  <li key={b} className="flex items-center gap-4">
                    <CircleArrow />
                    <span className="text-lg text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-6 top-10 h-2 w-20 bg-primary" />
              <Card className="relative overflow-hidden rounded-sm bg-white p-5 shadow-[0_22px_50px_rgba(0,0,0,0.18)]">
                <Image
                  src="/assets/emmily-selfie.png"
                  alt="Foto de Emmily Dias"
                  width={900}
                  height={1100}
                  className="h-auto w-full rounded-sm object-cover"
                />
              </Card>
            </div>
          </div>
        </Section>

        <section id="contato" className="relative overflow-hidden py-16 sm:py-28">
          <FloralOrnament className="opacity-70" />
          <div className="absolute left-0 top-0 h-full w-3 bg-primary" />
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-[family-name:var(--font-script)] text-5xl leading-none text-primary sm:text-6xl">
                {identity.name}
              </p>
              <p className="mt-5 text-xs tracking-[0.4em] uppercase text-foreground/80">
                {identity.roles.join(" - ")}
              </p>
              <h2 className="mt-8 text-balance font-[family-name:var(--font-serif)] text-5xl leading-[0.9] text-foreground sm:mt-10 sm:text-8xl">
                {contact.title}
              </h2>
              <p className="mt-8 text-sm tracking-[0.22em] uppercase text-foreground/80">
                {contact.cta}
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-4 text-foreground backdrop-blur transition hover:bg-white sm:flex-row sm:gap-3 sm:px-6"
                >
                  <Phone className="h-6 w-6 text-foreground/70" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <a
                  href={`mailto:${identity.email}`}
                  className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-4 text-foreground backdrop-blur transition hover:bg-white sm:flex-row sm:gap-3 sm:px-6"
                >
                  <Mail className="h-6 w-6 text-foreground/70" />
                  <span className="break-all font-medium">{identity.email}</span>
                </a>
                <a
                  href={`tel:${identity.phone.replace(/[^\\d+]/g, "")}`}
                  className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-4 text-foreground backdrop-blur transition hover:bg-white sm:flex-row sm:gap-3 sm:px-6"
                >
                  <Phone className="h-6 w-6 text-foreground/70" />
                  <span className="font-medium">{identity.phone}</span>
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-2 text-xs tracking-[0.26em] uppercase text-muted-foreground">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                  ✦
                </span>
                <span>Vamos criar algo incrível juntos</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--line)] py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
          <p>
            © {buildYear} {identity.name}
          </p>
          <p className="text-xs tracking-[0.26em] uppercase">
            {identity.roles.join(" • ")}
          </p>
        </div>
      </footer>
    </div>
  );
}
