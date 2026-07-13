import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold',
        className,
      )}
    >
      <span className="h-px w-6 bg-gold/60" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow
            className={cn(align === 'center' && 'justify-center')}
          >
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
