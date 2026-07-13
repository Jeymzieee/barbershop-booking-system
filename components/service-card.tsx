import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'
import type { Service } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-2xl hover:shadow-black/20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--gold) 30%, transparent), transparent 70%)',
        }}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
            {service.name}
          </h3>
          {service.popular && (
            <span className="shrink-0 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">
              Popular
            </span>
          )}
        </div>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>

      <div className="relative mt-7 flex items-end justify-between border-t border-border/60 pt-5">
        <div>
          <p className="font-display text-2xl font-extrabold text-foreground">
            £{service.price}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5" />
            {service.duration}
          </p>
        </div>
        <Link
          href={`/booking?service=${service.id}`}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors',
            'group-hover:bg-gold group-hover:text-gold-foreground',
          )}
        >
          Book
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </div>
  )
}
