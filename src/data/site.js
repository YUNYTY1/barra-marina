export const site = {
  name: 'Barra Marina',
  nameAccent: 'Ismael',
  fullName: 'Barra Marina Ismael',
  type: 'Cevichería',
  address: { line1: 'Jr. Junín 755, Int. 126', line1Long: 'Jr. Junín N.º 755, Interior 126', reference: 'A espaldas del Congreso de la República', city: 'Lima, Perú', short: 'Jr. Junín 755 · Int. 126', card: ['Jr. Junín 755,', 'Interior 126'] },
  hours: { days: 'Lunes a sábado', time: '9:30 a. m. – 6:00 p. m.', compact: 'LUN – SÁB · 9:30 A. M. – 6:00 P. M.' },
  // TODO: confirmar el enlace exacto de Google Maps del local
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jr.+Jun%C3%ADn+755%2C+Lima+15001%2C+Per%C3%BA',
  mapsEmbed: 'https://www.google.com/maps?q=Jr.+Jun%C3%ADn+755%2C+Lima+15001%2C+Per%C3%BA&output=embed',
}

export const nav = [
  { label: 'Inicio', href: '#inicio', sections: ['inicio'] },
  { label: 'La casa', href: '#la-casa', sections: ['la-casa'] },
  { label: 'Especialidades', href: '#especialidades', sections: ['especialidades'] },
  { label: 'Carta', href: '#carta', sections: ['carta'] },
  { label: 'Reseñas', href: '#experiencia', sections: ['experiencia', 'resenas'] },
  { label: 'Ubicación', href: '#ubicacion', sections: ['ubicacion', 'cierre'] },
]
