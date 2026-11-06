import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { nav, site } from '../data/site'
import useScrolled from '../hooks/useScrolled'
import useActiveSection from '../hooks/useActiveSection'

const allSections = nav.flatMap((n) => n.sections)

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(40)
  const active = useActiveSection(allSections)
  const solid = scrolled || open

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? 'bg-cream/95 shadow-[0_1px_0_rgba(11,58,75,0.08)] backdrop-blur' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-6 px-6 lg:px-12">
        <Logo light={!solid} />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => {
              const isActive = item.sections.includes(active)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`border-b pb-1 font-heading text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors ${isActive ? 'border-coral' : 'border-transparent'} ${solid ? (isActive ? 'text-deep' : 'text-deep/55 hover:text-deep') : (isActive ? 'text-cream' : 'text-cream/60 hover:text-cream')}`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <a href={site.mapsUrl} target="_blank" rel="noreferrer" className={`hidden px-5 py-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.2em] transition-colors lg:inline-block ${solid ? 'bg-deep text-cream hover:bg-[#0f4d63]' : 'bg-coral text-deep hover:bg-[#ff825a]'}`}>
          Cómo llegar
        </a>

        <button type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="menu-movil" className={`p-2 lg:hidden ${solid ? 'text-deep' : 'text-cream'}`}>
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Principal móvil" className="border-t border-deep/10 bg-cream px-6 pb-6 pt-2 lg:hidden">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-deep/10">
                <a href={item.href} onClick={() => setOpen(false)} className="block py-4 font-heading text-xs font-bold uppercase tracking-[0.22em] text-deep">{item.label}</a>
              </li>
            ))}
          </ul>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-5 block bg-deep px-5 py-4 text-center font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-cream">Cómo llegar</a>
        </nav>
      )}
    </header>
  )
}
