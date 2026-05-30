import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, ArrowUpRight, Star } from 'lucide-react'
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
  return (
    <section id="destinations" className="section relative overflow-hidden py-32 bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-400/5 blur-[100px] rounded-full" />
      </div>

      <div className="mx-auto max-w-[1400px] px-10 relative z-10">
        
        {/* Most Popular Destination Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-5xl font-bold text-slate-950 tracking-tight">Most Popular Destination</h2>
          <button className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-200 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-all group">
            View All Destination
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </div>
          </button>
        </motion.div>

        {/* Destination Cards - Image 2 Style */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-40"
        >
          {[
            { name: 'Imperial Tokyo', country: 'Japan', visited: '05', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800' },
            { name: 'Kananaskis Country', country: 'Canada', visited: '03', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800' },
            { name: 'Burj Khalifa', country: 'Dubai', visited: '02', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800' }
          ].map((d) => (
            <motion.div 
              key={d.name} 
              variants={itemVariants}
              className="group relative h-[450px] w-full overflow-hidden rounded-[32px] shadow-xl transition-all duration-700 hover:shadow-blue-500/10"
            >
              <img
                src={d.image}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={d.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-6 left-6">
                 <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold text-white uppercase tracking-wider">
                  {d.country}
                </span>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {d.name}
                </h3>
                <p className="text-[13px] text-white/60 font-medium">
                  {d.visited} Visited Place
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section - Image 2 Style */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="grid lg:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-[40px] bg-white shadow-2xl"
        >
          {/* Left: Large Image with Testimonial */}
          <div className="relative overflow-hidden group">
            <div className="h-full min-h-[600px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200" 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Why Choose Us" 
              />
            </div>
            
            {/* Testimonial Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute bottom-10 left-10 right-10 p-8 rounded-[32px] bg-black/40 border border-white/20 shadow-2xl backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-lg font-medium text-white leading-relaxed mb-6">
                "We thought we knew what luxury meant. Then Tourvia took us to Antarctica."
              </p>
              <div className="flex items-center gap-3">
                <p className="text-sm font-bold text-white uppercase tracking-widest">Rosa Steven ΓÇö Tokyo, Japan</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="bg-gradient-to-br from-[#E8F0FE] to-[#F0F7FF] p-16 lg:p-24 flex flex-col justify-center space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-blue-600 mb-8 shadow-sm border border-blue-50">
                <div className="h-1.5 w-1.5 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-[12px] font-bold uppercase tracking-wider">Premium Service</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-950 leading-[1.1] tracking-tight mb-12">
                Choose The Right Partner For Curated And The Seamless Travel
              </h2>
            </motion.div>

            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex gap-6 items-start"
              >
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20 transition-transform hover:scale-110">
                  <div className="relative">
                     <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                     <ArrowRight size={20} />
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <h4 className="text-2xl font-bold text-slate-900">Seamless Booking</h4>
                  <p className="text-base text-slate-600 leading-relaxed max-w-md">
                    Secure your expedition with a streamlined and confidential reservation process designed for efficiency precision.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
