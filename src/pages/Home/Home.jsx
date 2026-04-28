import "./Home.scss"
import HomeBg from "../../assets/images/home-hero.png"
import IconArrow from "../../assets/icons/icon-arrow.svg?react";
import Texts from "./Texts/Texts";
import ButtonRegister from "./ButtonRegister/ButtonRegister";
import Metrics from "./Metrics/Metrics";

export default function Home() {
  return (
    <>
      <section className="home__wrapper">
        <div className="home__container">
          <div className="home__content">
            <div className="home__content--top">
              <Texts />
              <ButtonRegister />
            </div>
            <div className="home__content--bottom">
              <Metrics />
            </div>
          </div>
          <div className="home__image--wrapper">
            <img
              className="home__image--content"
              src={HomeBg}
              alt="mãos"
            />
          </div>
        </div>
      </section>
    </>
  )
}
