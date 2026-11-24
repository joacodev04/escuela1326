import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Contacto from './pages/Contacto.jsx'
import Inscripciones from './pages/Inscripciones.jsx'
import Nosotros from './pages/Nosotros.jsx'
import PaginaNoEncontrada from './pages/PaginaNoEncontrada.jsx'
import Inicio from './pages/Inicio.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/inscripciones" element={<Inscripciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
