import { motion } from 'framer-motion'
import { Plane, Hotel, ShieldCheck, Calendar, FileText, TrainFront, Coins, ArrowUpRight, Settings } from 'lucide-react'
import { services } from '../data/content'
import { cn } from '../lib/cn'
import { Link } from 'react-router-dom'

const serviceIcons = [Plane, Hotel, ShieldCheck, Calendar, FileText, TrainFront, Coins]

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

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden py-32 bg-[#F0F4F8]">
      {/* Soft Background Shadows/Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container max-w-[1400px] relative z-10 px-6 lg:px-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-start justify-between mb-20 gap-12"
        >
          <motion.div variants={itemVariants} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-900/10 bg-white/50 mb-6">
              <Settings size={14} className="text-slate-900" />
              <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Our services</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-slate-950 leading-[1.1] tracking-tight">
              What we can <br />
              do for you
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="lg:pt-20 max-w-md">
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
              From global flight bookings to luxury stays, we provide premium travel solutions tailored to your unique journey.
            </p>
            <Link to="/services" className="inline-flex items-center gap-3 bg-[#c9b197] hover:bg-[#b89f85] text-slate-950 px-8 py-4 rounded-full font-bold text-sm transition-all group">
              See our services
              <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((s, idx) => {
            return (
              <motion.div 
                key={s.title} 
                variants={itemVariants}
                className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-[30px] md:rounded-[40px] shadow-2xl transition-all duration-700 md:hover:-translate-y-2 hover:shadow-indigo-500/10"
              >
                <img 
                  src={s.image} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={s.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white opacity-60 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
                  </div>
                </div>

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                   <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug">
                     {s.title}
                   </h3>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
