import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import LaCasa from './sections/LaCasa'
import Especialidades from './sections/Especialidades'
import Carta from './sections/Carta'
import Experiencia from './sections/Experiencia'
import Resenas from './sections/Resenas'
import Ubicacion from './sections/Ubicacion'
import Cierre from './sections/Cierre'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <LaCasa />
        <Especialidades />
        <Carta />
        <Experiencia />
        <Resenas />
        <Ubicacion />
        <Cierre />
      </main>
      <Footer />
    </>
  )
}
