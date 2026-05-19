import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { faqs } from '../data/content'
import { cn } from '../lib/cn'

export default function Faq() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section id="faq" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything you need to know"
          subtitle="If you have more questions, message us on WhatsApp and we’ll respond quickly."
        />

        <div className="mt-10 grid gap-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx
            return (
              <button
                key={f.q}
                type="button"
                onClick={() => setOpen(isOpen ? -1 : idx)}
                className="card w-full text-left"
                aria-expanded={isOpen}
              >
                <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <div className="font-semibold text-slate-900">{f.q}</div>
                    <div
                      className={cn(
                        'mt-2 text-sm text-slate-600',
                        isOpen ? 'block' : 'hidden sm:block',
                      )}
                    >
                      {f.a}
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={cn('shrink-0 text-slate-500 transition', isOpen ? 'rotate-180' : '')}
                  />
                </div>

                <div
                  className={cn('px-5 pb-5 text-sm text-slate-600 sm:hidden', isOpen ? 'block' : 'hidden')}
                >
                  {f.a}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
