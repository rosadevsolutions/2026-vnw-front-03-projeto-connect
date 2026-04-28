import { Routes, Route } from "react-router-dom";
import Home from "../../../../pages/Home/Home";
import Mentoria from "../../../../pages/Mentoria/Mentoria";
import Doacao from "../../../../pages/Doacao/Doacao";
import EventosPalestras from "../../../../pages/EventosPalestras/EventosPalestras";
import Voluntariado from "../../../../pages/Voluntariado/Voluntariado";
import PerfilUsuario from "../../../../pages/PerfilUsuario/PerfilUsuario";
import NotFound from "../../../../pages/NotFound/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/mentoria", element: <Mentoria /> },
  { path: "/doacao", element: <Doacao /> },
  { path: "/eventos-e-palestras", element: <EventosPalestras /> },
  { path: "/voluntariado", element: <Voluntariado /> },
  { path: "/perfil-do-usuario", element: <PerfilUsuario /> },
];

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}
