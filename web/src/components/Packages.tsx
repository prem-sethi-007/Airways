import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, MapPin } from 'lucide-react'
import { packages } from '../data/content'
import { cn } from '../lib/cn'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1] as any
    }
  }
}

export default function Packages() {
  const [activeBg, setActiveBg] = useState<string | null>(null)
  const cards = packages
  const images = packages.map(p => p.image)

  return (
    <section id="packages" className="section relative overflow-hidden py-32 bg-sky-50">
      {/* HD Static Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=2000" 
          className="h-full w-full object-cover opacity-10" 
          alt="Packages Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-transparent to-sky-50" />
      </div>

      {/* Dynamic Background Image Reveal */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatePresence mode="wait">
          {activeBg && (
            <motion.div
              key={activeBg}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.2, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={activeBg} 
                alt="Section Background" 
                className="w-full h-full object-cover filter blur-[4px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-transparent to-sky-50" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Refined Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50" />
      </div>

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10">
        {/* Modern Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12"
        >
          <motion.div variants={itemVariants} className="flex-1 max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Curated Travel Guides</p>
            </div>
            <h2 className="font-display text-7xl lg:text-8xl font-bold text-slate-950 tracking-tight leading-[0.85] mb-12">
              Explore the <br />
              <span className="text-blue-600 italic">World with Us</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
              From the azure coasts of Santorini to the bustling neon streets of Tokyo, discover guides that redefine exploration.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 p-2 bg-white shadow-xl shadow-blue-900/5 rounded-[24px] border border-slate-100 lg:mb-4">
            {['All Guides', 'Culture', 'Nature'].map((f) => (
              <button
                key={f}
                className={cn(
                  "px-8 py-4 rounded-[20px] text-[11px] font-bold uppercase tracking-widest transition-all duration-500",
                  f === 'All Guides' ? "bg-slate-950 text-white shadow-2xl" : "text-slate-400 hover:text-slate-950 hover:bg-slate-50"
                )}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Improved Interactive Card Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.slice(0, 4).map((p, idx) => (
            <motion.div 
              key={p.title} 
              variants={itemVariants}
              onMouseEnter={() => setActiveBg(images[idx])}
              onClick={() => setActiveBg(images[idx])}
              className="group relative h-[600px] overflow-hidden rounded-[50px] shadow-3xl bg-slate-900 transition-all duration-700 hover:translate-y-[-12px] cursor-pointer"
            >
              <img
                src={images[idx]}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Dynamic Action Button */}
              <div className="absolute top-8 right-8">
                <button className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white transition-all duration-500 hover:bg-blue-600 hover:border-blue-500 group-hover:rotate-12">
                  <ArrowUpRight size={24} />
                </button>
              </div>

              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="mb-6 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-[9px] font-black text-blue-300 uppercase tracking-widest">Premium</span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 tracking-tight leading-none group-hover:text-blue-400 transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-300/80 mb-8 line-clamp-2 font-medium leading-relaxed">
                  Immerse yourself in local culture and breathtaking landscapes with our luxury curated itinerary.
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <MapPin size={14} className="text-blue-400" />
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Explore</span>
                  </div>
                  <span className="text-lg font-bold text-white tracking-tight">{p.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* High-End Feature Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 relative h-[500px] rounded-[60px] overflow-hidden group shadow-3xl"
        >
           <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="" />
           <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] transition-all duration-700 group-hover:backdrop-blur-none group-hover:bg-slate-950/20" />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
           
           <div className="relative z-10 h-full flex flex-col justify-center px-16 lg:px-24 max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-blue-500" />
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">Limited Edition</p>
                </div>
                <h3 className="font-display text-6xl lg:text-7xl font-bold text-white mb-10 leading-[0.9] tracking-tight">The Roman <br /><span className="text-blue-400 italic">Heritage</span></h3>
                <p className="text-slate-300 text-lg mb-12 leading-relaxed max-w-lg">
                  Walk through history in the heart of the Eternal City. Private access to the Colosseum's underground chambers.
                </p>
                <button className="inline-flex items-center gap-4 px-12 py-5 rounded-[24px] bg-blue-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-2xl shadow-blue-900/40">
                  Secure Your Slot
                  <ArrowRight size={18} />
                </button>
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  )
}
