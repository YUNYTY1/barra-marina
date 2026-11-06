import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import SpecialtyCard from '../components/SpecialtyCard'
import Watermark from '../components/Watermark'
import { especialidades } from '../data/contenido'
import { platos, especialidadesIds } from '../data/carta'

const items = especialidadesIds.map((id) => platos.find((p) => p.id === id))

const span = (i) => (i === 0 ? 'lg:col-span-7 lg:row-span-2' : i < 3 ? 'lg:col-span-5' : 'lg:col-span-4')
const minH = (i) => (i === 0 ? 'min-h-[380px]' : 'min-h-[280px]')

export default function Especialidades() {
  return (
    <section id="especialidades" className="relative overflow-hidden bg-sea py-20 text-cream lg:py-28">
      <Watermark className="-top-10 right-[-4%]">MAR</Watermark>
      <div className="container-x relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow tone="aqua">{especialidades.eyebrow}</Eyebrow>
            <h2 className="h-section mt-6 max-w-lg">{especialidades.title}</h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-[15rem] text-[13px] leading-relaxed text-cream/60">{especialidades.text}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-[10px] lg:grid-cols-12">
          {items.map((p, i) => (
            <Reveal key={p.id} from="zoom" delay={(i % 3) * 120} className={`flex ${span(i)}`}>
              <SpecialtyCard
                number={String(i + 1).padStart(2, '0')}
                title={p.title}
                text={p.short ?? p.desc}
                image={p.image}
                alt={p.alt}
                large={i === 0}
                className={`w-full ${minH(i)}`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}