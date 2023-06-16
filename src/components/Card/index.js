import { useFavoriteContext } from 'context/favorite';
import styles from './Card.module.css';
import favoriteon from './favoriteon.png';
import favoriteoff from './faviriteoff.png';
import { Link } from 'react-router-dom';

export default function Card({ id, title, capa }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icone = isFavorite ? favoriteon : favoriteoff;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={title} className={styles.capa}></img>
        <h2>{title}</h2>
      </Link>
      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => addFavorite({ id, title, capa })}
      />
    </div>
  );
}
