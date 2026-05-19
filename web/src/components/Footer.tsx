import { company } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <div className="font-display text-2xl text-slate-900">{company.name}</div>
            <p className="mt-2 text-sm text-slate-600">
              Air booking, packages, and travel consultancy with a service-first legacy.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-slate-700 lg:justify-center">
            <a href="#destinations">Destinations</a>
            <a href="#packages">Packages</a>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="text-sm text-slate-700 lg:text-right">
            <div className="font-semibold text-slate-900">Get in touch</div>
            <div className="mt-2">{company.phone}</div>
            <div>{company.email}</div>
            <div className="mt-2 text-slate-500">{company.city}</div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div>Designed for modern travel bookings.</div>
        </div>
      </div>
    </footer>
  )
}
