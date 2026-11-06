import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import Watermark from '../components/Watermark'
import { experiencia } from '../data/contenido'
import cevicheVideo from '../assets/ceviche2.mp4' // Ajusta la ruta si tu video está en public o assets

export default function Experiencia() {
  return (
    <section id="experiencia" className="relative isolate overflow-hidden bg-night py-20 text-cream lg:py-28">
      <img src={experiencia.background} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-night/80" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/70 to-transparent" aria-hidden="true" />

      <Watermark className="-bottom-16 right-[-2%]">MAR</Watermark>
      
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        
        {/* COLUMNA IZQUIERDA: TEXTO Y PUNTOS EN TARJETAS ANIMADAS */}
        <div>
          <Reveal from="left">
            <Eyebrow tone="aqua">{experiencia.eyebrow}</Eyebrow>
            <h2 className="h-section mt-6 max-w-md">{experiencia.title}</h2>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-cream/65">{experiencia.text}</p>
          </Reveal>

          {/* LISTA CONVERTIDA EN TARJETAS CON ANIMACIÓN HOVER Y ACTIVE */}
          <div className="mt-10 flex flex-col gap-3 max-w-md">
            {experiencia.points.map((p, i) => (
              <Reveal key={p} delay={150 + i * 120}>
                <div className="group flex items-center gap-5 border border-cream/15 bg-cream/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-aqua hover:bg-cream/10 hover:shadow-xl active:scale-95">
                  <span className="font-heading text-xs font-bold tracking-[0.2em] text-aqua shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[13px] text-cream/90 group-hover:text-cream transition-colors duration-300">
                    {p}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Etiqueta flotante opcional (si deseas mantenerla del contenido original) */}
          {experiencia.label && (
            <Reveal delay={450} className="mt-6">
              <span className="inline-block bg-coral px-4 py-3 font-heading text-[11px] font-extrabold uppercase leading-tight tracking-[0.04em] text-deep shadow-md">
                {experiencia.label}
              </span>
            </Reveal>
          )}
        </div>

        {/* COLUMNA DERECHA: VIDEO PRINCIPAL (CEVICHE2.MP4) SIN RECUADROS CHICOS */}
        <Reveal from="right" delay={150} className="relative w-full">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl border border-cream/10 group">
            <video
              src={cevicheVideo}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </Reveal>

      </div>
    </section>
  )
}