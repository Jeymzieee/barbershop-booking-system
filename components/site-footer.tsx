import Link from 'next/link'
import { Scissors, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
// NOIR barbershop footer
import { navLinks } from '@/lib/data'
import { InstagramIcon, FacebookIcon, XIcon } from '@/components/social-icons'
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex size-13 items-center justify-center rounded-full border border-gold/50 text-gold">
              
              <div className="relative overflow-hidden size-9 flex items-center justify-center bg-background/50">
                <Image
                  src="/images/logo.png"
                  alt="Pustura Ph Logo"
                  width={36}
                  height={36}
                  className="object-cover size-full"
                />
              </div>
              </span>
              <span className="font-display text-lg font-extrabold tracking-[0.2em]">
                Pustura Ph
              </span>
            </div>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Distinct styles, master craftsmanship, and premium grooming — personalizing every cut to match your unique identity and confidence.
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
                <span>Sun – Sat</span>
                <span className="text-muted-foreground">9am – 7pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-muted-foreground">9am – 6pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Monday</span>
                <span className="text-muted-foreground">Close</span>
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
                <span>Silang Cavite</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href="tel:+442071234567" className="hover:text-gold">
                  +63 2 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-gold" />
                <a href="mailto:hello@noir.co" className="hover:text-gold">
                  Pustura.ph.com
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
          <p>© {new Date().getFullYear()} Pustura Ph Co. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with precision in Mayfair
          </p>
        </div>
      </div>
    </footer>
  )
}
