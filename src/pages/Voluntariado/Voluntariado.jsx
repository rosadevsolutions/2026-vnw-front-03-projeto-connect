import Section from "../../components/shared/Section/Section";
import Card from "../../components/shared/Card/Card";
import { images } from "@/assets/images";

export default function Voluntariado() {
  const sectionTitle = "Voluntariado";
  const sectionCardCta = "Quero participar";

  const cards = [
    {
      id: 1,
      alt: "Coleta de materiais recicláveis em caixas com símbolo de reciclagem",
      title: "Mutirão de \nReciclagem",
      description: "Coletar materiais recicláveis e \norientar sobre descarte consciente.",
      image: "voluntariado-mutirao-reciclagem.png",
    },
    {
      id: 2,
      alt: "Aula de tecnologia com alunos em computadores e instrutor orientando",
      title: "Aulas de \nTecnologia",
      description: "Ensinar noções básicas de informática, \ninternet segura e programação. Preparar\njovens para o mercado de trabalho digital.",
      image: "voluntariado-aulas-tecnologia.png",
    },
    {
      id: 3,
      alt: "Atividade em quadra poliesportiva com pessoas reunidas em volta do professor",
      title: "Esporte \ne Inclusão",
      description: "Organizar treinos e jogos que incentivem a \nparticipação de todos. Promover disciplina, \nsaúde e trabalho em equipe entre jovens.",
      image: "voluntariado-esporte-inclusao.png",
    },
  ];

  return (
    <Section
      title={sectionTitle}
      items={cards}
      renderItem={(item) => (
        <Card
          key={item.id} {...item}
          cta={sectionCardCta}
          onClick={() => alert(`${sectionCardCta}\n\n${item.title}.`)}
        />
      )}
    />
  );
}
