import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { cn } from '../lib/cn'

const testimonials = [
  {
    content: "The sunset over Mount Bromo was unlike anything I've ever seen. BromoRise handled every detail perfectly, from the luxury cabin to the expert local guide. Truly a world-class travel experience that I would recommend to anyone seeking adventure without compromise.",
    author: "Marcus Thorne",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=90",
    bg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=2000&q=90"
  },
  {
    content: "Efficient, professional, and absolutely stunning. Our corporate retreat to Europe was seamless thanks to their logistics team. The attention to detail in the 'Man-made' wonders tour left our entire executive board inspired. We will be booking all our future transport here.",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=90",
    bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000&q=90"
  },
  {
    content: "Dance and Shine with Wine was amazing - a perfect mix of fun and dance, giving me a great opportunity to socialize and unwind. The instructors were fantastic, and the atmosphere was unforgettable. This is an experience I'll never forget, and I can't wait to come back.",
    author: "Klara i Ivo Jankos",
    image: "https://images.unsplash.com/photo-1520852329223-5e4bb47bb201?w=400&auto=format&fit=crop",
    bg: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=2000&q=90"
  }
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="reviews" className="relative min-h-[800px] overflow-hidden py-32">
      {/* Dynamic Background Image */}
      {testimonials.map((t, i) => (
        <div 
          key={`bg-${i}`}
          className={cn(
            "absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out",
            i === active ? "opacity-100" : "opacity-0"
          )}
        >
          <img 
            src={t.bg} 
            className="h-full w-full object-cover grayscale-[20%]" 
            alt="" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="container relative z-10">
        <div className="flex justify-between items-start mb-24">
          <h2 className="font-display text-5xl font-medium text-white leading-tight drop-shadow-lg">
            What others <br />
            <span className="italic">say about us?</span>
          </h2>
          <div className="text-sm font-black text-white/40 uppercase tracking-widest pt-4">
            {active + 1}/ Testimonials
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1.8fr] gap-20 items-center">
          {/* Active Testimonial Image */}
          <div className="relative">
            <div className="aspect-square w-64 mx-auto overflow-hidden rounded-full shadow-2xl transition-all duration-700 border-4 border-white/20">
              {testimonials.map((t, i) => (
                <img 
                  key={`img-${i}`}
                  src={t.image} 
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  )}
                  alt={t.author} 
                />
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-6">
              <button 
                onClick={prev}
                className="h-14 w-14 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all active:scale-95"
              >
                <ArrowLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="h-14 w-14 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all active:scale-95"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Testimonial Content Block */}
          <div className="relative p-12 rounded-[56px] border border-white/10 bg-black/40">
            <Quote className="text-brand-400 mb-8" size={40} />
            <div className="relative min-h-[250px]">
              {testimonials.map((t, i) => (
                <div 
                  key={`content-${i}`}
                  className={cn(
                    "absolute inset-0 transition-all duration-700",
                    i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                  )}
                >
                  <p className="text-2xl font-medium leading-relaxed text-white italic">
                    "{t.content}"
                  </p>
                  <div className="mt-10">
                    <div className="text-lg font-black text-white uppercase tracking-widest">{t.author}</div>
                    <div className="text-[10px] font-black text-brand-400 uppercase tracking-[0.4em] mt-2">Verified Traveler</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
