import Footer from './components/shared/Footer'
import Header from './components/shared/Header/Header'
import Main from './components/shared/Main'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Mentoria from "./pages/Mentoria/Mentoria";
import Doacao from "./pages/Doacao/Doacao";
import EventosPalestras from "./pages/EventosPalestras/EventosPalestras";
import Voluntariado from "./pages/Voluntariado/Voluntariado";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/doacao" element={<Doacao />} />
        <Route path="/eventos-palestras" element={<EventosPalestras />} />
        <Route path="/voluntariado" element={<Voluntariado />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
