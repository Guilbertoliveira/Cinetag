import { useFavoriteContext } from 'context/favorite';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

export default function Card({ id, title, capa }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const ehFavorito = favorite.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;

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
