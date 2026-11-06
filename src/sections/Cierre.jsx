import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { cierre } from '../data/contenido'
import { site } from '../data/site'
import logoImg from '../assets/logo.jpg'
import { MessageCircle } from 'lucide-react'

export default function Cierre() {
  return (
    <footer id="cierre" className="relative isolate overflow-hidden bg-sea px-6 pb-16 pt-24 text-center text-cream lg:pb-20 lg:pt-32 border-t border-cream/10">
      {/* Fondo con imagen y degradados elegantes */}
      <img src={cierre.background} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 transition-transform duration-1000 hover:scale-105" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sea/60 via-sea/90 to-night" aria-hidden="true" />
      
      {/* Elemento decorativo superior de luz */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-xl bg-gradient-to-r from-transparent via-coral/50 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-3xl">
        
        {/* LOGO EN EL FOOTER */}
        <Reveal>
          <div className="flex justify-center mb-6">
            <img 
              src={logoImg} 
              alt={site.fullName} 
              className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover shadow-xl border-2 border-coral/40" 
            />
          </div>
          <Eyebrow tone="aqua" center>{cierre.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="h-section mt-6 text-[clamp(2.5rem,6.5vw,5.25rem)] tracking-[-0.04em] drop-shadow-md">
            {cierre.title}{' '}
            <em className="font-heading font-semibold normal-case italic tracking-[-0.03em] text-coral inline-block transition-transform duration-300 hover:scale-105">
              {cierre.accent}
            </em>
          </h2>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cream/80 font-light">
            {cierre.text}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-8 flex flex-col items-center justify-center gap-6">
            <div className="relative group">
              {/* Efecto de brillo difuminado detrás del botón */}
              <div className="absolute -inset-1 rounded-lg bg-coral/30 blur-md transition-all duration-300 group-hover:bg-coral/60 group-hover:blur-lg" />
              
              <Button 
                href={site.mapsUrl} 
                icon="up" 
                target="_blank" 
                rel="noreferrer" 
                className="relative min-w-[250px] py-4 text-sm font-bold tracking-wider shadow-2xl transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                {cierre.cta}
              </Button>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60">
                {cierre.hours}
              </p>
            </div>

            {/* REDES SOCIALES */}
            <div className="flex items-center gap-4 mt-4">
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="p-3 rounded-full bg-cream/5 border border-cream/10 text-cream/80 hover:text-coral hover:border-coral/50 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                className="p-3 rounded-full bg-cream/5 border border-cream/10 text-cream/80 hover:text-coral hover:border-coral/50 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="TikTok"
                className="p-3 rounded-full bg-cream/5 border border-cream/10 text-cream/80 hover:text-coral hover:border-coral/50 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noreferrer"
                aria-label="WhatsApp"
                className="p-3 rounded-full bg-cream/5 border border-cream/10 text-cream/80 hover:text-coral hover:border-coral/50 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

          </div>
        </Reveal>
      </div>

      {/* COPYRIGHT INFERIOR */}
      <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/40 max-w-5xl mx-auto">
        <p>© {new Date().getFullYear()} Barra Marina Ismael. Todos los derechos reservados.</p>
        <p className="mt-2 sm:mt-0 font-heading tracking-widest uppercase text-[10px]">Hecho con sabor en Lima</p>
      </div>

      {/* Sutil brillo decorativo inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-full max-w-4xl bg-coral/5 blur-3xl pointer-events-none -z-10" />
    </footer>
  )
}