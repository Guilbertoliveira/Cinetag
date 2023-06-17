import { createContext, useContext, useState } from 'react';

export const favoriteContext = createContext({});

favoriteContext.displayName = 'favorite';

export default function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <favoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </favoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  //criando um hook
  const { favorite, setFavorite } = useContext(favoriteContext);

  function addFavorite(novoFavorito) {
    const favoritoRepetido = favorite.some(
      (item) => item.id === novoFavorito.id
    ); //verificando se é repetido ou não, true ou false

    let novaLista = [...favorite];

    if (!favoritoRepetido) {
      //se ele n tiver na lista, adiciona
      novaLista.push(novoFavorito);
      return setFavorite(novaLista);
    }
    novaLista = favorite.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorite(novaLista);
  }

  return {
    favorite,
    addFavorite,
  };
}
