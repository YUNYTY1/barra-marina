import { useState, useRef } from 'react'
import Eyebrow from '../components/Eyebrow'
import MenuCard from '../components/MenuCard'
import Reveal from '../components/Reveal'
import { carta } from '../data/contenido'
import { categorias, platos } from '../data/carta'

export default function Carta() {
  const [categoria, setCategoria] = useState('todo')
  const visibles = categoria === 'todo' ? platos : platos.filter((p) => p.categoria === categoria)

  // Referencia para controlar el desplazamiento de las categorías
  const scrollRef = useRef(null)

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="carta" className="bg-cream py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <Eyebrow>{carta.eyebrow}</Eyebrow>
          <h2 className="h-section mt-6 max-w-md">{carta.title}</h2>
        </Reveal>
        
        <Reveal delay={120} className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <p className="max-w-lg text-base leading-relaxed text-deep/75">{carta.text}</p>
          <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.24em] text-deep/40" aria-live="polite">
            {visibles.length} {visibles.length === 1 ? 'preparación' : 'preparaciones'}
          </p>
        </Reveal>

        {/* CONTENEDOR DE CATEGORÍAS CON BOTONES DE NAVEGACIÓN Y ANIMACIÓN */}
        <Reveal delay={200}>
          <div className="mt-10 flex items-center gap-3">
            
            {/* Botón Izquierda / Retroceder con animación de clic y hover */}
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center border border-deep/20 bg-white text-deep transition-all duration-300 hover:border-deep hover:bg-deep hover:text-cream hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Desplazar a la izquierda"
            >
              &#8592;
            </button>

            {/* Lista de categorías con scroll */}
            <div 
              ref={scrollRef}
              role="group" 
              aria-label="Filtrar la carta por categoría" 
              className="no-scrollbar -mx-6 flex flex-1 gap-2 overflow-x-auto px-6 pb-1 lg:mx-0 lg:flex-wrap lg:px-0 scroll-smooth"
            >
              {categorias.map((c) => {
                const on = c.id === categoria
                return (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setCategoria(c.id)}
                    className={`shrink-0 border px-5 py-3.5 font-heading text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 ${
                      on 
                        ? 'border-deep bg-deep text-cream shadow-md' 
                        : 'border-deep/20 text-deep/60 bg-white/50 hover:border-deep hover:text-deep hover:bg-white'
                    }`}
                  >
                    {c.label}
                  </button>
                )
              })}
            </div>

            {/* Botón Derecha / Avanzar con animación de clic y hover */}
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center border border-deep/20 bg-white text-deep transition-all duration-300 hover:border-deep hover:bg-deep hover:text-cream hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Desplazar a la derecha"
            >
              &#8594;
            </button>

          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 100}>
              <MenuCard title={p.title} desc={p.desc} image={p.image} alt={p.alt} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}