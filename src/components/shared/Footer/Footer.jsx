import { Link } from 'react-router-dom';
import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer__wrapper">
      <div className="footer__container">
        <div className="footer__copyright">
          <Link
            to="/"
            className="footer__link-copyright"
            title="Connect"
          >
            <h5 className="footer__logo-copyright">
              Connect
            </h5>
          </Link>
          <p className="footer__text">
            &copy; 2026 - Connet | Todos os direitos reservados.
          </p>
        </div>
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
            >
              <h5 className="footer__logo-apoio">
                EMpower
              </h5>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
