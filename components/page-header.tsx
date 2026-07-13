import { Reveal } from '@/components/reveal'
import { Eyebrow } from '@/components/section-heading'

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: React.ReactNode
  description: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(50% 80% at 50% -10%, color-mix(in oklab, var(--gold) 16%, transparent), transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 text-center lg:px-8 lg:pb-24 lg:pt-44">
        <Reveal>
          <Eyebrow className="justify-center">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mx-auto mt-5 max-w-4xl text-balance font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
