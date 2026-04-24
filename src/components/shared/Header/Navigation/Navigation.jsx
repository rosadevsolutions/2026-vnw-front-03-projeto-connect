import './Navigation.scss';
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation__wrapper">
      <Link className="navigation__link" to="/doacao">
        <span className="navigation__text">Doação</span>
      </Link>
      <Link className="navigation__link" to="/voluntariado">
        <span className="navigation__text">Voluntariado</span>
      </Link>
      <Link className="navigation__link" to="/mentoria">
        <span className="navigation__text">Mentoria</span>
      </Link>
      <Link className="navigation__link" to="/eventos-e-palestras">
        <span className="navigation__text">Eventos e Palestras</span>
      </Link>
    </nav>
  );
}
