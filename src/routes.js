import Favorite from 'pages/Favorite';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import PageDefault from 'pages/PageDefault';
import Player from 'pages/Player';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<PageDefault />}>
          <Route index element={<Home banner={'home'}></Home>} />
          <Route
            path="favoritos"
            element={<Favorite banner={'favorite'}></Favorite>}
          />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}
