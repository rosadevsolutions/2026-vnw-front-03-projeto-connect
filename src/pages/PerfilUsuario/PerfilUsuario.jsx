import './PerfilUsuario.scss';
import ImageUser from "../../assets/images/user-thumbnail.png";
import IconCursor from "../../assets/icons/icon-cursor.svg?react";
import IconEmail from "../../assets/icons/icon-email.svg?react";
import IconCalendar from "../../assets/icons/icon-calendar.svg?react";

function Mailto({ email, subject = "", body = "", children }) {
  const params =
    subject || body
      ? `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      : "";

  return <a href={`mailto:${email}${params}`}>{children}</a>;
}

export default function PerfilUsuario() {
  const infos = [
    {
      id: 1,
      icon: <IconCursor />,
      content: <p>Rio de Janeiro, RJ</p>,
    },
    {
      id: 2,
      icon: <IconEmail />,
      content: (
        <Mailto email="rosadevsolutions@gmail.com">
          rosadevsolutions@gmail.com
        </Mailto>
      ),
    },
    {
      id: 3,
      icon: <IconCalendar />,
      content: <p>Membro desde 01/2022</p>,
    },
  ];

  const tags = [
    "Front-End",
    "VTex FastStore",
    "VTex IO",
    "VTex CMS",
    "JS Stack",
  ];

  return (
    <section className="perfilUsuario__wrapper">
      <div className="perfilUsuario__container">
        <div className="perfilUsuario__content">
          <div className="perfilUsuario__image--wrapper">
            <img
              className="perfilUsuario__image--thumbnail"
              src={ImageUser}
              alt="foto do usuario"
            />
          </div>

          <div className="perfilUsuario__infos--wrapper">
            <h5 className="perfilUsuario__infos--user">Romulo Rosa</h5>

            <p className="perfilUsuario__infos--position">
              ❤️ Voluntário Ativo
            </p>

            <p className="perfilUsuario__infos--bio">
              Apaixonado por fazer a diferença na comunidade.
              <br />
              Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.
            </p>

            <div className="perfilUsuario__infos--icons">
              {infos.map((info) => (
                <div className="perfilUsuario__infos--icon" key={info.id}>
                  {info.icon}
                  {info.content}
                </div>
              ))}
            </div>

            <div className="perfilUsuario__infos--tags">
              {tags.map((tag) => (
                <div className="perfilUsuario__infos--tag" key={tag}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
