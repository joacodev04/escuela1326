import { Link } from 'react-router-dom'

export default function SchoolBrand({ light = false }) {
  return (
    <Link className={`school-brand ${light ? 'school-brand-light' : ''}`} to="/" aria-label="Escuela Maestro Sergio del Coro N° 1326 - inicio">
      <span className="school-seal" aria-hidden="true">
        <span className="seal-center">1326</span>
      </span>
      <span className="school-brand-name">
        <strong>Escuela N° 1326</strong>
        <span>Maestro Sergio del Coro</span>
      </span>
    </Link>
  )
}
