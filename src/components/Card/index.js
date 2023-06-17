import { useFavoriteContext } from 'context/favorite';
import styles from './Card.module.css';
import favoriteon from './favoriteon.png';
import favoriteoff from './faviriteoff.png';
import { Link } from 'react-router-dom';

export default function Card({ id, title, coverImage }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icone = isFavorite ? favoriteon : favoriteoff;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={coverImage} alt={title} className={styles.coverImage}></img>
        <h2>{title}</h2>
      </Link>
      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.favorite}
        onClick={() => addFavorite({ id, title, coverImage })}
      />
    </div>
  );
}
