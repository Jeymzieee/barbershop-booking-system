import { Hero } from '@/components/home/hero'
import { FeaturedServices } from '@/components/home/featured-services'
import { WhyChoose } from '@/components/home/why-choose'
import { TestimonialsPreview } from '@/components/home/testimonials-preview'
import { FeaturedProducts } from '@/components/home/featured-products'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <WhyChoose />
      <TestimonialsPreview />
      <FeaturedProducts />
      <CtaBand />
    </>
  )
}
