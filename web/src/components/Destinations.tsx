import { MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { destinations } from '../data/content'

export default function Destinations() {
  return (
    <section id="destinations" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Trending"
          title="Popular destinations"
          subtitle="Top routes for quick booking and customized packages."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <div key={d.name} className="card group p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-display text-xl tracking-tight">{d.name}</div>
                  <div className="mt-1 text-sm text-slate-600">{d.desc}</div>
                </div>
                <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700">
                  {d.tag}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin size={14} className="text-brand-700" />
                  Visa & bookings supported
                </div>
                <a href="#contact" className="text-sm font-semibold text-brand-800 hover:text-brand-900">
                  Get quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
