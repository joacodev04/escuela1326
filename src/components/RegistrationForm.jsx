import { useState } from 'react'

const WHATSAPP_NUMBER = '5493416062557'

export default function RegistrationForm() {
  const [whatsappUrl, setWhatsappUrl] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    const message = [
      'Hola, quiero consultar por una inscripción en la Escuela Maestro Sergio del Coro N° 1326.',
      '',
      `Nombre del adulto responsable: ${values.get('adultName')}`,
      `Teléfono de contacto: ${values.get('phone')}`,
      `Email: ${values.get('email') || 'No indicado'}`,
      `Nombre del/de la estudiante: ${values.get('studentName')}`,
      `Grado al que solicita ingresar: ${values.get('grade')}`,
      `Comentario: ${values.get('message') || 'Sin comentarios adicionales'}`,
    ].join('\n')

    setWhatsappUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`)
  }

  return (
    <form className="school-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="form-step">FORMULARIO DE INSCRIPCIÓN</span>
        <h2>Contanos sobre tu familia</h2>
        <p>Completá estos datos y prepararemos un mensaje para consultar por el proceso de inscripción.</p>
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="adultName">Nombre del adulto responsable <span>*</span></label>
          <input className="form-control" id="adultName" name="adultName" autoComplete="name" required />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="phone">Teléfono de contacto <span>*</span></label>
          <input className="form-control" id="phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="email">Email <span className="optional-label">(opcional)</span></label>
          <input className="form-control" id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="col-md-7">
          <label className="form-label" htmlFor="studentName">Nombre del/de la estudiante <span>*</span></label>
          <input className="form-control" id="studentName" name="studentName" required />
        </div>
        <div className="col-md-5">
          <label className="form-label" htmlFor="grade">Grado al que solicita ingresar <span>*</span></label>
          <select className="form-select" id="grade" name="grade" defaultValue="" required>
            <option value="" disabled>Seleccioná el grado</option>
            {[1, 2, 3, 4, 5, 6, 7].map((grade) => <option key={grade} value={`${grade}°`}>{grade}° grado</option>)}
            <option value="Consultar">Prefiero consultar</option>
          </select>
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="message">¿Querés contarnos algo más? <span className="optional-label">(opcional)</span></label>
          <textarea className="form-control" id="message" name="message" rows="4" placeholder="Escribí acá tu consulta..." />
        </div>
        <div className="col-12">
          <div className="privacy-note">
            <span aria-hidden="true">i</span>
            <p>Los datos se incluirán en un mensaje de WhatsApp solo cuando elijas abrirlo. No se envían ni guardan en este sitio.</p>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg w-100" type="submit">Preparar consulta de inscripción <span aria-hidden="true">↗</span></button>
        </div>
      </div>
      {whatsappUrl && (
        <div className="form-success" role="status">
          <strong>¡Listo! Tu mensaje está preparado.</strong>
          <p>Revisá los datos y abrí WhatsApp para enviarlo a la escuela.</p>
          <a className="btn btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
            Abrir WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </form>
  )
}
