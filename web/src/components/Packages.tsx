import { ArrowUpRight, Heart, Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { packages } from '../data/content'
import pkgCabin from '../assets/pkg-cabin.jpg'
import pkgResort from '../assets/pkg-resort.jpg'
import pkgCity from '../assets/pkg-city2.jpg'

export default function Packages() {
  const featured = packages[0]
  const cards = packages.slice(1, 3)
  const images = [pkgResort, pkgCabin] as const

  return (
    <section id="packages" className="section bg-slate-50">
      <div className="container">
        <SectionHeading
          eyebrow="Packages"
          title="Best selling packages"
          subtitle="Ready-to-book itineraries with flexible upgrades and add-ons."
          align="center"
        />

        <div className="mx-auto mt-10 max-w-6xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr_1fr]">
            {/* featured card (left) */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
              <div className="grid sm:grid-cols-[0.95fr_1.05fr]">
                <div className="relative">
                  <img src={pkgCity} alt="" className="h-52 w-full object-cover sm:h-full" />
                  <button
                    type="button"
                    className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-slate-800 shadow-sm hover:bg-white"
                    aria-label="Save package"
                  >
                    <Heart size={16} />
                  </button>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Featured deal</div>

                  <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                    {featured.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{featured.meta}</p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {featured.bullets.join(' • ')}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-lg font-bold text-brand-800">{featured.price}</div>
                      <div className="text-xs text-slate-500">per person (avg)</div>
                    </div>
                    <a href="#contact" className="btn-dark !rounded-full !px-5">
                      Book Now
                    </a>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-brand-700">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < 4 ? 'text-brand-500' : 'text-brand-200'}
                        fill={i < 4 ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-slate-600">Top rated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* image cards (right) */}
            {cards.map((p, idx) => (
              <a
                key={p.title}
                href="#contact"
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-soft"
              >
                <img
                  src={images[idx]}
                  alt=""
                  className="h-full min-h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-transparent" />

                <button
                  type="button"
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-slate-800 shadow-sm hover:bg-white"
                  aria-label="Save package"
                  onClick={(e) => e.preventDefault()}
                >
                  <Heart size={16} />
                </button>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div className="rounded-2xl bg-white/85 px-4 py-3 backdrop-blur">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{p.badge}</div>
                    <div className="mt-1 font-extrabold tracking-tight text-slate-900">{p.title}</div>
                    <div className="mt-1 text-xs text-slate-600">{p.price}</div>
                  </div>

                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-800 text-white shadow-glow transition group-hover:bg-brand-900">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-7 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-slate-500">
              Customizations available • Flights/Hotels/Visa can be bundled.
            </p>
            <a href="#contact" className="btn-ghost !rounded-full">
              See all packages
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
