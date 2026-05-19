import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/cn'
import { company } from '../data/content'

const links = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition',
        'bg-[linear-gradient(90deg,#b9ddff_0%,#f2c8d8_100%)]',
        scrolled ? 'border-b border-white/35 shadow-soft backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/60 bg-white/55 backdrop-blur">
            <span className="font-display text-lg tracking-tight text-brand-700">
              {company.name.slice(0, 1).toUpperCase()}
            </span>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg text-brand-900">{company.name}</span>
            <span className="block text-xs tracking-wide text-slate-700/80">{company.tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-slate-800 hover:text-brand-900">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="btn-primary">
            Get Quote
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/55 bg-white/40 text-slate-900 backdrop-blur hover:bg-white/55"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/35 bg-[linear-gradient(90deg,#b9ddff_0%,#f2c8d8_100%)] backdrop-blur-md lg:hidden">
          <div className="w-full px-4 py-4 sm:px-6">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/40 bg-white/35 px-3 py-2 text-sm font-semibold text-slate-900 backdrop-blur hover:bg-white/55"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-1 gap-2">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
