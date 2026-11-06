import { Quote } from 'lucide-react'

export default function ReviewCard({ index, name, role, text, active, onSelect, eyebrow, innerRef }) {
  return (
    <article
      ref={innerRef}
      onClick={onSelect}
      className={`flex min-h-[165px] shrink-0 cursor-pointer snap-start flex-col justify-between border p-4 transition-colors duration-300 w-[85%] sm:w-[48%] lg:w-[calc(25%-0.5rem)] ${active ? 'border-mint bg-mint text-abyss' : 'border-aqua/40 bg-[#102632] text-cream hover:border-mint/70'}`}
    >
      <div>
        <div className="flex items-start justify-between">
          <span className={`font-heading text-[10px] font-bold uppercase tracking-[0.2em] ${active ? 'text-abyss/80' : 'text-aqua'}`}>
            {active ? eyebrow : String(index + 1).padStart(2, '0')}
          </span>
          <Quote size={20} aria-hidden="true" className={active ? 'text-abyss/60' : 'text-mint'} />
        </div>
        {active && <blockquote className="mt-3 text-[13px] leading-relaxed">{text}</blockquote>}
      </div>
      <footer className={`mt-4 border-t border-dotted pt-3 ${active ? 'border-abyss/40' : 'border-aqua/50'}`}>
        <p className="font-heading text-[10px] font-extrabold uppercase tracking-[0.16em]">{active ? `— ${name}` : name}</p>
        {active && role && <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-abyss/60">{role}</p>}
      </footer>
    </article>
  )
}
