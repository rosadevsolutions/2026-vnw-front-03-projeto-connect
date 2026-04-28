import { Link } from 'react-router-dom';
import "./Areas.scss";

export default function Areas() {
  return (
    <div className="footer__areas">
      <div className="footer__area">
        <p className="footer__text">
          Tecnologia:
        </p>
        <div className="footer__link-wrapper">
          <Link
            to="https://www.linkedin.com/in/rosadevsolutions/"
            className="footer__link-dev"
            title="Rosadev Solutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5 className="footer__logo-dev">
              Rosadev Solutions
            </h5>
          </Link>
        </div>
      </div>
      <div className="footer__area">
        <p className="footer__text">
          Ensino:
        </p>
        <div className="footer__link-wrapper">
          <Link
          to="https://vainaweb.com.br/"
          className="footer__link-ensino"
          title="Vai na Web"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5 className="footer__logo-ensino">
            Vai na Web
          </h5>
        </Link>
        </div>
      </div>
      <div className="footer__area">
        <p className="footer__text">
          Apoio:
        </p>
        <div className="footer__link-wrapper">
          <Link
          to="https://empowerweb.org/"
          className="footer__link-apoio"
          title="EMpower"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5 className="footer__logo-apoio">
            EMpower
          </h5>
        </Link>
        </div>
      </div>
    </div>
  )
}
