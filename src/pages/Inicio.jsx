import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const projects = [
  {
    category: 'BIBLIOTECA · LECTURA',
    title: 'Historias que nos encuentran',
    text: 'Lecturas compartidas y nuevos mundos por descubrir en la biblioteca de la escuela.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=85',
    alt: 'Libros en los estantes de una biblioteca',
  },
  {
    category: 'ENCUENTROS · COMUNIDAD',
    title: 'Aprender también es salir',
    text: 'La escuela se vive en grupo: compartimos actividades, paseos y aprendizajes.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85',
    alt: 'Estudiantes participan de una actividad en la escuela',
  },
  {
    category: 'FAMILIAS · TALLERES',
    title: 'Crecer en red',
    text: 'Espacios de encuentro para acompañar a las familias y conversar sobre lo que nos importa.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=85',
    alt: 'Familia compartiendo una actividad',
  },
]

const communityHighlights = [
  {
    number: '01',
    title: 'Expresar lo que pensamos',
    text: 'Leer, conversar y compartir ideas nos ayuda a escuchar otras miradas y encontrar nuestra propia voz.',
  },
  {
    number: '02',
    title: 'Crear y aprender haciendo',
    text: 'Los talleres y proyectos convierten la curiosidad en experiencias para explorar, probar y descubrir.',
  },
  {
    number: '03',
    title: 'Acompañarnos entre todos',
    text: 'Estudiantes, familias y escuela construimos vínculos que hacen más rico cada recorrido.',
  },
]

export default function Inicio() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>Rosario · Escuela pública · N° 1326</Eyebrow>
            <h1>Aprender,<br /><span>compartir</span> y crecer.</h1>
            <p>Somos la Escuela Maestro Sergio del Coro. Un lugar para encontrarnos, hacer preguntas y descubrir todo lo que podemos aprender juntos.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" to="/nosotros">Conocé la escuela <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" to="/inscripciones">Inscripciones <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-location"><span aria-hidden="true">⌖</span> Solís 191 · Rosario, Santa Fe</div>
          </div>
          <div className="hero-visual">
            <div className="hero-image" role="img" aria-label="Alumnos compartiendo actividades en la escuela" />
            <div className="hero-sticker"><span>ESCUELA</span><strong>1326</strong><span>APRENDER JUNTOS</span></div>
            <span className="hero-doodle" aria-hidden="true">✳</span>
            <span className="hero-caption">Una escuela<br />hecha de encuentros</span>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>ESCUCHAR · EXPLORAR · APRENDER</span>
          <a href="https://www.instagram.com/escuela1326/" target="_blank" rel="noreferrer">@escuela1326 <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="intro-section section-space">
        <div className="container">
          <div className="row align-items-end gy-4">
            <div className="col-lg-7">
              <Eyebrow>Nuestra comunidad</Eyebrow>
              <h2 className="intro-heading">Una escuela pública<br />para <span>aprender haciendo.</span></h2>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <p className="intro-text">Cada día compartimos experiencias que nos ayudan a aprender, expresarnos y construir vínculos. La curiosidad y el trabajo en equipo son parte del camino.</p>
              <Link className="text-link" to="/nosotros">Así aprendemos <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="learning-grid row g-3 g-lg-4">
            {[
              { icon: '✳', title: 'Leer y descubrir', text: 'La biblioteca abre la puerta a historias, ideas y conversaciones.' },
              { icon: '◉', title: 'Hacer en comunidad', text: 'Talleres y proyectos nos invitan a compartir lo que sabemos.' },
              { icon: '↗', title: 'Aprender del entorno', text: 'Cada encuentro y salida también puede convertirse en aprendizaje.' },
            ].map((item, index) => (
              <div className="col-md-4" key={item.title}>
                <article className={`learning-card learning-card-${index + 1}`}>
                  <div className="learning-card-top"><span>0{index + 1} / 03</span><span className="learning-symbol" aria-hidden="true">{item.icon}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="card-rule" />
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="community-section section-space">
        <div className="container">
          <div className="row align-items-end gy-4 community-heading">
            <div className="col-lg-7">
              <Eyebrow>Más que contenidos</Eyebrow>
              <h2 className="intro-heading">Aprender también es<br /><span>hacer lugar a otros.</span></h2>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <p className="intro-text">La vida escolar reúne distintas voces, ideas y formas de aprender. En cada propuesta buscamos que haya lugar para participar, crear y crecer en compañía.</p>
            </div>
          </div>
          <div className="row g-3 g-lg-4 community-grid">
            {communityHighlights.map((item) => (
              <div className="col-md-4" key={item.number}>
                <article className="community-card">
                  <span className="community-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </div>
            ))}
          </div>
          <div className="community-footer">
            <p>Una escuela se construye cada día, con pequeños descubrimientos y grandes encuentros.</p>
            <Link className="text-link" to="/nosotros">Conocé nuestra propuesta <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="instagram-section section-space">
        <div className="container">
          <div className="instagram-heading">
            <div>
              <Eyebrow>La escuela en imágenes</Eyebrow>
              <h2>Un poquito de lo que<br /><span>compartimos.</span></h2>
            </div>
            <a className="instagram-link" href="https://www.instagram.com/escuela1326/" target="_blank" rel="noreferrer">
              <span className="instagram-glyph" aria-hidden="true">◎</span> Seguinos en Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="row g-3 g-lg-4 instagram-grid">
            {projects.map((project, index) => (
              <article className="col-md-4" key={project.title}>
                <a className={`instagram-card instagram-card-${index + 1}`} href="https://www.instagram.com/escuela1326/" target="_blank" rel="noreferrer">
                  <div className="instagram-image" style={{ backgroundImage: `url("${project.image}")` }} role="img" aria-label={project.alt}>
                    <span className="instagram-tile-mark" aria-hidden="true">1326</span>
                    <span className="instagram-open" aria-hidden="true">↗</span>
                  </div>
                  <div className="instagram-card-copy">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
          <p className="instagram-note">Inspirado en las propuestas que comparte la escuela: lecturas, actividades y encuentros con las familias.</p>
        </div>
      </section>

      <section className="visit-section">
        <div className="container visit-inner">
          <div>
            <Eyebrow light>Escuela Maestro Sergio del Coro N° 1326</Eyebrow>
            <h2>Nos encontramos<br />en la escuela.</h2>
          </div>
          <div className="visit-action">
            <p>¿Querés conocer la escuela o consultar por las inscripciones? Escribinos y damos el primer paso juntos.</p>
            <Link className="btn btn-light btn-lg" to="/inscripciones">Consultar inscripción <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
