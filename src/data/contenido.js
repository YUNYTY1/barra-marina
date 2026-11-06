import { images } from './images'

export const hero = {
  eyebrow: 'Cevichería peruana · Lima',
  title1: 'El sabor',
  title2: 'del',
  accent: 'mar,',
  kicker: 'En el corazón de Lima',
  text: 'Descubre la esencia de la gastronomía marina peruana en Barra Marina Ismael.',
  ctaPrimary: 'Explorar nuestra carta',
  ctaSecondary: 'Cómo llegar',
  cardLabel: 'Estamos en',
  // Carrusel del fondo (3 s por imagen).
  slides: [
    { src: images.hero, alt: 'Ceviche peruano con cebolla, cilantro y choclo en un plato oscuro' },
    { src: images.hero2, alt: 'Arroz con mariscos servido en cazuela de barro' },
    { src: images.hero3, alt: 'Chicharrón de pescado dorado con limón' },
  ],
}

export const laCasa = {
  eyebrow: 'Sección 02 · La casa',
  title: 'Una experiencia con sabor a mar',
  text: 'En Barra Marina Ismael celebramos el sabor de la gastronomía marina peruana. Una propuesta para disfrutar de ceviches, arroces, chicharrones y especialidades del mar.',
  vertical: 'Frescura · Sabor · Mar',
  imageMain: images.casaSala,
  imageMainAlt: 'Salón del restaurante',
  imageSmall: images.casaLimon,
  imageSmallAlt: 'Limón exprimido sobre cebolla morada y cilantro',
  note: 'Sabor que se siente con cada bocado.',
  rows: [
    { label: 'Horario', title: 'Lunes a sábado', sub: '9:30 a. m. – 6:00 p. m.' },
    { label: 'Ubicación', title: 'Jr. Junín 755, Int. 126', sub: 'A espaldas del Congreso de la República' },
    { label: 'Atención', title: 'En el establecimiento', sub: '' },
  ],
}

export const especialidades = {
  eyebrow: 'Sección 03 · Especialidades',
  title: 'El mar se sirve en tu mesa',
  text: 'Seis razones para sentarse en la barra: del ceviche de siempre a la selección de la casa.',
}

export const carta = {
  eyebrow: 'Sección 04 · La carta',
  title: 'Descubre nuestra carta',
  text: 'Ceviches, arroces, chaufas, chicharrones y la selección de la barra. Elige una categoría y explora.',
}

export const experiencia = {
  eyebrow: 'Sección 05 · Experiencia',
  title: 'Frescura, sabor y tradición marina',
  text: 'Un lugar para sentarse con calma, compartir la mesa y disfrutar la gastronomía marina peruana a media tarde, en el corazón de Lima.',
  points: ['Ceviches, arroces y chaufas en la misma mesa.', 'Porciones pensadas para compartir.', 'Atención presencial, de lunes a sábado.'],
  label: 'El mar, servido en tu mesa',
  background: images.experienciaFondo,
  images: {
    sala: { src: images.casaSala, alt: 'Salón con lámparas de ratán y mesas dispuestas' },
    limon: { src: images.casaLimon, alt: 'Limón exprimido sobre cebolla morada y cilantro' },
    chicha: { src: images.chicha, alt: 'Chicha morada y bebidas frías sobre la mesa' },
  },
}

