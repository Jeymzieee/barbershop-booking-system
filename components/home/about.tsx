import Image from 'next/image'
import { Award, Sparkles, Coffee, CalendarCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Award,
    title: 'Master craftsmen',
    body: 'Every barber is classically trained and obsessively precise — your look is never left to chance.',
  },
  {
    icon: Sparkles,
    title: 'Premium products',
    body: 'We use and stock only the finest grooming products, hand-selected for results you can feel.',
  },
  {
    icon: Coffee,
    title: 'An experience',
    body: 'Complimentary espresso, a considered playlist, and a space designed for you to slow down.',
  },
  {
    icon: CalendarCheck,
    title: 'Effortless booking',
    body: 'Reserve your chair in under a minute and arrive to a seamless, on-time appointment.',
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-20"> {/* pt-20 para hindi matakpan ng navbar mo */}
      
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative">
                <div className="relative overflow-hidden rounded-[2rem] border border-border/70">
                  <Image
                    src="/images/interior-1.png"
                    alt="Interior of the PUSTURA.PH luxury barbershop"
                    width={720}
                    height={880}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="glass absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-2xl border border-gold/30 p-5 sm:block">
                  <p className="font-display text-3xl font-extrabold text-gold">
                    4.9
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Average rating across 2,400+ verified reviews.
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Why PUSTURA.PH"
                title="More than a haircut — a standard"
                description="We built PUSTURA.PH for people who value their time and their appearance in equal measure."
              />
              <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
                {features.map((f, i) => (
                  <Reveal key={f.title} delay={i * 80}>
                    <div>
                      <span className="flex size-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                        <f.icon className="size-5" />
                      </span>
                      <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {f.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}