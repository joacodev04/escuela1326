import { Link } from 'react-router-dom'

export default function SchoolBrand({ light = false }) {
  return (
    <Link className={`school-brand ${light ? 'school-brand-light' : ''}`} to="/" aria-label="Escuela Mitre 120 - inicio">
      <span className="school-seal" aria-hidden="true">
        <span className="seal-center">120</span>
      </span>
      <span className="school-brand-name">
        <strong>Escuela Mitre 120</strong>
        <span>Rosario · Santa Fe</span>
      </span>
    </Link>
  )
}