export const resenas = {
  eyebrow: 'Sección 06 · Reseñas',
  title: 'LO QUE SE DICE',
  accent: 'EN LA BARRA',
  text: 'Comentarios reales de nuestros clientes en Google Maps.',
  items: [
    {
      name: 'Maryorie Rendon',
      role: 'Google Maps',
      text: 'Excelente servicio, variedad de platos y calidad de insumos. Super recomendado'
    },
    {
      name: 'Celeste Suarez Ramirez',
      role: 'Local Guide · Google Maps',
      text: 'Buenazo. PE 👍 100% recomendado. Asistan a buen hora....'
    },
    {
      name: 'Karina Garcia Sánchez',
      role: 'Local Guide · Google Maps',
      text: 'Muy rico todo la atención súper rápida y eficaz lo recomendó'
    },
    {
      name: 'Claudia Ninan',
      role: 'Local Guide · Google Maps',
      text: 'Buen huarique, con las 3B de bueno, bonito y barato! Sólo vayan con efectivo que la señal es baja y el efectivo saca de apuro.'
    },
    {
      name: 'Cristian Olaechea',
      role: 'Local Guide · Google Maps',
      text: 'Un lugar realmente bueno para comer ceviche y otros mariscos.'
    },
    {
      name: 'Stephany Santiago',
      role: 'Local Guide · Google Maps',
      text: 'La comida es deliciosa. Muy buen sabor y las porciones son generosas. El servicio también es muy bueno. Es un lugar para ir acompañado, porque hay mucha gente y pocos asientos. Se necesita que alguien reserve el asiento mientras otro pide, porque de lo contrario no encontrarás mesa.'
    },
    {
      name: 'Lizzy Campos',
      role: 'Local Guide · Google Maps',
      text: 'Sabor increíble, muy muy rico, pedí trío chaufa de mariscos, delicioso'
    },
    {
      name: 'Gianfranco Calle Lapouble',
      role: 'Google Maps',
      text: 'Fui a probar la promoción de su desayuno, el pan con pejerrey y el pan con huevera excelente, todo 10/10. También aproveché en probar su café y su jugo, todo rico y bien servido. Recomendado'
    },
    {
      name: 'Carmen TICONA justo',
      role: 'Local Guide · Google Maps',
      text: 'La comida buena y precio razonable. Lo más accesible y rico la leche de tigre con chicharrón a 18.00 soles. La atención es rápida según la cantidad de afluencia. El lugar es como para ir a comer y ya. No hay espacios ni mesas grandes para familias numerosas si quieres comodidad.'
    },
    {
      name: 'Pascual Ramos',
      role: 'Local Guide · Google Maps',
      text: 'Muy rica y fresca comida marina. Amable la atención. Grato ambiente'
    },
    {
      name: 'Renzo Chiguay',
      role: 'Google Maps',
      text: 'De sabor, muy bueno, a la altura de buenas cevicherías de cantidad está bueno pal precio, el lugar es un mercado ordenado, tiene varias mesas. Pedí el trio con arroz con mariscos. 👍'
    },
    {
      name: 'Ronald Hilario',
      role: 'Local Guide · Google Maps',
      text: 'Recomiendo sí o sí la Leche de Tigre y su chicharrón de pota. Causa, Ceviche y Chicha 4/5.'
    },
    {
      name: 'Robert Rojas',
      role: 'Local Guide · Google Maps',
      text: 'Siempre hay cola pero avanza rápido, y siempre hay mesa disponible, tiene varios ambientes. Rico, bien servido, personal amable y eficiente'
    },
    {
      name: 'Andrea Crisanto Perez',
      role: 'Google Maps',
      text: 'Hoy fui a la barra marina a eso de las 3:00 pm todo fue por un vídeo en tik tok y me animé a ir me pedí dos tríos con leche tigre, chaufa de mariscos y chicharrón de pota claro que primero se realiza cola para cancelar el pedido. Mi experiencia fue espectacular ya que nos encantó el pedido.'
    },
    {
      name: 'Rosa Espinoza',
      role: 'Cliente frecuente',
      text: 'Vengo por el ceviche y termino pidiendo el arroz con mariscos. La leche de tigre tiene el punto exacto: ácida, fresca y sin exagerar el ají. Se come bien y se sale contento.'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Google Maps',
      text: 'Excelente atención y los platos marinos son súper frescos. Altamente recomendado.'
    },
    {
      name: 'Lucía Ramos',
      role: 'Google Maps',
      text: 'El mejor lugar en el centro de Lima para disfrutar de un buen ceviche.'
    },
    {
      name: 'Jorge Paredes',
      role: 'Google Maps',
      text: 'Ambiente agradable y contundentes porciones. Volvería sin duda.'
    }
  ],
}

export const ubicacion = {
  eyebrow: 'Sección 07 · Ubicación',
  title: 'Te esperamos en Barra Marina Ismael',
  rows: [
    { icon: 'pin', label: 'Dirección', lines: ['Jr. Junín N.º 755, Interior 126', 'A espaldas del Congreso de la República', 'Lima, Perú'] },
    { icon: 'clock', label: 'Horario', lines: ['Lunes a sábado', '9:30 a. m. – 6:00 p. m.'] },
    { icon: 'cutlery', label: 'Atención', lines: ['Presencial en el establecimiento', ''] },
  ],
  cta: 'Cómo llegar',
  mapCaption: 'Jr. Junín 755 · Interior 126',
  mapLink: 'Abrir en Google Maps',
}

export const cierre = {
  eyebrow: 'Sección 08 · Te esperamos',
  title: 'El sabor del mar te',
  accent: 'espera',
  text: 'Visítanos y disfruta de nuestras especialidades marinas en Barra Marina Ismael.',
  cta: 'Encuéntranos aquí',
  hours: 'Lunes a sábado · 9:30 a. m. – 6:00 p. m.',
  background: images.cierreFondo,
  footerText: 'Cevichería peruana. Ceviches, arroces, chaufas y especialidades del mar, servidos en el corazón de Lima.',
  footerTag: '',
}