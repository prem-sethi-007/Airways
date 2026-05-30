import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/cn'
import { Link, useLocation } from 'react-router-dom'
import { company } from '../data/content'

const links = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Packages', href: '/#packages' },
  { label: 'Services', href: '/services' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/contact' },
] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setOpen(false)
    if (href.startsWith('/#')) {
      const id = href.substring(2)
      if (location.pathname === '/') {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white py-4 shadow-sm' 
          : 'bg-transparent py-4 lg:py-6',
      )}
    >
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className={cn(
          "flex items-center gap-2.5 transition-colors shrink-0",
          scrolled || location.pathname !== '/' ? "text-slate-900" : "text-white"
        )}>
          <div className={cn(
            "flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full border transition-all",
            scrolled || location.pathname !== '/' ? "border-slate-200 bg-slate-50" : "border-white/30"
          )}>
            <div className={cn(
              "relative h-4 w-4 lg:h-5 lg:w-5 rounded-full border-2",
              scrolled || location.pathname !== '/' ? "border-slate-900" : "border-white"
            )}>
              <div className={cn(
                "absolute left-1/2 top-1/2 h-1.5 w-1.5 lg:h-2 lg:w-2 -translate-x-1/2 -translate-y-1/2 rounded-full",
                scrolled || location.pathname !== '/' ? "bg-slate-900" : "bg-white"
              )} />
            </div>
          </div>
          <span className="font-display text-xl lg:text-2xl font-bold tracking-tight">{company.name}</span>
        </Link>

        {/* Navigation - Clean without background box */}
        <nav className="hidden items-center gap-10 lg:flex">
          {links.slice(0, 4).map((l) => (
            l.href.startsWith('/#') ? (
              <a 
                key={l.label} 
                href={l.href}
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault()
                    handleLinkClick(l.href)
                  }
                }}
                className={cn(
                  "text-sm font-medium transition-all hover:opacity-70",
                  scrolled || location.pathname !== '/' ? "text-slate-600" : "text-white/90"
                )}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className={cn(
                  "text-sm font-medium transition-all hover:opacity-70",
                  (scrolled || location.pathname !== '/') 
                    ? (location.pathname === l.href ? "text-slate-900 font-bold" : "text-slate-600") 
                    : "text-white/90"
                )}
              >
                {l.label}
              </Link>
            )
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Link to="/contact" className={cn(
            "flex items-center gap-3 rounded-full px-8 py-2.5 text-sm font-bold transition-all shadow-sm",
            scrolled || location.pathname !== '/' 
              ? "bg-slate-950 text-white hover:bg-slate-800" 
              : "bg-white text-slate-950 hover:bg-slate-50"
          )}>
            Book Now
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
            scrolled || location.pathname !== '/'
              ? "border-slate-200 bg-slate-50 text-slate-900" 
              : "border-white/30 bg-white/20 text-white backdrop-blur-sm"
          )}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-6 rounded-3xl border border-slate-100 bg-white shadow-2xl lg:hidden">
          <div className="grid gap-3">
            {links.map((l) => (
              l.href.startsWith('/#') ? (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault()
                      handleLinkClick(l.href)
                    } else {
                      setOpen(false)
                    }
                  }}
                  className="flex items-center justify-between rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors border border-slate-100"
                >
                  {l.label}
                  <ArrowUpRight size={16} className="text-slate-400" />
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors border border-slate-100"
                >
                  {l.label}
                  <ArrowUpRight size={16} className="text-slate-400" />
                </Link>
              )
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
