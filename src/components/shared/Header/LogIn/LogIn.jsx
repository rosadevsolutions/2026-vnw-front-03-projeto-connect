import { useState } from 'react';
import { Link } from 'react-router-dom';
import loginThumbnail from '../../../../assets/images/user-thumbnail.jpg';
import './LogIn.scss';

const userName = "Romulo Rosa";

export default function LogIn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="login__wrapper">
      <div className="login__image-container">
        <img
          className="login__image-thumbnail"
          src={loginThumbnail}
          alt="foto do usuário"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && (
        <div className="login__dropdown">
          <p className="login__user-name">{userName}</p>
          <ul className="login__menu">
            <li className='login__menu-item'>
              <Link
                className='login__menu-link'
                to="/voluntariado"
              >
                Voluntariado
              </Link>
            </li>
            <li className='login__menu-item'>
              <Link
                className='login__menu-link'
                to="/configuracoes-da-conta"
              >
                Configurações da conta
              </Link>
            </li>
          </ul>
          <button
            className='login__menu-button'
            onClick={() => console.log('Sair')}
          >
            Sair
          </button>
        </div>
      )}
    </div>
  )
}
