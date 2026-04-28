import { Link } from "react-router-dom";
import "./Areas.scss";

const areas = [
  {
    id: 1,
    label: "Tecnologia",
    url: "https://www.linkedin.com/in/rosadevsolutions/",
    name: "Rosadev Solutions",
    linkClass: "footer__link-dev",
    logoClass: "footer__logo-dev",
  },
  {
    id: 2,
    label: "Ensino",
    url: "https://vainaweb.com.br/",
    name: "Vai na Web",
    linkClass: "footer__link-ensino",
    logoClass: "footer__logo-ensino",
  },
  {
    id: 3,
    label: "Apoio",
    url: "https://empowerweb.org/",
    name: "EMpower",
    linkClass: "footer__link-apoio",
    logoClass: "footer__logo-apoio",
  },
];

export default function Areas() {
  return (
    <div className="footer__areas">
      {areas.map((area) => (
        <div
          className="footer__area"
          key={area.id}
        >
          <p className="footer__text">
            {area.label}:
          </p>
          <div className="footer__link-wrapper">
            <Link
              to={area.url}
              className={area.linkClass}
              title={area.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 className={area.logoClass}>
                {area.name}
              </h5>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
