import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'

export default function PaginaNoEncontrada() {
  return (
    <section className="not-found container text-center">
      <Eyebrow>Un pequeño desvío</Eyebrow>
      <h1>Esta página no está en el cuaderno.</h1>
      <p>Volvamos a la escuela y sigamos explorando.</p>
      <Link className="btn btn-primary" to="/">Volver al inicio</Link>
    </section>
  )
}
