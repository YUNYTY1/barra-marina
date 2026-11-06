import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { resenas } from '../data/contenido'

const pad = (n) => String(n).padStart(2, '0')
const initials = (name) =>
  name
    ? name
        .split(' ')
        .map((w) => w[0])
        .slice(0, 2)
        .join('')
    : 'GM'

export default function Resenas() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchX = useRef(null)

  const total = resenas.items.length
  const current = resenas.items[active]
  const go = (n) => setActive((n + total) % total)

  // Carrusel automático cada 2 segundos (se frena si pones el mouse encima)
  useEffect(() => {
    if (total <= 1 || isPaused) return

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total)
    }, 2000)

    return () => clearInterval(timer)
  }, [total, isPaused])

  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1))
    touchX.current = null
  }

  return (
    <section id="resenas" className="bg-abyss py-20 text-cream lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN Y CONTROLES */}
        <Reveal from="left">
          <Eyebrow tone="aqua">{resenas.eyebrow}</Eyebrow>
          <h2 className="h-section mt-6 text-[clamp(2.25rem,4.6vw,3.75rem)]">
            {resenas.title}{' '}
            <span className="inline-block bg-mint px-2 text-abyss">{resenas.accent}</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">{resenas.text}</p>

          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Reseña anterior"
              className="flex h-11 w-11 items-center justify-center border border-aqua/60 transition-colors hover:bg-aqua/20 active:scale-95"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Reseña siguiente"
              className="flex h-11 w-11 items-center justify-center border border-aqua/60 transition-colors hover:bg-aqua/20 active:scale-95"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
            <span className="ml-2 font-heading text-[11px] font-bold tracking-[0.2em] text-aqua" aria-live="polite">
              {pad(active + 1)} / {pad(total)}
            </span>
          </div>
        </Reveal>

        {/* COLUMNA DERECHA: TARJETA DE RESEÑA EN CARRUSEL */}
        <Reveal from="right" delay={150}>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={(e) => {
              setIsPaused(true)
              touchX.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              setIsPaused(false)
              onTouchEnd(e)
            }}
            className="border border-cream/10 bg-[#102632] p-6 sm:p-10 transition-all duration-300 hover:border-mint/40 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <Quote size={48} className="text-mint" aria-hidden="true" />
              
              {/* Insignia de Estrellas Google Maps */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
                <span className="ml-2 font-heading text-[9px] uppercase tracking-wider text-cream/50">
                  Google Maps
                </span>
              </div>
            </div>

            <figure key={active} className="animate-review-in mt-6 min-h-[220px] flex flex-col justify-between">
              <blockquote className="font-serif text-[clamp(1.25rem,2.2vw,1.85rem)] leading-[1.35] text-cream/95">
                “{current.text}”
              </blockquote>
              
              <figcaption className="mt-8 flex items-center gap-4 border-t border-cream/10 pt-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint font-heading text-sm font-extrabold text-abyss shrink-0" aria-hidden="true">
                  {initials(current.name)}
                </span>
                <div>
                  <span className="block font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-cream">
                    {current.name}
                  </span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/50">
                    {current.role || 'Opinión verificada en Google'}
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
        </Reveal>

      </div>
    </section>
  )
}