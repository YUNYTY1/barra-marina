import { images } from './images'

export const categorias = [
  { id: 'todo', label: 'Todo' },
  { id: 'ceviches', label: 'Ceviches' },
  { id: 'arroces-chaufas', label: 'Arroces y chaufas' },
  { id: 'chicharrones', label: 'Chicharrones' },
  { id: 'duos-trios', label: 'Dúos y tríos' },
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'bebidas', label: 'Bebidas' },
]

// `short`: texto corto que se usa en la sección Especialidades (si existe).
export const platos = [
  { id: 'ceviches', categoria: 'ceviches', title: 'Ceviches', image: images.ceviches, alt: 'Ceviche de pescado con cebolla morada, choclo desgranado y camote',
    desc: 'El clásico peruano servido como se debe: directo, frío y con todo el sabor del mar.' },
  { id: 'arroz-mariscos', categoria: 'arroces-chaufas', title: 'Arroz con mariscos', image: images.arrozMariscos, alt: 'Arroz con mariscos con langostinos, conchas y calamares en cazuela de barro',
    desc: 'El plato que nunca falla en la mesa. Arroz con el sabor del mar, servido generoso.' },
  { id: 'chaufa-mariscos', categoria: 'arroces-chaufas', title: 'Chaufa de mariscos', image: images.chaufaMariscos, alt: 'Chaufa de mariscos con langostinos, calamares y cebolla china',
    short: 'El wok peruano que se encuentra con el océano.',
    desc: 'El wok peruano que se encuentra con el océano. Sabor intenso, servido al momento.' },
  { id: 'chicharrones', categoria: 'chicharrones', title: 'Chicharrones', image: images.chicharrones, alt: 'Chicharrón de pescado dorado con limón y salsa criolla',
    desc: 'Crujientes y dorados, pensados para compartir en el centro de la mesa.' },
  { id: 'duos-marinos', categoria: 'duos-trios', title: 'Dúos marinos', image: images.duosMarinos, alt: 'Plato con ceviche y mariscos salteados',
    desc: 'Dos preparaciones en un solo plato: el mar dos veces en la misma mesa.' },
  { id: 'trios-marinos', categoria: 'duos-trios', title: 'Tríos marinos', image: images.triosMarinos, alt: 'Tabla con ceviche, langostinos y arroz con mariscos',
    desc: 'Tres preparaciones para quienes quieren probarlo todo sin elegir.' },
  { id: 'barra-marina', categoria: 'especialidades', title: 'Barra marina', image: images.barraMarina, alt: 'Barra con distintas preparaciones marinas y chicha morada',
    desc: 'La selección de la casa, servida con la actitud de una barra marina.' },
  { id: 'gaseosas', categoria: 'bebidas', title: 'Gaseosas', image: images.gaseosas, alt: 'Vaso de gaseosa con hielo y rodaja de limón',
    desc: 'Bien frías, para acompañar cada bocado.' },
  { id: 'cervezas', categoria: 'bebidas', title: 'Cervezas', image: images.cervezas, alt: 'Botella y vaso de cerveza helada',
    desc: 'La compañera natural de la cevichería.' },
  // TODO: las descripciones de Chicha y Bebidas calientes no se veían completas en las capturas
  { id: 'chicha', categoria: 'bebidas', title: 'Chicha', image: images.chicha, alt: 'Vaso de chicha morada con hielo junto a maíz morado', desc: '' },
  { id: 'bebidas-calientes', categoria: 'bebidas', title: 'Bebidas calientes', image: images.bebidasCalientes, alt: 'Taza de café humeante sobre una mesa de madera', desc: '' },
]

// Especialidades: los 3 primeros se ven en la captura; del 4 al 6 se tomaron de la carta (ver README).
export const especialidadesIds = ['ceviches', 'arroz-mariscos', 'chaufa-mariscos', 'chicharrones', 'duos-marinos', 'trios-marinos']
