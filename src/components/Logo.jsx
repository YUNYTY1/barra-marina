import { site } from '../data/site'

export default function Logo({ href = '#inicio', light = false }) {
  return (
    <a href={href} className="whitespace-nowrap font-heading text-[13px] font-extrabold uppercase tracking-[0.24em]" aria-label={`${site.fullName}, ir al inicio`}>
      <span className={light ? 'text-cream' : 'text-deep'}>{site.name}</span>{' '}
      <span className="font-medium normal-case italic tracking-normal text-coral">{site.nameAccent}</span>
    </a>
  )
}
