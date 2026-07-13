'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'
import { products } from '@/lib/data'
import { cn } from '@/lib/utils'

const categories = ['All', 'Hair', 'Beard', 'Shave', 'Fragrance'] as const

export function ProductsGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>('All')

  const filtered =
    active === 'All'
      ? products
      : products.filter((p) => p.category === active)

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-5 py-2.5 text-sm font-semibold transition-all',
              active === cat
                ? 'border-gold bg-gold text-gold-foreground shadow-lg shadow-gold/20'
                : 'border-border text-muted-foreground hover:border-gold/50 hover:text-foreground',
            )}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product, i) => (
          <Reveal key={product.id} delay={i * 50}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
