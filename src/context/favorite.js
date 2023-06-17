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
  //creating a hook
  const { favorite, setFavorite } = useContext(favoriteContext);

  function addFavorite(newFavorite) {
    const repeatedFavorite = favorite.some(
      (item) => item.id === newFavorite.id
    ); //checking if it is repeated or not, true or false

    let newList = [...favorite];

    if (!repeatedFavorite) {
      //if not in the list, add
      newList.push(newFavorite);
      return setFavorite(newList);
    }
    newList = favorite.filter((fav) => fav.id !== newFavorite.id);
    return setFavorite(newList);
  }

  return {
    favorite,
    addFavorite,
  };
}
