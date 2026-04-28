import { Link } from 'react-router-dom';
import "./Copyright.scss"

export default function Copyright() {
  return (
    <div className="footer__copyright--wrapper">
      <Link
        to="/"
        className="footer__copyright--link"
        title="Connect"
      >
        <h5 className="footer__copyright--logo">
          Connect
        </h5>
      </Link>
      <p className="footer__copyright--text">
        &copy; 2026 - Vai na Web e EMpower | Todos os direitos reservados.<br/>Projeto destinado exclusivamente a fins educativos
      </p>
    </div>
  )
}
