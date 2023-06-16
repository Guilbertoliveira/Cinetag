import Favoritos from 'pages/Favoritos';
import Inicio from 'pages/Inicio';
import NaoEncontrada from 'pages/NotFound';
import PaginaBase from 'pages/PageDefault';
import Player from 'pages/Player';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<Inicio banner={'home'}></Inicio>} />
          <Route
            path="favoritos"
            element={<Favoritos banner={'favorite'}></Favoritos>}
          />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}
