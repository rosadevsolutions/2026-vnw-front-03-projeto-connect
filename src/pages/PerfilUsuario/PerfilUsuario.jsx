import './PerfilUsuario.scss';
import { Link } from "react-router-dom"
import ImageUser  from "../../assets/images/user-thumbnail.png";
import IconCursor from "../../assets/icons/icon-cursor.svg?react";
import IconEmail  from "../../assets/icons/icon-email.svg?react";
import IconCalendar from "../../assets/icons/icon-calendar.svg?react";

export default function PerfilUsuario() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
  const params = subject || body
    ? `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
      )}`
    : "";
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <>
      <section className="perfilUsuario__wrapper">
        <div className="perfilUsuario__container">
          <div className="perfilUsuario__content">
            <div className="perfilUsuario__image--wrapper">
              <img
                className="perfilUsuario__image--thumbnail"
                src={ImageUser}
                title="foto do usuario"
                alt="foto do usuario"
              />
            </div>
            <div className="perfilUsuario__infos--wrapper">
              <h5 className="perfilUsuario__infos--user">
                Romulo Rosa
              </h5>
              <p className="perfilUsuario__infos--position">
                ❤️ Voluntário Ativo
              </p>
              <p className="perfilUsuario__infos--bio">
                Apaixonado por fazer a diferença na comunidade. <br />Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.
              </p>

              <div className="perfilUsuario__infos--icons">
                <div className="perfilUsuario__infos--icon">
                  <IconCursor />
                  <p>Rio de Janeiro, RJ</p>
                </div>
                <div className="perfilUsuario__infos--icon">
                  <IconCursor />
                  <Mailto
                    className="perfilUsuario__infos--email"
                    email="rosadevsolutions@gmail.com"
                    subject
                    body
                  >
                    rosadevsolutions@gmail.com
                  </Mailto>
                </div>
                <div className="perfilUsuario__infos--icon">
                  <IconCalendar />
                  <p>Membro desde 01/2022</p>
                </div>
              </div>
              <div className="perfilUsuario__infos--tags">
                <div className="perfilUsuario__infos--tag">
                  Front-End
                </div>
                <div className="perfilUsuario__infos--tag">
                  VTex FastStore
                </div>
                <div className="perfilUsuario__infos--tag">
                  VTex IO
                </div>
                <div className="perfilUsuario__infos--tag">
                  VTex CMS
                </div>
                <div className="perfilUsuario__infos--tag">
                  JS Stack
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
