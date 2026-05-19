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
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow ? (
        <p
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.25em]',
            tone === 'dark' ? 'text-brand-300/90' : 'text-brand-700',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn('section-title', tone === 'dark' ? 'text-white' : 'text-slate-900')}>{title}</h2>
      {subtitle ? (
        <p className={cn('section-subtitle mx-auto', tone === 'dark' ? 'text-white/70' : 'text-slate-600')}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
