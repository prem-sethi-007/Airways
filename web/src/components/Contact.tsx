import { useState, useEffect } from 'react'
import { Plane, Mail, Phone, MapPin, ArrowRight, Globe } from 'lucide-react'
import { company } from '../data/content'
import { cn } from '../lib/cn'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-40 pb-20 bg-white">
      <div className="container max-w-[1400px] mx-auto px-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-24 mb-32">
          {/* Left Column: Title & Description */}
          <div className="space-y-8">
            <h1 className="text-8xl font-bold text-slate-950 leading-[1] tracking-tighter">
              Contact us
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-sm">
              Get in touch with us for any enquiries and questions
            </p>
          </div>

          {/* Right Column: Detailed Contact Info - Image 3 Style */}
          <div className="grid sm:grid-cols-2 gap-y-20 gap-x-12 pt-4">
             <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">general inquiries</h4>
                <div className="space-y-2">
                   <p className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">{company.email}</p>
                   {company.phones.map(phone => (
                     <p key={phone} className="text-2xl font-bold text-slate-900">{phone}</p>
                   ))}
                </div>
             </div>

             <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">careers</h4>
                <div className="space-y-2">
                   <p className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">hr@rajshritravels.com</p>
                </div>
             </div>

             <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">collaborations</h4>
                <div className="space-y-2">
                   <p className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">partners@rajshritravels.com</p>
                </div>
             </div>

             <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">address</h4>
                <div className="space-y-2">
                   <p className="text-2xl font-bold text-slate-900 leading-tight">
                      {company.address}
                   </p>
                   <p className="text-sm font-bold text-slate-400">GSTIN: {company.gstin}</p>
                </div>
             </div>
          </div>
        </div>

        {/* Large Feature Image - Image 3 Style */}
        <div className="aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl relative group">
           <img 
             src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2000" 
             className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" 
             alt="Office Space" 
           />
           <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-all" />
        </div>
      </div>
    </div>
  )
}
