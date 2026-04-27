import "./ButtonRegister.scss"
import IconArrow from "../../../assets/icons/arrow.svg?react";

export default function ButtonRegister() {
  const handleClick = () => {
    alert("Cadastrar Empresa");
  };

  return (
    <>
      <button
        className="home__button"
        onClick={handleClick}
      >
        <span>Cadastrar Empresa</span>
        <IconArrow />
      </button>
    </>
  )
}
