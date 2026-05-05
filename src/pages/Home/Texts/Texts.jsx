import "./Texts.scss"
import { motion } from "motion/react"

export default function Texts() {
  return (
    <>
      <motion.h2
        className="home__text--title"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
      >
        Projetos Sociais que transformam
      </motion.h2>
      <motion.p
        className="home__text--paragraph"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
      >
        Conectamos sua empresa com projetos sociais impactantes.<br/>
        Juntos, criamos mudanças reais na comunidade.
      </motion.p>
    </>
  )
}
