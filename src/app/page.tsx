import Image from "next/image";
import Link from "next/link";
import { FloralOrnament } from "@/components/floral";
import {
  ArrowCircleIcon,
  MailIcon,
  PhoneIcon,
  SparkleIcon,
} from "@/components/icons";
import {
  about,
  benefits,
  contact,
  dailyRates,
  identity,
  services,
  starterPackages,
} from "@/lib/content";
import { Section } from "@/components/section";

const buildYear = new Date().getFullYear();

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-[color:var(--foreground)]/80 transition hover:text-[color:var(--foreground)]"
    >
      {children}
    </a>
  );
}

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1 text-xs tracking-[0.18em] uppercase text-[color:var(--muted)] backdrop-blur">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      <header className="sticky top-0 z-20 border-b border-[color:var(--line)] bg-[color:var(--background)]/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="font-[family-name:var(--font-script)] text-2xl leading-none text-[color:var(--accent)]">
              {identity.name}
            </span>
            <span className="hidden text-xs tracking-[0.24em] uppercase text-[color:var(--muted)] sm:inline">
              {identity.roles.join(" • ")}
            </span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#beneficios">Benefícios</NavLink>
            <NavLink href="#pacotes">Pacotes</NavLink>
            <NavLink href="#diarias">Diárias</NavLink>
            <NavLink href="#contato">Contato</NavLink>
          </nav>
          <a
            href="#contato"
            className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-[color:var(--accent)]/30 transition hover:brightness-105"
          >
            Reservar data
          </a>
        </div>
      </header>

      <main className="relative flex-1">
        <section className="relative overflow-hidden py-20 sm:py-28">
          <FloralOrnament />
          <div className="absolute left-0 top-0 h-full w-3 bg-[color:var(--accent)]" />
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                <Pill>Proposta</Pill>
                <Pill>Comercial</Pill>
              </div>
              <p className="font-[family-name:var(--font-script)] text-5xl leading-none text-[color:var(--accent)] sm:text-6xl">
                {identity.name}
              </p>
              <p className="mt-5 text-xs tracking-[0.4em] uppercase text-[color:var(--foreground)]/80">
                {identity.roles.join(" - ")}
              </p>
              <h1 className="mt-10 font-[family-name:var(--font-serif)] text-6xl leading-[0.95] text-[color:var(--foreground)] sm:text-7xl">
                PROPOSTA{" "}
                <span className="block text-[color:var(--accent)]">COMERCIAL</span>
              </h1>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href="#pacotes"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--foreground)] px-6 text-sm font-semibold text-[color:var(--background)] transition hover:brightness-110"
                >
                  Ver pacotes
                </a>
                <a
                  href="#sobre"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/60 px-6 text-sm font-semibold text-[color:var(--foreground)] backdrop-blur transition hover:bg-white"
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
              <div className="absolute -left-6 top-10 h-2 w-20 bg-[color:var(--accent)]" />
              <div className="relative overflow-hidden rounded-sm bg-white p-5 shadow-[0_22px_50px_rgba(0,0,0,0.18)]">
                <Image
                  src="/assets/emmily-portrait.png"
                  alt="Foto de Emmily Dias"
                  width={900}
                  height={1100}
                  className="h-auto w-full rounded-sm object-cover"
                  priority
                />
              </div>
            </div>

            <div className="max-w-xl">
              <p className="font-semibold text-[color:var(--accent)]">
                {about.lead}
              </p>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[color:var(--muted)]">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-10 flex items-center gap-3 border-t border-[color:var(--line)] pt-6">
                <div className="h-px flex-1 bg-[color:var(--line)]" />
                <p className="text-sm tracking-[0.35em] uppercase text-[color:var(--foreground)]/70">
                  {identity.name}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="servicos" title={services.title}>
          <div className="absolute left-0 top-0 h-full w-3 bg-[color:var(--accent)]" />
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="font-[family-name:var(--font-serif)] text-5xl leading-[1] text-[color:var(--foreground)]">
                Como posso ajudar sua empresa?
              </h3>
              <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">
                Conteúdos com estética, clareza e intenção — tudo pensado para
                engajar e elevar a percepção da sua marca.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute left-6 top-8 hidden h-[calc(100%-2rem)] w-px bg-[color:var(--line)] lg:block" />
                <div className="space-y-8">
                  {services.items.map((item, idx) => (
                    <div
                      key={item.title}
                      className="relative rounded-2xl border border-[color:var(--line)] bg-white/60 p-6 backdrop-blur"
                    >
                      <div className="absolute -left-2 top-6 hidden h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent)] text-2xl font-[family-name:var(--font-serif)] text-white shadow-lg shadow-[color:var(--accent)]/30 lg:flex">
                        {idx + 1}
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--foreground)] lg:hidden">
                          <span className="font-[family-name:var(--font-serif)] text-2xl">
                            {idx + 1}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <SparkleIcon className="h-5 w-5 text-[color:var(--foreground)]" />
                            <h4 className="text-lg font-semibold text-[color:var(--foreground)]">
                              {item.title}
                            </h4>
                          </div>
                          <p className="mt-3 text-[color:var(--muted)] leading-7">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
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
                    <ArrowCircleIcon className="h-9 w-9 shrink-0" />
                    <span className="text-lg text-[color:var(--muted)]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-6 top-10 h-2 w-20 bg-[color:var(--accent)]" />
              <div className="relative overflow-hidden rounded-sm bg-white p-5 shadow-[0_22px_50px_rgba(0,0,0,0.18)]">
                <Image
                  src="/assets/emmily-selfie.png"
                  alt="Foto de Emmily Dias"
                  width={900}
                  height={1100}
                  className="h-auto w-full rounded-sm object-cover"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section id="pacotes" eyebrow={starterPackages.eyebrow} title={starterPackages.title}>
          <div className="absolute left-0 top-0 h-full w-3 bg-[color:var(--accent)]" />
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              {starterPackages.items.map((p) => (
                <div
                  key={p.title}
                  className="rounded-3xl border border-[color:var(--line)] bg-white/70 p-6 backdrop-blur sm:p-7"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <ArrowCircleIcon className="h-8 w-8 shrink-0" />
                      <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                        {p.title}
                      </h3>
                    </div>
                    <p className="rounded-full bg-[color:var(--accent-soft)] px-4 py-1 text-sm font-semibold text-[color:var(--foreground)]">
                      {p.price}
                    </p>
                  </div>
                  <p className="mt-4 whitespace-pre-line leading-7 text-[color:var(--muted)]">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative hidden lg:col-span-5 lg:block">
              <div className="sticky top-28">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-white/40 p-6 shadow-[0_30px_70px_rgba(0,0,0,0.12)]">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/assets/phone-hand.png"
                      alt="Celular"
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 420px, 0px"
                    />
                  </div>
                </div>
                <p className="mt-6 text-center text-sm text-[color:var(--muted)]">
                  Conteúdos prontos para postar, com estética e estratégia.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="diarias" eyebrow={dailyRates.eyebrow} title={dailyRates.title}>
          <div className="grid gap-6 lg:grid-cols-3">
            {dailyRates.items.map((r) => (
              <div
                key={r.title}
                className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--accent-soft)]/55 p-8"
              >
                <div className="rounded-full bg-[color:var(--accent)]/25 px-4 py-2 text-center text-sm font-medium text-[color:var(--foreground)]">
                  {r.title}
                </div>
                <p className="mt-6 text-center text-[color:var(--muted)]">
                  {r.description}
                </p>
                <div className="mt-6 text-center">
                  <p className="text-sm font-semibold text-[color:var(--foreground)]">
                    A partir de:
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-serif)] text-5xl text-[color:var(--foreground)]">
                    {r.price}
                  </p>
                  <p className="mt-4 text-lg tracking-[0.2em] uppercase text-[color:var(--foreground)]/75">
                    {r.unit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <section id="contato" className="relative overflow-hidden py-20 sm:py-28">
          <FloralOrnament className="opacity-70" />
          <div className="absolute left-0 top-0 h-full w-3 bg-[color:var(--accent)]" />
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-[family-name:var(--font-script)] text-5xl leading-none text-[color:var(--accent)] sm:text-6xl">
                {identity.name}
              </p>
              <p className="mt-5 text-xs tracking-[0.4em] uppercase text-[color:var(--foreground)]/80">
                {identity.roles.join(" - ")}
              </p>
              <h2 className="mt-10 font-[family-name:var(--font-serif)] text-7xl leading-[0.9] text-[color:var(--foreground)] sm:text-8xl">
                {contact.title}
              </h2>
              <p className="mt-8 text-sm tracking-[0.22em] uppercase text-[color:var(--foreground)]/80">
                {contact.cta}
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${identity.email}`}
                  className="group flex items-center justify-center gap-3 rounded-2xl border border-[color:var(--line)] bg-white/70 px-6 py-4 text-[color:var(--foreground)] backdrop-blur transition hover:bg-white"
                >
                  <MailIcon className="h-6 w-6 text-[color:var(--foreground)]/70" />
                  <span className="font-medium">{identity.email}</span>
                </a>
                <a
                  href={`tel:${identity.phone.replace(/[^\\d+]/g, "")}`}
                  className="group flex items-center justify-center gap-3 rounded-2xl border border-[color:var(--line)] bg-white/70 px-6 py-4 text-[color:var(--foreground)] backdrop-blur transition hover:bg-white"
                >
                  <PhoneIcon className="h-6 w-6 text-[color:var(--foreground)]/70" />
                  <span className="font-medium">{identity.phone}</span>
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-2 text-xs tracking-[0.26em] uppercase text-[color:var(--muted)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                  ✦
                </span>
                <span>Vamos criar algo incrível juntos</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--line)] py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-[color:var(--muted)] sm:flex-row sm:text-left">
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
