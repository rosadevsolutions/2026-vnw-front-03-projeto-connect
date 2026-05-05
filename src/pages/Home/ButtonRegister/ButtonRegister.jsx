import "./ButtonRegister.scss"
import { motion } from "motion/react";
import IconArrow from "@/assets/icons/icon-arrow.svg?react";

export default function ButtonRegister() {
  const handleClick = () => {
    alert("Cadastrar Empresa");
  };

  return (
    <>
      <motion.button
        className="home__button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
transition={{duration: .3}}
        onClick={handleClick}
      >
        <span>Cadastrar Empresa</span>
        <IconArrow />
      </motion.button>
    </>
  )
}
