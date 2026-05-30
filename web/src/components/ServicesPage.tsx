import { useEffect } from 'react'
import { Plane, Hotel, ShieldCheck, Calendar, FileText, TrainFront, Coins, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { services } from '../data/content'
import { cn } from '../lib/cn'

const serviceIcons = [Plane, Hotel, ShieldCheck, Calendar, FileText, TrainFront, Coins]

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-40 pb-20 relative bg-white">
      <div className="container max-w-[1400px] mx-auto px-10 relative z-10">
        {/* Flight Booking Hero Section - Image 2 Style */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-40">
           <div className="flex-1 aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200" 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Flight Booking" 
              />
           </div>
           
           <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-slate-900" />
                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Works of Nature</p>
              </div>
              <h1 className="font-display text-6xl font-bold text-slate-900 mb-8 leading-tight">Nature Life World Wonders</h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Step into the legacy of human ambition. From timeless monuments to breathtaking landmarks, explore our curated guides.
              </p>
              <button className="px-10 py-4 rounded-xl bg-slate-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">
                Explore Wonders
              </button>
           </div>
        </div>

        {/* Destination Cards Section - Image 2 Style */}
        <div className="mb-40">
           <div className="flex items-center justify-between mb-16">
              <div>
                 <div className="flex items-center gap-4 mb-4">
                   <div className="h-px w-10 bg-slate-900" />
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Country of Art</p>
                 </div>
                 <h2 className="font-display text-5xl font-bold text-slate-900">Curated Travel Guides</h2>
              </div>
              <div className="flex items-center gap-2 p-1 bg-slate-50 rounded-xl border border-slate-100">
                {['All Guides', 'Culture', 'Cityscape', 'Nature'].map((f) => (
                  <button key={f} className="px-6 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-950 hover:bg-white transition-all">
                    {f}
                  </button>
                ))}
              </div>
           </div>

           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Northern Lights', loc: 'Norway', img: 'https://images.unsplash.com/photo-1531366930499-41f6693d1599?w=800' },
                { title: 'Dolomites Track', loc: 'Italy', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800' },
                { title: 'Giant Causeway', loc: 'Ireland', img: 'https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?w=800' },
                { title: 'The Matterhorn', loc: 'Switzerland', img: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=800' }
              ].map((item, i) => (
                <div key={i} className="group relative h-[450px] overflow-hidden rounded-[32px] shadow-lg">
                   <img src={item.img} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                   <div className="absolute top-6 right-6">
                      <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all">
                        <ArrowUpRight size={18} />
                      </button>
                   </div>
                   <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-white/70 mb-4 line-clamp-2">Step into the Eternal City, where history, culture, and breathtaking architecture meet.</p>
                      <div className="flex items-center gap-4 text-white/80 text-xs font-bold">
                        <div className="flex items-center gap-1.5"><MapPin size={14} className="text-blue-400" /> {item.loc}</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Detailed Services Explanation - Image 2 Style */}
        <div className="space-y-40">
           {services.map((s, idx) => {
              const Icon = serviceIcons[idx]
              const isEven = idx % 2 === 0
              return (
                <div key={s.title} className={cn("flex flex-col lg:flex-row items-center gap-20", !isEven && "lg:flex-row-reverse")}>
                   <div className="flex-1 relative">
                      <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                         <img src={s.image} className="h-full w-full object-cover" alt={s.title} />
                      </div>
                      <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-brand-500 rounded-3xl flex items-center justify-center text-white shadow-2xl hidden lg:flex">
                         <Icon size={48} />
                      </div>
                   </div>
                   
                   <div className="flex-1 max-w-xl">
                      <div className="text-brand-500 font-black text-5xl opacity-10 mb-6">0{idx + 1}</div>
                      <h3 className="text-4xl font-bold text-slate-900 mb-6">{s.title}</h3>
                      <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                        {s.desc} Our comprehensive {s.title.toLowerCase()} solution ensures that every aspect of your journey is handled with professional precision and care.
                      </p>
                      <ul className="grid grid-cols-2 gap-4 mb-10">
                         {['24/7 Support', 'Fast Processing', 'Global Network', 'Premium Care'].map(item => (
                           <li key={item} className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                              <div className="h-2 w-2 rounded-full bg-brand-500" /> {item}
                           </li>
                         ))}
                      </ul>
                      <button className="group flex items-center gap-4 text-slate-950 font-bold uppercase tracking-widest text-xs hover:text-brand-500 transition-all">
                        Inquire Service <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                   </div>
                </div>
              )
           })}
        </div>
      </div>
    </div>
  )
}
