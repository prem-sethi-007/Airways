export const company = {
  name: 'Rajshri Travels',
  phone: '+91 90000 00000',
  email: 'hello@airways.example',
  city: 'India',
  tagline: '5+ years of legacy',
}

export const destinations = [
  { name: 'Dubai', desc: 'Luxury shopping + skyline views', tag: 'UAE' },
  { name: 'Singapore', desc: 'F1, nightlife, and family fun', tag: 'SG' },
  { name: 'London', desc: 'Iconic landmarks + theatre nights', tag: 'UK' },
  { name: 'Bali', desc: 'Villas, beaches, and wellness', tag: 'ID' },
  { name: 'Paris', desc: 'Romance, art, and cuisine', tag: 'FR' },
  { name: 'Phuket', desc: 'Island hopping + sunsets', tag: 'TH' },
] as const

export const packages = [
  {
    title: 'Dubai Premium Weekend',
    price: '₹59,999',
    meta: '3 Nights • 4★ Stay • City Tours',
    bullets: ['Return flights options', 'Visa support', 'Desert safari + Burj visit'],
    badge: 'Best Seller',
  },
  {
    title: 'Bali Honeymoon Escape',
    price: '₹79,999',
    meta: '5 Nights • Villa • Private Transfers',
    bullets: ['Candlelight dinner', 'Temple tours', 'Beach club day pass'],
    badge: 'Couples',
  },
  {
    title: 'Singapore + Universal',
    price: '₹89,999',
    meta: '4 Nights • Family • Attractions',
    bullets: ['Universal Studios', 'City + Night Safari', 'Airport pickup/drop'],
    badge: 'Family',
  },
  {
    title: 'Europe Highlights',
    price: '₹1,79,999',
    meta: '9 Nights • Multi-city • Guided',
    bullets: ['Schengen assistance', 'Handpicked hotels', 'Intercity travel'],
    badge: 'Luxury',
  },
] as const

export const services = [
  {
    title: 'Air Ticketing',
    desc: 'Best routes, flexible fares, quick changes.',
  },
  {
    title: 'Visa Assistance',
    desc: 'Documentation, appointments, and tracking.',
  },
  {
    title: 'Packages & Tours',
    desc: 'Custom itineraries that fit your budget and style.',
  },
  {
    title: 'Hotels & Transfers',
    desc: 'Premium stays, airport pickup, car rentals.',
  },
  {
    title: 'Corporate Travel',
    desc: 'Invoices, approvals, and seamless coordination.',
  },
  {
    title: 'Travel Insurance',
    desc: 'Medical coverage, baggage protection, add-ons.',
  },
] as const

export const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Business Traveller',
    quote:
      'Fast booking, premium hotels, and flawless itinerary changes. Their consultant handled everything end-to-end.',
  },
  {
    name: 'Meera Iyer',
    role: 'Family Trip',
    quote:
      'Loved the package suggestions and the WhatsApp support. Smooth visa + flight coordination with clear pricing.',
  },
  {
    name: 'Rohan Verma',
    role: 'Honeymoon',
    quote: 'Luxury feel, great recommendations, and the small details were perfect. Highly recommended.',
  },
] as const

export const faqs = [
  {
    q: 'Do you offer customized packages?',
    a: 'Yes. Share your dates, budget, and preferences—our consultant will build a tailored itinerary with transparent inclusions.',
  },
  {
    q: 'Can you help with visa documentation?',
    a: 'Absolutely. We guide you on documents, forms, appointment slots, and tracking based on the destination requirements.',
  },
  {
    q: 'How quickly can I get a quote?',
    a: 'Most quotes are shared within a few hours. Complex multi-city itineraries may take up to 24 hours for best pricing.',
  },
] as const
