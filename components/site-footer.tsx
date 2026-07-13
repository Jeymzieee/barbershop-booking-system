import Link from 'next/link'
import { Scissors, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
// NOIR barbershop footer
import { navLinks } from '@/lib/data'
import { InstagramIcon, FacebookIcon, XIcon } from '@/components/social-icons'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full border border-gold/50 text-gold">
                <Scissors className="size-4" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-[0.2em]">
                NOIR
              </span>
            </div>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              The art of the modern gentleman. Precision cuts, timeless shaves,
              and elevated grooming in an atmosphere of quiet luxury.
            </p>
            <Link
              href="/booking"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-all hover:brightness-105"
            >
              Book Appointment
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="text-muted-foreground">9 – 8</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-muted-foreground">9 – 6</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-muted-foreground">Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Visit
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>48 Marlow Street, Mayfair, London W1</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href="tel:+442071234567" className="hover:text-gold">
                  +44 20 7123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-gold" />
                <a href="mailto:hello@noir.co" className="hover:text-gold">
                  hello@noir.co
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2.5">
              {[InstagramIcon, FacebookIcon, XIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex size-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} NOIR Barber Co. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with precision in Mayfair
          </p>
        </div>
      </div>
    </footer>
  )
}
