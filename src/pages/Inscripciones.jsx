import Eyebrow from '../components/Eyebrow.jsx'
import RegistrationForm from '../components/RegistrationForm.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const steps = [
  { title: 'Completá el formulario', text: 'Dejanos los datos básicos de la persona adulta responsable y del/de la estudiante.' },
  { title: 'Revisá tu consulta', text: 'Se abrirá un mensaje preparado con la información que ingresaste para que la revises.' },
  { title: 'Enviá el WhatsApp', text: 'Al enviarlo, el equipo escolar podrá orientarte sobre vacantes y próximos pasos.' },
]

export default function Inscripciones() {
  return (
    <div className="inner-page">
      <section className="page-hero enroll-hero">
        <div className="container page-hero-inner">
          <Eyebrow>Inscripciones · Escuela N° 1326</Eyebrow>
          <h1>El próximo paso<br /><span>lo damos juntos.</span></h1>
          <p>Completá el formulario para iniciar una consulta de inscripción. La escuela te responderá por WhatsApp con la información disponible.</p>
        </div>
      </section>
      <section className="section-space">
        <div className="container">
          <SectionTitle eyebrow="¿Cómo funciona?" title="Una consulta simple, paso a paso." />
          <div className="steps-grid row g-3 g-lg-4">
            {steps.map((step, index) => (
              <div className="col-md-4" key={step.title}>
                <article className="step-card">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </div>
            ))}
          </div>
          <div className="registration-area row g-5 align-items-start">
            <div className="col-lg-4 registration-aside">
              <Eyebrow>Primer contacto</Eyebrow>
              <h2 className="page-section-title">Queremos conocerte.</h2>
              <p className="body-copy">Este formulario inicia una consulta, no confirma una vacante. La escuela podrá contarte los requisitos y la disponibilidad para el grado solicitado.</p>
              <a className="contact-detail" href="https://maps.google.com/?q=Sol%C3%ADs+191%2C+Rosario%2C+Santa+Fe" target="_blank" rel="noreferrer">
                <span aria-hidden="true">⌖</span><span><strong>Escuela N° 1326</strong><br />Solís 191 · Rosario, Santa Fe</span>
              </a>
              <a className="contact-detail" href="https://wa.me/5493416062557" target="_blank" rel="noreferrer">
                <span aria-hidden="true">◔</span><span><strong>WhatsApp</strong><br />+54 9 341 606-2557</span>
              </a>
            </div>
            <div className="col-lg-7 offset-lg-1"><RegistrationForm /></div>
          </div>
        </div>
      </section>
    </div>
  )
}
