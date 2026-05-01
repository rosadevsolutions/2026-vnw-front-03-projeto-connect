import Section from "@/components/shared/Section/Section";
import Card from "@/components/shared/Card/Card";
import { images } from "@/assets/images";

export default function Mentoria() {
  const sectionTitle = "Mentoria";
  const sectionCardCta = "Quero participar";

  const cards = [
    {
      id: 1,
      alt: "Pessoa recebendo orientação de carreira durante reunião com especialista",
      title: "Mentoria de \nCarreira e Emprego",
      description: "Orientação sobre currículo, \nentrevistas e primeiros \npassos no mercado de trabalho.",
      image: "mentoria-carreira-emprego.png",
    },
    {
      id: 2,
      alt: "Grupo em conversa trocando experiências pessoais e profissionais",
      title: "Compartilhe Experiências",
      description: "Oriente e troque conhecimentos \ncom iniciantes e jovens em sua \nárea de atuação profissional.",
      image: "mentoria-compartilhe-experiencias.png",
    },
    {
      id: 3,
      alt: "Mentor orientando um hjovem profissional em atividade no notebook",
      title: "Guia para \nAprendizagem",
      description: "Participe como guia em \njornadas de aprendizado e \ndesenvolvimento de carreiras.",
      image: "mentoria-acompanhamento.png",
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
