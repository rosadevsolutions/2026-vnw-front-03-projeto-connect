import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Mentoria from "@/pages/Mentoria/Mentoria";
import Doacao from "@/pages/Doacao/Doacao";
import EventosPalestras from "@/pages/EventosPalestras/EventosPalestras";
import Voluntariado from "@/pages/Voluntariado/Voluntariado";
import PerfilUsuario from "@/pages/PerfilUsuario/PerfilUsuario";
import NotFound from "@/pages/NotFound/NotFound";

const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />
  },
  {
    id: 2,
    path: "/mentoria",
    element: <Mentoria />
  },
  {
    id: 3,
    path: "/doacao",
    element: <Doacao />
  },
  {
    id: 4,
    path: "/eventos-e-palestras",
    element: <EventosPalestras />
  },
  {
    id: 5,
    path: "/voluntariado",
    element: <Voluntariado />
  },
  {
    id: 6,
    path: "/perfil-do-usuario",
    element: <PerfilUsuario />
  },
];

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={route.element}
        />
      ))}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}
