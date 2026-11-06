import { Clock, MapPin, Utensils } from 'lucide-react'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import InfoRow from '../components/InfoRow'
import Reveal from '../components/Reveal'
import { ubicacion } from '../data/contenido'
import { site } from '../data/site'

const icons = { pin: MapPin, clock: Clock, cutlery: Utensils }

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-cream py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>{ubicacion.eyebrow}</Eyebrow>
            <h2 className="h-section mt-6 max-w-md">{ubicacion.title}</h2>
          </Reveal>
          <div className="mt-10 space-y-7">
            {ubicacion.rows.map((r, i) => (
              <Reveal key={r.label} delay={120 + i * 120}>
                <InfoRow icon={icons[r.icon]} label={r.label} lines={r.lines} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={500}>
            <Button href={site.mapsUrl} variant="deep" icon="up" target="_blank" rel="noreferrer" className="mt-10 min-w-[171px]">{ubicacion.cta}</Button>
          </Reveal>
        </div>

        <Reveal as="figure" from="right" delay={150} className="border border-deep/10 bg-white p-1.5">
          <iframe
            title={`Mapa de ${site.fullName}`}
            src={site.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[320px] w-full border-0 sm:h-[470px]"
            allowFullScreen
          />
          <figcaption className="flex items-center justify-between px-2 py-3 font-heading text-[9px] font-semibold uppercase tracking-[0.22em]">
            <span className="text-deep/40">{ubicacion.mapCaption}</span>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="text-coral hover:underline">{ubicacion.mapLink}</a>
          </figcaption>
        </Reveal>
      </div>
    </section>
  )
}