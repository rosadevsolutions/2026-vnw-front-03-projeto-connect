import { useEffect } from "react";
import "./Section.scss";

export default function Section({title,items = [], renderItem}) {
  useEffect(() => {
    document.title = `Connect | ${title}`;
  });

  return (
      <section className="section__wrapper">
        <div className="section__container">
          <h3 className="section__title">
            {title}
          </h3>
          <div className="section__card--list">
            {items.map((item, index) => renderItem(item, index))}
          </div>
        </div>
      </section>
  )
}
