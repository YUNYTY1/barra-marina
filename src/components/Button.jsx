import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

const variants = {
  coral: 'bg-coral text-deep hover:bg-[#ff825a]',
  deep: 'bg-deep text-cream hover:bg-[#0f4d63]',
  outline: 'border border-cream/70 text-cream hover:bg-cream hover:text-deep',
}

// icon: 'down' | 'up' | null
export default function Button({ href, variant = 'coral', icon = null, className = '', children, ...props }) {
  const Icon = icon === 'down' ? ArrowDownRight : icon === 'up' ? ArrowUpRight : null
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-between gap-8 px-5 py-4 font-heading text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={14} aria-hidden="true" />}
    </a>
  )
}
