import { MessageCircle } from 'lucide-react'
import { company } from '../data/content'

export default function WhatsAppFab() {
  const href = `https://wa.me/${company.phones[0].replace(/[^\d]/g, '')}?text=${encodeURIComponent(
    'Hi! I want to enquire about travel booking and packages.',
  )}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-2xl bg-brand-700 text-white shadow-soft hover:bg-brand-800 active:bg-brand-600"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
    </a>
  )
}
