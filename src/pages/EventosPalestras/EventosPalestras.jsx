import Section from "@/components/shared/Section/Section";
import Card from "@/components/shared/Card/Card";
import { images } from "@/assets/images";

export default function EventosPalestras() {
  const sectionTitle = "Eventos & Palestras";
  const sectionCardCta = "Quero participar";

  const cards = [
    {
      id: 1,
      alt: "Dinâmica em grupo com jovens orientados por professor em sala.",
      title: "Empoderando Jovens \npara o Futuro",
      description: "**Atividade:** Palestra motivacional sobre \nliderança jovem e transformação social. \n\n**Impacto:** Inspirar jovens a se\ntornarem agentes de mudança \nem suas comunidades.",
      image: "eventos-empoderando-jovens-futuro.png",
    },
    {
      id: 2,
      alt: "Aula prática de tecnologia com jovens em computadores e instrutor orientando.",
      title: "Tecnologia \nque Transforma",
      description: "**Atividade:** Workshop de introdução à \nprogramação e inovação digital. \n\n**Impacto:** Preparar jovens para \natuarem no mercado de trabalho \natravés da tecnologia.",
      image: "eventos-tecnologia-que-transforma.png",
    },
    {
      id: 3,
      alt: "Orientação profissional para primeiro emprego com mentora e jovens",
      title: "Carreira e \nPrimeiro Emprego",
      description: "**Atividade:** Palestra com profissionais \nde RH sobre como preparar currículo, \nentrevistas e postura no mercado. \n\n**Impacto:** Ajudar jovens a \nconquistar oportunidades de trabalho.",
      image: "eventos-carreira-primeiro-emprego.png",
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
