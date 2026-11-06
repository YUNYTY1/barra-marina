export default function MenuCard({ title, desc, image, alt }) {
  return (
    <article>
      <div className="aspect-[4/3] overflow-hidden border-b-[6px] border-[#ebe5d8] bg-deep">
        <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="mt-5 flex items-center justify-between border-b border-deep/15 pb-3">
        <h3 className="font-heading text-[17px] font-extrabold uppercase tracking-[-0.01em]">{title}</h3>
        <span className="h-1.5 w-1.5 bg-coral" aria-hidden="true" />
      </div>
      {desc && <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-deep/60">{desc}</p>}
    </article>
  )
}
