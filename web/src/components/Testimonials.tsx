import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/content'

function Stars() {
  return (
    <div className="flex items-center gap-1 text-gold-200">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="section bg-ink text-white">
      <div className="container">
        <SectionHeading
          eyebrow="Reviews"
          title="Clients trust our details"
          subtitle="High-touch service, clear communication, and premium experiences."
          align="center"
          tone="dark"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card-dark p-6">
              <Stars />
              <p className="mt-4 text-sm leading-relaxed text-white/75">“{t.quote}”</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-xs text-white/60">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
