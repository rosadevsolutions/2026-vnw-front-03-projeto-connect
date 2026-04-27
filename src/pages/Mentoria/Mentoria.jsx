import Section from "../../components/shared/Section/Section";
import Card from "../../components/shared/Card/Card";

export default function Mentoria() {
  const sectionTitle = "Mentoria"
  const cards = [
    {
      id: 1,
      alt: "",
      title: "Mentoria de Carreira e Emprego",
      description: "Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.",
      image: "src/assets/images/mentoria-carreira-emprego.png",
      cta: "Quero participar",
    },
    {
      id: 2,
      alt: "",
      title: "Compartilhe Experiências",
      description: "Oriente profissionais iniciantes em sua área.",
      image: "src/assets/images/mentoria-compartilhe-experiencia.png",
      cta: "Quero participar"
    },
    {
      id: 3,
      alt: "",
      title: "Guia para Aprendizagem",
      description: "Participe como guia em jornadas de aprendizado e desenvolvimento.",
      image: "src/assets/images/mentoria-acompanhamento.png",
      cta: "Quero participar"
    },
  ];

  return (
    <Section
      title={sectionTitle}
      items={cards}
      renderItem={(item) => (
        <Card
          key={item.id} {...item}
          onClick={() => console.log(item.id)}
        />
      )}
    />
  );
}
