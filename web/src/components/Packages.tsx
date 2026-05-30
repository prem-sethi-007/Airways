import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { packages } from '../data/content'
import pkgCabin from '../assets/pkg-cabin.jpg'
import pkgResort from '../assets/pkg-resort.jpg'
import pkgCity from '../assets/pkg-city2.jpg'
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
      ease: [0.2, 0.8, 0.2, 1]
    }
  }
}

export default function Packages() {
  const cards = packages
  const images = packages.map(p => p.image)

  return (
    <section id="packages" className="section relative overflow-hidden py-32 bg-gradient-to-b from-white via-indigo-50/20 to-white">
      {/* Premium Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-indigo-500/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 -left-32 w-[500px] h-[500px] bg-blue-500/[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10">
        {/* New Layout with Header on Right */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-12"
        >
          <motion.div variants={itemVariants} className="flex-1 max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-slate-900" />
              <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Country of Art</p>
            </div>
            <h2 className="font-display text-7xl font-bold text-slate-900 tracking-tight mb-8">Curated Travel Guides</h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
              Find your way to the world's greatest wonders. Browse maps, explore destinations, and uncover must-see landmarks.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-3 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 lg:mt-24">
            {['All Guides', 'Culture', 'Cityscape', 'Nature'].map((f) => (
              <button
                key={f}
                className={cn(
                  "px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all",
                  f === 'All Guides' ? "bg-white text-slate-950 shadow-md" : "text-slate-500 hover:text-slate-950"
                )}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* New Grid Slider Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.slice(0, 4).map((p, idx) => (
            <motion.div 
              key={p.title} 
              variants={itemVariants}
              className="group relative h-[500px] overflow-hidden rounded-[40px] shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-indigo-500/10"
            >
              <img
                src={images[idx]}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-6 right-6">
                <button className="h-10 w-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all">
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-md tracking-tight">{p.title}</h3>
                <p className="text-[12px] text-white/60 mb-6 line-clamp-2 font-medium">
                  Step into the Eternal City, where history, culture, and breathtaking architecture meet.
                </p>
                <div className="flex items-center gap-5 text-white/70 text-[11px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-brand-400" /> France
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-400" /> 12 Days
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Monthly Spotlight Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-24 grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 rounded-[40px] p-12 overflow-hidden relative group"
        >
           <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200" className="h-full w-full object-cover grayscale" alt="" />
           </div>
           
           <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
           
           <div className="relative z-10 max-w-md">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-1 w-8 bg-blue-500 rounded-full" />
                <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">Featured Experience</p>
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display text-5xl font-bold text-white mb-8 leading-tight"
              >
                The Great Colosseum
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-slate-300 text-lg mb-10 leading-relaxed"
              >
                Step into the legacy of human ambition. From timeless monuments to breathtaking landmarks, explore our curated guides.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="px-10 py-4 rounded-2xl bg-white text-slate-950 text-xs font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-black/20"
              >
                Discover Colosseum
              </motion.button>
           </div>

           <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative z-10 aspect-video rounded-[30px] overflow-hidden shadow-2xl border border-white/10"
           >
              <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200" className="h-full w-full object-cover" alt="" />
           </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
