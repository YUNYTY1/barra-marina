import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { laCasa } from '../data/contenido'
import cevicheVideo from '../assets/ceviche1.mp4' // Si la tienes en public, usa '/ceviche1.mp4' directa en el src

export default function LaCasa() {
  return (
    <section id="la-casa" className="bg-cream py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="border border-deep/10 bg-white p-6 shadow-[0_40px_80px_-40px_rgba(11,58,75,0.35)] sm:p-10 lg:p-16">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            
            {/* COLUMNA IZQUIERDA: VIDEO */}
            <Reveal from="left" delay={150} className="relative pl-8 lg:pl-12">
              <span className="absolute left-0 top-4 font-heading text-[9px] font-semibold uppercase tracking-[0.35em] text-deep/40 [writing-mode:vertical-rl]">
                {laCasa.vertical}
              </span>
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-md">
                <video
                  src={cevicheVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            {/* COLUMNA DERECHA: TEXTO Y TARJETAS ANIMADAS */}
            <div>
              <Reveal from="right" delay={200}>
                <Eyebrow>{laCasa.eyebrow}</Eyebrow>
                <h2 className="h-section mt-6">{laCasa.title}</h2>
                <p className="mt-8 max-w-[26rem] text-base leading-[1.75] text-deep/75">{laCasa.text}</p>
              </Reveal>

              {/* CUADRITOS CON ANIMACIÓN HOVER */}
              <div className="mt-10 flex flex-col gap-4 max-w-xl">
                {laCasa.rows.map((r, i) => (
                  <Reveal key={r.label} delay={300 + i * 120}>
                    <div className="group border border-deep/15 bg-cream/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-coral hover:bg-white hover:shadow-lg">
                      <dt className="font-heading text-[10px] font-bold uppercase tracking-[0.24em] text-coral">
                        {r.label}
                      </dt>
                      <dd className="mt-1">
                        <p className="font-heading text-[15px] font-bold text-deep group-hover:text-coral transition-colors duration-300">
                          {r.title}
                        </p>
                        <p className="mt-1 text-[13px] text-deep/60">
                          {r.sub}
                        </p>
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={700}>
                <p className="mt-6 max-w-xl text-xs text-deep/50">{laCasa.note}</p>
              </Reveal>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}