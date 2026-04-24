import './Brand.scss';
import { Link } from "react-router-dom"

export default function Brand() {
  return (
    <Link to="/" aria-label="Home">
      <h1
        className="brand-logo"
        title="Connect"
      >
        Connect
      </h1>
    </Link>
  )
}
