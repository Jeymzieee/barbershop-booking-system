import { Quote, Star } from 'lucide-react'
import type { Testimonial } from '@/lib/data'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-card/80 hover:shadow-lg">
      <Quote className="size-7 text-gold/70" aria-hidden />
      <div className="mt-4 flex items-center gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-gold" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
        <span className="flex size-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-sm font-bold text-gold">
          {testimonial.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-foreground">
            {testimonial.name}
          </span>
          <span className="block text-xs text-muted-foreground">
            {testimonial.title}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}