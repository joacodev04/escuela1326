import Eyebrow from '../components/Eyebrow.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const values = [
  { title: 'Curiosidad', text: 'Damos lugar a las preguntas y a las ganas de descubrir.' },
  { title: 'Encuentro', text: 'Hacemos escuela con las familias y con nuestro barrio.' },
  { title: 'Aprendizaje', text: 'Cada experiencia compartida suma nuevas herramientas.' },
]

const experiences = [
  {
    title: 'Un espacio para preguntar',
    text: 'Las preguntas abren caminos. Acompañamos la curiosidad y el deseo de comprender lo que nos rodea.',
  },
  {
    title: 'Ideas que se comparten',
    text: 'Escuchar, conversar y trabajar con otros permite aprender desde distintas experiencias y puntos de vista.',
  },
  {
    title: 'Vínculos que acompañan',
    text: 'La participación de las familias y el encuentro con el barrio forman parte de una comunidad que crece junta.',
  },
]

export default function Nosotros() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Eyebrow>Escuela Mitre 120 · Rosario</Eyebrow>
          <h1>Una escuela que<br /><span>se hace en comunidad.</span></h1>
          <p>Somos la Escuela Mitre 120. Nos encontramos cada día para aprender, compartir y crecer junto a nuestros estudiantes y sus familias.</p>
        </div>
      </section>
      <section className="section-space">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-image" role="img" aria-label="Libros en una biblioteca escolar" />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <Eyebrow>Lo que hacemos</Eyebrow>
              <h2 className="page-section-title">Aprender también es leer, crear y encontrarnos.</h2>
              <p className="body-copy">En la escuela hay espacio para explorar ideas dentro y fuera del aula. La lectura compartida, los talleres y las actividades con las familias son parte de una comunidad que aprende en conjunto.</p>
              <p className="body-copy">Cada estudiante trae una historia y una manera propia de mirar el mundo. Acompañamos ese recorrido con propuestas para participar, preguntar y descubrir.</p>
            </div>
          </div>
          <div className="values-block">
            <SectionTitle eyebrow="Nuestro día a día" title="Aprender juntos nos hace comunidad." centered />
            <div className="row g-3 mt-3">
              {values.map((value, index) => (
                <div className="col-md-4" key={value.title}>
                  <article className="value-card">
                    <span className="value-number">0{index + 1}</span>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="school-life-block">
            <div className="row align-items-end gy-3">
              <div className="col-lg-7">
                <Eyebrow>Una experiencia compartida</Eyebrow>
                <h2 className="page-section-title">Cada recorrido encuentra su lugar.</h2>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <p className="body-copy">Aprender es mucho más que incorporar conocimientos: también es expresarse, descubrir intereses y construir lazos que nos ayudan a crecer.</p>
              </div>
            </div>
            <div className="row g-3 school-life-grid">
              {experiences.map((experience, index) => (
                <div className="col-md-4" key={experience.title}>
                  <article className="school-life-card">
                    <span className="value-number">0{index + 1} / 03</span>
                    <h3>{experience.title}</h3>
                    <p>{experience.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
