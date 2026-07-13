import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ProductsGrid } from '@/components/products/products-grid'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'
import { Eyebrow } from '@/components/section-heading'
import { products } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Shop NOIR grooming essentials — pomades, beard oils, shaving tools, and our signature fragrance. Barber-grade quality for the modern gentleman.',
}

export default function ProductsPage() {
  const featured = products.filter((p) => p.featured).slice(0, 1)[0]

  return (
    <>
      <PageHeader
        eyebrow="The Shelf"
        title={<>Grooming, perfected</>}
        description="Barber-grade essentials we use and trust, curated for the modern gentleman. Take the NOIR ritual home."
      />

      {featured && (
        <section className="mx-auto max-w-7xl px-5 pt-16 lg:px-8">
          <Reveal>
            <div className="grid overflow-hidden rounded-[2rem] border border-gold/20 bg-card lg:grid-cols-2">
              <div className="relative aspect-square lg:aspect-auto">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-14">
                <Eyebrow>Featured</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {featured.name}
                </h2>
                <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                  {featured.description} A staple on every NOIR station and the
                  finishing touch our clients ask for by name.
                </p>
                <div className="mt-8 flex items-center gap-5">
                  <span className="font-display text-3xl font-extrabold">
                    £{featured.price}
                  </span>
                  <Link
                    href="#shop"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:brightness-105"
                  >
                    Shop the shelf
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      <div id="shop" className="scroll-mt-24">
        <ProductsGrid />
      </div>

      <CtaBand />
    </>
  )
}
