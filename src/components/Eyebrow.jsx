export default function Eyebrow({ children, tone = 'coral', center = false }) {
  const color = { coral: 'text-coral bg-coral', aqua: 'text-aqua bg-aqua', cream: 'text-cream/70 bg-cream/50' }[tone]
  const [text, line] = color.split(' ')
  return (
    <p className={`eyebrow flex items-center gap-4 ${text} ${center ? 'justify-center' : ''}`}>
      <span className={`h-px w-9 ${line}`} aria-hidden="true" />
      {children}
      {center && <span className={`h-px w-9 ${line}`} aria-hidden="true" />}
    </p>
  )
}
