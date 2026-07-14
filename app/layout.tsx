import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PUSTURA PH ',
  description:
    'PUSTURA PH is a premium barbershop delivering precision cuts, hot-towel shaves, and elevated grooming in an atmosphere of quiet luxury. Book your appointment today.',
    icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '192x192', type: 'image/png' }, 
    ],
    shortcut: '/images/logo.png',
    apple: { url: '/images/logo.png', sizes: '180x180', type: 'image/png' }, 
  },

  keywords: [
    'luxury barbershop',
    'premium haircut',
    'hot towel shave',
    'mens grooming',
    'beard trim',
    'PUSTURA PH barber',
  ],
  openGraph: {
    title: 'PUSTURA PH — The Art of the Modern Cut',
    description:
      'Precision cuts, hot-towel shaves, and elevated grooming in an atmosphere of quiet luxury.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f6f3' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a09' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
