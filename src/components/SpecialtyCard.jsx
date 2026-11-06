export default function SpecialtyCard({ number, title, text, image, alt, large = false, className = '' }) {
  return (
    <article className={`group relative isolate overflow-hidden bg-black ${className}`}>
      <img src={image} alt={alt} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06222d]/90 via-[#06222d]/25 to-transparent" aria-hidden="true" />
      <span className="absolute right-4 top-4 font-heading text-[10px] font-bold tracking-[0.2em] text-cream/60">{number}</span>
      <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
        <h3 className={`font-heading font-extrabold uppercase tracking-[-0.02em] text-cream ${large ? 'text-3xl lg:text-4xl' : 'text-xl'}`}>{title}</h3>
        <p className={`mt-2 max-w-md text-[13px] leading-relaxed text-cream/75 ${large ? 'lg:text-sm' : ''}`}>{text}</p>
      </div>
    </article>
  )
}
