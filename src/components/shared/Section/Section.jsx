import "./Section.scss";

export default function Section({title,children}) {
  return (
    <section className="section__wrapper">
      <div className="section__container">
        <h3 className="section__title">
          {title}
        </h3>
        <div className="section__card--list">
          {children}
        </div>
      </div>
    </section>
  )
}
