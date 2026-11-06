import { site } from '../data/site'
import logoImg from '../assets/logo.jpg'

export default function Logo({ href = '#inicio', light = false }) {
  return (
    <a href={href} className="flex items-center gap-3 group py-1" aria-label={`${site.fullName}, ir al inicio`}>
      <img 
        src={logoImg} 
        alt={site.fullName} 
        className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover shadow-md border-2 border-coral/30 transition-transform duration-300 group-hover:scale-105" 
      />
    </a>
  )
}