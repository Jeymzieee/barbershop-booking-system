import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import { Reveal } from '@/components/reveal'

export function FeaturedServices() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What we do"
          title="Services crafted to perfection"
          description="Every service is a ritual — considered, unhurried, and finished to the finest detail."
        />
        <Reveal delay={160}>
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-gold/60 hover:text-gold"
          >
            All services
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((service, i) => (
          <Reveal key={service.id} delay={i * 70}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
