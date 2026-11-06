import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { cierre } from '../data/contenido'
import { nav, site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-night px-6 pb-8 pt-16 text-cream lg:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <Reveal>
          <p className="font-heading text-[13px] font-extrabold uppercase tracking-[0.24em]">
            {site.name} <span className="font-medium italic tracking-[0.2em] text-aqua">{site.nameAccent}</span>
          </p>
          <p className="mt-5 max-w-[16rem] text-[13px] leading-relaxed text-cream/60">{cierre.footerText}</p>
          <p className="mt-6 font-heading text-[9px] font-semibold uppercase tracking-[0.22em] text-cream/35">{cierre.footerTag}</p>
        </Reveal>

        <Reveal as="nav" delay={120} aria-label="Pie de página">
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.24em] text-aqua">Navegación</p>
          <ul className="mt-5 space-y-3 text-[13px] text-cream/65">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-cream">{n.label}</a></li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="address" delay={240} className="not-italic">
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.24em] text-aqua">Visítanos</p>
          <p className="mt-5 text-[13px] leading-relaxed text-cream/65">
            {site.address.line1Long}<br />{site.address.reference}<br />{site.address.city}
          </p>
          <p className="mt-4 text-[13px] text-cream/65">{site.hours.days} · {site.hours.time}</p>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-heading text-[10px] font-bold uppercase tracking-[0.22em] text-coral hover:underline">
            Cómo llegar <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
      {/* TODO: confirmar texto legal / créditos del pie */}
      <p className="mx-auto mt-14 max-w-[1280px] border-t border-cream/10 pt-6 text-[11px] text-cream/35">© {new Date().getFullYear()} {site.fullName}. Todos los derechos reservados.</p>
    </footer>
  )
}