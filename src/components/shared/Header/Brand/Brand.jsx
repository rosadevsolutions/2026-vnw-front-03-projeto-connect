import './Brand.scss';
import { Link } from "react-router-dom"

export default function Brand() {
  return (
    <Link
      to="/"
      aria-label="Home"
      className="brand__link"
    >
      <h1
        className="brand__logo"
        title="Connect"
      >
        Connect
      </h1>
    </Link>
  )
}
