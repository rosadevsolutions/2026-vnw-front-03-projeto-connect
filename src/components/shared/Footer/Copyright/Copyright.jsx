import { Link } from 'react-router-dom';
import "./Copyright.scss"

export default function Copyright() {
  return (
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
        &copy; 2026 - Vai na Web e EMpower | Todos os direitos reservados.<br/>Projeto destinado exclusivamente a fins educativos
      </p>
    </div>
  )
}
