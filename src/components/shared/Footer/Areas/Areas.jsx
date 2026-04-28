import { Link } from "react-router-dom";
import "./Areas.scss";

const areas = [
  {
    label: "Tecnologia",
    url: "https://www.linkedin.com/in/rosadevsolutions/",
    name: "Rosadev Solutions",
    linkClass: "footer__link-dev",
    logoClass: "footer__logo-dev",
  },
  {
    label: "Ensino",
    url: "https://vainaweb.com.br/",
    name: "Vai na Web",
    linkClass: "footer__link-ensino",
    logoClass: "footer__logo-ensino",
  },
  {
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
          key={area.name}
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
