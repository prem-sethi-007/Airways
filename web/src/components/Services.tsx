import { Briefcase, Building2, Plane, ShieldCheck, Stamp, Hotel } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { services } from '../data/content'

const icons = [Plane, Stamp, Briefcase, Hotel, Building2, ShieldCheck] as const

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="End‑to‑end travel services"
          subtitle="From flight ticketing to corporate travel, we manage it all."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = icons[idx % icons.length]
            return (
              <div key={s.title} className="card p-6">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white">
                    <Icon className="text-brand-700" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{s.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{s.desc}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div id="contact" className="mt-12 card p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-display text-3xl tracking-tight text-slate-900">Need help booking?</h3>
              <p className="mt-2 text-slate-600">
                Tell us your destination and dates. We’ll share the best options and a clear breakdown of inclusions.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <div>• Flights, hotels, transfers, visa & insurance</div>
                <div>• One consultant for your entire trip</div>
                <div>• WhatsApp support and quick revisions</div>
              </div>
            </div>

            <form
              className="grid gap-3"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thanks! We will contact you shortly.')
              }}
            >
              <label className="grid gap-1 text-sm">
                <span className="text-slate-600">Name</span>
                <input
                  required
                  placeholder="Your name"
                  className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-brand-300"
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="text-slate-600">Phone / WhatsApp</span>
                <input
                  required
                  placeholder="+91 9XXXXXXXXX"
                  className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-brand-300"
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="text-slate-600">Message</span>
                <textarea
                  rows={3}
                  placeholder="Destination, dates, travellers, budget..."
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none focus:border-brand-300"
                />
              </label>
              <button className="btn-primary h-11" type="submit">
                Request Callback
              </button>
              <p className="text-xs text-slate-500">
                Demo form. Connect to your backend/CRM/WhatsApp API when ready.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
