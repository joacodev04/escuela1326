import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'

export default function Contacto() {
  return (
    <div className="inner-page">
      <section className="page-hero contact-hero">
        <div className="container page-hero-inner">
          <Eyebrow>Contacto · Escuela N° 1326</Eyebrow>
          <h1>Hablemos.<br /><span>Estamos acá.</span></h1>
          <p>Para consultas generales o para iniciar una inscripción, podés comunicarte con la Escuela Maestro Sergio del Coro.</p>
        </div>
      </section>
      <section className="section-space">
        <div className="container">
          <div className="row g-4 contact-grid">
            <div className="col-md-6 col-lg-4">
              <article className="contact-tile">
                <span className="contact-icon" aria-hidden="true">⌖</span>
                <span className="project-category">VISITANOS</span>
                <h2>Estamos en Rosario.</h2>
                <p>Solís 191<br />Rosario, Santa Fe</p>
                <a className="text-link" href="https://maps.google.com/?q=Sol%C3%ADs+191%2C+Rosario%2C+Santa+Fe" target="_blank" rel="noreferrer">Ver ubicación <span aria-hidden="true">↗</span></a>
              </article>
            </div>
            <div className="col-md-6 col-lg-4">
              <article className="contact-tile contact-tile-yellow">
                <span className="contact-icon" aria-hidden="true">◔</span>
                <span className="project-category">ESCRIBINOS</span>
                <h2>Conversemos por WhatsApp.</h2>
                <p>Teléfono informado en el perfil institucional: 4727611.</p>
                <a className="text-link" href="https://wa.me/5493416062557" target="_blank" rel="noreferrer">+54 9 341 606-2557 <span aria-hidden="true">↗</span></a>
              </article>
            </div>
            <div className="col-md-6 col-lg-4">
              <article className="contact-tile contact-tile-red">
                <span className="contact-icon" aria-hidden="true">◎</span>
                <span className="project-category">SEGUINOS</span>
                <h2>La escuela también está en Instagram.</h2>
                <p>Actividades, lecturas y momentos compartidos de la comunidad.</p>
                <a className="text-link" href="https://www.instagram.com/escuela1326/" target="_blank" rel="noreferrer">@escuela1326 <span aria-hidden="true">↗</span></a>
              </article>
            </div>
          </div>
          <div className="contact-cta">
            <p>¿Tu consulta es por una vacante?</p>
            <Link className="btn btn-primary" to="/inscripciones">Completar formulario de inscripción <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
