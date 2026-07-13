import { testimonials } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { TestimonialCard } from '@/components/testimonial-card'
import { Reveal } from '@/components/reveal'

export function TestimonialsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        align="center"
        eyebrow="Kind words"
        title="Trusted by discerning gentlemen"
        description="A reputation built one meticulous appointment at a time."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 70}>
            <TestimonialCard testimonial={t} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
