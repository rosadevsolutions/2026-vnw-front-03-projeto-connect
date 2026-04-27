import Section from "../../components/shared/Section/Section";
import Card from "../../components/shared/Card/Card";

import CardImage1 from "../../assets/images/mentoria-carreira-emprego.png"
import CardImage2 from "../../assets/images/mentoria-compartilhe-experiencia.png"
import CardImage3 from "../../assets/images/mentoria-acompanhamento.png"

const sectionTitle = "Mentoria"

const card_01_alt = "Teu cu";
const card_01_title = "Mentoria de Carreira e Emprego"
const card_01_text = "Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."

const card_02_alt = "Teu cu 2";
const card_02_title = "Compartilhe Experiências"
const card_02_text = "Oriente profissionais iniciantes em sua área."

const card_03_alt = "Teu cu 3";
const card_03_title = "Guia para Aprendizagem"
const card_03_text = "Participe como guia em jornadas de aprendizado e desenvolvimento."

const card_cta = "Quero participar"

export default function Mentoria() {
  return (
    <Section
      className = "section__wrapper"
      title={sectionTitle}
      divider
    >
    <Card>
      <Card.Image
        src={CardImage1}
        alt={card_01_alt}
      />
      <Card.Title>
        {card_01_title}
      </Card.Title>
      <Card.Text>
        {card_01_text}
      </Card.Text>
      <Card.CTA>
        {card_cta}
      </Card.CTA>
    </Card>

    <Card>
      <Card.Image
        src={CardImage2}
        alt={card_02_alt}
      />
      <Card.Title>
        {card_02_title}
      </Card.Title>
      <Card.Text>
        {card_02_text}
      </Card.Text>
      <Card.CTA>
        {card_cta}
      </Card.CTA>
    </Card>

    <Card>
      <Card.Image
        src={CardImage3}
        alt={card_03_alt}
      />
      <Card.Title>
        {card_03_title}
      </Card.Title>
      <Card.Text>
        {card_03_text}
      </Card.Text>
      <Card.CTA>
        {card_cta}
      </Card.CTA>
    </Card>
  </Section>
  )
}
