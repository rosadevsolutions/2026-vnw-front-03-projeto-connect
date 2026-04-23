import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/doacao">Doação</Link> |
      <Link to="/eventos-e-palestras">Eventos e Palestras</Link> |
      <Link to="/voluntariado">Voluntariado</Link> |
      <Link to="/mentoria">Mentoria</Link>
    </nav>
  );
}
