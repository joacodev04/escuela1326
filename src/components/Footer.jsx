import { Link } from 'react-router-dom'
import SchoolBrand from './SchoolBrand.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5">
            <SchoolBrand light />
            <p className="footer-about">Una escuela pública donde aprender, compartir y crecer en comunidad.</p>
          </div>
          <div className="col-6 col-lg-3">
            <h2 className="footer-title">La escuela</h2>
            <div className="footer-links">
              <Link to="/nosotros">Nuestra propuesta</Link>
              <Link to="/inscripciones">Inscripciones</Link>
              <Link to="/contacto">Contacto</Link>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <h2 className="footer-title">Encontranos</h2>
            <p className="footer-contact">Solís 191<br />Rosario, Santa Fe</p>
            <a className="footer-contact-link" href="https://www.instagram.com/escuela1326/" target="_blank" rel="noreferrer">
              Instagram @escuela1326 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Escuela Maestro Sergio del Coro N° 1326</span>
        </div>
      </div>
    </footer>
  )
}
