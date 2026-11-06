export default function InfoRow({ icon: Icon, label, lines }) {
  return (
    <div className="flex gap-5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-deep/20 text-coral">
        <Icon size={15} aria-hidden="true" />
      </span>
      <div>
        <p className="font-heading text-[10px] font-bold uppercase tracking-[0.24em] text-deep/50">{label}</p>
        {lines.map((l) => (
          <p key={l} className="mt-1 text-sm leading-snug text-deep/85 first:mt-2">{l}</p>
        ))}
      </div>
    </div>
  )
}
