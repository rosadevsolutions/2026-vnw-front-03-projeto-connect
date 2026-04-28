import './Navigation.scss';
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    to: "/doacao",
    label: "Doação",
    linkClass: "navigation__link",
    spanClass: "navigation__text"
  },
  {
    id: 2,
    to: "/voluntariado",
    label: "Voluntariado",
    linkClass: "navigation__link",
    spanClass: "navigation__text"
  },
  {
    id: 3,
    to: "/mentoria",
    label: "Mentoria",
    linkClass: "navigation__link",
    spanClass: "navigation__text"
  },
  {
    id: 4,
    to: "/eventos-e-palestras",
    label: "Eventos & Palestras",
    linkClass: "navigation__link",
    spanClass: "navigation__text"
  },
];

export default function Navigation() {
  return (
    <nav className="navigation__wrapper">
      {links.map((link) => (
        <Link
          key={link.id}
          className={link.linkClass}
          to={link.to}
        >
          <span className={link.spanClass}>
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
