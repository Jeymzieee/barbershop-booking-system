import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import type { Product } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-2xl hover:shadow-black/20">
      <div className="relative aspect-square overflow-hidden bg-secondary/40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-md">
          {product.category}
        </span>
        <span
          className={cn(
            'absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md',
            product.inStock
              ? 'bg-gold/20 text-gold'
              : 'bg-background/70 text-muted-foreground',
          )}
        >
          {product.inStock ? 'In stock' : 'Sold out'}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold tracking-tight text-foreground">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-lg font-extrabold text-foreground">
            £{product.price}
          </span>
          <button
            type="button"
            disabled={!product.inStock}
            className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-gold hover:text-gold-foreground disabled:pointer-events-none disabled:opacity-40"
          >
            <ShoppingBag className="size-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
