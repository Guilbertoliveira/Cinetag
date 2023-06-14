import { createContext, useContext, useState } from 'react';

export const favoritosContext = createContext({});

favoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <favoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </favoritosContext.Provider>
  );
}

export function useFavoritoContext() {
  //criando um hook
  const { favorito, setFavorito } = useContext(favoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    ); //verificando se é repetido ou não, true ou false

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      //se ele n tiver na lista, adiciona
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }
    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista);
  }

  return {
    favorito,
    adicionarFavorito,
  };
}
