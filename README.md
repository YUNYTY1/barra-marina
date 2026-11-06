# Barra Marina Ismael — Landing page

Landing de una página para la cevichería **Barra Marina Ismael** (Jr. Junín 755, Int. 126, Lima).
Stack: Vite + React 18 + Tailwind CSS 3 + lucide-react. Fuentes locales con `@fontsource` (sin links externos).

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo
npm run build    # compila a dist/
npm run preview  # prueba el build
```

## Estructura

```
src/
├─ data/          Textos, carta, links, horarios y mapa de imágenes
│  ├─ site.js        nombre, dirección, horario, links de Maps, menú de navegación
│  ├─ contenido.js   textos de cada sección
│  ├─ carta.js       categorías y 11 platos/bebidas
│  └─ images.js      importa todas las imágenes de src/assets
├─ components/    Logo, NavBar, Button, Eyebrow, SpecialtyCard, MenuCard, ReviewCard, InfoRow, Watermark
├─ sections/      Hero, LaCasa, Especialidades, Carta, Experiencia, Resenas, Ubicacion, Cierre, Footer
├─ hooks/         useScrolled, useActiveSection
├─ assets/        Imágenes placeholder (.jpg)
└─ App.jsx        Solo ordena las secciones
public/           favicon.svg, og-image.jpg
```

## Cambiar las fotos

Reemplaza cada archivo de `src/assets/` por tu foto real **con el mismo nombre**:
`hero`, `casa-sala`, `casa-limon`, `ceviches`, `arroz-mariscos`, `chaufa-mariscos`, `chicharrones`,
`duos-marinos`, `trios-marinos`, `barra-marina`, `gaseosas`, `cervezas`, `chicha`, `bebidas-calientes`,
`cierre-fondo` (todas `.jpg`). Para compartir en redes, reemplaza también `public/og-image.jpg`.

## Pendientes antes de publicar

- [ ] Fotos reales (todas las de `src/assets/` y `public/og-image.jpg`).
- [ ] Reseñas: en las capturas solo se lee la de Rosa Espinoza. Faltan los textos de Carlos Mendoza, Lucía Ramos y Jorge Paredes (hoy dicen `[Texto de reseña pendiente]`) y las reseñas 5 y 6 (el diseño muestra "01 / 06"; hoy hay 4). Se edita en `src/data/contenido.js`.
- [ ] Carta: faltan las descripciones de **Chicha** y **Bebidas calientes** (no se veían completas). Se editan en `src/data/carta.js`.
- [ ] Especialidades: la captura solo muestra 3 de las "seis razones". Las 3 restantes (Chicharrones, Dúos marinos, Tríos marinos) se tomaron de la carta; confirmar o cambiar en `especialidadesIds` (`src/data/carta.js`). Además, el texto pequeño sobre el título ("Sección 03 · Especialidades") no se veía en la captura y se dedujo del patrón de las otras secciones.
- [ ] Confirmar el enlace de Google Maps y el mapa embebido (`src/data/site.js`).
- [ ] Pie de página: la captura se corta; se agregó una línea de copyright. Confirmar si lleva redes u otros textos.
- [ ] Meta `og:image` en `index.html`: poner URL absoluta del dominio al publicar.
- [ ] Probar en celular real (375px), tablet (768px) y escritorio (1440px).

## Notas

- Sin delivery ni formularios: todos los botones son enlaces (Carta / Google Maps). No hay nada que conectar a WhatsApp o backend.
- El mapa es un `<iframe>` de Google Maps (único recurso externo de la página).
- El menú resalta la sección activa según el scroll; "Reseñas" cubre las secciones 05 y 06, y "Ubicación" las secciones 07 y 08.
