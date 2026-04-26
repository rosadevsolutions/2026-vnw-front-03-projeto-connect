import "./Header.scss"
import Brand from "./Brand/Brand"
import Navigation from "./Navigation/Navigation";
import LogIn from "./LogIn/LogIn";


export default function Header() {
  return (
    <header className="header__wrapper">
      <div className="header__container">
        <div className="header__brand">
          <Brand />
        </div>
        <div className="header__navigation">
          <Navigation />
        </div>
        <div className="header__login">
          <LogIn />
        </div>
      </div>
    </header>
  )
}
