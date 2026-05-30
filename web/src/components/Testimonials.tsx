import { useRef } from 'react'
import { cn } from '../lib/cn'

const testimonials = [
  {
    content: "Synergeus has completely transformed the way I manage my finances. Its insights are incredibly accurate and easy to follow.",
    author: "Jessica L., Small Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    gradient: "bg-gradient-to-b from-[#4a5d3f] to-[#2d3a24]",
  },
  {
    content: "Thanks to Synergeus, I feel in control of my financial future. Highly recommended for anyone serious about smart investing.",
    author: "Samantha K., Investor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    gradient: "bg-gradient-to-br from-[#4c4491] to-[#2a2652]",
  },
  {
    content: "I never thought managing wealth could be this simple and effective. The platform provides confidence and clarity that I've never had before.",
    author: "David M., Software Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    gradient: "bg-gradient-to-br from-[#2a6d6d] to-[#163a3a]",
  },
  {
    content: "Getting into investment with Synergeus has made my life easier. I can't imagine going back.",
    author: "Marcus T., Business Analyst",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    gradient: "bg-gradient-to-br from-[#7a5a3a] to-[#3d2d1d]",
  },
  {
    content: "The level of detail and support provided is simply world-class. My portfolio has never looked better.",
    author: "Elena R., Portfolio Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    gradient: "bg-gradient-to-br from-[#1e3a8a] to-[#172554]",
  },
  {
    content: "Highly intuitive and powerful. It bridges the gap between complex data and actionable insights perfectly.",
    author: "Liam O., Tech Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    gradient: "bg-gradient-to-br from-[#374151] to-[#0f172a]",
  },
  {
    content: "A game-changer for our family's long-term planning. We now have a clear roadmap for the next decade.",
    author: "Sophie C., Family Office Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    gradient: "bg-gradient-to-br from-[#831843] to-[#4c0519]",
  }
]

// Duplicate for infinite circle effect
const extendedTestimonials = [...testimonials, ...testimonials]

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="reviews" className="relative bg-black py-32 overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-6 lg:px-10 mb-16 text-center">
        <p className="text-white text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed opacity-90">
          See why thousands of users trust Synergeus to guide their financial decisions with precision, clarity.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-6 px-3">
          {extendedTestimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                "flex-shrink-0 w-[300px] md:w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden flex flex-col relative transition-transform duration-500 hover:scale-[1.02]",
                t.gradient
              )}
            >
              <div className="h-[55%] w-full p-4">
                <div className="h-full w-full rounded-[24px] overflow-hidden shadow-2xl">
                  <img 
                    src={t.image} 
                    className="w-full h-full object-cover" 
                    alt="" 
                  />
                </div>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between">
                <p className="text-white/90 text-base md:text-lg leading-snug">
                  "{t.content}"
                </p>
                <p className="text-white/60 text-sm italic font-serif mt-4">
                  {t.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-424px * 7)); }
        }
        @media (max-width: 767px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-324px * 7)); }
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  )
}




