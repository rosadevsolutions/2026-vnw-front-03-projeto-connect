import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import loginThumbnail from '@/assets/images/user-thumbnail.jpg';
import './LogIn.scss';

const userName = "Romulo Rosa";

const links = [
  {
    id: 1,
    label: "Perfil do Usuário",
    to: "/perfil-do-usuario"
  },
  {
    id: 2,
    label: "Voluntariado",
    to: "/voluntariado"
  },
];

export default function LogIn() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(prev => !prev);
  const handleLogout = () => { console.log('Sair') };

  return (
    <div className="login__wrapper">
      <div className="login__image--container">
        <img
          className="login__image--thumbnail"
          src={loginThumbnail}
          alt="foto do usuário"
          onClick={toggleDropdown}
        />
      </div>

      {isOpen && (
        <div className="login__dropdown">
          <p className="login__user-name">
            {userName}
          </p>

          <ul className="login__menu">
            {links.map((link) => (
              <li
                key={link.id}
                className="login__menu-item"
              >
                <Link
                  className="login__menu-link"
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="login__menu-button"
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
}
