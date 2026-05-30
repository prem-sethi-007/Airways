import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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

  const isDark = scrolled || location.pathname !== '/'

  return (
    <header
      className={cn(
        'fixed top-6 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10',
      )}
    >
      <div className="mx-auto max-w-[1400px] flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className={cn(
          "flex items-center gap-3 transition-colors shrink-0",
          isDark ? "text-slate-950" : "text-white"
        )}>
          <div className="flex items-center gap-1.5">
            <div className="grid grid-cols-2 gap-0.5">
              <div className={cn("h-2 w-2 rounded-full", isDark ? "bg-slate-950" : "bg-white")} />
              <div className={cn("h-2 w-2 rounded-full", isDark ? "bg-slate-950/40" : "bg-white/40")} />
              <div className={cn("h-2 w-2 rounded-full", isDark ? "bg-slate-950/40" : "bg-white/40")} />
              <div className={cn("h-2 w-2 rounded-full", isDark ? "bg-slate-950" : "bg-white")} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">{company.name}</span>
          </div>
        </Link>

        {/* Navigation - Black Pill Center with Glass Effect */}
        <nav className={cn(
          "hidden lg:flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-300",
          isDark 
            ? "bg-black text-white shadow-xl shadow-black/10" 
            : "bg-black/40 backdrop-blur-xl border border-white/10 text-white"
        )}>
          {links.map((l) => (
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
                className="text-xs font-bold uppercase tracking-widest transition-all hover:opacity-60"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="text-xs font-bold uppercase tracking-widest transition-all hover:opacity-60"
              >
                {l.label}
              </Link>
            )
          ))}
        </nav>

        {/* Action Section - Right Side */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/contact" className={cn(
            "flex items-center gap-2 rounded-full px-7 py-3 text-xs font-black uppercase tracking-widest transition-all shadow-xl",
            isDark 
              ? "bg-black text-white hover:bg-slate-900 shadow-black/20" 
              : "bg-white text-slate-950 hover:bg-slate-50 shadow-white/10"
          )}>
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className={cn(
            "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300",
            isDark
              ? "border-slate-200 bg-white text-slate-900 shadow-lg" 
              : "border-white/20 bg-black/20 text-white backdrop-blur-md"
          )}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 mx-6 p-6 rounded-[32px] border border-slate-100 bg-white shadow-2xl lg:hidden z-50"
          >
            <div className="grid gap-2">
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
                    className="flex items-center justify-between rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight size={16} className="text-slate-300" />
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight size={16} className="text-slate-300" />
                  </Link>
                )
              ))}
              <div className="h-px bg-slate-100 my-4" />
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-2xl bg-slate-950 py-5 text-xs font-black uppercase tracking-widest text-white"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
