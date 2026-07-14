import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Star } from 'lucide-react'
import {Reveal} from '@/components/reveal'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-barbershop.png"
          alt="Barber giving a precision haircut in a luxury barbershop"
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-foreground/80">
            <span className="flex items-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold" />
              ))}
            </span>
            <span className="tracking-wide">
              Rated 4.9 by 2,400+ Clients
            </span>
          </div>

          <h1 className="mt-6 text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            The Art of the
            <span className="block text-gold">Modern <br />Cut</span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-foreground/80 sm:text-xl">
            Distinct styles, master craftsmanship, and premium grooming — personalizing every cut to match your unique identity and confidence.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-xl shadow-gold/20 transition-all hover:shadow-gold/40 hover:brightness-105"
            >
              Book Appointment
              <ArrowUpRight className="size-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-background/30 px-7 py-4 text-base font-semibold text-foreground backdrop-blur-md transition-colors hover:border-gold/60 hover:text-gold"
            >
              View Services
            </Link>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/50 pt-8">
            {[
              { k: '20+', v: 'Years mastering the craft' },
              { k: '15k+', v: 'Cuts and shaves delivered' },
              { k: '4', v: 'Award-winning barbers' },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-extrabold text-foreground">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
