import Eyebrow from './Eyebrow.jsx'

export default function SectionTitle({ eyebrow, title, text, centered = false }) {
  return (
    <div className={`section-heading ${centered ? 'text-center mx-auto' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
