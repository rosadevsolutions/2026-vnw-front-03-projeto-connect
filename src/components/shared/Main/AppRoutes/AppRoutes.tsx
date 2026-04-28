import { Routes, Route } from "react-router-dom";
import Home from "../../../../pages/Home/Home";
import Mentoria from "../../../../pages/Mentoria/Mentoria";
import Doacao from "../../../../pages/Doacao/Doacao";
import EventosPalestras from "../../../../pages/EventosPalestras/EventosPalestras";
import Voluntariado from "../../../../pages/Voluntariado/Voluntariado";
import PerfilUsuario from "../../../../pages/PerfilUsuario/PerfilUsuario";
import NotFound from "../../../../pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentoria" element={<Mentoria />} />
      <Route path="/doacao" element={<Doacao />} />
      <Route path="/eventos-e-palestras" element={<EventosPalestras />} />
      <Route path="/voluntariado" element={<Voluntariado />} />
      <Route path="/perfil-do-usuario" element={<PerfilUsuario />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
