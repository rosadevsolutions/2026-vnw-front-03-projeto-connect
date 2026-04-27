import "./Card.scss"

export default function Card({
  children,
  image,
  title,
  description,
  cta,
  onClick,
  variant = "auto", // "auto" | "composed"
}) {

  const isComposed = variant === "composed";
  const handleClick = () => {
    alert(`Quero participar de ${title}`);
  };

  return (
    <div className="card__wrapper">
      {isComposed ? (
        children
      ) : (
        <>
          {image && <Card.Image src={image} alt={title} />}
          {title && <Card.Title>{title}</Card.Title>}
          {description && <Card.Text>{description}</Card.Text>}
          {cta && (
            <Card.CTA onClick={handleClick}>
              {cta}
            </Card.CTA>
          )}
        </>
      )}
    </div>
  );
}

Card.Image = ({ src, alt }) => (
  <img
    className="card__image"
    src={src}
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
  <button className="card__button" onClick={onClick}>
    {children}
  </button>
);
