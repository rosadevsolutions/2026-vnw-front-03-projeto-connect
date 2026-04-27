import "./Card.scss"
import { images } from "@/assets/images";

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

  return (
    <div className="card__wrapper">
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
              {description}
            </Card.Text>
          )}

          {cta && (
            <Card.CTA onClick={onClick}>
              {cta}
            </Card.CTA>
          )}
        </>
      )}
    </div>
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
