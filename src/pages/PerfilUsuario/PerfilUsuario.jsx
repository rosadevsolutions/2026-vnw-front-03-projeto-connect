import './PerfilUsuario.scss';
import { motion } from 'motion/react';
import ImageUser from "@/assets/images/user-thumbnail.png";
import IconCursor from "@/assets/icons/icon-cursor.svg?react";
import IconEmail from "@/assets/icons/icon-email.svg?react";
import IconCalendar from "@/assets/icons/icon-calendar.svg?react";

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
          <motion.div
            className="perfilUsuario__image--wrapper"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          >
            <motion.img
              className="perfilUsuario__image--thumbnail"
              src={ImageUser}
              alt="foto do usuario"
              initial={{ opacity: .5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          <motion.div
            className="perfilUsuario__infos--wrapper"
            initial={{
              x: 40,
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
