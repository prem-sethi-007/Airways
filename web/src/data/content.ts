export const company = {
  name: 'Rajshri Travels',
  description: 'We Plan, You Relax. Your journey, our responsibility.',
  tagline: 'We Plan, You Relax',
  secondaryTagline: 'Your Journey Our Responsibility',
  gstin: '08AVMPP7776P1Z9',
  phones: ['+91 94139-20200', '+91 94132-74100'],
  email: 'hello@rajshritravels.com',
  address: '6 K 32 Jawahar Nagar, Sri Ganganagar, Rajasthan 335001',
  city: 'Sri Ganganagar',
}

export const destinations = [
  { name: 'Imperial Tokyo', tag: 'Natural Wonder', category: 'Nature', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', desc: 'Experience the iconic peak of the Swiss Alps, a paradise for hikers and winter sports enthusiasts.' },
  { name: 'Kananaskis Country', tag: 'Wonder', category: 'Nature', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800', desc: 'Ancient citadel above Athens, containing the remains of several ancient buildings of great architectural significance.' },
  { name: 'Burj Khalifa', tag: 'Wonder', category: 'Man-made', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', desc: 'Unfinished Roman Catholic minor basilica in Barcelona, designed by Catalan architect Antoni Gaudí.' },
  { name: 'Santorini', tag: 'Island', category: 'Nature', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800', desc: 'Stunning volcanic island in the Aegean Sea, famous for its dramatic views and whitewashed houses.' },
  { name: 'Colosseum', tag: 'Wonder', category: 'Man-made', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800', desc: 'The largest ancient amphitheatre ever built, located in the centre of the city of Rome.' },
] as const

export const packages = [
  {
    title: 'Swiss Alps Adventure',
    price: '₹1,59,999',
    meta: '5 Nights • Luxury Lodge • Guided',
    bullets: ['Premium ski passes', 'Private mountain guide', 'Spa & Wellness'],
    badge: 'Adventure',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=800'
  },
  {
    title: 'Athens & Santorini',
    price: '₹1,29,999',
    meta: '7 Nights • Island Hopping • 5★',
    bullets: ['Private yacht tour', 'Acropolis VIP tour', 'Luxury transfers'],
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800'
  },
  {
    title: 'Barcelona Getaway',
    price: '₹89,999',
    meta: '4 Nights • Boutique Stay • City',
    bullets: ['Gaudí architectural tour', 'Tapas tasting experience', 'Beach club access'],
    badge: 'City Break',
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800'
  },
  {
    title: 'Eternal Rome Tour',
    price: '₹99,999',
    meta: '5 Nights • Historic Stay • Guided',
    bullets: ['Colosseum private access', 'Vatican Museums tour', 'Traditional pasta class'],
    badge: 'Historic',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800'
  },
  {
    title: 'Parisian Romance',
    price: '₹1,49,999',
    meta: '4 Nights • Palace Hotel • Luxury',
    bullets: ['Eiffel Tower dinner', 'Seine private cruise', 'Louvre VIP access'],
    badge: 'Romance',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800'
  },
] as const

export const services = [
  {
    title: 'Domestic & International Air Ticket',
    desc: 'Best routes, flexible fares, and quick changes for global travel.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800'
  },
  {
    title: 'Hotel Booking',
    desc: 'Premium stays and boutique hotels worldwide with exclusive rates.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
  },
  {
    title: 'Travel Insurance',
    desc: 'Comprehensive medical and baggage protection for peace of mind.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800'
  },
  {
    title: 'USA B1-B2 Appointment',
    desc: 'Expert assistance for USA visa application and interview slots.',
    image: 'https://images.unsplash.com/photo-1557333610-90ee4a951ecf?w=800'
  },
  {
    title: 'Passport & PCC Apply',
    desc: 'Hassle-free documentation and processing for all major countries.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800'
  },
  {
    title: 'Train Ticket',
    desc: 'Quick and easy railway bookings for all domestic routes.',
    image: 'https://images.unsplash.com/photo-1474487059207-ef071a89bbca?w=800'
  },
  {
    title: 'Money Transfer',
    desc: 'Authorized agent for Western Union, Ria, and MoneyGram for fast global transfers.',
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800'
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
