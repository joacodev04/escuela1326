import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SchoolBrand from './SchoolBrand.jsx'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'La escuela', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="school-strip">
        <div className="container school-strip-inner">
          <a href="https://maps.google.com/?q=Mitre+120%2C+Rosario%2C+Santa+Fe" target="_blank" rel="noreferrer">
            <span aria-hidden="true">⌖</span> Mitre 120 · Rosario, Santa Fe
          </a>
          <a href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">
            <span aria-hidden="true">◔</span> WhatsApp <strong>+54 9 11 0000-0000 (ficticio)</strong>
          </a>
        </div>
      </div>
      <header className="site-header">
        <nav className="navbar navbar-expand-lg container" aria-label="Navegación principal">
          <SchoolBrand />
          <button
            className="navbar-toggler menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-toggle-lines" />
          </button>
          <div className={`navbar-collapse ${menuOpen ? 'show' : ''}`}>
            <div className="navbar-nav ms-auto align-items-lg-center">
              {links.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
              <Link className="btn btn-primary nav-cta ms-lg-3" to="/inscripciones" onClick={() => setMenuOpen(false)}>
                Inscribirme <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
