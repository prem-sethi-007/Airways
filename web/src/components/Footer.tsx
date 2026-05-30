import { company } from '../data/content'
import { Link } from 'react-router-dom'
import { Mail, Globe, Phone, X } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-32 pb-12 bg-gradient-to-b from-[#f0f4ff] via-[#f8faff] to-white">
      {/* Fog/Smoke/Cloud Effect Below Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-0 overflow-hidden">
        <div className="absolute bottom-[-50px] left-[-10%] w-[120%] h-[200px] bg-indigo-100/30 blur-[100px] rounded-[100%] animate-pulse" />
        <div className="absolute bottom-[-80px] left-[10%] w-[80%] h-[150px] bg-blue-50/50 blur-[80px] rounded-[100%] animate-bounce [animation-duration:10s]" />
        <div className="absolute bottom-[-30px] right-[-5%] w-[50%] h-[120px] bg-indigo-50/40 blur-[60px] rounded-[100%] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="container max-w-[1400px] relative z-10 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-12 lg:gap-20 mb-20 lg:mb-32">
          
          {/* Left side: Socials, Email, Address */}
          <div className="space-y-8 lg:space-y-10 text-center md:text-left">
            <div className="flex gap-6 items-center justify-center md:justify-start">
              <a href="#" className="text-slate-900 hover:opacity-60 transition-opacity">
                <Mail size={24} className="stroke-[1.5]" />
              </a>
              <a href="#" className="text-slate-900 hover:opacity-60 transition-opacity">
                <Globe size={24} className="stroke-[1.5]" />
              </a>
              <a href="#" className="text-slate-900 hover:opacity-60 transition-opacity">
                <Phone size={24} className="stroke-[1.5]" />
              </a>
              <a href="#" className="text-slate-900 hover:opacity-60 transition-opacity">
                <X size={22} className="stroke-[1.5]" />
              </a>
            </div>
            
            <div className="space-y-6">
              <p className="text-2xl font-medium text-slate-900 tracking-tight">{company.email}</p>
              <div className="text-[15px] text-slate-400 leading-relaxed font-normal">
                {company.address}
              </div>
              <div className="flex flex-col gap-2">
                {company.phones.map(phone => (
                  <p key={phone} className="text-lg font-medium text-slate-900">{phone}</p>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-400">GSTIN: {company.gstin}</p>
            </div>
          </div>

          {/* Center: Book Now Button with Brackets and Dots */}
          <div className="flex items-center justify-center relative group order-first lg:order-none mb-12 lg:mb-0">
            {/* Left Bracket with Dots */}
            <div className="hidden lg:flex items-center">
              <div className="h-[140px] w-48 border-l border-y border-slate-200 rounded-l-[40px] relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-[0.2]" 
                  style={{ 
                    backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', 
                    backgroundSize: '16px 16px',
                    maskImage: 'linear-gradient(to right, black 60%, transparent)'
                  }} 
                />
              </div>
              <div className="h-px w-10 bg-slate-200" />
            </div>

            {/* Center Button */}
            <Link to="/contact" className="z-20 bg-[#121212] text-white px-8 py-3.5 rounded-xl flex items-center gap-3 hover:scale-105 transition-all shadow-xl mx-4 group-hover:shadow-indigo-500/10">
              <span className="text-[15px] font-medium tracking-wide">Book Now</span>
            </Link>

            {/* Right Bracket with Dots */}
            <div className="hidden lg:flex items-center">
              <div className="h-px w-10 bg-slate-200" />
              <div className="h-[140px] w-48 border-r border-y border-slate-200 rounded-r-[40px] relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-[0.2]" 
                  style={{ 
                    backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', 
                    backgroundSize: '16px 16px',
                    maskImage: 'linear-gradient(to left, black 60%, transparent)'
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Right side: Vertical Links */}
          <div className="flex justify-center md:justify-end">
            <ul className="space-y-4 lg:space-y-6 text-center md:text-right">
              {['Destinations', 'Packages', 'Services', 'Reviews', 'About'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-xl lg:text-2xl font-medium text-slate-900 hover:text-indigo-600 transition-colors tracking-tight">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 text-[13px] font-normal text-slate-400">
          <a href="#" className="hover:text-slate-900 transition-colors underline decoration-slate-200 underline-offset-4">Terms and conditions</a>
          <p>© 2026 {company.name}. All Rights Reserved</p>
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
