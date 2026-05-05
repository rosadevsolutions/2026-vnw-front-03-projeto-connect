import { useEffect } from "react";
import { motion } from "motion/react";
import "./Section.scss";

export default function Section({title,items = [], renderItem}) {
  useEffect(() => {
    document.title = `Connect | ${title}`;
  });

  return (
      <section className="section__wrapper">
        <div className="section__container">
          <motion.h3
            className="section__title"
            initial={{
              y: -20,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{duration: .5}}
          >
            {title}
          </motion.h3>
          <div className="section__card--list">
            {items.map((item, index) => renderItem(item, index))}
          </div>
        </div>
      </section>
  )
}
