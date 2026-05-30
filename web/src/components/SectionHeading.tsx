import { cn } from '../lib/cn'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'light',
  className,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', "mb-10", className)}>
      {eyebrow ? (
        <div className={cn(
          "flex items-center gap-3 mb-4",
          align === 'center' ? "justify-center" : "justify-start"
        )}>
          {align === 'center' && <div className="h-px w-8 bg-brand-500/30" />}
          <p
            className={cn(
              'text-[10px] font-bold uppercase tracking-[0.3em]',
              tone === 'dark' ? 'text-brand-300' : 'text-brand-700',
            )}
          >
            {eyebrow}
          </p>
          <div className="h-px w-8 bg-brand-500/30" />
        </div>
      ) : null}
      <h2 className={cn(
        'font-display text-4xl font-medium tracking-tight sm:text-5xl', 
        tone === 'dark' ? 'text-white' : 'text-slate-900'
      )}>
        {title}
      </h2>
      {subtitle ? (
        <p className={cn(
          'mt-4 max-w-2xl text-base font-medium leading-relaxed opacity-70',
          align === 'center' ? 'mx-auto' : '',
          tone === 'dark' ? 'text-white' : 'text-slate-600'
        )}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
