import "./Card.scss"
import { images } from "@/assets/images";
import { motion } from "motion/react";

export default function Card({
  children,
  image,
  title,
  description,
  cta,
  onClick,
  variant = "auto",
}) {

  const isComposed = variant === "composed";

  function formatText(text) {
    return text.split("**").map((part, index) =>
      index % 2 === 1
      ? <strong key={index}>{part}</strong>
      : part
    );
  }


  return (
    <motion.div
      className="card__wrapper"
      initial={{
        y: 20,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        duration: .75,
        ease: "easeInOut"
      }}
    >
      {isComposed ? (
        children
      ) : (
        <>
          {image && (
            <Card.Image
              image={image}
              alt={title}
            />
          )}

          {title && (
            <Card.Title>
              {title}
            </Card.Title>
          )}

          {description && (
            <Card.Text>
              {formatText(description)}
            </Card.Text>
          )}

          {cta && (
            <Card.CTA onClick={onClick}>
              {cta}
            </Card.CTA>
          )}
        </>
      )}
    </motion.div>
  );
}

Card.Image = ({ image, alt }) => (
  <img
    className="card__image"
    src={images[image]}
    alt={alt}
  />
);

Card.Title = ({ children }) => (
  <h3 className="card__title">
    {children}
  </h3>
);

Card.Text = ({ children }) => (
  <p className="card__text">
    {children}
  </p>
);

Card.CTA = ({ children, onClick }) => (
  <button
    className="card__button"
    onClick={onClick}
  >
    {children}
  </button>
);
