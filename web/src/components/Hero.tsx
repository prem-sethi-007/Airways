import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/cn'
import { company } from '../data/content'
import heroPlane from '../assets/hero-plane.jpg'
import pkgCity from '../assets/pkg-city.jpg'
import pkgResort from '../assets/pkg-resort.jpg'
import pkgCabin from '../assets/pkg-cabin.jpg'
import pkgCity2 from '../assets/pkg-city2.jpg'

const sliderItems = [
  { title: 'Mount Bromo', image: pkgCity },
  { title: 'Bali, Indonesia', image: pkgResort },
  { title: 'Tokyo, Japan', image: pkgCabin },
  { title: 'Paris, France', image: pkgCity2 },
  { title: 'Swiss Alps', image: 'https://picsum.photos/800/600?random=1' },
  { title: 'Santorini, Greece', image: 'https://picsum.photos/800/600?random=2' },
  { title: 'Dubai, UAE', image: 'https://picsum.photos/800/600?random=3' },
  { title: 'London, UK', image: 'https://picsum.photos/800/600?random=4' },
  { title: 'New York, USA', image: 'https://picsum.photos/800/600?random=5' },
  { title: 'Sydney, Australia', image: 'https://picsum.photos/800/600?random=6' },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderItems.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <section id="top" className="relative h-[100vh] min-h-[700px] w-full overflow-hidden">
        {/* Background Image with Minimal Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroPlane}
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 flex h-full flex-col px-6 lg:px-12">
          {/* Centered Title Section */}
          <div className="flex flex-1 flex-col items-center justify-center pt-24 text-center text-white">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.3em] shadow-2xl backdrop-blur-sm"
            >
              {company.secondaryTagline}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="max-w-5xl font-display text-6xl font-bold leading-[1] tracking-tight sm:text-7xl lg:text-[100px] text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
            >
              {company.tagline}
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block italic text-blue-300 mt-2"
              >
                with {company.name}
              </motion.span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row gap-6"
            >
               <button className="px-10 py-4 rounded-2xl bg-blue-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                  Explore Destinations
               </button>
               <button className="px-10 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all">
                  Watch Video
               </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Semi-Circle Curved Slider Section Below Hero */}
      <section className="relative pb-32 pt-20 overflow-hidden z-20">
        {/* Animated Background for Slider Section */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=2000" 
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-white/10" />
          
          {/* Floating Plane Animation */}
          <div className="absolute top-1/3 left-0 w-full pointer-events-none overflow-hidden h-60">
            <div className="animate-plane-fly absolute whitespace-nowrap">
              <span className="text-white/40 text-7xl opacity-40 inline-block">✈</span>
            </div>
          </div>
          
          {/* Animated Stars/Destinations Decor */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto flex h-[550px] w-full max-w-[1400px] items-start justify-center z-10"
        >
          {/* Curved Path Area */}
          <div className="relative flex h-[800px] w-[2000px] items-start justify-center mt-10">
            {sliderItems.map((item, i) => {
              const total = sliderItems.length
              const angleStep = 80 / (total - 1) // 80 degrees total spread
              const currentAngle = i * angleStep - 40 // -40 to 40 degrees
              const isActive = i === activeIndex
              
              // Rotate based on active index
              const rotationAngle = currentAngle - (activeIndex * angleStep - 40)

              return (
                <div
                  key={item.title}
                  className={cn(
                    "absolute top-0 flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer",
                    isActive ? "z-20" : "z-10 opacity-30 grayscale-[20%]"
                  )}
                  style={{
                    transform: `rotate(${rotationAngle}deg) translateY(20px)`,
                    transformOrigin: '50% 800px',
                  }}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className={cn(
                    "group relative overflow-hidden rounded-[40px] border-4 transition-all duration-700 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)]",
                    isActive ? "h-72 w-56 border-brand-500 scale-110" : "h-64 w-48 border-white hover:border-slate-100"
                  )}>
                    <img
                      src={item.image}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                    <div className={cn(
                      "absolute bottom-0 left-0 right-0 p-5 transition-all duration-500",
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}>
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-400">Explore</p>
                      <h3 className="mt-1 text-sm font-bold text-white tracking-tight">{item.title}</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex flex-col items-center gap-5"
        >
          <div className="flex justify-center gap-3">
            {sliderItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === activeIndex ? "w-12 bg-brand-600 shadow-glow" : "w-2 bg-slate-200 hover:bg-slate-300"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 animate-pulse">
            Scroll to discover destinations
          </p>
        </motion.div>
      </section>
    </>
  )
}
