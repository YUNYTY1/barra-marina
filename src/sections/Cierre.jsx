import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { cierre } from '../data/contenido'
import { site } from '../data/site'

export default function Cierre() {
  return (
    <section id="cierre" className="relative isolate overflow-hidden bg-sea px-6 pb-28 pt-24 text-center text-cream lg:pb-36 lg:pt-32">
      {/* Fondo con imagen y degradados elegantes */}
      <img src={cierre.background} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 transition-transform duration-1000 hover:scale-105" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sea/60 via-sea/90 to-night" aria-hidden="true" />
      
      {/* Elemento decorativo superior de luz */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-xl bg-gradient-to-r from-transparent via-coral/50 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Eyebrow tone="aqua" center>{cierre.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="h-section mt-8 text-[clamp(2.5rem,6.5vw,5.25rem)] tracking-[-0.04em] drop-shadow-md">
            {cierre.title}{' '}
            <em className="font-heading font-semibold normal-case italic tracking-[-0.03em] text-coral inline-block transition-transform duration-300 hover:scale-105">
              {cierre.accent}
            </em>
          </h2>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-cream/80 font-light">
            {cierre.text}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-col items-center justify-center gap-6">
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

            <div className="flex items-center gap-2 mt-2">
              <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60">
                {cierre.hours}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Sutil brillo decorativo inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-full max-w-4xl bg-coral/5 blur-3xl pointer-events-none -z-10" />
    </section>
  )
}