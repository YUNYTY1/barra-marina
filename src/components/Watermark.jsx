// Palabra gigante decorativa de fondo (solo decorativa, oculta a lectores de pantalla).
export default function Watermark({ children, className = '' }) {
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute select-none font-heading text-[clamp(12rem,38vw,34rem)] font-black leading-none text-white/[0.04] ${className}`}>
      {children}
    </span>
  )
}
