import "./Header.scss"
import Brand from "../Header/Brand/Brand"

export default function Header() {
  return (
    <header className="header__wrapper">
      <div className="header__content">
        <div className="header__brand">
          <Brand />
        </div>
        <div className="header__navigation">
          Navigation
        </div>
        <div className="header__login">
          Login
        </div>
      </div>
    </header>
  )
}
