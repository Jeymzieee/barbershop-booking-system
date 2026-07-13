import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { products } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 3)
  return (
    <section className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The shelf"
            title="Take the ritual home"
            description="Barber-grade grooming essentials, curated for the modern gentleman."
          />
          <Reveal delay={160}>
            <Link
              href="/products"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-gold/60 hover:text-gold"
            >
              Shop all
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
