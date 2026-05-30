import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'
import { cn } from '../lib/cn'
import { destinations } from '../data/content'

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

export default function Destinations() {
  const [activeBg, setActiveBg] = useState<string | null>(null)

  const cardData = [
    { name: 'Imperial Tokyo', country: 'Japan', visited: '1.2k+', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600', price: '₹45,000' },
    { name: 'Kananaskis Country', country: 'Canada', visited: '850+', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600', price: '₹62,000' },
    { name: 'Burj Khalifa', country: 'Dubai', visited: '3.5k+', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600', price: '₹38,000' }
  ]

  return (
    <section id="destinations" className="section relative overflow-hidden py-32 bg-sky-50">
      {/* HD Static Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000" 
          className="h-full w-full object-cover opacity-10" 
          alt="Destinations Background" 
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
                className="w-full h-full object-cover filter blur-[2px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-transparent to-sky-50" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-50" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
        
        {/* Modern Header Design */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-blue-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600">Top Picks</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold text-slate-950 tracking-tight leading-[0.9]">
              Most Popular <br />
              <span className="text-blue-600 italic">Destinations</span>
            </h2>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-4 px-8 py-4 rounded-2xl bg-white shadow-xl shadow-blue-900/5 text-sm font-bold text-slate-900 hover:bg-slate-950 hover:text-white transition-all duration-500"
          >
            Explore All
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-45">
              <ArrowUpRight size={20} />
            </div>
          </motion.button>
        </div>

        {/* Improved Destination Cards - 3D Hover Effect */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-48"
        >
          {cardData.map((d) => (
            <motion.div 
              key={d.name} 
              variants={itemVariants}
              onMouseEnter={() => setActiveBg(d.image)}
              onClick={() => setActiveBg(d.image)}
              className="group relative h-[550px] w-full perspective-1000 cursor-pointer"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[40px] shadow-2xl transition-all duration-700 group-hover:translate-y-[-10px] group-hover:shadow-blue-500/20">
                <img
                  src={d.image}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={d.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Floating Badge */}
                <div className="absolute top-8 left-8">
                   <div className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest shadow-2xl">
                    {d.country}
                  </div>
                </div>

                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{d.visited} explorers</span>
                    <span className="text-white font-bold">{d.price}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                    {d.name}
                  </h3>
                  <button className="w-full py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-xs uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-slate-950">
                    Book Experience
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us - Modern Glassmorphism Design */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative grid lg:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-[60px] bg-slate-950 shadow-3xl"
        >
          {/* Left: Interactive Image */}
          <div className="relative overflow-hidden group min-h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200" 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" 
              alt="Why Choose Us" 
            />
            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
            
            {/* Testimonial Floating Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-12 left-12 right-12 p-10 rounded-[40px] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-3xl"
            >
              <div className="flex gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-blue-500 text-blue-500" />
                ))}
              </div>
              <p className="text-xl font-medium text-white leading-relaxed mb-8 italic">
                "Beyond our expectations. The seamless transition between countries made our world tour effortless."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-blue-500" />
                <p className="text-[11px] font-black text-blue-400 uppercase tracking-[0.3em]">Marcus Thorne ГÇö Global Nomad</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Modern Content Grid */}
          <div className="relative p-16 lg:p-24 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-950">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-10">
                <div className="h-2 w-2 bg-blue-500 rounded-full animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Industry Leaders</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-[1] tracking-tight mb-16">
                Redefining the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Travel Standard</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-12">
              {[
                { title: 'Seamless Booking', desc: 'Encrypted, one-click reservation ecosystem.' },
                { title: 'Global Network', desc: 'Exclusive access to 500+ luxury partners.' }
              ].map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1), duration: 0.6 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
