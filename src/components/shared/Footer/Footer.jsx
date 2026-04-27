import { Link } from 'react-router-dom';
import "./Footer.scss"
import Copyright from './Copyright/Copyright';
import Areas from './Areas/Areas';

export default function Footer() {
  return (
    <footer className="footer__wrapper">
      <div className="footer__container">
        <Copyright />
        <Areas />
      </div>
    </footer>
  )
}
