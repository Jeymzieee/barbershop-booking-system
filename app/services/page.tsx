import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHeader } from '@/components/page-header'
import { ServiceCard } from '@/components/service-card'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'
import { Eyebrow } from '@/components/section-heading'
import { services } from '@/lib/data'
import { Scissors, Droplets, Sparkles, Crown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore NOIR barbershop services — signature cuts, skin fades, hot-towel shaves, beard sculpting, and more. Transparent pricing and duration.',
}

const process = [
  {
    icon: Scissors,
    title: 'Consultation',
    text: 'We start every visit understanding your hair, lifestyle, and the look you want.',
  },
  {
    icon: Droplets,
    title: 'The Ritual',
    text: 'Warm towels, premium products, and unhurried craft — the experience is the point.',
  },
  {
    icon: Sparkles,
    title: 'The Finish',
    text: 'Precise styling and a mirror moment to make sure you leave looking impeccable.',
  },
  {
    icon: Crown,
    title: 'The Send-off',
    text: 'Product recommendations and your next chair reserved before you go.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={<>Craft worthy of your time</>}
        description="Every service is a considered ritual — transparent pricing, honest timing, and results built to last between visits."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <Eyebrow>The NOIR Experience</Eyebrow>
            <Reveal delay={80}>
              <h2 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                Every visit follows a considered ritual
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {process.map((step, i) => (
                <Reveal key={step.title} delay={120 + i * 70}>
                  <div className="rounded-2xl border border-border/70 bg-background/60 p-6">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <step.icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={140} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/70">
              <Image
                src="/images/interior-2.png"
                alt="Premium grooming station with straight razor and tools"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
