export type Service = {
  id: string
  name: string
  price: number
  duration: string
  description: string
  popular?: boolean
}

export const services: Service[] = [
  {
    id: 'signature-cut',
    name: 'Signature Cut',
    price: 55,
    duration: '45 min',
    description:
      'A fully bespoke haircut tailored to your face shape and lifestyle, finished with a hot-towel refresh and styling.',
    popular: true,
  },
  {
    id: 'skin-fade',
    name: 'Precision Skin Fade',
    price: 60,
    duration: '50 min',
    description:
      'Seamless, blade-sharp fades executed with meticulous detail for a crisp, modern silhouette.',
  },
  {
    id: 'royal-shave',
    name: 'Royal Hot-Towel Shave',
    price: 45,
    duration: '40 min',
    description:
      'The classic straight-razor ritual with warm towels, pre-shave oil, and a soothing balm finish.',
    popular: true,
  },
  {
    id: 'beard-sculpt',
    name: 'Beard Sculpt & Trim',
    price: 35,
    duration: '30 min',
    description:
      'Expert shaping, line-up, and conditioning to keep your beard sharp, healthy, and defined.',
  },
  {
    id: 'father-son',
    name: 'Father & Son',
    price: 85,
    duration: '60 min',
    description:
      'Two cuts, one experience. A shared session designed for the gentlemen of every generation.',
  },
  {
    id: 'grey-blending',
    name: 'Grey Blending',
    price: 40,
    duration: '35 min',
    description:
      'Subtle, natural-looking colour work that softens grey while keeping your look effortless.',
  },
]

export type Barber = {
  id: string
  name: string
  role: string
  specialty: string
  experience: string
  image: string
  instagram: string
  twitter: string
}

export const barbers: Barber[] = [
  {
    id: 'marcus',
    name: 'Marcus Vane',
    role: 'Master Barber & Founder',
    specialty: 'Classic scissor work',
    experience: '18 years',
    image: '/images/barber-1.png',
    instagram: '#',
    twitter: '#',
  },
  {
    id: 'elias',
    name: 'Elias Cole',
    role: 'Senior Barber',
    specialty: 'Skin fades & tapers',
    experience: '9 years',
    image: '/images/barber-2.png',
    instagram: '#',
    twitter: '#',
  },
  {
    id: 'theo',
    name: 'Theodore Reyes',
    role: 'Master Barber',
    specialty: 'Straight-razor shaves',
    experience: '22 years',
    image: '/images/barber-3.png',
    instagram: '#',
    twitter: '#',
  },
  {
    id: 'julian',
    name: 'Julian Frost',
    role: 'Style Specialist',
    specialty: 'Textured & modern cuts',
    experience: '11 years',
    image: '/images/barber-4.png',
    instagram: '#',
    twitter: '#',
  },
]

export type Product = {
  id: string
  name: string
  price: number
  category: 'Hair' | 'Beard' | 'Shave' | 'Fragrance'
  image: string
  inStock: boolean
  featured?: boolean
  description: string
}

export const products: Product[] = [
  {
    id: 'pomade',
    name: 'Matte Clay Pomade',
    price: 24,
    category: 'Hair',
    image: '/images/product-pomade.png',
    inStock: true,
    featured: true,
    description: 'Strong hold, matte finish. Reworkable all day.',
  },
  {
    id: 'beard-oil',
    name: 'Cedar Beard Oil',
    price: 28,
    category: 'Beard',
    image: '/images/product-beard-oil.png',
    inStock: true,
    featured: true,
    description: 'Nourishing blend with cedarwood and argan.',
  },
  {
    id: 'shampoo',
    name: 'Daily Cleanse Shampoo',
    price: 22,
    category: 'Hair',
    image: '/images/product-shampoo.png',
    inStock: true,
    description: 'Sulphate-free wash for everyday freshness.',
  },
  {
    id: 'razor',
    name: 'Brass Safety Razor',
    price: 68,
    category: 'Shave',
    image: '/images/product-razor.png',
    inStock: false,
    description: 'Precision-weighted single-blade razor.',
  },
  {
    id: 'cologne',
    name: 'Noir Signature Cologne',
    price: 92,
    category: 'Fragrance',
    image: '/images/product-cologne.png',
    inStock: true,
    featured: true,
    description: 'Amber, oud, and leather. Our house scent.',
  },
  {
    id: 'balm',
    name: 'Sculpting Beard Balm',
    price: 26,
    category: 'Beard',
    image: '/images/product-balm.png',
    inStock: true,
    description: 'Shapes and conditions with a natural hold.',
  },
]

export type Testimonial = {
  id: string
  name: string
  title: string
  quote: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'James Whitmore',
    title: 'Regular since 2019',
    quote:
      'The most precise cut I have ever had, full stop. It feels less like a barbershop and more like a private club.',
    initials: 'JW',
  },
  {
    id: 't2',
    name: 'Andre Laurent',
    title: 'Creative Director',
    quote:
      'From the espresso on arrival to the hot-towel finish, every detail is considered. NOIR sets the standard.',
    initials: 'AL',
  },
  {
    id: 't3',
    name: 'Daniel Osei',
    title: 'First-time client',
    quote:
      'Booked for a wedding trim and walked out looking my absolute best. The team is genuinely world-class.',
    initials: 'DO',
  },
  {
    id: 't4',
    name: 'Victor Ilić',
    title: 'Monthly member',
    quote:
      'Impeccable attention, an atmosphere of calm luxury, and a beard sculpt that turns heads. Worth every penny.',
    initials: 'VI',
  },
]

export const gallery = [
  { src: '/images/gallery-1.png', alt: 'Modern fade haircut with trimmed beard', span: 'tall' },
  { src: '/images/gallery-2.png', alt: 'Barber creating a precise hairline line-up', span: 'wide' },
  { src: '/images/gallery-3.png', alt: 'Classic pompadour hairstyle with clean shave', span: 'normal' },
  { src: '/images/gallery-4.png', alt: 'Hot towel shave in progress', span: 'normal' },
  { src: '/images/gallery-5.png', alt: 'Textured curly hair being styled', span: 'wide' },
  { src: '/images/gallery-6.png', alt: 'Slick undercut haircut from behind', span: 'tall' },
  { src: '/images/interior-1.png', alt: 'Luxury barbershop interior', span: 'wide' },
  { src: '/images/interior-2.png', alt: 'Premium grooming station detail', span: 'normal' },
] as const

export const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:30 PM',
  '2:30 PM',
  '3:30 PM',
  '4:30 PM',
  '5:30 PM',
  '6:30 PM',
]

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/barbers', label: 'Barbers' },
  { href: '/contact', label: 'Contact' },
]
