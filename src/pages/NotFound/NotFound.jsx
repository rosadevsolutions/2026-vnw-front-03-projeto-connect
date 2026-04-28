import { Link } from "react-router-dom"
import './NotFound.scss';


export default function NotFound() {
  return (
    <section className="notFound__wrapper">
      <div className="notFound__container">
        <div className="notFound__content">

          <h2 className="notFound__title">
            404
          </h2>
          <h3 className="notFound__subtitle">
            Erro de Página Não Encontrada
          </h3>
          <Link
            to="/"
            aria-label="Home"
            className="notFound__link"
          >
            Clique aqui e retorne para Home
          </Link>
        </div>
      </div>
    </section>
  );
}
