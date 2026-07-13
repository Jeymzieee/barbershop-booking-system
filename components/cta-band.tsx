import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-card px-6 py-16 text-center sm:px-12 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(60% 120% at 50% 0%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)',
            }}
          />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Reserve your chair
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Ready for your best look yet?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Book in seconds. Choose your barber, pick a time, and leave the
              rest to us.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:shadow-gold/40 hover:brightness-105"
              >
                Book Appointment
                <ArrowUpRight className="size-4" />
              </Link>
              <a
                href="tel:+442071234567"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold/60 hover:text-gold"
              >
                <Phone className="size-4" />
                Call the shop
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
