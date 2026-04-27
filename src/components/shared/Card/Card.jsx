import "./Card.scss"

export default function Card({ children }) {
  const handleClick = () => {
    alert("Cadastrar Empresa");
  };

  return <div className="card__wrapper">{children}</div>;
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
  <button
    className="card__button"
    onClick={onClick}
  >
    {children}
  </button>
);
