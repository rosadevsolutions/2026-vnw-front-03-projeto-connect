import Section from "../../components/shared/Section/Section";
import Card from "../../components/shared/Card/Card";
import { images } from "@/assets/images";

export default function Mentoria() {
  const sectionTitle = "Doação";
  const cardCtaSection = "Quero doar";

  const cards = [
    {
      id: 1,
      alt: "Doação de alimentos em caixa para pessoas em situação de vulnerabilidade",
      title: "Instituto \nGrande Familia",
      description: "Contribua com alimentos \nnão perecíveis e ajude famílias \nem situação de vulnerabilidade.",
      image: "doacao-instituto-grande-familia.png",
    },
    {
      id: 2,
      alt: "Livros organizados para doação",
      title: "Projeto \nFuturo na Escola",
      description: "Doe livros, cadernos, lápis, mochilas e \ncanetas para ajudar jovens a continuarem \nseus estudos com mais estrutura",
      image: "doacao-projeto-futuro-escola.png",
    },
    {
      id: 3,
      alt: "Equipamentos de informática sendo preparados para doação.",
      title: "Instituto \nConecta Jovem",
      description: "Doe computadores usados, tablets \nou celulares em bom estado para \npermitir que jovens tenham acesso ao \nmundo digital e novas oportunidades.",
      image: "doacao-instituto-conecta-jovem.png",
    },
  ];

  return (
    <Section
      title={sectionTitle}
      items={cards}
      renderItem={(item) => (
        <Card
          key={item.id} {...item}
          cta={cardCtaSection}
          onClick={() => alert(`${cardCtaSection}\n\n${item.title}.`)}
        />
      )}
    />
  );
}
