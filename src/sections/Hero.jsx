import { useEffect, useState } from 'react'
import { ArrowDownRight } from 'lucide-react'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { hero } from '../data/contenido'
import { site } from '../data/site'

const SLIDE_MS = 3000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const total = hero.slides.length

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setIndex((i) => (i + 1) % total), SLIDE_MS)
    return () => clearTimeout(t)
  }, [index, total])

  return (
    <section id="inicio" className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0a2a33] text-cream">
      {hero.slides.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt={i === index ? s.alt : ''}
          aria-hidden={i !== index}
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-out ${i === index ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#08242d] via-[#08242d]/80 to-[#08242d]/30" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#08242d]/70 via-transparent to-[#08242d]/40" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 pb-6 pt-24 lg:px-12">
        <Reveal className="hidden items-center justify-between border-b border-cream/25 pb-5 font-heading text-[10px] font-bold uppercase tracking-[0.24em] text-cream/80 sm:flex">
          <span>{site.fullName} · {site.type}</span>
          <span>{site.hours.compact}</span>
        </Reveal>

        <div className="flex flex-1 flex-col justify-center py-12 lg:pl-12">
          <Reveal delay={100}>
            <Eyebrow tone="cream">{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="mt-8 font-display uppercase leading-[0.9] text-cream text-[clamp(3.75rem,7.4vw,8rem)]">
              {hero.title1}
              <br />
              {hero.title2}{' '}
              <em className="font-serif text-[1.12em] font-normal normal-case italic leading-[0.8] text-coral">{hero.accent}</em>
            </h1>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-10 font-heading text-sm font-bold uppercase tracking-[0.22em]">{hero.kicker}</p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/80">{hero.text}</p>
          </Reveal>
          <Reveal delay={440}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="#carta" icon="down" className="sm:min-w-[277px]">{hero.ctaPrimary}</Button>
              <Button href={site.mapsUrl} variant="outline" icon="up" target="_blank" rel="noreferrer" className="sm:min-w-[185px]">{hero.ctaSecondary}</Button>
            </div>
            <p className="mt-7 w-fit border-t border-cream/30 pt-3 font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60">{site.address.short}</p>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal delay={560} className="lg:absolute lg:bottom-6 lg:right-12 lg:w-[305px]">
            <aside className="border-l border-aqua/40 bg-[#0a3340]/90 p-6 backdrop-blur-sm">
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.24em] text-cream/60">{hero.cardLabel}</p>
              <p className="mt-3 font-serif text-2xl leading-tight">{site.address.card[0]}<br />{site.address.card[1]}</p>
              <p className="mt-3 text-xs text-cream/70">{site.address.reference}</p>
            </aside>
          </Reveal>

          <div className="mt-8 flex items-center justify-center gap-4 font-heading text-[10px] font-bold uppercase tracking-[0.24em] text-cream/50 sm:justify-between">
            <span className="hidden sm:block">{site.fullName} · {site.type}</span>
            <div className="flex items-center gap-2" role="group" aria-label="Imágenes del carrusel">
              {hero.slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ver imagen ${i + 1} de ${total}`}
                  aria-current={i === index ? 'true' : undefined}
                  className="py-3"
                >
                  <span className={`block h-[3px] transition-all duration-500 ${i === index ? 'w-9 bg-coral' : 'w-5 bg-cream/40 hover:bg-cream/70'}`} />
                </button>
              ))}
            </div>
            <a href="#la-casa" className="hidden items-center gap-2 hover:text-cream sm:flex">Desliza <ArrowDownRight size={13} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}