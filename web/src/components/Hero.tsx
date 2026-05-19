import { ArrowRight, Star } from 'lucide-react'
import planeTop from '../assets/plane-top.jpg'

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="container pt-8 sm:pt-10">
        {/* hero canvas */}
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(90deg,#b9ddff_0%,#f2c8d8_100%)] shadow-soft">
          {/* airplane */}
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <img
              src={planeTop}
              alt=""
              className="w-[520px] max-w-[86%] -translate-y-4 select-none drop-shadow-[0_30px_70px_rgba(2,6,23,0.20)] sm:w-[620px] sm:-translate-y-8"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            {/* left copy */}
            <div className="relative z-10">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/55 px-3 py-1 text-xs font-semibold text-brand-900">
                <span className="h-2 w-2 rounded-full bg-brand-700" />
                Premium flights • Hotels • Packages
              </p>

              <h1 className="mt-5 max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
                Fly in style arrive
                <span className="block text-brand-900/90">in comfort</span>
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base">
                Discover exclusive deals on premium and first‑class flights for your ultimate travel experience.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#contact" className="btn-primary !rounded-full !px-6 !py-3 text-base">
                  Start Your Journey
                </a>
                <a href="#packages" className="btn-ghost !rounded-full !px-6 !py-3 text-base">
                  View Packages
                </a>
              </div>
            </div>

            {/* right stats card */}
            <div className="relative z-10 flex lg:justify-end lg:pt-12">
              <div className="w-full max-w-sm rounded-3xl border border-white/60 bg-white/55 p-5 shadow-soft backdrop-blur-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-brand-900">3.2M+</div>
                    <div className="mt-1 text-sm text-slate-700">Active passengers world wide</div>
                  </div>
                  <a
                    href="#contact"
                    className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-800 text-white shadow-glow hover:bg-brand-900"
                    aria-label="Get quote"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['A', 'B', 'C', 'D'].map((x) => (
                      <span
                        key={x}
                        className="grid h-8 w-8 place-items-center rounded-full border border-white bg-brand-100 text-xs font-bold text-brand-900"
                      >
                        {x}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1.5 text-sm font-semibold text-slate-800">
                    <Star size={16} className="text-brand-700" />
                    <span>5</span>
                    <span className="text-slate-600">Stars</span>
                  </div>
                </div>
              </div>
            </div>

            {/* orange seal (decor) */}
            <div className="pointer-events-none absolute bottom-6 right-6 hidden h-20 w-20 rotate-12 place-items-center rounded-full border-[10px] border-orange-500 bg-white/30 text-[10px] font-extrabold uppercase tracking-widest text-orange-600 shadow-soft sm:grid">
              Best
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
